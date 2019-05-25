import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: #636e72;
  display: block;
  margin: 0.5em 0;
  font-family: Helvetica, Arial, sans-serif;

  :hover {
    color: #636e72;
    font-weight: 600;
    text-decoration: none;
  }
`;

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
            <img
              style={{ width: 50, height: 50, borderRadius: 50 }}
              src={localStorage.user_image}
              alt="user"
            />
          </DropdownToggle>
          <DropdownMenu
            style={{
              position: 'absolute',
              willChange: 'transform',
              top: 0,
              left: 0,
              transform: 'translate3d(-100px, 50px, 0px)',
              textAlign: 'center'
            }}
          >
            <DropdownItem header style={{ fontWeight: 600 }}>
              {localStorage.user_email !== 'undefined'
                ? localStorage.user_email
                : localStorage.user_name}
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              <StyledLink to={`/hearteditems/${localStorage.userDB_id}`}>
                찜 목록
              </StyledLink>
            </DropdownItem>
            <DropdownItem>
              <StyledLink to="/" onClick={this._onlogOutClick}>
                로그아웃
              </StyledLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Fragment>
    );
  }
}

export default UserButton;
