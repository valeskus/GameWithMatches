import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  gamePadContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',

    marginBottom: 30,
  },
  labelItem: {
    marginRight: 10,
  },
  error: {
    color: 'red',
    fontSize: 15,

    position: 'absolute',
    bottom: -20,
    left: 0,
  },
});
