import { StyleSheet } from 'react-native';

import { Colors } from '../Colors';

export const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    width: '100%',
    height: 50,
    backgroundColor: Colors.background,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPressed: {
    transform: [{ scale: 0.9 }],
  },
  title: {
    fontSize: 18,
    padding: 10,
  },
  disabled: {
    backgroundColor: Colors.accent,
  },
});
