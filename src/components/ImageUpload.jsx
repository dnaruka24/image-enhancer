
const ImageUpload = () => {
  return (
    <div className="bg-white shadow-md rounded p-6 w-full max-w-2xl">
      <label
        htmlFor="fileInput"
        className="cursor-pointer block w-full text-center border-2 border-dashed p-6 border-gray-300 hover:border-blue-500 transition-all rounded"
      >
        <input type="file" id="fileInput" className="hidden" />

        <span className="text-lg font-medium text-gray-500">Click or Drag your image</span>
      </label>
    </div>
  );
};

export default ImageUpload;
