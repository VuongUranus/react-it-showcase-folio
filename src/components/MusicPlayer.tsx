
import React from 'react';
import { useTheme } from "next-themes";

const MusicPlayer: React.FC = () => {
  const { theme, resolvedTheme } = useTheme()
  let sportifyLink = "https://open.spotify.com/embed/playlist/5GAZg5SKYySreYPrbnBi3x?utm_source=generator"
  if (resolvedTheme === 'dark') {
    sportifyLink = "https://open.spotify.com/embed/playlist/5GAZg5SKYySreYPrbnBi3x?utm_source=generator&theme=0"
  }
  return (
    <iframe
      src={sportifyLink}
      frameBorder={0}
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      scrolling='no'
      className="w-full lg:h-[500px] rounded-[15px]"
    ></iframe >
  );
};

export default MusicPlayer;
