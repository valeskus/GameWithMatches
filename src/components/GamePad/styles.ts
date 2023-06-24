import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  gamePadContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  gameButton: {
    width: 100,
  },

  gameContainerItem: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
  },
  labelItem: {
    paddingHorizontal: 10,
    height: 50,
  },
  error: {
    color: 'red',
    fontSize: 15,
  },

});
