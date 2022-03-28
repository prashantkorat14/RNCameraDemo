import React from 'react';
import {View} from 'react-native';
import Video from 'react-native-video';

export default function VideoPlayer() {
  return (
    <View>
      <Video
        source={{
          uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
        }} // Can be a URL or a local file.
        // ref={ref => {
        //   this.player = ref;
        // }} // Store reference
        //   onBuffer={this.onBuffer} // Callback when remote video is buffering
        //   onError={this.videoError} // Callback when video cannot be loaded
        //   style={styles.backgroundVideo}
      />
    </View>
  );
}

// Later on in your styles..
// var styles = StyleSheet.create({
//   backgroundVideo: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//   },
// });
