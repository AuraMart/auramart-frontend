
import React, { useState } from "react";


import { CiImageOn } from "react-icons/ci";
import { createProduct } from "../../Services/api";
import ImageCropper from "../../components/ImageCropper";

import axios from "axios";

const AddProduct=()=> {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [quentity, setQuentity] = useState("");
  const [size, setSize] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");

  const [galleryImages, setGalleryImages] = useState([]);
  const [cloudinaryUrls, setCloudinaryUrls] = useState([]);
  const [croppingImage, setCroppingImage] = useState(null);
  const [date, setDate] = useState("");

  async function handleCroppedImage(croppedImageUrl) {
    try {
      const blob = await fetch(croppedImageUrl).then((res) => res.blob());
      const formData = new FormData();
      formData.append("file", blob);
      formData.append("upload_preset", "shopname");
      formData.append("cloud_name", "dkm9polzw");

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dkm9polzw/image/upload`,
        formData
      );

      const uploadedUrl = response.data.secure_url;
      setCloudinaryUrls((prev) => [...prev, uploadedUrl]);
      setGalleryImages((prev) => [...prev, croppedImageUrl]);
      setCroppingImage(null);
    } catch (error) {
      console.error("Failed to upload cropped image:", error);
      alert("Failed to upload cropped image.");
    }
  }

  async function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (galleryImages.length >= 2) {
      alert("You can only upload a maximum of 4 images.");
      return;
    }

    const fileUrl = URL.createObjectURL(file);
    setCroppingImage(fileUrl);
  }
  function handleRemoveImage(index) {
    const updatedImages = galleryImages.filter((_, i) => i !== index);
    const updatedCloudinaryUrls = cloudinaryUrls.filter((_, i) => i !== index);
    setGalleryImages(updatedImages);
    setCloudinaryUrls(updatedCloudinaryUrls);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (galleryImages.length !== 2) {
      alert("Please upload exactly 4 images before adding the product.");
      return;
    }



    const productData = {
      name: name,
      brand: brand,
      price: price,
      size: size,
      category: category,
      description: description,
      imageUrls: cloudinaryUrls,
      color:color,
      inventory:quentity,
      date:date,
    };

    try {
      // await createProduct(productData);
      const res= await axios.post("http://localhost:9191/api/v1/products/add",productData)

        console.log(res);
     resetForm();
      alert("Product added successfully!");
    } catch (error) {
      console.error("Failed to add product:", error);
      alert("Failed to add product.");
    }
  }
  function resetForm() {
    setName("");
    setBrand("");
    setPrice("");
    setDate("");
    setQuentity("default");
    setCategory("default");
    setDescription("");
    setSize("");
    setGalleryImages([]);
    setCloudinaryUrls([]);
  }

  function handleCancel() {
    resetForm();
  }

  return (
      <form onSubmit={handleSubmit}>
      <div className="px-8 py-6 pb-6 bg-gray-100 xl:pb-14 lg:pb-14 md:pb-10 sm:pb-6 xl:px-26 lg:px-26 sm:px-8 md:px-20 xl:py-8 lg:py-8 md:py-8 sm:py-6">
           <div>
             <h1 className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-semibold text-black font-poppins">
               Add Product
             </h1>
           </div>
           <div className=" w-full grid bg-white rounded-xl  md:py-[20px] py-[10px] sm:py[10px] md:px-[40px] sm:px[10px]  px-[10px] xl:gap-10 lg:gap-10  xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 text-[10px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[14px font-poppins mt-4">
             <div className="">
               <div className="mb-4 md:mb-7">
                 <label className="block mb-2 font-medium text-black ">
                   Product Name :
                 </label>
                 <input
                  type="text"
                  value={name}
                  className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full xl:p-2 lg:p-2 md:p-2 sm:p-1.5 p-1.5  "
                  placeholder="Enter product name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-flow-col gap-4">
                <div className="mb-4 md:mb-7">
                  <label className="block mb-2 font-medium text-black ">
                    Brand :
                  </label>
                  <input
                    type="text"
                    value={brand}
                    className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full xl:p-2 lg:p-2 md:p-2 sm:p-1.5 p-1.5  "
                    placeholder="PUMA"
                    onChange={(e) => setBrand(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4 md:mb-7">
                  <label className="block mb-2 font-medium text-black ">
                   Price :
                  </label>
                  <input
                    type="text"
                    value={price}
                    className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full xl:p-2 lg:p-2 md:p-2 sm:p-1.5 p-1.5  "
                    placeholder="Enter rental price"
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full mb-4 md:mb-7 ">
                  <label className="block mb-2 font-medium text-black ">
                    Color :
                  </label>
                  <select
                    id="options"
                    className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full xl:p-2 lg:p-2 md:p-2 sm:p-1.5 p-1.5  "
                    value={color}
                    required
                    onChange={(e) =>setColor(e.target.value)}
                  >
                    <option value="default" className="hidden">
                      Select Color
                    </option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="White">White</option>
                    <option value="Green">Green</option>
                  </select>
                </div>
                <div className="w-full mb-4 md:mb-7 ">
                  <label className="block mb-2 font-medium text-black ">
                    Size :
                  </label>
                  <select
                    id="options"
                    className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full xl:p-2 lg:p-2 md:p-2 sm:p-1.5 p-1.5  "
                    value={size}
                    required
                    onChange={(e) => setSize(e.target.value)}
                  >
                    <option value="default" className="hidden">
                      Select type of Size
                    </option>
                    <option value="L">L</option>
                    <option value="M">M</option>
                    <option value="S">S</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full mb-4 md:mb-7 ">
                  <label className="block mb-2 font-medium text-black ">
                  Category :
                  </label>
                  <select
                    id="options"
                    className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full xl:p-2 lg:p-2 md:p-2 sm:p-1.5 p-1.5  "
                    value={category}
                    required
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="default" className="hidden">
                      Select Category
                    </option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                    <option value="Shoes">Shoes</option>
                  </select>
                </div>
                <div className="mb-4 md:mb-7">
                  <label className="block mb-2 font-medium text-black ">
                   Quentity :
                  </label>
                  <input
                    type="text"
                    value={quentity}
                    className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full xl:p-2 lg:p-2 md:p-2 sm:p-1.5 p-1.5  "
                    placeholder="Enter rental price"
                    onChange={(e) => setQuentity(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
              <div className="w-full mb-4 md:mb-7">
          <label className="block mb-2 font-medium text-black">
            Date:
          </label>
          <input
            type="date"
            value={date}
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full xl:p-2 lg:p-2 md:p-2 sm:p-1.5 p-1.5"
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
                
              </div>

              {/* <div className="w-full mb-4 md:mb-7">
                <label className="block mb-4 font-medium text-black ">
                  Stock Quantity :
                </label>

                <ColorQuantityTable onColorsChange={setColors} required />
              </div> */}
            </div>
            <div className="w-full mb-4 md:mb-7">
              <div className="w-full mb-4 md:mb-7 ">
                <label className="block mb-2 font-medium text-black font-poppins">
                  Product Gallery :
                </label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  required
                  disabled={galleryImages.length >= 2}
                />
                <div className="grid grid-cols-2 gap-4 mt-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4">
                  {galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-[120px] h-[150px] border rounded-lg  relative"
                    >
                      <img
                        src={image}
                        alt={`Gallery ${index}`}
                        className="object-cover w-full h-full"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        className="absolute w-5 h-5 text-white rounded-full top-1 right-1 bg-custom-pink "
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                  {galleryImages.length < 2 && (
                    <div className="w-[120px] h-[150px] border rounded-md flex items-center justify-center text-gray-400">
                      <CiImageOn size={40} />
                    </div>
                  )}
                </div>
                {croppingImage && (
                  <div className="fixed inset-0 flex items-center justify-center rounded-lg">
                    <div className="rounded-lg ">
                      <ImageCropper
                        image={croppingImage}
                        onCropDone={handleCroppedImage}
                        onCropCancel={() => setCroppingImage(null)}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 gap-4 mt-5">
                <div className="w-full mb-4 md:mb-7 ">
                  <label className="block mb-2 font-medium text-black font-poppins ">
                    Description :
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="block p-2.5 w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 f-blue-500 "
                    placeholder="Leave a comment..."
                    value={description}
                    required
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="flex items-end justify-end gap-4 mt-4">
                
                <button
                  className="px-4 py-1 font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-400 focus:ring-4 xl:py-2 xl:px-10 lg:py-2 lg:px-10 md:py-1 md:px-6 sm:py-1 sm:px-4"
                  type="button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1 font-medium text-center text-white bg-pink-300 rounded-lg hover:bg-pink-500 f xl:py-2 xl:px-10 lg:py-2 lg:px-10 md:py-1 md:px-6 sm:py-1 sm:px-4"
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
  );
}

export default AddProduct;
