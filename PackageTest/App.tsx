import React from 'react';
import type {PropsWithChildren} from 'react';
import SpeedMeter from 'react-native-speed-meter';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
} from 'react-native';

const App = () => {
  const handleAlert = (event: string, num: Number) => {
    Alert.alert(event);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'yellow'}}>
      <SpeedMeter
        title={'test'}
        style={{borderRadius: 10, marginTop: 10, alignSelf: 'center'}}
      />
    </View>
  );
};

export default App;
