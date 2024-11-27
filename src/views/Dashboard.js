import React from "react";
import { Line, Doughnut } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Table,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartExample1,
  doughnutChartExample
} from "variables/charts.js";

function Dashboard() {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };

  return (
    <>
      <div className="content">
        <Row className="d-flex justify-content-between flex-wrap">
          <Col lg="3" md="6" sm="12" className="mb-4">
            <Card className="shadow">
              <CardBody>
                <h5 className="card-category">Earning Today</h5>
                <h3>$0</h3>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="12" className="mb-4">
            <Card className="shadow">
              <CardBody>
                <h5 className="card-category">Conversion (Today)</h5>
                <h3>$0</h3>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="12" className="mb-4">
            <Card className="shadow">
              <CardBody>
                <h5 className="card-category">Users Today</h5>
                <h3>0</h3>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="12" className="mb-4">
            <Card className="shadow">
              <CardBody>
                <h5 className="card-category">Total Revenue</h5>
                <h3>$0</h3>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h2 className="card-category">Today's Statistics</h2>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area" style={{ height: "400px" }}>
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Conversion Rate</h5>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Doughnut
                    data={doughnutChartExample.data}
                    options={doughnutChartExample.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Top Performers Today</h5>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>App Name</th>
                      <th>Clicks</th>
                      <th>Earning</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Demo</td>
                      <td>Demo</td>
                      <td>$10</td>
                    </tr>
                    <tr>
                      <td>Demo</td>
                      <td>Demo</td>
                      <td>$20</td>
                    </tr>
                    <tr>
                      <td>Demo</td>
                      <td>Demo</td>
                      <td>$50</td>
                    </tr>
                    <tr>
                      <td>Demo</td>
                      <td>Demo</td>
                      <td>$50</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <p>Facing any issues? Feel free to contact</p>
              </CardHeader>
              <CardBody>
                <Button style={{ background: "black", marginLeft: "10px" }}>Contact Now</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
