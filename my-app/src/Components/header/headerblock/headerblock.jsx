import React from 'react';
import { Link } from 'react-router-dom';
import './headerblock.css';
import ButtonBoost from "../../buttoboost/buttonboost"
import ButtonGroup from '../../buttoboost/groupbutton';
import Danger from '../../buttoboost/danger';
import { useTranslation } from 'react-i18next';
export default function HeaderBlock(){
  return (
    <div className="header-block1" id="headerBlock">
    <nav className="header-nav">
    <Link to="/res">Reviews</Link>
      <Link to="/placecomponent">ABOUT US</Link>
      <Link to="/foods">MENU</Link>
      <Link to="/five">MENU</Link>
      <a href="#diners" id="contact">CONTACTS</a>
      <Link to="/cards">GIFT VOUCHERS</Link>
      <Link to="/reserv">RESERVATION</Link>
      <ButtonBoost className="block-sign" id="languageButton" >English</ButtonBoost>
      <Danger />
      <ButtonGroup />
      <span id="usernameDisplay" style={{ display: 'none' }}></span>
      <button className="block-sign" id="logout" style={{ display: 'none' }}>Logout</button>
    </nav>
  </div>
  );
}