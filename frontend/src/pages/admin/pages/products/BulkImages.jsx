import Dropzone from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { uploadFiles } from "../../../../utils/uploadimg";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { base_url } from "../../../../utils/baseUrl";
import { useQuery } from '@tanstack/react-query';
import DataTable from "../../components/DataTable";
import { BarLoader } from "react-spinners";
import { LuClipboardCheck } from "react-icons/lu";


function copyToClipboard(text) {
  // Create a temporary textarea element
  const textarea = document.createElement('textarea');
  textarea.value = text;

  // Set the position to be off-screen
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';

  // Append the textarea to the document
  document.body.appendChild(textarea);

  // Select and copy the text
  textarea.select();
  document.execCommand('copy');

  // Remove the temporary textarea
  document.body.removeChild(textarea);
}

const columns = [
  {
    headerName: "Sr. No",
    field: "id",
    width: 60,
  },
  {
    headerName: "Image",
    width: 100,
    field: "_id",
    renderCell: (data) => <div className="p-2"><img className="m-" src={data?.row?.url} alt={data?.row?.name} /></div>
  },

  {
    headerName: "Image Name",
    field: "name",
    width: 200
  },
  {
    headerName: "Url",
    field: "url",
    width: 600
  },
  {
    headerName: "Copy",
    width: 100,
    field: "_v",

    renderCell: ({ row }) => <button onClick={() => copyToClipboard(row.url)}><LuClipboardCheck fontSize={30} /></button>
  },

];

const BulkImages = () => {
  const [files, setFiles] = useState([

  ])
  const [Loading, setLoading] = useState(false)

  const handleImgUpload = async (files) => {
    // Clear the existing files and set loading to true
    setFiles([]);
    setLoading(true);

    try {
      const res = await uploadFiles(files);

      // Step 2: Update state with the image URLs
      const updatedImages = files.map((file, index) => ({
        name: file.name,
        url: res[index],
      }));
      setFiles(updatedImages);

      // Step 3: Store image URLs in the backend
      await Promise.all(
        updatedImages.map(async (file) => {
          await axios.post(`${base_url}images`, file);
        })
      );

      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };


  const fetchimg = async () => {
    const res = await axios.get(`${base_url}images`)
    return res.data
  }
  const { data, isSuccess } = useQuery({
    queryKey: ['images'],
    queryFn: fetchimg
  })


  return (
    <>
      <div className="p-4">
        <div className="my-6 border-2 border-dotted rounded ">
          <Dropzone onDrop={(acceptedFiles) => handleImgUpload(acceptedFiles)}>
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

                  <p className="text-xs text-danger my-2">
                    Total images size should not be larger than 3 MB
                  </p>
                </div>
              </section>
            )}
          </Dropzone>
        </div>
        {Loading && <div className="w-full flex justify-center gap-2 flex-col items-center my-4"><BarLoader width={300} /> uploding images...</div>}
        <div className="flex flex-col">
          {!Loading && files.map((file, index) => <>
            <div className="flex border my-2 p-2 w-full items-center justify-around">
              <img className="w-28 h-28 aspect-auto object-contain" key={index} src={file?.url} />
              <div className="flex gap-4">
                <p>{file?.url}</p>
                <button onClick={() => copyToClipboard(file.url)}><LuClipboardCheck color="blue" fontSize={30} /></button>
              </div>
            </div>
          </>)}
        </div>
        {
          isSuccess && (<DataTable
            data={data || []}
            cols={columns}
            title={"Previous uploaded images"}
          />)
        }
      </div>
    </>
  );
};

export default BulkImages;
