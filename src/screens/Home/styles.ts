import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  homeScreenItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  menuItem: {
    flex: 2,
    width: 250,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});
