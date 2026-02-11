"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  videoTitle?: string;
}

function isYouTubeUrl(url: string) {
  return url.includes("youtube.com") || url.includes("youtu.be");
}

function getYouTubeEmbedUrl(url: string) {
  const regExp = /^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  const videoId = match && match[1];
  return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
}

function isVimeoUrl(url: string) {
  return url.includes("vimeo.com");
}

export function VideoPlayerModal({ isOpen, onClose, videoUrl, videoTitle }: VideoPlayerModalProps) {
  const isYouTube = isYouTubeUrl(videoUrl);
  const isVimeo = isVimeoUrl(videoUrl);
  const embedUrl = isYouTube ? getYouTubeEmbedUrl(videoUrl) : videoUrl;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] md:max-w-[80vw] lg:max-w-[1200px] p-2 md:p-4 h-auto">
        <DialogHeader className="mb-2">
          <DialogTitle className="text-base md:text-lg line-clamp-1">
            {videoTitle || "Watch Video"}
          </DialogTitle>
        </DialogHeader>

        <div className="relative w-full aspect-video">
          {isYouTube || isVimeo ? (
            <iframe
              src={embedUrl}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          ) : (
            <video
              src={videoUrl}
              controls
              autoPlay
              loop={false}
              muted={false}
              className="w-full h-full rounded-lg"
            >
              Your browser does not support HTML5 video.
            </video>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
