import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { useState } from "react";
import { enhancedImageAPI } from "../../utils/axios";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhanceImage, setEnhanceImage] = useState(null);
  const [loading, setloading] = useState(false);

  let UploadImageHandler = async (file) =>{
    setUploadImage(URL.createObjectURL(file));
    setloading(true); 
    try {
      let enhancedURL = await enhancedImageAPI(file)
      setEnhanceImage(enhancedURL)
      setloading(false)
    } catch (error) {
      console.log(error);
      alert("Error in enhancing image. Please try again.");
    }   
  }
  return (
    <>
      <ImageUpload UploadImageHandler={UploadImageHandler}/>
      <ImagePreview
        loading={loading}
        upload={uploadImage}
        enhance={enhanceImage}
      />
    </>
  );
};

export default Home;
