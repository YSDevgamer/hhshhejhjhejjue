
import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const TESTIMONIAL_VIDEOS = [
  { 
    id: 1, 
    url: "https://cdn.shopify.com/videos/c/o/v/a3fe655948e8439e9c02e604d7316e9c.mp4",
    thumb: "https://cdn.shopify.com/s/files/1/0951/6181/1240/files/preview_images/a3fe655948e8439e9c02e604d7316e9c.thumbnail.0000000000.jpg?v=1766742074"
  },
  { 
    id: 2, 
    url: "https://cdn.shopify.com/videos/c/o/v/e172d8c6e3f64e809b5941f6d4befdf1.mp4",
    thumb: "https://cdn.shopify.com/s/files/1/0951/6181/1240/files/preview_images/e172d8c6e3f64e809b5941f6d4befdf1.thumbnail.0000000000.jpg?v=1766742065"
  },
  { 
    id: 3, 
    url: "https://cdn.shopify.com/videos/c/o/v/ab9525eb05104d93863c2694ec28f1f8.mp4",
    thumb: "https://cdn.shopify.com/s/files/1/0951/6181/1240/files/preview_images/ab9525eb05104d93863c2694ec28f1f8.thumbnail.0000000000.jpg?v=1766742064"
  },
  { 
    id: 4, 
    url: "https://cdn.shopify.com/videos/c/o/v/7539f139d4c642e98e69f79161036a30.mp4",
    thumb: "https://cdn.shopify.com/s/files/1/0951/6181/1240/files/preview_images/7539f139d4c642e98e69f79161036a30.thumbnail.0000000000.jpg?v=1766742066"
  },
  { 
    id: 5, 
    url: "https://cdn.shopify.com/videos/c/o/v/e5a71ded9d26427fab5cbf623fdd0203.mp4",
    thumb: "https://cdn.shopify.com/s/files/1/0951/6181/1240/files/preview_images/e5a71ded9d26427fab5cbf623fdd0203.thumbnail.0000000000.jpg?v=1766742082"
  },
  { 
    id: 6, 
    url: "https://cdn.shopify.com/videos/c/o/v/0c292995342f48529f41f0db7528d8af.mp4",
    thumb: "https://cdn.shopify.com/s/files/1/0951/6181/1240/files/preview_images/0c292995342f48529f41f0db7528d8af.thumbnail.0000000000.jpg?v=1766742074"
  }
];

export const VideoTestimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 italic text-[#1A1A1A]">
          Témoignages réels de notre communauté
        </h2>
        <p className="text-gray-500 font-medium max-w-xl mx-auto uppercase tracking-widest text-xs">
          Découvrez pourquoi des milliers d'hommes ont choisi Shilajit 8-en-1
        </p>
      </div>

      <div className="flex overflow-x-auto space-x-6 px-4 md:px-[calc((100vw-1280px)/2)] pb-12 custom-scrollbar scroll-smooth snap-x">
        {TESTIMONIAL_VIDEOS.map((vid) => (
          <VideoCard key={vid.id} video={vid} />
        ))}
      </div>
    </section>
  );
};

const VideoCard: React.FC<{ video: typeof TESTIMONIAL_VIDEOS[0] }> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex-shrink-0 w-72 md:w-80 aspect-[9/16] rounded-[2rem] overflow-hidden relative shadow-2xl snap-center group bg-black">
      <video
        ref={videoRef}
        src={video.url}
        poster={video.thumb}
        className="w-full h-full object-cover"
        loop
        muted={isMuted}
        playsInline
        onClick={togglePlay}
      />
      
      {/* Overlay UI */}
      <div className={`absolute inset-0 transition-opacity duration-300 pointer-events-none flex flex-col justify-between p-6 ${isPlaying ? 'opacity-0' : 'opacity-100 bg-black/20'}`}>
        <div className="flex justify-end">
           <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-bold border border-white/30 uppercase tracking-widest">
             Vérifié
           </div>
        </div>
        
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-white text-[#0D4B4D] rounded-full flex items-center justify-center shadow-2xl">
            <Play size={28} fill="currentColor" />
          </div>
        </div>

        <div className="flex items-center space-x-3 text-white">
          <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
            <img src={`https://i.pravatar.cc/100?u=${video.id}`} alt="avatar" />
          </div>
          <div>
            <p className="text-sm font-bold">@Utilisateur_soinsvital</p>
            <div className="flex text-yellow-400">
               {[...Array(5)].map((_, i) => <Play key={i} size={8} fill="currentColor" className="-rotate-90" />)}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Controls when playing */}
      {isPlaying && (
        <div className="absolute inset-0 group-hover:bg-black/10 transition-colors cursor-pointer" onClick={togglePlay}>
          <div className="absolute top-6 right-6 flex flex-col space-y-3 pointer-events-auto">
             <button 
               onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
               className="w-10 h-10 bg-black/40 backdrop-blur rounded-full flex items-center justify-center text-white border border-white/20"
             >
               {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
             </button>
             <button 
               onClick={(e) => { e.stopPropagation(); togglePlay(); }}
               className="w-10 h-10 bg-black/40 backdrop-blur rounded-full flex items-center justify-center text-white border border-white/20"
             >
               {isPlaying ? <Pause size={18} /> : <Play size={18} />}
             </button>
          </div>
        </div>
      )}
    </div>
  );
};
