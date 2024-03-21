import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../resources/easybank-landing-page-master/images/bg-intro-desktop.svg";
import mobileHeroImage from "../../resources/easybank-landing-page-master/images/bg-intro-mobile.svg";
import mockupsImg from "../../resources/easybank-landing-page-master/images/image-mockups.png";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section id="home" className={styles.wrapper}>
      <img
        className={styles["hero--img__mockups"]}
        src={mockupsImg}
        alt="mockups"
      />
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>

          <Button>Request Invite</Button>
        </div>
        <div className={styles.images}>
          <img
            className={styles["hero--img__desktop"]}
            src={heroImage}
            alt="hero"
          />
          <img
            className={styles["hero--img__mobile"]}
            src={mobileHeroImage}
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
