import React, { useState } from "react";
import {Navbar} from '../components';
import '../App.css';

function NewShop() {
  const [shopData, setShopData] = useState({
    logo: "",
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShopData({ ...shopData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission, e.g., log data
    console.log(shopData);
    setShopData({
      logo: "",
      name: "",
      description: "",
    });
    document.getElementById("fileInput").value = "";
  };

  const handleCancel = () => {
    // Clear form data
    setShopData({
      logo: "",
      name: "",
      description: "",
    });
    document.getElementById("fileInput").value = "";

  };

  return (
    <div className="w-full h-full ">
      <div>
        <Navbar/>
      </div>

      <div  className="flex justify-center flex-col items-center ">
      <h1 className="mb-5 text-5xl">New Shop</h1>
      <form className="flex flex-col items-center">
        <label className="label">Logo: </label>
        <input type="file" name="logo" id="fileInput" onChange={handleChange} className="forminputs" />
        <br />
        <label className="label"> Name: </label>
        <input type="text" name="name" value={shopData.name} onChange={handleChange} placeholder="Name" className="forminputs" />
        <br />
        <label className="label"> Description: </label>
        <textarea name="description" value={shopData.description} onChange={handleChange} placeholder="Description" className="forminputs" />
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

export default NewShop;
