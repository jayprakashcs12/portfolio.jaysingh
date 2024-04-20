import React, { useState } from "react";
import toast from "react-hot-toast";
import emailjs from 'emailjs-com';

export default function Contact() {

  let [careerData, setCareerData] = useState({
    fname: "", email: "", mobile: "", message: ""
  });

  let { fname, email, mobile, message } = careerData;

  let careersData = (e) => {
    let { name, value } = e.target;
    setCareerData({ ...careerData, [name]: value });
  }

  let handleKeyPress = (e) => {
    if ( /[0-9\b\t\r]/.test(e.key) || e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "Delete" || e.key === "Backspace" ) {
    } else {
      e.preventDefault();
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!fname || !email || !mobile || !message) {
      toast.warning("Please fill the Required Field...!");
    } else {
      emailjs.send('service_q5sj8qq', 'template_122wjce', { to_email: 'jayprakash199221@gmail.com',
        from_name: fname, from_email: email, from_mobile: mobile, from_message: message
      }, 'bhsKrqerDTX-guM48')
      .then((response) => {
        toast.success("Form Submitted Successfully...!");
        setCareerData({
          fname: "", email: "", mobile: "", message: ""
        });
      }, (error) => {
        console.error('Failed to send email. Error:', error);
        toast.error("Failed to submit form. Please try again later.");
      });
    }
  }

  let handleClear = (e) => {
    toast.success("Input Fields Cleared Successfully...!");
    setCareerData({
      fname: "", email: "", mobile: "", message: ""
    });
  }

  return (
    <>
      <hr />
      <div name="Contact Us" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
        <h1 className="text-3xl font-bold mb-3">Contact Us</h1>
        <span>Please fill out the form below to contact Us</span>
        <div className="flex flex-col items-center justify-center mt-3">
          <form className="bg-slate-200 w-96 px-8 py-6 rounded-xl">
            <h1 className="text-xl font-semibold mb-4 text-center">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input type="text" name="fname" value={fname} onChange={careersData} placeholder="Enter Your Full Name"
                className="text-gray-700 rounded-lg py-2 px-3 border-2 border-blue-400 hover:border-blue-800" />
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 mb-1">E-Mail ID</label>
              <input type="email" name="email" value={email} onChange={careersData} placeholder="Enter Your E-Mail ID"
                className="text-gray-700 rounded-lg py-2 px-3 border-2 border-blue-400 hover:border-blue-800"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 mb-1">Mobile Number</label>
              <input type="tel" name="mobile" value={mobile} onChange={careersData} placeholder="Enter Your Mobile Number" onKeyDown={handleKeyPress} maxLength={10}
                className="text-gray-700 rounded-lg py-2 px-3 border-2 border-blue-400 hover:border-blue-800"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea type="text" name="message" value={message} onChange={careersData} placeholder="Enter Your Message Here"
                className="text-gray-700 rounded-lg py-2 px-3 border-2 border-blue-400 hover:border-blue-800"
              />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-blue-500 text-white rounded-xl mx-2 px-10 py-2 border-2 border-blue-500 
                hover:border-blue-500 hover:bg-white hover:text-blue-500 duration-300" onClick={handleSubmit}>
                Send
              </button>
              <button type="reset" className="bg-white text-red-500 hover:bg-red-500 hover:text-white rounded-xl mx-2 px-10 py-2 border-2 
                border-red-500 hover:border-red-500" onClick={handleClear}>
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}