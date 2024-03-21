import React from "react";
import styles from "./MobileNav.module.css";
import logo from "../../resources/easybank-landing-page-master/images/logo.svg";

const MobileNav = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}></div>
      <header className={styles.header}>
        <img className={styles.logo} src={logo} alt="logo" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={styles["icon--close"]}
          onClick={() => {
            props.toggleShowMobileNav();
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </header>

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
    </div>
  );
};

export default MobileNav;
