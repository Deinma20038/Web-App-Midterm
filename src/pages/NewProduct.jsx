import React, { useState } from "react";
import {Navbar} from '../components';

function NewProduct() {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    category: "",
    quantity: "",
    price: "",
    photo: "", // Store the selected file
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // For file input, use e.target.files[0] to access the selected file
    const newValue = type === "file" ? e.target.files[0] : value;

    setProductData({ ...productData, [name]: newValue });
  };

  const handleSubmit = () => {
    // Handle form submission, e.g., log data
    console.log(productData);
    setProductData({
      name: "",
      description: "",
      category: "",
      quantity: "",
      price: "",
      photo: "", // Clear the selected file
    });
    document.getElementById("fileInput").value = "";

  };

  const handleCancel = () => {
    // Clear form data
    setProductData({
      name: "",
      description: "",
      category: "",
      quantity: "",
      price: "",
      photo: "", // Clear the selected file
    });

    document.getElementById("fileInput").value = "";

  };

  return (
    <div className="w-full h-full">

      <div>
    <Navbar />
      </div>

      <div className="flex justify-center flex-col items-center ">
      <h1 className="mb-5 text-5xl">New Product</h1>
      <form className="flex flex-col items-center"> 
      <label className="label">Photo: </label>
        <input type="file" name="photo" accept="image/*" id="fileInput" onChange={handleChange} className="forminputs" />
        <br />

        <label className="label">Name: </label>
        <input type="text" name="name" value={productData.name} onChange={handleChange} className="forminputs" placeholder="Name" />
        <br />

        <label className="label">Description: </label>
        <textarea name="description" value={productData.description} onChange={handleChange} className="forminputs" placeholder="Description"/>
        <br />

        <label className="label">Category: </label>
        <input type="text" name="category" value={productData.category} onChange={handleChange} className="forminputs" placeholder="Category"/>
        <br />

        <label className="label">Quantity: </label>
        <input type="number" name="quantity" value={productData.quantity} onChange={handleChange} className="forminputs" placeholder="Quantity"/>
        <br />

        <label className="label">Price: </label>
        <input type="number" name="price" value={productData.price} onChange={handleChange} className="forminputs" placeholder="Price"/>
        <br />
       
        <button type="button" onClick={handleSubmit} className="btn">
          Submit
        </button>
        <button type="button" onClick={handleCancel} className="btn">
          Cancel
        </button>
      </form>
      </div>


    </div>
  );
}

export default NewProduct;
