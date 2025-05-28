import { API_PATHS } from "./apiPath";
import axiosInstance from "./axiosInstance";

const uploadImage = async (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile); // Attach image to form data

  try {
    const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading the image", error);
    throw error; // Re-throw for higher-level error handling
  }
};

export default uploadImage;
