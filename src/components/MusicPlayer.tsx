
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Plus, MoreHorizontal, Volume2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Song {
  id: number;
  title: string;
  artist: string;
  duration: string;
  file: string;
}

const MusicPlayer: React.FC = () => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const playlist: Song[] = [
    { id: 1, title: 'number one girl', artist: 'ROSÉ', duration: '03:36', file: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/46/f4/a1/46f4a161-f847-4850-0c93-b545f5eb30bb/mzaf_16834093546426523918.plus.aac.p.m4a' },
    { id: 2, title: 'stay a little longer', artist: 'ROSÉ', duration: '04:06', file: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/15/11/b9/1511b9e6-f867-d27f-e64e-e4e2308d9ed3/mzaf_4056372970717266482.plus.aac.p.m4a' },
    { id: 3, title: 'toxic till the end', artist: 'ROSÉ', duration: '02:36', file: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/f6/a3/e1/f6a3e10b-8a41-a8c2-dce9-aa831e79aaba/mzaf_3127569286134857738.plus.aac.p.m4a' },
    { id: 4, title: 'I Think They Call This Love', artist: 'Elliot James Reay', duration: '03:13', file: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/2a/33/a5/2a33a5cb-408d-c5dc-5358-b4d3241cb401/mzaf_17493537629728578170.plus.aac.p.m4a' },
    { id: 5, title: "Somebody's Pleasure", artist: 'Aziz Hedra', duration: '03:43', file: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/93/25/3e/93253e20-2b46-db01-a846-3dc48bf92597/mzaf_12454411239881279827.plus.aac.p.m4a' },
    { id: 6, title: 'Die With A Smile', artist: 'Lady Gaga, Bruno Mars', duration: '04:11', file: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/ca/87/f4/ca87f487-9121-135a-fa69-aa2911929e9a/mzaf_9572349043172098747.plus.aac.p.m4a' },
  ];

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      handleSkipForward();
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    // Set the first song as default if no song is selected
    if (!currentSong && playlist.length > 0) {
      handleSongClick(playlist[0]);
    }

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.src = currentSong.file;
      if (isPlaying) {
        audioRef.current.play().catch(error => console.log("Audio play failed:", error));
      }
    }
  }, [currentSong]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => console.log("Audio play failed:", error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleSongClick = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSkipBack = () => {
    if (currentSong) {
      const currentIndex = playlist.findIndex(song => song.id === currentSong.id);
      const previousIndex = (currentIndex - 1 + playlist.length) % playlist.length;
      handleSongClick(playlist[previousIndex]);
    }
  };

  const handleSkipForward = () => {
    if (currentSong) {
      const currentIndex = playlist.findIndex(song => song.id === currentSong.id);
      const nextIndex = (currentIndex + 1) % playlist.length;
      handleSongClick(playlist[nextIndex]);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-12 bg-black dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-start gap-12"
        >
          <motion.div variants={itemVariants} className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 heading-line">Music & Mood</h2>
            <p className="text-gray-300 mb-8 text-lg">
              From deep focus to feel-good vibes, I create playlists that fuel my day — "Working Energy" is one of my favorites.
            </p>
            
            {currentSong && (
              <div className="bg-gray-800/50 p-4 rounded-lg mb-4">
                <p className="text-white text-lg font-medium">Now Playing:</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-primaryblue font-bold">{currentSong.title}</p>
                    <p className="text-gray-400">{currentSong.artist}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-sm">{formatTime(currentTime)}</span>
                    <span className="text-gray-500">/</span>
                    <span className="text-gray-400 text-sm">{currentSong.duration}</span>
                  </div>
                </div>
                
                {/* Progress bar */}
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <div 
                    className="bg-primaryblue h-2 rounded-full" 
                    style={{ 
                      width: `${duration ? (currentTime / duration) * 100 : 0}%` 
                    }}
                  ></div>
                </div>
              </div>
            )}
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="w-full lg:w-1/2"
          >
            <Card className="overflow-hidden border-gray-800 bg-gray-900/80 backdrop-blur-lg">
              <CardContent className="p-0">
                <div className="p-5 flex items-center gap-4">
                  <div className="bg-black w-16 h-16 min-w-16 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">KB</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-white text-2xl font-bold">working energy</h3>
                    <p className="text-gray-400">Kinhbach</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Plus className="text-gray-400 cursor-pointer hover:text-white transition-colors" size={20} />
                    <span className="text-gray-400">Lưu trên Spotify</span>
                  </div>
                </div>

                <div className="px-5 py-3 flex items-center justify-between">
                  <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-1 rounded text-sm transition-colors">
                    Phát thử
                  </button>
                  <div className="flex items-center gap-4">
                    <SkipBack 
                      className="text-gray-400 hover:text-white cursor-pointer transition-colors" 
                      size={24}
                      onClick={handleSkipBack}
                    />
                    <SkipForward 
                      className="text-gray-400 hover:text-white cursor-pointer transition-colors" 
                      size={24}
                      onClick={handleSkipForward}
                    />
                    <MoreHorizontal className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={24} />
                    <div 
                      className="bg-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                      onClick={handlePlayPause}
                    >
                      {isPlaying ? (
                        <Pause className="text-black" size={20} />
                      ) : (
                        <Play className="text-black ml-1" size={20} />
                      )}
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-800">
                  {playlist.map((song) => (
                    <div 
                      key={song.id}
                      className={`flex items-center justify-between px-5 py-3 hover:bg-gray-800/50 cursor-pointer transition-colors ${currentSong?.id === song.id ? 'bg-gray-800/30' : ''}`}
                      onClick={() => handleSongClick(song)}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-gray-500 w-6 text-right">{song.id}</span>
                        <div>
                          <h4 className="text-white font-medium">{song.title}</h4>
                          <p className="text-gray-400 text-sm">{song.artist}</p>
                        </div>
                      </div>
                      <span className="text-gray-400">{song.duration}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MusicPlayer;
