
import React from 'react';

const MusicPlayer: React.FC = () => {
  return (
    // sportify
    <iframe
      src='https://open.spotify.com/embed/playlist/5GAZg5SKYySreYPrbnBi3x?utm_source=generator&theme=0'
      frameBorder={0}
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="w-full lg:h-[500px] rounded-[15px]"
    ></iframe >

    // youtube
    // <iframe width="420" height="315"
    //   src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
    // </iframe>

    // soundcloud
    // <div>
    //   <iframe
    //     className="w-full h-[500px]"
    //     scrolling="no"
    //     frameBorder="no"
    //     allow="autoplay"
    //     src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2005763584&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    //   ></iframe>
    // </div>
  );
};

export default MusicPlayer;
