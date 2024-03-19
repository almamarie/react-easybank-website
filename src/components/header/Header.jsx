import React from "react";
import styles from "./Header.module.css";
import Button from "../ui/Button";
import logo from "../../resources/easybank-landing-page-master/images/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />

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

      <Button>Request Invite</Button>
    </header>
  );
};

export default Header;
