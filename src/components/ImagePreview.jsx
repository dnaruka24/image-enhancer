import Loading from "./Loading";

const ImagePreview = (props) => {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      {/* Original Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden min-h-[300px]">
        <h2 className=" font-semibold bg-gray-800 text-white text-center py-2">
          Original Image
        </h2>
        {props.upload ? (
          <img
            src={props.upload}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-80 bg-gray-200">
            No Image Selected
          </div>
        )}
      </div>

      {/* Enhanced Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden min-h-[300px]">
        <h2 className=" font-semibold bg-blue-800 text-white text-center py-2">
          Enhanced Image
        </h2>
        {props.enhance && !props.loading && (
          <img src="" alt="" className="w-full h-full object-cover" />
        )}
        {props.loading ? (
          <Loading />
        ) : (
          <div className="flex items-center justify-center h-80 bg-gray-200">
            No Enhanced Image
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
