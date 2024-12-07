import React from "react";
import { TextField, Button } from "@mui/material";
import { useForm, ValidationError } from "@formspree/react";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("movqbvqz");
  if (state.succeeded) {
    alert("Thanks for your message! We'll get back to you soon.");
  }

  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-8 md:px-16">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-abril text-gray-800">
          Contact Us
        </h1>
        <p className="text-gray-600 mt-2">
          We'd love to hear from you! Feel free to reach out using the form
          below or the details provided.
        </p>
      </div>

      {/* Contact Details and Form */}
      <div className="flex flex-wrap justify-between items-start gap-2">
        {/* Image Section */}
        <div className="flex gap-32">
          <div className="hidden md:block md:w-1/4">
            <img
              src="https://res.cloudinary.com/dcn64hytu/image/upload/v1732707275/AuraMart-images/5095451_f6fezs.jpg" // Replace with your image URL
              alt="Contact Us"
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>
          <div className="w-full md:w-1/3 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-700">
              Get in Touch
            </h2>
            <p className="text-gray-600 mt-2">
              Reach out to us via any of the following channels:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="text-gray-600">
                📍 Address: No.27, Katubedda Moratuwa.
              </li>
              <li className="text-gray-600">📞 Phone: +1 (123) 456-7890</li>
              <li className="text-gray-600">📧 Email: support@auramart.com</li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-2/3 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            Send Us a Message
          </h2>
          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            <TextField
              label="Your Name"
              id="name"
              type="name"
              name="name"
              fullWidth
              variant="outlined"
              className="bg-gray-50"
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              className="text-red-500 text-sm" />

            <TextField
              label="Your Email"
              id="email"
              type="email"
              name="email"
              fullWidth
              variant="outlined"
              className="bg-gray-50"
            />
             <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm" />

            <TextField
              label="Subject"
              id="subject"
              type="subject"
              name="subject"
              fullWidth
              variant="outlined"
              className="bg-gray-50"
            />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
              className="text-red-500 text-sm" />

            <TextField
              label="Message"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              className="bg-gray-50"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-500 text-sm" />

            <Button
              type="submit"
              variant="contained"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
              disabled={state.submitting}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
          Find Us Here
        </h2>
        <div className="w-full h-64 bg-gray-300 rounded-lg">
          <p className="flex items-center justify-center h-full text-gray-600">
                <div
                  id="embed-ded-map-canvas"
                  style={{ height: "100%", width: "100%", maxWidth: "100%" }}
                >
                  <iframe
                    style={{ height: "100%", width: "100%", border: 0 }}
                    src="https://www.google.com/maps/embed/v1/place?q=katubedda+moratuwa&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    allowFullScreen
                  ></iframe>
                </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
