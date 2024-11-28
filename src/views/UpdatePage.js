import React, { useState } from "react";
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Divider,
} from "reactstrap";

function Conversions() {
  const [headerImage, setHeaderImage] = useState(null);
  const [coinIcon, setCoinIcon] = useState(null);
  const [postbackURL, setPostbackURL] = useState("");
  const [testPostbackURL, setTestPostbackURL] = useState("");
  const [userId, setUser] = useState("");
  const [awardAmount, setAwardAmount] = useState("");

  const handleHeaderImageChange = (e) => {
    setHeaderImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleCoinIconChange = (e) => {
    setCoinIcon(URL.createObjectURL(e.target.files[0]));
  };

  const handleUpdatePostbackURL = () => {
    console.log("Postback URL updated to:", postbackURL);
  };

  const handleSendPostback = () => {
    console.log(
      "Sending test postback to:",
      testPostbackURL,
      "with userId:",
      userId,
      "and awardAmount:",
      awardAmount
    );
  };

  return (
    <>
      <div className="content">
        <Row className="flex flex-col">
          <Col className="flex flex-col" md={12}>
            <h3 className="text-left">Update App Settings</h3>
            <p>Please update the details below</p>
            <div className="flex flex-col space-y-3">
              {/* Header Image Section */}
              <FormGroup className="flex flex-col rounded-lg border border-gray-300 p-4 shadow-md">
                <Label htmlFor="headerImage" className="font-semibold">
                  Input Your Header Image
                </Label>
                <p className="text-sm text-gray-500">Size must be 360*130</p>
                <div className="flex items-center mt-2 space-x-4">
                  <Input
                    type="file"
                    id="headerImage"
                    name="headerImage"
                    className="border border-gray-300 rounded"
                    onChange={handleHeaderImageChange}
                  />
                  {headerImage && (
                    <img
                      src={headerImage}
                      alt="Header"
                      className="border border-black rounded"
                      style={{ width: "60px", height: "60px" }}
                    />
                  )}
                </div>
              </FormGroup>

              {/* Coin Icon Section */}
              <FormGroup className="flex flex-col rounded-lg border border-gray-300 p-4 shadow-md">
                <Label htmlFor="coinIcon" className="font-semibold">
                  Coin Icon
                </Label>
                <div className="flex items-center mt-2 space-x-4">
                  <Input
                    type="file"
                    id="coinIcon"
                    name="coinIcon"
                    className="border border-gray-300 rounded"
                    onChange={handleCoinIconChange}
                  />
                  {coinIcon && (
                    <img
                      src={coinIcon}
                      alt="Coin Icon"
                      className="border border-black rounded"
                      style={{ width: "60px", height: "60px" }}
                    />
                  )}
                </div>
              </FormGroup>

              {/* Currency Settings Section */}
              <div className="flex justify-between space-x-4">
                <form className="flex flex-col max-w-lg mx-auto space-y-6">
                  <FormGroup className="flex flex-col">
                    <Label htmlFor="currencyValue" className="font-semibold text-lg">
                      Currency value (per 1 USD)
                    </Label>
                    <Input
                      type="number"
                      id="currencyValue"
                      name="currencyValue"
                      className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="8000"
                    />
                  </FormGroup>

                  <FormGroup className="flex flex-col">
                    <Label htmlFor="currency" className="font-semibold text-lg">
                      Currency
                    </Label>
                    <Input
                      type="text"
                      id="currency"
                      name="currency"
                      className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="coins"
                    />
                  </FormGroup>

                  <FormGroup className="flex flex-col">
                    <Label htmlFor="margin" className="font-semibold text-lg">
                      Your margin in %
                    </Label>
                    <Input
                      type="number"
                      id="margin"
                      name="margin"
                      className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="10"
                    />
                  </FormGroup>

                  {/* Custom File Upload Input */}
                  <FormGroup className="flex items-center space-x-4">
                    <Label htmlFor="file" className="font-semibold text-lg">
                      Upload File
                    </Label>
                    <div className="flex items-center space-x-4 w-full">
                      <Input
                        type="file"
                        id="file"
                        name="file"
                        className="p-2 border border-gray-300 rounded-lg file:mr-3 file:bg-blue-500 file:text-white file:rounded-lg file:px-4 file:py-2"
                      />
                      {/* You can conditionally display the file name if a file is uploaded */}
                      <span className="text-gray-500">{/* Display file name here if uploaded */}</span>
                    </div>
                  </FormGroup>

                  <Button
                    color="black"
                    className="my-3 py-2  text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all"
                  >
                    Update Settings
                  </Button>
                </form>
                {/* Postback URL Section */}
                <form className="flex flex-col w-1/2 space-y-3 mt-3">
                  <FormGroup className="flex flex-col">
                    <Label htmlFor="postbackURL" className="font-semibold">
                      Set Postback URL
                    </Label>
                    <Input
                      type="text"
                      id="postbackURL"
                      name="postbackURL"
                      className="mt-2"
                      value={postbackURL}
                      onChange={(e) => setPostbackURL(e.target.value)}
                      placeholder="Enter your Postback URL"
                    />
                    <Button
                      color="black"
                      className="mt-3"
                      onClick={handleUpdatePostbackURL}
                    >
                      Update URL
                    </Button>
                  </FormGroup>

                  {/* Test Postback Section */}
                  <FormGroup className="flex flex-col mt-3">
                    <Label htmlFor="testPostbackURL" className="font-semibold">
                      Test a Postback
                    </Label>
                    <Input
                      type="text"
                      id="testPostbackURL"
                      name="testPostbackURL"
                      className="mt-2"
                      value={testPostbackURL}
                      onChange={(e) => setTestPostbackURL(e.target.value)}
                      placeholder="Enter test Postback URL"
                    />
                    <Input
                      type="text"
                      id="userId"
                      name="userId"
                      className="mt-2"
                      value={userId}
                      onChange={(e) => setUser(e.target.value)}
                      placeholder="User ID"
                    />
                    <Input
                      type="number"
                      id="awardAmount"
                      name="awardAmount"
                      className="mt-2"
                      value={awardAmount}
                      onChange={(e) => setAwardAmount(e.target.value)}
                      placeholder="Award Amount"
                    />
                    <Button
                      color="black"
                      className="mt-3"
                      onClick={handleSendPostback}
                    >
                      Send Postback
                    </Button>
                  </FormGroup>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Conversions;
