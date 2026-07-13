import { useEffect } from "react";

// Lazy-loaded video modal — the <video>/<iframe> only mounts once
// `open` is true, so a visitor who never clicks "Watch Demo" never
// downloads a single byte of video. Closes on backdrop click or Escape.
//
// Supports two kinds of `videoUrl`:
//   - A YouTube URL (youtube.com/watch?v=... or youtu.be/...) -> embedded via iframe
//   - A direct video file URL (.mp4/.webm) -> embedded via <video>
export default function VideoModal({ open, onClose, videoUrl, title }) {
  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    // Prevent background scroll while modal is open
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const embedUrl = toYouTubeEmbed(videoUrl);

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-slate-950 border border-slate-800 rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
          <p className="font-mono text-sm text-slate-200 truncate">{title} — demo</p>
          <button
            onClick={onClose}
            aria-label="Close video"
            className="w-8 h-8 rounded-md flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="aspect-video bg-black">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={`${title} demo video`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video src={videoUrl} controls autoPlay className="w-full h-full" />
          )}
        </div>
      </div>
    </div>
  );
}

// Converts a normal YouTube watch/share URL into an embeddable one.
// Returns null for non-YouTube URLs (direct video files), which tells
// the caller to render a <video> tag instead.
function toYouTubeEmbed(url) {
  if (!url) return null;
  const watchMatch = url.match(/youtube\.com\/watch\?v=([\w-]+)/);
  const shortMatch = url.match(/youtu\.be\/([\w-]+)/);
  const id = watchMatch?.[1] || shortMatch?.[1];
  return id ? `https://www.youtube.com/embed/${id}` : null;
}
