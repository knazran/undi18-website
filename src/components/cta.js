import React from "react";

const CTA = ({ children }) => (
  <form className="bg-white shadow-lg rounded px-6 pt-6 pb-4 ">
    <p className="text-xl lg:text-2xl font-bold mb-3">Get Quotation</p>
    <div class="mb-2">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="fullname">
        Company Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="companyname"
        type="text"
        placeholder="Company Name"
      ></input>
    </div>
    <div class="mb-2">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="fullname">
        Full Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="fullname"
        type="text"
        placeholder="Full Name"
      ></input>
    </div>
    <div className="mb-2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email Address
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email_in"
        type="email"
        placeholder="Business Email"
      ></input>
    </div>
    <div class="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="fullname">
        Contact Number
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="contact"
        type="text"
        placeholder="Contact Number"
      ></input>
    </div>
    <div className="flex items-center">
      <button
        className="bg-agmred hover:bg-agmredbold text-white w-full font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Submit
      </button>
    </div>
  </form>
);

export default CTA;
