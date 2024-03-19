import React from "react";
import styles from "./Features.module.css";
import iconOnline from "../../resources/easybank-landing-page-master/images/icon-online.svg";
import iconBudgeting from "../../resources/easybank-landing-page-master/images/icon-budgeting.svg";
import iconOnboarding from "../../resources/easybank-landing-page-master/images/icon-onboarding.svg";
import iconApi from "../../resources/easybank-landing-page-master/images/icon-api.svg";

const Features = () => {
  return (
    <section id="features" className={styles.section}>
      <h2 className={styles.heading}>Why choose Easybank?</h2>
      <p className={styles.description}>
        We leverage Open Banking to turn your bank account into your financial
        hub. <br />
        Control your finances like never before.
      </p>

      <div className={styles.features}>
        <div className={styles.feature}>
          <img src={iconOnline} className={styles.icon} alt="icon" />
          <h3>Online Banking</h3>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>

        <div className={styles.feature}>
          <img src={iconBudgeting} className={styles.icon} alt="icon" />
          <h3>Simple Budgeting</h3>
          <p>
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>

        <div className={styles.feature}>
          <img src={iconOnboarding} className={styles.icon} alt="icon" />
          <h3>Fast Onboarding</h3>
          <p>
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>

        <div className={styles.feature}>
          <img src={iconApi} className={styles.icon} alt="icon" />
          <h3>Open API</h3>
          <p>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
