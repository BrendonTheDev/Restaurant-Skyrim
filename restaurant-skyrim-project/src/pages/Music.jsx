import React from "react";
import useSound from "use-sound";
import song from "../assets/song.mp3";

function MusicPlayer() {
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
      <a className="nav-link tabs" onClick={togglePlay} href="#">
        Play Music🎻
      </a>
    </>
  );
}

export default MusicPlayer;
