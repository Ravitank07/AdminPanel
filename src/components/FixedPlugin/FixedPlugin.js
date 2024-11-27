import React from "react";

// reactstrap components
import { Button, Dropdown, DropdownToggle, Badge } from "reactstrap";
import { ThemeContext, themes } from "contexts/ThemeContext";
import { backgroundColors } from "contexts/BackgroundColorContext";

function FixedPlugin(props) {
  const [dropDownIsOpen, setdropDownIsOpen] = React.useState(false);
  
  const handleClick = () => {
    setdropDownIsOpen(!dropDownIsOpen);
  };
  return (
    <div className="fixed-plugin">
      <Dropdown isOpen={dropDownIsOpen} toggle={handleClick}>
        <DropdownToggle tag="div">
          <i className="fa fa-cog fa-2x" />
        </DropdownToggle>
        <ul className="dropdown-menu show">
          <li className="header-title">SIDEBAR BACKGROUND</li>
          <li className="adjustments-line">
            <div className="badge-colors text-center">
            <Badge
                color="dark" // We use a dark color to indicate black
                className={props.bgColor === backgroundColors.black ? "active" : ""}
                onClick={() => {
                  props.handleBgClick(backgroundColors.black); // Only handle black color
                }}
              />
            </div>
          </li>
          <li className="adjustments-line text-center color-change">
            <ThemeContext.Consumer>
              {({ changeTheme }) => (
                <>
                  <span className="color-label">LIGHT MODE</span>{" "}
                  <Badge
                    className="light-badge mr-2"
                    onClick={() => changeTheme(themes.light)}
                  />{" "}
                </>
              )}
            </ThemeContext.Consumer>
          </li>
          <li className="button-container">
            <Button
              href="https://www.creative-tim.com/product/black-dashboard-react"
              color="primary"
              block
              className="btn-round"
            >
              Download Now
            </Button>
            <Button
              color="default"
              block
              className="btn-round"
              outline
              href="https://demos.creative-tim.com/black-dashboard-react/#/documentation/tutorial"
            >
              Documentation
            </Button>
          </li>
          <li className="header-title">Want more components?</li>
          <li className="button-container">
            <Button
              href="https://www.creative-tim.com/product/black-dashboard-pro-react"
              className="btn-round"
              disabled
              block
              color="danger"
            >
              Get pro version
            </Button>
          </li>
        </ul>
      </Dropdown>
    </div>
  );
}

export default FixedPlugin;
