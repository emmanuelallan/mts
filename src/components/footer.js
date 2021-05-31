import Image from "next/image";
import styles from "./footer.module.scss";

export default function Footer() {
  const footerDate = {
    imageUrl: "/images/join_mello_gang.svg",
  };
  return (
      <footer className={styles.footer}>
        <div className={styles.footer_top}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <a href="#" className={`fw-bold fs-6 ${styles.footer_logo}`}>
                    Max The Stranger
                </a>
                <p className="mb-5">Instagram @max_the_stranger</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2">
                
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer_bottom}>

        </div>
      </footer>
  );
}
