import React, { useState, useEffect } from 'react';

import SongList from '../components/SongList';



const SongBox = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetchSongs();
    }, []);

    const fetchSongs = () => {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
            .then((response) => response.json())
            .then((data) => {
                const songs = data.feed.entry.map((entry, index) => {
                    return {
                        rank: index + 1,
                        title: entry['im:name'].label,
                        artist: entry['im:artist'].label,
                    };
                });
                setSongs(songs);
            })
            
    };

    return (
        <div>
            
            <SongList songs={songs} />
        </div>
    );
};

export default SongBox;
