import { useMusicPlayer } from "../hooks/useMusicPlayer";

const Tracklist =() =>{
    const music = useMusicPlayer()
    return(
        <>
        {music.trackList.map((track, index) =>(
       <div key= {`${track}_${index}`}>
        <button onClick={()=> music.playTrack(index)}>
            {music.isPlaying && music.currentTrackIndex === index ? "Pause" : "Play"}
        </button>
        <div>Track Playing: {track.name}</div>
       </div> 
        ))}
        </>
    );
};
export {Tracklist}