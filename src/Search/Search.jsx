import React, { Component } from 'react';
import {
  Dropdown,
  Row,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Spinner
} from 'reactstrap';
import Icon from 'react-icons-kit';
import { search } from 'react-icons-kit/fa/search';
import { iosLocation } from 'react-icons-kit/ionicons/iosLocation';
import { appleinc } from 'react-icons-kit/icomoon/appleinc';
import { shop } from 'react-icons-kit/entypo/shop';
import { archive } from 'react-icons-kit/entypo/archive';
import 'bootstrap/dist/css/bootstrap.min.css';

import styled from 'styled-components';
const axios = require('axios');

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: ${props => (props.main ? '30vh' : '5vh')}
  height: 10vh;
  background-color: ${props => (props.main ? '#00000055' : 'transparent')}
  margin-left: 15vw;
  margin-right: 15vw;
`;

const StyledDropDownToggle = styled(DropdownToggle)`
  && {
    background-color: white;
    color: gray;
    border-top-left-radius: ${props => (props.leftEnd ? '5' : '0')};
    border-bottom-left-radius: ${props => (props.leftEnd ? '5' : '0')};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: ${props => (props.main ? 'none' : '1px solid #95a5a6')};
    border-right: 0.5px solid #95a5a6;
    height: 100%;
    width: 14vw;
    font-weight: 600;
  }
`;

const StyledDropDownMenu = styled(DropdownMenu)`
  && {
    background-color: white;
    color: gray;
    border: ${props => (props.main ? 'none' : '1px solid #bdc3c7')};
    width: 14vw;
    font-weight: 600;
    text-align: center;
  }
`;

const StyledButton = styled(Button)`
  && {
    border: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 5;
    border-bottom-right-radius: 5;
    width: 5vw;
    border-radius: 5;
    font-weight: 600;
    background-color: #95a5a6;
    color: white;
  }
`;

export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: { 대한민국: 'kr', 일본: 'jp', 홍콩: 'hk' },
      shops: null,
      categories: {
        Mac: [
          'MacBook',
          'MacBookAir',
          'MacBookPro',
          'iMac',
          'iMacPro',
          'Macmini'
        ],
        iphone: ['iPhoneXS', 'iPhoneXR', 'iPhone8', 'iPhone7'],
        Watch: [
          'AppleWatchSeries3',
          'AppleWatchSeries4',
          'AppleWatchNike+',
          'AppleWatchHermes'
        ],
        Etc: ['ETC']
      },
      selectedCountry: null,
      selectedShop: null,
      selectedCategory: null,
      selectedSubCategory: null,
      countryDropdownOpen: false,
      shopDropdownOpen: false,
      categoryDropdownOpen: false,
      subCategoryDropdownOpen: false,
      body: {
        country_code: null,
        store_code: null,
        category: null
      }
    };
  }

  componentDidMount = () => {
    axios
      .get('http://13.125.34.37:3001/stores/list')
      .then(result => {
        console.log(result);
        this.setState({
          ...this.state,
          shops: result.data
        });
      })
      .catch(err => console.log(err));
  };

  _onClickSearch = () => {
    const { store_code, category } = this.state.body;
    const country_code = this.state.body.country_code.toLowerCase();

    console.log(this.state.body);
    let user_id;
    if (!country_code) alert('국가를 선택해주세요');
    if (!store_code) alert('매장을 선택해주세요');
    if (!category) alert('카테고리를 선택해주세요');
    if (localStorage.user_id) {
      user_id = localStorage.user_id;
    } else {
      user_id = 0;
    }

    axios
      .get(
        `http://13.125.34.37:3001/products/list?countryCode=${country_code}&storeCode=${store_code}&category=${category}&userID=${user_id}`
      )
      .then(res => {
        console.log(res);
        this.props.history.push({
          pathname: `/searchresult/${country_code}/${store_code}/${category}`,
          state: {
            result: res.data.productlist
          }
        });
      });
  };

  _onCountryClick = e => {
    this.setState({
      ...this.state,
      selectedCountry: e.currentTarget.textContent,
      body: { ...this.state.body, country_code: e.target.value }
    });
  };

  _onShopClick = e => {
    console.log(e.target.value);
    this.setState({
      ...this.state,
      selectedShop: e.currentTarget.textContent,
      body: {
        ...this.state.body,
        store_code: e.target.value
      }
    });
  };

  _onCategoryClick = e => {
    this.setState({
      ...this.state,
      selectedCategory: e.currentTarget.textContent
    });
  };

  _onSubCategoryClick = e => {
    this.setState({
      ...this.state,
      selectedSubCategory: e.currentTarget.textContent,
      body: { ...this.state.body, category: e.currentTarget.textContent }
    });
  };

  _onCountryMouseEnter = () => {
    this.setState({ countryDropdownOpen: true });
  };

  _onCountryMouseLeave = () => {
    this.setState({ countryDropdownOpen: false });
  };

  _onShopMouseEnter = () => {
    this.setState({ shopDropdownOpen: true });
  };

  _onShopMouseLeave = () => {
    this.setState({ shopDropdownOpen: false });
  };

  _onCategoryMouseEnter = () => {
    this.setState({ categoryDropdownOpen: true });
  };

  _onCategoryMouseLeave = () => {
    this.setState({ categoryDropdownOpen: false });
  };

  _onSubCategoryMouseEnter = () => {
    this.setState({ subCategoryDropdownOpen: true });
  };

  _onSubCategoryMouseLeave = () => {
    this.setState({ subCategoryDropdownOpen: false });
  };
  render() {
    const {
      countries,
      shops,
      categories,
      selectedCountry,
      selectedShop,
      selectedCategory,
      selectedSubCategory,
      countryDropdownOpen,
      shopDropdownOpen,
      categoryDropdownOpen,
      subCategoryDropdownOpen,
      body
    } = this.state;
    return shops ? (
      <SearchWrapper main={this.props.main ? true : false}>
        <Row style={{ height: '65%' }}>
          <Dropdown
            onMouseOver={this._onCountryMouseEnter}
            onMouseLeave={this._onCountryMouseLeave}
            isOpen={countryDropdownOpen}
          >
            <StyledDropDownToggle
              leftEnd
              aria-haspopup={true}
              aria-expanded={false}
            >
              {selectedCountry ? (
                selectedCountry
              ) : (
                <InputWrapper>
                  <Icon
                    onClick={this._onClickSearch}
                    size={24}
                    icon={iosLocation}
                  />
                  <span style={{ marginLeft: 5 }}>국가 선택</span>
                </InputWrapper>
              )}
            </StyledDropDownToggle>
            <StyledDropDownMenu>
              {Object.keys(countries).map(country => (
                <DropdownItem
                  value={countries[country]}
                  onClick={this._onCountryClick}
                >
                  {country}
                </DropdownItem>
              ))}
            </StyledDropDownMenu>
          </Dropdown>

          <Dropdown
            onMouseOver={this._onShopMouseEnter}
            onMouseLeave={this._onShopMouseLeave}
            isOpen={shopDropdownOpen}
          >
            <StyledDropDownToggle aria-haspopup={true} aria-expanded={false}>
              {selectedShop ? (
                selectedShop
              ) : (
                <InputWrapper>
                  <Icon onClick={this._onClickSearch} size={24} icon={shop} />{' '}
                  <span style={{ marginLeft: 5 }}>스토어 선택</span>
                </InputWrapper>
              )}
            </StyledDropDownToggle>
            <StyledDropDownMenu>
              {selectedCountry
                ? shops
                    .filter(obj => obj.country_code === body.country_code)
                    .map(shop => (
                      <DropdownItem
                        value={shop['store_code']}
                        onClick={this._onShopClick}
                      >
                        {shop['store_name']}
                      </DropdownItem>
                    ))
                : '국가를 선택해주세요'}
            </StyledDropDownMenu>
          </Dropdown>

          <Dropdown
            onMouseOver={this._onCategoryMouseEnter}
            onMouseLeave={this._onCategoryMouseLeave}
            isOpen={categoryDropdownOpen}
          >
            <StyledDropDownToggle aria-haspopup={true} aria-expanded={false}>
              {selectedCategory ? (
                selectedCategory
              ) : (
                <InputWrapper>
                  <Icon
                    onClick={this._onClickSearch}
                    size={24}
                    icon={archive}
                  />{' '}
                  <span style={{ marginLeft: 7 }}>카테고리 선택</span>
                </InputWrapper>
              )}
            </StyledDropDownToggle>
            <StyledDropDownMenu>
              {Object.keys(categories).map(category => (
                <DropdownItem onClick={this._onCategoryClick}>
                  {category}
                </DropdownItem>
              ))}
            </StyledDropDownMenu>
          </Dropdown>

          <Dropdown
            onMouseOver={this._onSubCategoryMouseEnter}
            onMouseLeave={this._onSubCategoryMouseLeave}
            isOpen={subCategoryDropdownOpen}
          >
            <StyledDropDownToggle aria-haspopup={true} aria-expanded={false}>
              {selectedSubCategory ? (
                selectedSubCategory
              ) : (
                <InputWrapper>
                  <Icon
                    onClick={this._onClickSearch}
                    size={24}
                    icon={appleinc}
                  />{' '}
                  <span style={{ marginLeft: 5 }}>상세 선택</span>
                </InputWrapper>
              )}
            </StyledDropDownToggle>
            <StyledDropDownMenu>
              {selectedCategory
                ? categories[selectedCategory].map(sub => (
                    <DropdownItem onClick={this._onSubCategoryClick}>
                      {sub}
                    </DropdownItem>
                  ))
                : '카테고리를 선택해주세요'}
            </StyledDropDownMenu>
          </Dropdown>
          <StyledButton onClick={this._onClickSearch}>
            <Icon onClick={this._onClickSearch} size={26} icon={search} />
          </StyledButton>
        </Row>
      </SearchWrapper>
    ) : (
      <Spinner
        color="secondary"
        style={{ marginTop: '40vh', marginLeft: '(100vh-15px)/2' }}
      />
    );
  }
}

export default Search;
