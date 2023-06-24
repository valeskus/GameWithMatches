import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  input: {
    width: 50,
    height: 50,
    padding: 5,
    textAlign: 'center',
    color: Colors.text,
    fontSize: 18,
    borderRadius: 10,
    backgroundColor: Colors.background,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
  },
});
