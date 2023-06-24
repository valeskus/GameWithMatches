import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  historyScreen: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  historyItem: {
    backgroundColor: Colors.background,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
    margin: 20,
    padding: 20,
  },
});
