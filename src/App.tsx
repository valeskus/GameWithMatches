import React from 'react';
import { View } from 'react-native';
import { Platform, SafeAreaView, UIManager } from 'react-native';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

function App(): JSX.Element {

  return (<View />);
}

export default App;
