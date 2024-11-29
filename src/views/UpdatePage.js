import React, { useState } from "react";
import { Row, Col, FormGroup, Label, Input, Button, Divider } from "reactstrap";

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
    <div className="content">
      <Row className="flex flex-col h-full">
        <Col className="flex flex-col justify-between" md={12}>
          <div className="flex justify-between">
            <div>
              <h1>Update App Setting</h1>
              <h6>Please Update Details Below</h6>
            </div>
            <div>
              <button className="btn bg-green-600">Approved</button>
            </div>
          </div>

          <div className="flex flex-col space-y-3 mb-auto">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <form className="flex flex-col space-y-6">
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

                <Button
                  color="black"
                  className="my-3 py-2 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all"
                >
                  Update Settings
                </Button>
              </form>
            </div>
          </div>

          {/* Postback URL Section */}
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 mb-6 mt-4">
            <form className="flex flex-col w-full md:w-1/2 space-y-3">
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
            </form>

            {/* Test Postback Section */}
            <form className="flex flex-col w-full md:w-1/2 space-y-3">
              <FormGroup className="flex flex-col">
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
        </Col>
      </Row>
    </div>
  );
}

export default Conversions;
