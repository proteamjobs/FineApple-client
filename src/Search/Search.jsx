import React, { Component } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Button,
  Spinner
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const axios = require('axios');

export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: { 대한민국: 'KR', 일본: 'JP', 홍콩: 'HK' },
      shops: null,
      categories: {
        Mac: ['MacBookAir', 'MacBookPro', 'MacPro'],
        iphone: ['iphoneX', 'iphoneXS', 'iphoneR'],
        Watch: ['Watch10', 'WatchX', 'WatchXS']
      },
      selectedCountry: null,
      selectedShop: null,
      selectedCategory: null,
      selectedSubCategory: null,
      countryDropdownOpen: false,
      shopDropdownOpen: false,
      categoryDropdownOpen: false,
      subCategoryDropdownOpen: false,
      body: { country_code: null, store_code: null, category: null }
    };
  }

  componentDidMount = () => {
    axios
      .get('http://13.125.34.37:3001/stores/list')
      .then(result =>
        this.setState({
          ...this.state,
          shops: result.data
        })
      )
      .catch(err => console.log(err));
  };

  _onClickSearch = () => {
    const { country_code, store_code, category } = this.state.body;
    if (!country_code) alert('국가를 선택해주세요');
    if (!store_code) alert('매장을 선택해주세요');
    if (!category) alert('카테고리를 선택해주세요');

    axios
      .get(
        `http://13.125.34.37:3001/products/list?countryCode=${country_code}&storeCode=${store_code}$category=${category}`
      )
      .then(res => console.log(res));
  };

  _onCountryClick = e => {
    this.setState({
      ...this.state,
      selectedCountry: e.currentTarget.textContent,
      body: { ...this.state.body, country_code: e.target.value }
    });
  };

  _onShopClick = e => {
    console.log(e.currentTarget.text);
    this.setState({
      ...this.state,
      selectedShop: e.currentTarget.textContent,
      body: { ...this.state.body, store_code: e.target.value }
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
    console.log('body:::', body);
    return shops ? (
      <Row>
        <Dropdown
          onMouseOver={this._onCountryMouseEnter}
          onMouseLeave={this._onCountryMouseLeave}
          isOpen={countryDropdownOpen}
        >
          <DropdownToggle>
            {selectedCountry ? selectedCountry : 'Country'}
          </DropdownToggle>
          <DropdownMenu>
            {Object.keys(countries).map(country => (
              <DropdownItem
                value={countries[country]}
                onClick={this._onCountryClick}
              >
                {country}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        <Dropdown
          onMouseOver={this._onShopMouseEnter}
          onMouseLeave={this._onShopMouseLeave}
          isOpen={shopDropdownOpen}
          toggle={this._toggleDropdown}
        >
          <DropdownToggle>
            {selectedShop ? selectedShop : 'selectedShop'}
          </DropdownToggle>
          <DropdownMenu>
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
              : '국가를 먼저 선택해주세요'}
          </DropdownMenu>
        </Dropdown>

        <Dropdown
          onMouseOver={this._onCategoryMouseEnter}
          onMouseLeave={this._onCategoryMouseLeave}
          isOpen={categoryDropdownOpen}
        >
          <DropdownToggle>
            {selectedCategory ? selectedCategory : 'Category'}
          </DropdownToggle>
          <DropdownMenu>
            {Object.keys(categories).map(category => (
              <DropdownItem onClick={this._onCategoryClick}>
                {category}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        <Dropdown
          onMouseOver={this._onSubCategoryMouseEnter}
          onMouseLeave={this._onSubCategoryMouseLeave}
          isOpen={subCategoryDropdownOpen}
          // toggle={this._toggleDropdown}
        >
          <DropdownToggle>
            {selectedSubCategory ? selectedSubCategory : 'selectedSubCategory'}
          </DropdownToggle>
          <DropdownMenu>
            {selectedCategory
              ? categories[selectedCategory].map(sub => (
                  <DropdownItem onClick={this._onSubCategoryClick}>
                    {sub}
                  </DropdownItem>
                ))
              : '카테고리를 먼저 선택해주세요'}
          </DropdownMenu>
        </Dropdown>
        <Button onClick={this._onClickSearch} color="info">
          검색
        </Button>
      </Row>
    ) : (
      <Spinner type="grow" color="info" />
    );
  }
}

export default Search;
