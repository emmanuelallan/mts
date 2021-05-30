import Head from 'next/head'
import styles from '../assets/css/layout.module.scss';
import Footer from "../components/footer";

export default function Layout({children}) {
    return (
        <>
            {/* head */}
            <Head>
                <title>Max The Stranger - Music Producer | Software Developer</title>
                <meta name="description" content="Music Producer | Software Engineer" />
                <link rel="icon" href="/favicon.ico" />
                <script src="/js/main.js" defer/>
            </Head>

            {/* navbar */}
            <nav className={styles.navbar}>
                <div className={`mt-5 ${styles.logo}`}>
                    <a href="/">
                        <img src="/images/logo.png" alt="mts logo" />
                    </a>
                </div>

                <div className={styles.menu_icon}>
                    <a href="javascript:void(0)">
                        <i className="bi bi-grid"/>
                    </a>
                </div>
                <div className={styles.socials}>
                    <ul className="d-flex flex-column justify-content-center align-content-center p-0">
                        <li>
                            <a href="#">
                                <i className="bi bi-instagram"/>
                                <svg className="qodef-svg-circle"
                                     style={{strokeDashoffset: "114px", strokeDasharray: "114px", opacity: 0.5}}>
                                    <circle cx="50%" cy="50%" r="45%"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bi bi-twitter"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bi bi-youtube"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bi bi-facebook"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* main content */}
            <main className={styles.main}>
                {children}
            </main>

        {/* footer */}
        </>
    )
}
