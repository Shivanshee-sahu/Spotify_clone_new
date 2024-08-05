import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const Playercontent = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0,
        },
        totalTime: {
            second: 0,
            minute: 0,
        },
    });

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return {
            minute: minutes,
            second: secs
        };
    };

    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    };

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    };

    const playWithId = async (id) => {
        await setTrack(songsData[id]);
        if (audioRef.current) {
            audioRef.current.load(); // Load the new track
            audioRef.current.play(); // Play the new track
            setPlayStatus(true);
        }
    };
    const previous = async () => {
        if (track.id > 0) {
            await setTrack(songsData[track.id - 1]);
          
                audioRef.current.play();
                setPlayStatus(true);
           
        }
    };

    const next = async () => {
        if (track.id < songsData.length - 1) {
            await setTrack(songsData[track.id + 1]);
         
                audioRef.current.play();
                setPlayStatus(true);
           
        }
    };
    const seekSong=async(e)=>{
audioRef.current.currentTime=((e.nativeEvent.offsetX/seekBg.current.offsetWidth)*audioRef.current.duration)
    }
    useEffect(() => {
        const updateTime = () => {
            if (audioRef.current) {
                const currentTime = audioRef.current.currentTime;
                const duration = audioRef.current.duration;
                seekBar.current.style.width = (Math.floor(currentTime / duration * 100)) + "%";

                setTime({
                    currentTime: formatTime(currentTime),
                    totalTime: formatTime(duration),
                });
            }
        };

        if (audioRef.current) {
            audioRef.current.ontimeupdate = updateTime;
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.ontimeupdate = null;
            }
        };
    }, [audioRef, track]);

    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        time,
        setTime,
        play,
        pause,
        playWithId,
        previous,next,
        seekSong
    };

    return (
        <Playercontent.Provider value={contextValue}>{props.children}</Playercontent.Provider>
    );
};

export default PlayerContextProvider;
