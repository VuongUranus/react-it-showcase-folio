
import React from 'react';

const MusicPlayer: React.FC = () => {
  return (
    <iframe
      src='https://open.spotify.com/embed/playlist/5GAZg5SKYySreYPrbnBi3x?utm_source=generator&theme=0'
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
