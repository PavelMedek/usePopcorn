"use client";

import { IoIosArrowBack } from "react-icons/io";
import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaExpand } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function App() {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);

  const videoRef = useRef(null);

  const togglePlay = () => {
    const video = videoRef.current;

    if (playing) {
      video.pause();
    } else {
      video.play();
    }

    setPlaying(!playing);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    videoRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;

    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    }
  };

  const handleLoadedMetadata = () => {
    setVideoDuration(videoRef.current.duration);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const router = useRouter();

  return (
    <div className="watch w-screen h-screen relative">
      <div
        onClick={() => router.push("/watch")}
        className="back flex items-center absolute top-3 left-3 text-white cursor-pointer z-10"
      >
        <IoIosArrowBack className="mr-2" />
        Home
      </div>
      <video
        ref={videoRef}
        className="video w-full h-full aspect-video"
        src="https://rr4---sn-4g5e6nsr.googlevideo.com/videoplayback?expire=1692905605&ei=JVznZKaICOOfxN8PhsKU6AM&ip=188.241.82.30&id=o-AGsOWz1Nft4zMuEi39Zmgm-OE3_bUm_Xn75pYoSWioc4&itag=18&source=youtube&requiressl=yes&spc=UWF9f94Xqalq_0IRMrt0VTBh6qGBv0k&vprv=1&svpuc=1&mime=video%2Fmp4&gir=yes&clen=17388945&ratebypass=yes&dur=430.149&lmt=1692225363118559&fexp=24007246,24350018,24363391&beids=24350018&c=ANDROID&txp=5438434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhALmqgjRscVa4I-tfYbB-HdAwuxoGJWzJlzC3xBjK2IviAiBf5_QwqNRZFymavkxn2ge6FyrYxk0xV1arLvGiiiMohg%3D%3D&title=10%20LET%20-%20Reakce%20-%20Kame%C5%88%C3%A1k%204&redirect_counter=1&cm2rm=sn-h5q6k7s&req_id=5543ce9d137ba3ee&cms_redirect=yes&mh=ng&mip=31.30.167.37&mm=34&mn=sn-4g5e6nsr&ms=ltu&mt=1692883979&mv=m&mvi=4&pl=20&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAIx509EAf2jT39aAsWUIZjy2mz2j3bwE53dnB-3vvqnTAiA_Ca8m8t5zNFYVGqPWR8i0XhMMcAuP06wGz2xCgmrn1A%3D%3D"
        onClick={handleVideoClick}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      ></video>

      <button
        onClick={togglePlay}
        className={` play flex items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white cursor-pointer z-2" ${
          playing ? "opacity-0" : "opacity-100"
        }`}
      >
        {playing ? <FaPause /> : <FaPlay />}
      </button>

      <div className="bottom absolute bottom-5 left-0 px-5 w-full flex gap-5 items-center text-white cursor-pointer z-2">
        <button onClick={togglePlay}>
          {playing ? <FaPause /> : <FaPlay />}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-1/4"
        />

        <input
          type="range"
          max={videoRef.current ? videoRef.current.duration : 0}
          value={currentTime}
          onChange={handleSeek}
          className="w-full appearance-none h-2 bg-gray-300 rounded-full overflow-hidden outline-none"
          style={{
            background: `linear-gradient(to right, #FF0000 0%, #FF0000 ${(
              (currentTime / videoDuration) *
              100
            ).toFixed(2)}%, #E5E7EB ${(
              (currentTime / videoDuration) *
              100
            ).toFixed(2)}%, #E5E7EB 100%)`,
          }}
        />

        <div className="test inline-block">
          {formatTime(currentTime)}/{formatTime(videoDuration)}
        </div>

        <div onClick={toggleFullscreen}>
          <button className="test px-8 py-4 bg-white text-black rounded-full z-40">
            <FaExpand />
          </button>
        </div>
      </div>
    </div>
  );
}
