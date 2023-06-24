import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 30,
    marginBottom: 50,
  },
  resultItem: {
    fontSize: 18,
    marginBottom: 20,

  },
  resultContainer: {
    flexDirection: 'column',
    marginBottom: 50,
  },

});
