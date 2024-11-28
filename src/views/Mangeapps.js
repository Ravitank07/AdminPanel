import React, { useState } from "react";
import { Row, Col, Button } from "reactstrap";
import { FaMobileAlt, FaStore } from "react-icons/fa"; // Icon imports
import { useNavigate } from "react-router-dom"; // Router for navigation

function ManageApps() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("playStore"); // State to manage active tab
  const [appData, setAppData] = useState({
    appName: "",
    packageName: "",
    appLink: "",
    playStoreLink: "",
  });

  const navigate = useNavigate();

  // Function to handle modal toggle
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [apps, setApps] = useState([
    {
      id: 1,
      appName: "TeraBox: Cloud Storage Space",
      packageName: "com.dubox.drive",
      appId: 880404,
      createdOn: "Oct. 1, 2024, 6:43 p.m.",
      status: "Active",
    },
    {
      id: 2,
      appName: "AHA Live Random Video Chat",
      packageName: "live.aha.n",
      appId: 632845,
      createdOn: "Oct. 2, 2024, 4:43 p.m.",
      status: "Active",
    },
  ]);

  const handleViewApp = (id) => {
    navigate(`/admin/updatep/${id}`); // Navigate to UpdatePage with app ID
  };

  // Function to handle tab change
  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  // Handle form data change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppData({
      ...appData,
      [name]: value,
    });
  };

  // Function to handle click outside the modal
  const handleClickOutside = (e) => {
    if (e.target.id === "modalBackdrop") {
      setShowModal(false);
    }
  };

  return (
    <div className="content">
      <Row className="align-items-center mb-4">
        <Col md="12" className="d-flex justify-content-between align-items-center">
          <div>
            <h2 className="mb-0">All Apps</h2>
            <p className="text-muted mb-0">Manage apps here</p>
          </div>
          <Button className="bg-black" onClick={toggleModal}>
            New App
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>App Name</th>
                  <th>Package Name</th>
                  <th>App ID</th>
                  <th>Created On</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {apps.map((app) => (
                  <tr key={app.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <FaMobileAlt className="me-2" />
                        {app.appName}
                      </div>
                    </td>
                    <td>{app.packageName}</td>
                    <td>{app.appId}</td>
                    <td>{app.createdOn}</td>
                    <td>{app.status}</td>
                    <td>
                      <Button color="danger" onClick={() => handleViewApp(app.id)}>
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>

      {/* Modal */}
      {showModal && (
        <div
          id="modalBackdrop"
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-auto"
          onClick={handleClickOutside}
        >
          <div
            className="bg-white p-8 rounded-lg w-[500px] h-auto flex flex-col justify-between transition-transform duration-300 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4">Create New App</h2>

            {/* Tab navigation */}
            <div className="flex space-x-4 border-b-2 pb-2">
              <button
                className={`py-2 px-4 font-semibold ${activeTab === "playStore" ? "border-b-2 border-blue-500" : "text-gray-600"}`}
                onClick={() => toggleTab("playStore")}
              >
                App via Play Store
              </button>
              <button
                className={`py-2 px-4 font-semibold ${activeTab === "manual" ? "border-b-2 border-blue-500" : "text-gray-600"}`}
                onClick={() => toggleTab("manual")}
              >
                App via Manually
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === "playStore" ? (
              <div className="mt-4">
                {/* App via Play Store Tab */}
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
                      onClick={toggleModal}
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
            ) : (
              <div className="mt-4">
                {/* App via Manually Tab */}
                <div className="space-y-4">
                  <div className="form-group flex items-center">
                    <FaStore className="mr-2 text-xl" />
                    <input
                      type="text"
                      name="playStoreLink"
                      placeholder="Enter Playstore link"
                      className="form-control w-full p-2 border border-gray-300 rounded-md"
                      value={appData.playStoreLink}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      onClick={toggleModal}
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
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageApps;
