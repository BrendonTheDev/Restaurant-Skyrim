import "./Home.css";
import React from "react";
import useSound from "use-sound";
import song from "../assets/song.mp3";

function Home() {
  const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = React.useState(false);

    const [playBoop, { pause }] = useSound(song, {
      onplay: () => setIsPlaying(true),
      onend: () => setIsPlaying(false),
    });

    const togglePlay = () => {
      if (isPlaying) {
        pause();
      } else {
        playBoop();
      }
      setIsPlaying(!isPlaying);
    };

    return (
      <>
        <button className="btn-17  btn-music" onClick={togglePlay}>
          Play Music
        </button>
      </>
    );
  };

  return (
    <div>
      <section className="wrapper">
        <header className="masthead">
          <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
            <div className="d-flex justify-content-center">
              <div className="text-center">
                <h1 className="heading mx-auto my-0 text-uppercase">
                  The Bannered Mare
                </h1>
                <h2 className=" mx-auto mt-2 mb-5 sub-header">
                  An unforgettable dining experience.
                </h2>
                <div className="btn-container">
                  <MusicPlayer />
                  <button className="btn-17">View Menu</button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="ember1"></div>
        <div className="ember2"></div>
        <div className="ember3"></div>
        <div className="ember4"></div>
        <div className="ember5"></div>
        <div className="ember6"></div>
        <div className="pulsating-light"></div>
      </section>
    </div>
  );
}

export default Home;
