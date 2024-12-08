import React, { useState } from "react";
import Cropper from "react-easy-crop";

const ImageCropper = ({ image, onCropDone, onCropCancel }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [cropArea, setCropArea] = useState(null);
  const aspectRatio = 4 / 5;

  const onCropComplete = (_, croppedAreaPixels) => {
    setCropArea(croppedAreaPixels);
  };

  const getCroppedImg = async () => {
    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = image;

      await new Promise((resolve) => {
        img.onload = () => {
          const { width, height } = cropArea;
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(
            img,
            cropArea.x,
            cropArea.y,
            width,
            height,
            0,
            0,
            width,
            height
          );
          resolve();
        };
      });

      return new Promise((resolve) => {
        canvas.toBlob(
          (blob) => {
            const fileUrl = URL.createObjectURL(blob);
            resolve(fileUrl);
          },
          "image/jpeg",
          1
        );
      });
    } catch (error) {
      console.error("Failed to crop image:", error);
      return null;
    }
  };

  const handleCropDone = async () => {
    const croppedImage = await getCroppedImg();
    if (croppedImage) {
      onCropDone(croppedImage);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="w-11/12 bg-white rounded-lg sm:w-3/4 md:w-1/2 lg:w-1/3">
        <h2 className="py-4 text-lg font-semibold text-center text-white bg-custom-pink">
          Crop Image
        </h2>
        <div className="relative w-full h-96">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={aspectRatio}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
            style={{
              containerStyle: {
                width: "100%",
                height: "100%",
              },
            }}
          />
        </div>
        <div className="flex justify-center gap-2 px-4 py-3 bg-gray-100 border-t border-gray-200">
          <button
            onClick={onCropCancel}
            className="w-full px-4 py-2 font-medium text-white bg-gray-600 rounded-md hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={handleCropDone}
            className="w-full px-4 py-2 font-medium text-white bg-pink-300 rounded-md hover:bg-pink-500"
          >
            Crop
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCropper;
