import { useState, useRef } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hoverIndex, setHoverIndex] = useState(2);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [hasClicked, setHasClicked] = useState(false);

  const totalVideos = 4;
  const currentVideoRef = useRef<HTMLVideoElement | null>(null);
  const nextVideoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(() => {
    if (hasClicked) {
      // Preparar o vídeo de expansão (cópia que vai expandir)
      gsap.set("#expanding-video", { 
        visibility: "visible",
        scale: 0.2, // Começa pequeno como o hover video
        zIndex: 45
      });

      // Fade out do vídeo atual (suave)
      gsap.to("#current-video", {
        opacity: 0.3,
        duration: 0.5,
        ease: "power1.out"
      });

      // Expansão do vídeo duplicado até a tela toda
      gsap.to("#expanding-video", {
        transformOrigin: "center center",
        scale: 1, // Expande de 0.2 para 1 (tela toda)
        duration: 1.2,
        ease: "power1.inOut",
        onStart: () => {
          // Play do vídeo que está expandindo
          const expandingVideo = document.querySelector("#expanding-video video") as HTMLVideoElement;
          expandingVideo?.play();
        },
        onComplete: () => {
          // Fade in do novo vídeo de fundo e limpar
          gsap.to("#current-video", {
            opacity: 1,
            duration: 0.5,
            ease: "power1.in"
          });
          
          // Esconder o vídeo de expansão
          gsap.set("#expanding-video", { 
            visibility: "hidden",
            scale: 0.2
          });
        }
      });
    }
  }, {
    dependencies: [currentIndex],
    revertOnUpdate: true,
  })

  function getVideoSrc(index: number) {
    return `videos/hero-${index}.mp4`;
  }

  function handleMiniVideoClick() {
    setCurrentIndex(hoverIndex);
    setHoverIndex((prev) => (prev < totalVideos ? prev + 1 : 1));
    setHasClicked(true);
  }

  function handleVideoLoad() {
    setLoadedVideos((prev) => prev + 1);
  }

  return (
    <div
      id="video-frame"
      className="relative h-screen w-screen overflow-hidden bg-black">
      {/* vídeo de fundo */}
      <video
        id="current-video"
        ref={currentVideoRef}
        src={getVideoSrc(currentIndex)}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        onLoadedData={handleVideoLoad}
      />

      {/* vídeo central (hover) */}
      <div className="absolute inset-0 flex justify-center items-center z-40">
        <div
          className="cursor-pointer overflow-hidden rounded-lg scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
          onClick={handleMiniVideoClick}
        >
          <video
            id="next-video"
            ref={nextVideoRef}
            src={getVideoSrc(hoverIndex)}
            className="w-64 h-64 object-cover rounded-lg"
            loop
            muted
            autoPlay
          />
        </div>
      </div>

      {/* Vídeo de expansão - cobre a tela toda */}
      <div 
        id="expanding-video"
        className="absolute inset-0 w-full h-full flex justify-center items-center"
        style={{ 
          visibility: 'hidden',
          transformOrigin: 'center center'
        }}
      >
        <video
          src={getVideoSrc(hoverIndex)}
          className="w-full h-full object-cover"
          loop
          muted
          autoPlay
        />
      </div>

      {/* textos */}

      <div className="absolute left-0 z-50 w-full">
        <div className="mt-24 px-5 sm:px-10">
          <h1 className="text-white font-bold text-5xl">Redefine</h1>
          <p className="mb-5 max-w-md text-white">
            Enter the metagame layer <br /> unleash the play economy
          </p>
          <Button
            id="watch-trailer"
            title="watch trailer"
            leftIcon={<TiLocationArrow />}
            containerClass="bg-yellow-300 flex-center gap-1"

          />
        </div>
      </div>
      <h1 className="text-5xl absolute bottom-5 right-5">
        Gaming
      </h1>
    </div>
  );
}

export default Hero;