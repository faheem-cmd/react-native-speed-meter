import React from 'react';
import {View, StyleSheet} from 'react-native';

import SpeedMeter from 'react-native-speed-meter';

const App = () => {
  return (
    <View style={styles.container}>
      <SpeedMeter
        rotationValueProp={50}
        onError={(error: any) => console.log(error)}
        showPercentage={true}
        percentageValue={(value: any) => console.log(value)}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f4f9',
  },
});
