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
          <div className="software mx">
            <h1 className="text-heading gg"># Software Engineer</h1>
            <div className="mb-24">
              <pre>
                <span className="pp">class</span>{' '}
                <span className="ww">Node</span>
                <br />
                &emsp; &emsp;<span className="ww">attr_accessor</span>{' '}
                <span className="pp">:next_node</span>
                <br />
                &emsp; &emsp;
                <span className="ww">attr_accessor</span>{' '}
                <span className="pp">:value</span>
                <br />
                <br />
                &emsp; &emsp;
                <span className="pp">def</span>{' '}
                <span className="bb">initialize</span>
                <span className="ww">(value)</span>
                <br />
                &emsp; &emsp;&emsp; &emsp;
                <span className="pp">@value</span> <span className="ww">=</span>{' '}
                <span className="ww">value</span>
                <br />
                &emsp; &emsp;&emsp; &emsp;
                <span className="pp">@next_node</span>{' '}
                <span className="ww">=</span> <span className="ww">nil</span>
                <br />
                &emsp; &emsp;
                <span className="pp">end</span>
                <br />
                <span className="pp">end</span>
              </pre>
              <p className="mt-2 mm">
                <span className="ww">=begin</span>
                <br />
                I love building projects and writing about what I learn. This
                website is my digital garden—a compendium of the things I've
                learned and created.
                <br />
                <span className="ww">=end</span>
              </p>
            </div>
            <a
              href="https://code.maxthestranger.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="linkto"
            >
              Check out --&gt; Coding Max
            </a>
          </div>

          <div className="music mx">
            <h2 className="text-heading">🎵 Music Producer</h2>
            <p className="mb-24">
              I'm a Music producer based in Nairobi. I love the science of
              digital music production from synthesis to manipulating virtual
              studio technology (VSTs).
            </p>
            <a
              href="https://music.maxthestranger.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="linkto"
            >
              Check out Max is to Music
            </a>
          </div>

          <div className="footer mx">
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
              <h1 className="title">Max The Stranger</h1>
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
