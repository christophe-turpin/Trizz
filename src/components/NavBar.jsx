import React from "react";
import { Container, Dropdown, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const FixedMenuLayout = () => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item>
          <Link to="/">
            <i aria-hidden="true" className="olive tree inverted icon" />
            Trizz
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>

        <Dropdown item simple text="See More">
          <Dropdown.Menu>
            <Dropdown.Header>
              <Link to="/quiz">Quiz</Link>
            </Dropdown.Header>
            <Dropdown.Header>
              <Link to="/articles">Acticles</Link>
            </Dropdown.Header>
            <Dropdown.Header>
              <Link to="/maps">Forest Map</Link>
            </Dropdown.Header>
            <Dropdown.Header>
              <Link to="/aboutUs">About us</Link>
            </Dropdown.Header>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  </div>
);

export default FixedMenuLayout;
