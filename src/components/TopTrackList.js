import React from 'react';


const TopTrackList = (props) => {
    const trackList = props.tracks.map((track, index) => {
        return (
        <div key={track.id.label}>{index+1} - {track.title.label}</div>
            )
        }
    )
    
    return (
            <div>
            {trackList}
            </div>
    )
}

export default TopTrackList;