import React from 'react';
import Filter from './Filter';
import Search from './Search';
import {link} from "react-router-dom"; 
import {useDispatch} from "react-router-dom";
import { propertyAction} from "../../Store/Property/property-slice";
import {getAllProperties} from "../../Store/Property/property-action";


const Header = () => {
  const dispatch = useDispatch();
  const allProperties = () =>{
    dispatchEvent(propertyAction.updateSearchParams({}));
    dispatchEvent(getAllProperties())
  };
  return (
    <>
      <nav className="header row sticky-top">
        <Link to = "/">
        <img src="/assets/logo.png" alt="logo" className="logo" onClick ={allProperties} />
        </Link>

        <div className="search_filter">
          <Search />
          <Filter />
        </div>
        <span className="material-symbols-outlined web_logo">
          account_circle
        </span>
      </nav>
    </>
  );
};

export default Header;