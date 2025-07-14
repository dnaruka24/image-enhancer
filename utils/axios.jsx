import axios from "axios";

let API_KEY = "wx6zy2jd05t9io18i";
let BASE_URL = "https://techhk.aoscdn.com/";

export let enhancedImageAPI = async (file) => {
  try {
    let taskId = await uploadImage(file);

    let enhancedImageData = await pollEnhancedImage(taskId);
    console.log("Enhanced image data:", enhancedImageData);
    return enhancedImageData;
  } catch (error) {
    console.log("Error in enhancedImageAPI:", error.message);
  }
};

let uploadImage = async (file) => {
  if (!file) {
    throw new Error("No file provided");
  }
  let formData = new FormData();
  formData.append("image_file", file);

  let { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );

      if(!data?.data?.task_id) {
        throw new Error("Failed to upload image! Task ID not found.");
      }

  return data.data.task_id;
};

let pollEnhancedImage = async (taskId, retries = 0) => {
  let result = await fetchEnhancedImage(taskId);

  if(result.state === 4) {
    console.log("Processing...");
    
    if (retries >= 20) {
      throw new Error("Max retries reached. Image enhancement failed.");
    }

    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds before retrying

    return pollEnhancedImage(taskId, retries + 1);
  }
  return result;
}

let fetchEnhancedImage = async (taskId) => {
  let { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
    {
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  );
  if (!data?.data) {
    throw new Error("Failed to fetch enhanced image! Image not found.");
  }
  return data.data;
};



