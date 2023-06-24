import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  optionItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 20,
  },
  labelItem: {
    paddingHorizontal: 15,
    flex: 5,
    height: 90,
  },
  error: {
    color: 'red',
    fontSize: 15,
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    flex: 1,
    paddingBottom: 20,
  },
  itemsContainer: {
    justifyContent: 'flex-end',
    flex: 2,
  },
});
