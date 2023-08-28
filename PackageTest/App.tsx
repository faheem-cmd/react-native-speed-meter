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
    <View style={{height: 300, width: '100%', backgroundColor: 'yellow'}}>
      <SpeedMeter rotationValueProp={50} onError={(e: any) => console.log(e)} />
    </View>
  );
};

export default App;
