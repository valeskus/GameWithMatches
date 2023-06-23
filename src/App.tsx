import React from 'react';
import { Platform, UIManager } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { store } from '@stores/rootStore';

import { Home } from './screens/Home';
import { Game } from './screens/Game';
import { History } from './screens/History';
import { Options } from './screens/Options/Options';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export type RootStackParamList = {
  Home: undefined;
  Game: {
    isAIFirst: boolean;
  };
  History: undefined;
  Options: undefined;
};

const Stack = createNativeStackNavigator();
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

function App(): JSX.Element {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Game"
            component={Game}
          />
          <Stack.Screen
            name="History"
            component={History}
          />
          <Stack.Screen
            name="Options"
            component={Options}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

export default App;
