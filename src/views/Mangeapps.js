import React, { useState } from "react";
import { Row, Col, Button } from "reactstrap";
import { FaMobileAlt } from "react-icons/fa"; // Icon import
import { useNavigate } from "react-router-dom"; // Router for navigation
function ManageApps() {
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

  const navigate = useNavigate();

  const handleNewApp = () => {
    console.log("New App button clicked");
  };

  const handleDeleteApp = (id) => {
    const updatedApps = apps.filter((app) => app.id !== id);
    setApps(updatedApps);
    console.log(`Deleted app with id: ${id}`);
  };

  const handleViewApp = (id) => {
    navigate(`/updatep/${id}`);
  };

  return (
    <>
      <div className="content">
        <Row className="align-items-center mb-4">
          <Col md="12" className="d-flex justify-content-between align-items-center">
            <div>
              <h2 className="mb-0">All Apps</h2>
              <p className="text-muted mb-0">Manage apps here</p>
            </div>
            <Button className="bg-black" onClick={handleNewApp}>
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
                        <Button
                          color="danger"
                          onClick={() => handleViewApp(app.id)}
                        >
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
      </div>
    </>
  );
}

export default ManageApps;
