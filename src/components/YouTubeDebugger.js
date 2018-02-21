import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: { bitrate: 8,
                video: { resolution: '1080p' }
      }
    };
  }

  changeBitrate = () => {
    this.setState({
      settings: {...this.state.settings, bitrate: 12}
    })
  }

  changeResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'}}
    })
  }


  render() {
    return (
      <div>
        <p>Bitrate: {this.state.settings.bitrate} - Resolution: {this.state.settings.video.resolution}</p>
        <button className='bitrate' onClick={this.changeBitrate}>change bitrate</button>
        <button className='resolution' onClick={this.changeResolution}>change resolution</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
