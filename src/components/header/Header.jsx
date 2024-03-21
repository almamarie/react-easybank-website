import React from "react";
import styles from "./Header.module.css";
import Button from "../ui/Button";
import logo from "../../resources/easybank-landing-page-master/images/logo.svg";

const Header = (props) => {
  const { showMobileNav, toggleShowMobileNav } = props.mobileNavController;

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
      {!showMobileNav && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="11"
          className={styles["icon--hamburger"]}
          onClick={toggleShowMobileNav}
        >
          <g fill="#2D314D" fillRule="evenodd">
            <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
          </g>
        </svg>
      )}
      <>
        <nav className={styles.nav}>
          <a className={styles.a} href="#home">
            Home
          </a>
          <a className={styles.a} href="#about">
            About
          </a>
          <a className={styles.a} href="#contacts">
            Contacts
          </a>
          <a className={styles.a} href="#blog">
            Blog
          </a>
          <a className={styles.a} href="#careers">
            Careers
          </a>
        </nav>
        <Button className={styles.btn}>Request Invite</Button>
      </>
    </header>
  );
};

export default Header;
