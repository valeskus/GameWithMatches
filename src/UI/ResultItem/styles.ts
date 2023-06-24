import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',

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
  },

});
