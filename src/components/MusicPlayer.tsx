"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./MusicPlayer.module.scss";

type Track = { title: string; artist?: string; src: string; cover?: string };

// Updated to reflect actual uploaded audio files.
// Durations will be captured dynamically on metadata load.
const tracks: Track[] = [
  {
    title: "Evenfall",
    artist: "Aayush Singh",
    src: "/audio/evenfall.mp3",
    cover: "/images/gallery/vertical-1.jpg",
  },
  {
    title: "Cosmos",
    artist: "Aayush Singh",
    src: "/audio/cosmos.mp3",
    cover: "/images/gallery/vertical-2.jpg",
  },
  {
    title: "Demon Slayer Drums Cover",
    artist: "Aayush Singh",
    src: "/audio/demon%20slayer%20drums%20cover.mp3",
    cover: "/images/gallery/vertical-3.jpg",
  },
  {
    title: "Aurora",
    artist: "Aayush Singh",
    src: "/audio/aurora.mp3",
    cover: "/images/gallery/vertical-4.jpg",
  },
];

function formatTime(secs: number) {
  if (!isFinite(secs)) return "0:00";
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

export const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const dragState = useRef<{
    dragging: boolean;
    startX: number;
    startY: number;
    origRight: number;
    origBottom: number;
  }>({ dragging: false, startX: 0, startY: 0, origRight: 0, origBottom: 0 });
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0..1
  const [duration, setDuration] = useState(0);
  const [durationsMap, setDurationsMap] = useState<Record<number, number>>({});
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [prevVolume, setPrevVolume] = useState(0.85);
  const [showList, setShowList] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  // Restore saved position after mount
  useEffect(() => {
    if (!mounted) return;
    const saved = localStorage.getItem("mp-pos");
    if (saved && rootRef.current) {
      try {
        const { right, bottom } = JSON.parse(saved);
        rootRef.current.style.right = right + "px";
        rootRef.current.style.bottom = bottom + "px";
      } catch {}
    }
  }, [mounted]);

  // Drag handlers
  const onDragStart = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    const root = rootRef.current;
    if (!root) return;
    dragState.current.dragging = true;
    dragState.current.startX = e.clientX;
    dragState.current.startY = e.clientY;
    const rect = root.getBoundingClientRect();
    dragState.current.origRight = window.innerWidth - rect.right;
    dragState.current.origBottom = window.innerHeight - rect.bottom;
    root.classList.add(styles.dragging);
    document.addEventListener("mousemove", onDragMove);
    document.addEventListener("mouseup", onDragEnd);
  };

  const onDragMove = (e: MouseEvent) => {
    if (!dragState.current.dragging) return;
    const root = rootRef.current;
    if (!root) return;
    const dx = e.clientX - dragState.current.startX;
    const dy = e.clientY - dragState.current.startY;
    const newRight = Math.max(4, dragState.current.origRight - dx);
    const newBottom = Math.max(4, dragState.current.origBottom - dy);
    root.style.right = newRight + "px";
    root.style.bottom = newBottom + "px";
  };

  const onDragEnd = () => {
    if (!dragState.current.dragging) return;
    dragState.current.dragging = false;
    const root = rootRef.current;
    if (root) {
      root.classList.remove(styles.dragging);
      const rect = root.getBoundingClientRect();
      const right = window.innerWidth - rect.right;
      const bottom = window.innerHeight - rect.bottom;
      localStorage.setItem("mp-pos", JSON.stringify({ right, bottom }));
    }
    document.removeEventListener("mousemove", onDragMove);
    document.removeEventListener("mouseup", onDragEnd);
  };

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    }
  }, [playing]);

  const onTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setCurrentTime(audio.currentTime);
    if (audio.duration) setProgress(audio.currentTime / audio.duration);
  };
  const onLoadedMetadata = () => {
    const a = audioRef.current;
    if (a) {
      const d = a.duration || 0;
      setDuration(d);
      setDurationsMap((prev) =>
        prev[index] === d ? prev : { ...prev, [index]: d },
      );
    }
  };
  const onEnded = () => {
    setPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = Math.max(0, Math.min(duration * ratio, duration));
  };

  const cycleTrack = (dir: 1 | -1) => {
    const next = (index + dir + tracks.length) % tracks.length;
    setIndex(next);
    setProgress(0);
    setCurrentTime(0);
    setPlaying(false);
  };

  const selectTrack = (i: number) => {
    setIndex(i);
    setProgress(0);
    setCurrentTime(0);
    setPlaying(true);
  };

  const toggleMute = () => {
    setVolume((v) => {
      if (v === 0) {
        return prevVolume || 0.6;
      } else {
        setPrevVolume(v);
        return 0;
      }
    });
  };
  const toggleList = () => setShowList((v) => !v);
  const closePlayer = () => setHidden(true);
  const reopen = () => {
    setHidden(false);
  };

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.load();
    if (playing) setTimeout(() => a.play().catch(() => {}), 50);
  }, [index]);
  if (!mounted) return null;
  const track = tracks[index];

  if (hidden) {
    return (
      <button
        className={styles.hiddenReopenBtn}
        onClick={reopen}
        aria-label="Open music player"
      >
        ▶
      </button>
    );
  }

  const titleLower = track.title.toLowerCase();
  const themedClass = titleLower.includes("cosmos")
    ? "themeCosmos"
    : titleLower.includes("demon")
      ? "themeDemon"
      : titleLower.includes("aurora")
        ? "themeAurora"
        : "";
  const isThemeBackground =
    themedClass === "themeCosmos" ||
    themedClass === "themeDemon" ||
    themedClass === "themeAurora";
  return (
    <div
      className={`${styles.playerRoot} ${themedClass ? (styles[themedClass] ?? themedClass) : ""}`}
      aria-label="Music player"
      ref={rootRef}
    >
      {showList && (
        <div className={styles.playlist} role="listbox" aria-label="Playlist">
          <div className={styles.playlistScroll}>
            {tracks.map((t, i) => {
              const active = i === index;
              return (
                <div
                  key={i}
                  className={`${styles.trackRow} ${active ? styles.trackActive : ""}`}
                  onClick={() => selectTrack(i)}
                  role="option"
                  aria-selected={active}
                >
                  {t.cover && (
                    <img src={t.cover} alt="cover" className={styles.cover} />
                  )}
                  <div className={styles.rowMeta}>
                    <p className={styles.rowTitle}>{t.title}</p>
                    {t.artist && (
                      <p className={styles.rowArtist}>By {t.artist}</p>
                    )}
                  </div>
                  <span className={styles.rowDuration}>
                    {formatTime(durationsMap[i] || 0)}
                  </span>
                </div>
              );
            })}
          </div>
          <div className={styles.footerNote}>
            All Original Musics Created By Aayush Singh.
          </div>
        </div>
      )}
      <div className={styles.bar} onMouseDown={onDragStart}>
        <div
          className={styles.barBg}
          /* Only apply cover image when not using a themed procedural background */
          style={
            !isThemeBackground && track.cover
              ? { backgroundImage: `url(${track.cover})` }
              : undefined
          }
        />
        <div className={styles.barOverlay} />
        <div className={styles.controlGroup}>
          <button
            className={styles.iconBtn}
            aria-label="Previous"
            onClick={() => cycleTrack(-1)}
            disabled={tracks.length < 2}
          >
            ⏮
          </button>
          <button
            className={`${styles.iconBtn} ${styles.playBtn}`}
            aria-label={playing ? "Pause" : "Play"}
            onClick={togglePlay}
          >
            <span
              className={`${styles.iconGlyph} ${!playing ? styles.playGlyph : ""}`}
            >
              {playing ? "⏸" : "▶"}
            </span>
          </button>
          <button
            className={styles.iconBtn}
            aria-label="Next"
            onClick={() => cycleTrack(1)}
            disabled={tracks.length < 2}
          >
            ⏭
          </button>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: 0,
          }}
        >
          <div className={styles.trackInfo}>
            <p className={styles.title} title={track.title}>
              {track.title}
            </p>
            <p className={styles.artist}>{track.artist || ""}</p>
          </div>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 5,
              borderRadius: 3,
              background: "rgba(255,255,255,0.18)",
              cursor: "pointer",
            }}
            onClick={seek}
            aria-label="Seek"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress * 100)}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                width: `${progress * 100}%`,
                background: "linear-gradient(90deg,#06b6d4,#ff4d4f)",
                borderRadius: 3,
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "0.55rem",
              letterSpacing: ".03em",
              opacity: 0.65,
              marginTop: -2,
            }}
          >
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
        <div className={styles.controlGroup}>
          <button
            className={styles.iconBtn}
            aria-label={volume === 0 ? "Unmute" : "Mute"}
            onClick={toggleMute}
          >
            {volume === 0 ? "🔈" : "🔊"}
          </button>
          <button
            className={styles.iconBtn}
            aria-label="Toggle playlist"
            onClick={toggleList}
          >
            ≡
          </button>
          <button
            className={styles.iconBtn}
            aria-label="Close player"
            onClick={closePlayer}
          >
            ✕
          </button>
        </div>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={onEnded}
      >
        <source src={track.src} />
      </audio>
    </div>
  );
};
