import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';

const MusicPlayer = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [playing, setPlaying] = useState(false);

    const toggleMusic = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (playing) {
            audio.pause();
        } else {
            audio.play().catch(err => console.warn("Playback error:", err));
        }
        setPlaying(!playing);
    };

    return (
        <>
            <audio ref={audioRef} loop src="/cyberpunk-trailer-255002.mp3" />
            <div
                className={`music-toggle ${playing ? 'pulse' : ''}`}
                onClick={toggleMusic}
                title={playing ? 'Click to mute' : 'Click to play'}
            >
                <FontAwesomeIcon icon={playing ? faVolumeUp : faVolumeMute} />
            </div>
        </>
    );
};

export default MusicPlayer;
