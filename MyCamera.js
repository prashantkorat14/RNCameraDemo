import React, {useRef, useState} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import VideoPlayer from './VideoPlayer';

export default function MyCamera() {
  const RNCamRef = useRef(null);
  const [LocalFilePath, setLocalFilePath] = useState('');

  // takePicture = async () => {
  //   console.log('RNCamRef', RNCamRef);
  //   if (RNCamRef) {
  //     const options = {quality: 0.5, base64: true};
  //     // const data = await RNCamRef.takePictureAsync(options);
  //     // console.log(data.uri);

  //     RNCamRef.current
  //       .takePictureAsync(options)
  //       .then(res => console.log('res', res));
  //   }
  // };

  const StartVideo = async () => {
    if (RNCamRef) {
      const {uri, codec = 'mp4'} = await RNCamRef.current.recordAsync();
      console.info(uri);
      setLocalFilePath(uri);
    }
  };
  const StopVideo = () => {
    RNCamRef.current.stopRecording();
  };

  if (LocalFilePath.length > 0) {
    return <VideoPlayer LocalFilePath={LocalFilePath} />;
  }

  return (
    <View style={styles.container}>
      <RNCamera
        ref={RNCamRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        // onGoogleVisionBarcodesDetected={({barcodes}) => {
        //   console.log(barcodes);
        // }}
      />
      <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
        {/* <TouchableOpacity onPress={takePicture} style={styles.capture}>
          <Text style={{fontSize: 14, color: 'red'}}> SNAP </Text>
        </TouchableOpacity> */}

        <TouchableOpacity onPress={StartVideo} style={styles.capture}>
          <Text style={{color: 'blue'}}>Start Rec</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={StopVideo} style={styles.capture}>
          <Text style={{color: 'red'}}>Stop Rec</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
