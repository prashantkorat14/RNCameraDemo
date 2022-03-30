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
  const [RecordingStated, setRecordingStated] = useState(false);

  const StartVideo = async () => {
    if (RNCamRef) {
      setRecordingStated(true);
      const {uri, codec = 'mp4'} = await RNCamRef.current.recordAsync();
      console.info(uri);
      setLocalFilePath(uri);
      setRecordingStated(false);
    }
  };
  const StopVideo = () => {
    setRecordingStated(false);
    RNCamRef.current.stopRecording();
  };

  if (LocalFilePath.length > 0) {
    return (
      <View style={styles.container}>
        <VideoPlayer LocalFilePath={LocalFilePath} />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => setLocalFilePath('')}
            style={styles.capture}>
            <Text style={{color: 'blue'}}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
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
      />
      <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
        {!RecordingStated ? (
          <TouchableOpacity onPress={StartVideo} style={styles.capture}>
            <Text style={{color: 'blue'}}>Start Rec</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={StopVideo} style={styles.capture}>
            <Text style={{color: 'red'}}>Stop Rec</Text>
          </TouchableOpacity>
        )}
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
