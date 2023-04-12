import React from 'react';



const Song = ({ rank, title, artist }) => {
    return (
        <div className="song">
            <span className="song-rank">{rank}</span>
            <span className="song-title">{title}</span>
            <span className="song-artist">{artist}</span>
        </div>
    );
};

export default Song;
