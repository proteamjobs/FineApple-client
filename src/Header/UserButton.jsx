import React, { Component, Fragment } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export class UserButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };
  }

  _toggleDropdown = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  _onMouseEnter = () => {
    this.setState({ dropdownOpen: true });
  };

  _onMouseLeave = () => {
    this.setState({ dropdownOpen: false });
  };

  _onlogOutClick = () => {
    localStorage.clear();
  };

  render() {
    const { dropdownOpen } = this.state;
    return (
      <Fragment>
        <Dropdown
          onMouseOver={this._onMouseEnter}
          onMouseLeave={this._onMouseLeave}
          isOpen={dropdownOpen}
          toggle={this._toggleDropdown}
        >
          <DropdownToggle className="dropdown_toggle">
            <img src={localStorage.user_image} />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>{localStorage.user_email}</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              <Link to="/hearteditems/:userid">찜목록</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/" onClick={this._onlogOutClick}>
                로그아웃
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Fragment>
    );
  }
}

export default UserButton;
