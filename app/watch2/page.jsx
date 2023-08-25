"use client";
import ReactPlayer from "react-player";
import React, { useState, useRef, useEffect } from "react";

export default function Page() {
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handleProgress = (progress) => {
    setCurrentTime(progress.playedSeconds);
  };

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleSeek = (newTime) => {
    playerRef.current.seekTo(newTime, "seconds");
  };

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
  };

  const toggleFullscreen = () => {
    if (playerContainerRef.current) {
      const playerContainer = playerContainerRef.current;

      if (!isFullscreen) {
        if (playerContainer.requestFullscreen) {
          playerContainer.requestFullscreen();
        } else if (playerContainer.mozRequestFullScreen) {
          playerContainer.mozRequestFullScreen();
        } else if (playerContainer.webkitRequestFullscreen) {
          playerContainer.webkitRequestFullscreen();
        } else if (playerContainer.msRequestFullscreen) {
          playerContainer.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }

      setIsFullscreen(!isFullscreen); // Toggle the fullscreen state
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      ref={playerContainerRef}
      style={{ position: "relative", width: "100%", height: "100vh" }}
    >
      <ReactPlayer
        ref={playerRef}
        url="https://rr1---sn-4g5ednsy.googlevideo.com/videoplayback?expire=1692984158&ei=_o7oZL-AB9Sjx_APrJKdmAQ&ip=181.214.206.121&id=o-ANy0BPKR9HZ3hOizc00-MHJPNapOzKAnQlQkZNJb_cM9&itag=18&source=youtube&requiressl=yes&spc=UWF9f5O67xJk_0HIN9OpNVS3rdaOW-E&vprv=1&svpuc=1&mime=video%2Fmp4&gir=yes&clen=84631666&ratebypass=yes&dur=3477.606&lmt=1692720882825404&fexp=24007246,24362685&c=ANDROID&txp=5319224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhANn3pkXgn3HA02Z_TxxJrqyT0Pnov6iv_M85sC2lii4UAiEA2t2upMj52v_xuS-4GIF8Di8U4PxgYIqxiEYBcooohdw%3D&title=Blockchain%20RoadMap%2C%20In%205%20Months%20%7C%20Complete%20Blockchain%20Developer%20RoadMap%20For%20Beginner%20To%20Advance%202023&rm=sn-5hnezl7s&req_id=234f6e33f4e1a3ee&cm2rm=sn-8vq54voxj1-2gbl7e,sn-2gbl77s&ipbypass=yes&redirect_counter=3&cms_redirect=yes&cmsv=e&mh=XW&mip=31.30.167.37&mm=34&mn=sn-4g5ednsy&ms=ltu&mt=1692962207&mv=m&mvi=1&pl=20&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgH7e4car5u6SXTAzBfxe-cFclzvFxSIDur_Hvlya-qr0CIQCLLGqbS_q5LVmnFkoRpyPjkFanEVsubzZdeM1XbXwm8g%3D%3D"
        playing={isPlaying}
        onClick={() => setIsPlaying((prev) => !prev)}
        onPlay={handlePlay}
        onPause={handlePause}
        onDuration={handleDuration}
        onProgress={handleProgress}
        width="100%"
        height="100%"
        volume={volume}
      />

      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button onClick={handleTogglePlay} style={{ marginRight: "10px" }}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <input
            type="range"
            min={0}
            max={duration}
            step={0.01}
            value={currentTime}
            onChange={(e) => handleSeek(parseFloat(e.target.value))}
            style={{ flex: 1, margin: "0 10px" }}
          />
          <span
            style={{
              color: "white",
            }}
          >
            <span>
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => {
              const newVolume = parseFloat(e.target.value);
              setVolume(newVolume); // Update the volume state
              handleVolumeChange(newVolume); // Call the function to actually change the volume
            }}
            style={{ flex: 1, margin: "10px 10px 0" }}
          />
          <button onClick={toggleFullscreen} style={{ margin: "0 10px" }}>
            Fullscreen
          </button>
        </div>
      </div>
    </div>
  );
}
