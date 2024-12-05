import React, { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const CloudinaryImageCropUpload = () => {
  const [image, setImage] = useState(null); // Original image
  const [croppedImage, setCroppedImage] = useState(null); // Cropped image preview URL
  const [uploadedImageUrl, setUploadedImageUrl] = useState(""); // Uploaded image URL
  const cropperRef = useRef(null); // Reference to the Cropper instance

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result); // Set image for cropping
      reader.readAsDataURL(file);
    }
  };

  const cropImage = () => {
    const cropper = cropperRef.current.cropper; // Access the cropper instance
    const croppedDataUrl = cropper.getCroppedCanvas().toDataURL(); // Get cropped image as Data URL
    setCroppedImage(croppedDataUrl);
  };

  const handleUpload = async () => {
    if (!croppedImage) {
      alert("Please crop the image before uploading!");
      return;
    }

    const formData = new FormData();
    formData.append("file", dataURLtoBlob(croppedImage)); // Convert base64 to Blob
    formData.append("upload_preset", "shopname"); // Replace with your preset
    formData.append("cloud_name", "dkm9polzw"); // Replace with your Cloudinary cloud name

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dkm9polzw/image/upload", // Replace with your Cloudinary API URL
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      console.log(data.secure_url);
      if (data.secure_url) {
        setUploadedImageUrl(data.secure_url); // Set the uploaded image URL
        alert("Image uploaded successfully!");
      } else {
        alert("Image upload failed!");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please try again.");
    }
  };

  // Utility function to convert base64 data URL to Blob
  const dataURLtoBlob = (dataUrl) => {
    const arr = dataUrl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-10 bg-gray-100">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">
        Image Crop and Upload
      </h1>

      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <input
          type="file"
          accept="image/*"
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={handleImageChange}
        />

        {image && (
          <div className="mt-4">
            <h2 className="mb-2 text-lg font-semibold text-gray-800">
              Crop Image
            </h2>
            <div className="w-full h-64 overflow-hidden bg-gray-200 rounded-md">
              <Cropper
                src={image}
                style={{ height: "100%", width: "100%" }}
                aspectRatio={1} // 1:1 aspect ratio
                guides={true}
                ref={cropperRef}
              />
            </div>
            <button
              onClick={cropImage}
              className="w-full py-2 mt-4 text-white transition bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Crop Image
            </button>
          </div>
        )}

        {croppedImage && (
          <div className="mt-6">
            <h2 className="mb-2 text-lg font-semibold text-gray-800">
              Cropped Image Preview
            </h2>
            <img
              src={croppedImage}
              alt="Cropped"
              className="w-full border border-gray-300 rounded-lg"
            />
            <button
              onClick={handleUpload}
              className="w-full py-2 mt-4 text-white transition bg-green-500 rounded-lg hover:bg-green-600"
            >
              Upload Image
            </button>
          </div>
        )}

        {uploadedImageUrl && (
          <div className="mt-6">
            <h2 className="mb-2 text-lg font-semibold text-gray-800">
              Uploaded Image
            </h2>
            <a
              href={uploadedImageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {uploadedImageUrl}
            </a>
            <img
              src={uploadedImageUrl}
              alt="Uploaded"
              className="w-full mt-4 border border-gray-300 rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CloudinaryImageCropUpload;
