let API_KEY = "wxyqfhdlnhjgfmzol";
let BASE_URL = "https://techhk.aoscdn.com/";

export let enhancedImageAPI = async (file) => {
  try {
    let taskId = await uploadImage(file);
    console.log("Image uploaded successfully, Task ID:", taskId);

    let enhancedImageData = await fetchEnhancedImage(taskId);
    console.log("Enhanced image data:", enhancedImageData);
    // return enhancedImageData;
  } 
  catch (error) {
    console.log("Error in enhancedImageAPI:", error.message);
  }
};

let uploadImage = async (file) => {
  //code for upload image
  //"api/tasks/visual/scale/"
    

  return taskId;
};

let fetchEnhancedImage = async (taskId) => {
  //fetch enhance image
  //"/api/tasks/visual/scale/{task_id}"
};
