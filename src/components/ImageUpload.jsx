const ImageUpload = (props) => {
  let ShowImageHandler = (e) => {
    let file = e.target.files[0];
    if (file) {
      props.UploadImageHandler(file);
    }
    }
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
      <label
        htmlFor="fileInput"
        className="cursor-pointer block w-full text-center border-2 border-dashed p-6 border-gray-300 hover:border-blue-500 transition-all rounded-lg"
      >
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={ShowImageHandler}
        />

        <span className="text-lg font-medium text-gray-500">
          Click or Drag to Upload your image
        </span>
      </label>
    </div>
  );
};

export default ImageUpload;
