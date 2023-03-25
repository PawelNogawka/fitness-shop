import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCartContext } from "../hooks/useCartContext";

import Wrapper from "./ui/Wrapper";
import Avatar from "./Avatar";
import Search from "./Search";

import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import {FiMenu} from 'react-icons/fi'
import {GrClose} from 'react-icons/gr'

import "./Navbar.scss";

const Navbar = () => {
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);
  const [showMainMenu, setShowMainMenu] = useState(false)
  const [showSearchModal, setShowSearchModal] = useState(false);
  const { user, dispatch } = useAuthContext();
  const { cartList } = useCartContext();

  return (
    <header onMouseLeave={() => setShowDropDownMenu(false)}>
      {showSearchModal && <Search setShowSearchModal={setShowSearchModal} />}
      <Wrapper>
        <nav className="nav">
          <Link className="nav__logo" to="/">
            shop
          </Link>
          <ul className={`${'nav__list'} ${showMainMenu && "active"}`}>
            <button onClick={() => setShowMainMenu(false)} className="nav__close">
               <GrClose />
            </button>
            <li className="nav__item">
              <Link className="nav__link" to="/">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <a onClick={() => setShowMainMenu(false)} className="nav__link" href="#products">
                Products
              </a>
            </li>
            <li className="nav__item">
              <a onClick={() => setShowMainMenu(false)} className="nav__link" href="#categories">
                Categories
              </a>
            </li>
            <li className="nav__item">
              <a onClick={() => setShowMainMenu(false)} className="nav__link" href="#reviews">
                Reviews
              </a>
            </li>
          </ul>
          <div className="nav__btns">
            <button
              onClick={() => setShowSearchModal(true)}
              onMouseEnter={() => setShowDropDownMenu(false)}
              className="nav__btn"
            >
              <BsSearch />
            </button>
            <div className="nav__box">
              <button
                onClick={() => setShowDropDownMenu((prev) => !prev)}
                onMouseEnter={() => setShowDropDownMenu(true)}
                className="nav__btn"
              >
                <FaUserAlt />
              </button>
              {showDropDownMenu && (
                <ul
                  onMouseLeave={() => setShowDropDownMenu(false)}
                  className="nav__dropdown"
                >
                  {!user ? (
                    <>
                      <li className="nav__dropdown-item">
                        <Link
                          to="/auth/register"
                          onClick={() => setShowDropDownMenu(false)}
                          className="nav__dropdown-link"
                        >
                          register
                        </Link>
                      </li>
                      <li className="nav__dropdown-item">
                        <Link
                          to="/auth/login"
                          onClick={() => setShowDropDownMenu(false)}
                          className="nav__dropdown-link"
                        >
                          login
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <div className="nav__user">
                        <Avatar src={user[0].avatar.asset._ref} />
                        <span className="nav__user-name">{user[0].name}</span>
                      </div>
                      <li className="nav__dropdown-item">
                        <Link className="nav__dropdown-link" to="/dashboard" C>
                          dashboard
                        </Link>
                      </li>
                      <li className="nav__dropdown-item">
                        <button
                          onClick={() => dispatch({ type: "LOGOUT" })}
                          className="nav__dropdown-link"
                        >
                          logout
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              )}
            </div>
            <Link to="/cart">
              <button
                onMouseEnter={() => setShowDropDownMenu(false)}
                className="nav__btn nav__btn--cart"
              >
                <BsFillCartFill />
                <span className="nav__cart-amount">{cartList.length}</span>
              </button>
            </Link>
          </div>
          <button className="nav__burger">
                  <FiMenu onClick={() => setShowMainMenu(true)} />
            </button>
        </nav>
      </Wrapper>
    </header>
  );
};

export default Navbar;
