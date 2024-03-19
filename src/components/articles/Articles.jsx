import React from "react";
import styles from "./Articles.module.css";
import imageCurrency from "../../resources/easybank-landing-page-master/images/image-currency.jpg";
import imageRestaurant from "../../resources/easybank-landing-page-master/images/image-restaurant.jpg";
import imagePlane from "../../resources/easybank-landing-page-master/images/image-plane.jpg";
import imageConfetti from "../../resources/easybank-landing-page-master/images/image-confetti.jpg";

const Articles = () => {
  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>Latest Articles</h3>
      <ul className={styles.articles}>
        <li className={styles.article}>
          <img className={styles.img} src={imageCurrency} alt="currency" />
          <div className={styles.content}>
            <span className={styles["written-by"]}>By Claire Robinson</span>
            <h4 className={styles["article-title"]}>
              Receive money in any currency with no fees
            </h4>
            <p className={styles["article-description"]}>
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </div>
        </li>

        <li className={styles.article}>
          <img className={styles.img} src={imageRestaurant} alt="currency" />
          <div className={styles.content}>
            <span className={styles["written-by"]}>By Wilson Hutton</span>
            <h4 className={styles["article-title"]}>
              Treat yourself without worrying about money
            </h4>
            <p className={styles["article-description"]}>
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </p>
          </div>
        </li>

        <li className={styles.article}>
          <img className={styles.img} src={imagePlane} alt="currency" />
          <div className={styles.content}>
            <span className={styles["written-by"]}> By Wilson Hutton</span>
            <h4 className={styles["article-title"]}>
              Take your Easybank card wherever you go
            </h4>
            <p className={styles["article-description"]}>
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </p>
          </div>
        </li>

        <li className={styles.article}>
          <img className={styles.img} src={imageConfetti} alt="currency" />
          <div className={styles.content}>
            <span className={styles["written-by"]}>By Claire Robinson</span>
            <h4 className={styles["article-title"]}>
              Our invite-only Beta accounts are now live!
            </h4>
            <p className={styles["article-description"]}>
              After a lot of hard work by the whole team, we’re excited to
              launch our closed beta. It’s easy to request an invite through the
              site ...
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Articles;
