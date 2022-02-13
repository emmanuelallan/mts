import Head from 'next/head';
import Image from 'next/image';

export default function Layout() {
  return (
    <>
      <Head>
        <title>Max The Stranger - Software Developer | Music Producer</title>
        <meta name="description" content="Software Engineer | Music Producer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <div className="primary">
          <div className="software">
            <h1 className="text-heading">Max makes Software</h1>
            <p className="mb-24">
              I'm a software engineer in Nairobi. I love building open-source
              projects and writing about what I learn. This website is my
              digital garden—a compendium of the things I've learned and
              created.
            </p>
            <a
              href="https://code.maxthestranger.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="linkto"
            >
              Check out Max the Software
            </a>
          </div>

          <div className="music">
            <h2 className="text-heading">Max makes Music</h2>
            <p className="mb-24">
              I'm a Music producer based in Nairobi. I love writing music and
              singing about what I feel. This website is my digital garden—a
              compendium of the things I've written and created.
            </p>
            <a
              href="https://music.maxthestranger.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="linkto"
            >
              Check out Max the Music
            </a>
          </div>

          <div className="footer">
            <p>&copy; {new Date().getFullYear()}. All Rights Reserved</p>
          </div>
        </div>
        <div className="secondary">
          <div className="info">
            <div className="info-body">
              {/* <Image
                className="logo"
                src="/img/logo.svg"
                alt="logo"
                width={100}
                height={100}
              /> */}
              <h1 class="title">Max The Stranger</h1>
              {/* <p class="info-p">
                Proven to increase customer spending by up to 39%, egPay is the
                most complete cashless and contactless POS solution for events
                on the market, from tickets to tills and beyond.
              </p> */}

              <a href="mailto:thestrangermax@gmail.com" className="contact">
                <button type="button">Contact Me</button>
              </a>
            </div>

            <img src="/img/bg.jpg" className="image-bg" alt="bg" />
          </div>
        </div>
      </main>
    </>
  );
}
