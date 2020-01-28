import React from 'react';


const TopTrackList = (props) => {
    const trackList = props.tracks.map(track => {
        return (
            <div key={track.id.label}>{track.title.label}</div>
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