/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
// import { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';
import { FaOpencart, FaUserAlt } from 'react-icons/fa';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { FiLogIn } from 'react-icons/fi';
import { BiUserPlus } from 'react-icons/bi';

export default function Header({ user }) {
  return user.loggedIn ? (
    <nav className="header">
      <section className="header-content">
        <section className="site-logo">
          <FaOpencart
            size={40}
            style={{ color: '#20D1CB', paddingRight: '10px' }}
          />
          <Link to="/" className="link">
            <h1 className="logo-link">Aligrandpa</h1>
          </Link>
        </section>
        <section className="userdata">
          <Link className="link-cart" to="/cart">
            <BsFillCartFill size={40} />
          </Link>
          <div className="dropdown">
            <button
              className="dropbtn"
              type="button"
              style={{
                backgroundImage: `url(${
                  user.avatar ||
                  `https://ui-avatars.com/api/?name=${user.username}&background=random`
                })`,
              }}
            />
            <div className="dropdown-content">
              <Link className="link" to="/products">
                {user.username}
              </Link>
              <Link className="link" to="/logout">
                <RiLogoutBoxLine /> Logout
              </Link>
            </div>
          </div>
        </section>
      </section>
    </nav>
  ) : (
    <nav className="header">
      <section className="header-content">
        <section className="site-logo">
          <FaOpencart
            size={40}
            style={{ color: '#20D1CB', paddingRight: '10px' }}
          />
          <Link to="/" className="link">
            <h1 className="logo-link">Aligrandpa</h1>
          </Link>
        </section>
        <section className="userdata">
          <section>
            <div className="dropdown">
              <button className="dropbtn-nouser" type="button">
                <FaUserAlt size={30} />
              </button>

              <div className="dropdown-content">
                <Link className="link" to="/signup">
                  <BiUserPlus /> Sign up
                </Link>
                <Link className="link" to="/login">
                  <FiLogIn /> Log in
                </Link>
              </div>
            </div>
          </section>
        </section>
      </section>
    </nav>
  );
}
