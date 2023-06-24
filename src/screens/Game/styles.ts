import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  gameScreen: {
    backgroundColor: Colors.background,
    flex: 1,
    flexDirection: 'column',
  },
  gamePad: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
  gameButton: {
    width: 100,
  },
  gameContainer: {
    flex: 1,
  },
  gameContainerItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  gameMoveItem: {
    fontSize: 20,
  },
  moveText: {
    fontSize: 16,
  },
  text: {
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 20,
  },

});
