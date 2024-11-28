import React, { useState } from "react";
import { TextField, MenuItem, Button, Box, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

const categories = ["Men", "Women", "Kids", "Shoes"];
const sizes = ["S", "M", "L", "XL", "XXL"];

const Admin = () => {
  const { control, handleSubmit, reset } = useForm();
  const [uploadedImage, setUploadedImage] = useState(null); // Single image
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]; // Only handle the first file
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_upload_preset"); // Replace with your Cloudinary preset

    // setLoading(true);

    // try {
    //   const response = await axios.post(
    //     "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", // Replace with your Cloudinary URL
    //     formData
    //   );
    //   setUploadedImage(response.data.secure_url); // Store the image URL
    // } catch (error) {
    //   console.error("Image upload failed:", error);
    // } finally {
    //   setLoading(false);
    // }
  };

  const onSubmit = (data) => {
    const productData = { ...data, image: uploadedImage }; // Include single image URL
    console.log("Product Data:", productData);

    // Add API call to save productData in the backend
    // axios.post("/api/products", productData).then(() => reset());
    reset();
    setUploadedImage(null); // Clear the uploaded image
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Typography variant="h4" className="mb-4 text-center">
        Add New Product
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField {...field} label="Product Name" fullWidth required />
          )}
        />
        <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Description"
              multiline
              rows={4}
              fullWidth
              required
            />
          )}
        />
        <Controller
          name="brand"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField {...field} label="Brand" fullWidth required />
          )}
        />
        <Controller
          name="category"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Category"
              select
              fullWidth
              required
            >
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
        <Controller
          name="quantity"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Quantity"
              type="number"
              fullWidth
              required
            />
          )}
        />
        <Controller
          name="size"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField {...field} label="Size" select fullWidth required>
              {sizes.map((size) => (
                <MenuItem key={size} value={size}>
                  {size}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
        <Controller
          name="color"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField {...field} label="Color" fullWidth required />
          )}
        />
        <Controller
          name="price"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Price"
              type="number"
              fullWidth
              required
            />
          )}
        />
        <Box>
          <Typography variant="body1" className="mb-2">
            Upload Image
          </Typography>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mb-4"
          />
          {loading && <Typography>Uploading...</Typography>}
          {uploadedImage && (
            <div className="space-y-2">
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="h-24 w-24 object-cover"
              />
            </div>
          )}
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className="mt-4"
        //   disabled={!uploadedImage} // Disable if no image uploaded
        >
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default Admin;
