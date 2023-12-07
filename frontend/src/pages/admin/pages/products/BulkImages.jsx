import Dropzone from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { uploadFiles } from "../../../../utils/uploadimg";
import { toggleLoading } from "../../../../features/loading/loadingSlice";
import { toast } from "react-toastify";


async function handleFiles(files) {
  const result = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();
    reader.onload = function (event) {
      if (event) {
        result.push({
          dataURL: event?.target?.result,
          name: file?.name,
        });
      }
      if (result.length === files.length) {
        console.log(result);
        return result
      }
    };
    reader.readAsDataURL(file);
  }
}
const BulkImages = () => {
  const dispatch = useDispatch();
  const handleimgUpload = async (e) => {
    dispatch(toggleLoading(true));
    try {
      const res = await handleFiles(e);
      console.log(res);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="border p-4">
        <div className="my-6 border-2 border-dotted rounded ">
          <Dropzone onDrop={(acceptedFiles) => handleimgUpload(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div
                  {...getRootProps()}
                  className="flex flex-col items-center p-2 pb-4"
                >
                  <input {...getInputProps()} />
                  <AiOutlineCloudUpload fontSize={60} color="gray" />
                  <p>
                    Drag {"'n'"} drop some files here, or click to select files
                  </p>
                  <p className="text-danger text-sm">
                    Please upload minimum 5 images
                  </p>
                  <p className="text-xs text-danger mb-2">
                    Total images size should not be larger than 3 MB
                  </p>
                </div>
              </section>
            )}
          </Dropzone>
        </div>
      </div>
    </>
  );
};

export default BulkImages;
