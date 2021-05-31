import Image from "next/image";
import Layout from "./layout";
import styles from "../assets/css/home.module.scss";

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.video}>
              <div className="position-relative">
                <img
                  width="1195"
                  height="675"
                  src="https://neobeat.qodeinteractive.com/wp-content/uploads/2020/03/home-9-video-img-1.jpg"
                  className={`w-100 ${styles.br}`}
                  alt="c"
                  srcSet="https://neobeat.qodeinteractive.com/wp-content/uploads/2020/03/home-9-video-img-1.jpg 1195w, https://neobeat.qodeinteractive.com/wp-content/uploads/2020/03/home-9-video-img-1-600x339.jpg 600w, https://neobeat.qodeinteractive.com/wp-content/uploads/2020/03/home-9-video-img-1-800x452.jpg 800w, https://neobeat.qodeinteractive.com/wp-content/uploads/2020/03/home-9-video-img-1-300x169.jpg 300w, https://neobeat.qodeinteractive.com/wp-content/uploads/2020/03/home-9-video-img-1-1024x578.jpg 1024w, https://neobeat.qodeinteractive.com/wp-content/uploads/2020/03/home-9-video-img-1-768x434.jpg 768w"
                  sizes="(max-width: 1195px) 100vw, 1195px"
                />
                <a href="#" className={styles.player_icon}>
                  <i className="bi bi-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className={styles.about}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className={`h2 text-white ${styles.title}`}>About Me</h2>
              <p className={`mt-3 ${styles.info}`}>
                This site is still under development
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className={`h2 text-white ${styles.title}`}>
                My Discography
              </h2>
              <p className={`mt-3 ${styles.info}`}>
                Lorem Ipsum rhis ts toshhoop svetsgin. Proin gravida nibh lorem
                quis bibendum aucto
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className={`h2 text-white ${styles.title}`}>
                Services am offering
              </h2>
              <p className={`mt-3 ${styles.info}`}>
                Lorem Ipsum rhis ts toshhoop svetsgin. Proin gravida nibh lorem
                quis bibendum aucto
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center">
              <div className={styles.img_as_bg}>
                <img src="/images/services.jpg" alt="artist images" />
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
              <h2 className={`h2 text-white ${styles.title}`}>
                Some of the artists i have worked with
              </h2>
              <p className={`mt-3 ${styles.info}`}>
                Lorem Ipsum rhis ts toshhoop svetsgin. Proin gravida nibh lorem
                quis bibendum aucto
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center">
              <h2 className={`h2 text-white ${styles.title}`}>
                Get a copy of the best sample packs in the game
              </h2>
              <p className={`mt-3 ${styles.info}`}>
                Lorem Ipsum rhis ts toshhoop svetsgin. Proin gravida nibh lorem
                quis bibendum aucto version of orem um. Proin gravida nibh orem
                quis bibendum aucto
              </p>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
              <div className={styles.img_as_bg}>
                <img src="/images/samples.jpg" alt="artist images" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.about}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className={`h2 text-white ${styles.title}`}>
                Services am offering
              </h2>
              <p className={`mt-3 ${styles.info}`}>
                Lorem Ipsum rhis ts toshhoop svetsgin. Proin gravida nibh lorem
                quis bibendum aucto
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center">
              <div className={styles.img_as_bg}>
                <img src="/images/services.jpg" alt="artist images" />
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
              <h2 className={`h2 text-white ${styles.title}`}>
                Spotify Playlist
              </h2>
              <p className={`mt-3 ${styles.info}`}>
                Lorem Ipsum rhis ts toshhoop svetsgin. Proin gravida nibh lorem
                quis bibendum aucto
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
