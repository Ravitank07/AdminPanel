import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function AppModalPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { modalData } = location.state || {}; // Access passed data

  const [appData, setAppData] = useState(modalData || {});

  // Handle form data change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppData({
      ...appData,
      [name]: value,
    });
  };

  return (
    <div
      id="modalBackdrop"
      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-auto"
    >
      <div
        className="bg-white p-8 rounded-lg w-[500px] h-auto flex flex-col justify-between transition-transform duration-300 ease-out"
      >
        <h2 className="text-xl font-semibold mb-4">Create New App</h2>
        <div className="space-y-4">
          <div className="form-group">
            <label className="block">App Name</label>
            <input
              type="text"
              name="appName"
              className="form-control w-full p-2 border border-gray-300 rounded-md"
              value={appData.appName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label className="block">Package Name</label>
            <input
              type="text"
              name="packageName"
              className="form-control w-full p-2 border border-gray-300 rounded-md"
              value={appData.packageName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label className="block">Link to App</label>
            <input
              type="text"
              name="appLink"
              className="form-control w-full p-2 border border-gray-300 rounded-md"
              value={appData.appLink}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => navigate(-1)} // Go back
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md"
            >
              Close
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppModalPage;
