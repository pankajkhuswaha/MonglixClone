import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const ImageDrager = ({ images, handleDeleteImage, feild }) => {
  const handleDragStart = (index) => (event) => {
    event.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (index) => (event) => {
    event.preventDefault();
    const sourceIndex = Number(event.dataTransfer.getData("text/plain"));
    const updatedImages = [...images];
    const [movedImage] = updatedImages.splice(sourceIndex, 1);
    updatedImages.splice(index, 0, movedImage);
  };
  const site = useSelector((st) => st.site.data);
  return (
    <div
      className="container flex-wrap bg-white d-flex justify-content-center p-4 align-items-center rounded shadow-sm mb-3"
      style={{ gap: "20px" }}
    >
      {images?.map((image, index) => (
        <div
          key={index}
          draggable
          style={{ cursor: "grab", position: "relative" }}
          onDragStart={handleDragStart(index)}
          onDragOver={handleDragOver}
          onDrop={handleDrop(index)}
        >
          <p
            className="px-2 rounded-full text-white py-1 position-absolute right-0 text-sm"
            style={{ background: site.primarybg }}
            onClick={() => handleDeleteImage(index)}
          >
            X
          </p>
          <img
            style={{ width: feild?.includes("Banner") ? 1000 : 200 }}
            className="rounded"
            src={image}
            alt={`Image ${index}`}
          />
        </div>
      ))}
    </div>
  );
};
ImageDrager.propTypes = {
  images: PropTypes.array.isRequired,
  setvalue: PropTypes.func,
  handleDeleteImage: PropTypes.func.isRequired,
  feild: PropTypes.string.isRequired,
};
export default ImageDrager;
