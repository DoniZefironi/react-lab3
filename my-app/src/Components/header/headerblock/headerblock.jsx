import React from 'react';
import { Link } from 'react-router-dom';
import './headerblock.css';
import ButtonGroup from '../../buttoboost/groupbutton';
import Danger from '../../buttoboost/danger';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../languageswitch/langswitch';
export default function HeaderBlock(){
  const { t } = useTranslation(); 
  return (
    <div className="header-block1" id="headerBlock">
    <nav className="header-nav">
    <Link to="/res">{t('headerblock.res')}</Link>
      <Link to="/placecomponent">ABOUT US</Link>
      <Link to="/foods">MENU</Link>
      <Link to="/five">MENU</Link>
      <Link to="/users">Users</Link>
      <Link to="/cards">GIFT VOUCHERS</Link>
      <Link to="/reserv">RESERVATION</Link>
      <LanguageSwitcher id="language-switcher"/>
      <Danger />
      <ButtonGroup />
      <span id="usernameDisplay" style={{ display: 'none' }}></span>
      <button className="block-sign" id="logout" style={{ display: 'none' }}>Logout</button>
    </nav>
  </div>
  );
}