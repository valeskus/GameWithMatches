import React from 'react';
import { Platform, UIManager } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { store } from '@stores/rootStore';

import { Home } from './screens/Home';
import { Game } from './screens/Game';

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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

export default App;
