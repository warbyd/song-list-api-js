import React from 'react';
import Song from './Song';
import './Song.css'

const SongList = ({ songs }) => {
    return (
        <div>
            <div className="song-list">
                {songs.map((song) => (
                    <Song
                        key={song.rank}
                        rank={song.rank}
                        title={song.title}
                        artist={song.artist}
                        
                        
                    />
                ))}
            </div>
        </div>
    );
};

export default SongList;
