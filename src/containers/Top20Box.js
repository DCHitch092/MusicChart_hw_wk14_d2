import React, {Component} from 'react';
import TopTrackList from '../components/TopTrackList';

class Top20Box extends Component{

    constructor(props){
        super(props);
        this.state = {
            tracks: [],
            testTracks: [
                {id: 1,
                title: ""}
            ]
        };
    }

    componentDidMount(){
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

        fetch(url)
        .then(res => res.json())
        .then(tracks => this.setState({tracks: tracks.feed.entry}))
        // .catch(err => console.err());
    }

    render(){
        return(
            <>
            <TopTrackList tracks={this.state.tracks} />
            </>
        )
    }
}

export default Top20Box;