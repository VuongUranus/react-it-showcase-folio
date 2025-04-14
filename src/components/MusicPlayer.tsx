
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, SkipBack, SkipForward, Plus, MoreHorizontal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Song {
  id: number;
  title: string;
  artist: string;
  duration: string;
}

const MusicPlayer: React.FC = () => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  
  const playlist: Song[] = [
    { id: 1, title: 'number one girl', artist: 'ROSÉ', duration: '03:36' },
    { id: 2, title: 'stay a little longer', artist: 'ROSÉ', duration: '04:06' },
    { id: 3, title: 'toxic till the end', artist: 'ROSÉ', duration: '02:36' },
    { id: 4, title: 'I Think They Call This Love', artist: 'Elliot James Reay', duration: '03:13' },
    { id: 5, title: "Somebody's Pleasure", artist: 'Aziz Hedra', duration: '03:43' },
    { id: 6, title: 'Die With A Smile', artist: 'Lady Gaga, Bruno Mars', duration: '04:11' },
  ];

  const handleSongClick = (song: Song) => {
    setCurrentSong(song);
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
    <section className="py-24 bg-black dark:bg-black">
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
                    <SkipBack className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={24} />
                    <SkipForward className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={24} />
                    <MoreHorizontal className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={24} />
                    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                      <Play className="text-black ml-1" size={20} />
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
