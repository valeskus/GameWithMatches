import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.background,
    flex: 1,
    flexDirection: 'column',
  },
  homeScreen: {
    flex: 1,
    paddingBottom: 5,
  },
  homeScreenItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  menuList: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: 300,
  },
  menuItem: {
    flex: 2,
    width: 250,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
  },
});
