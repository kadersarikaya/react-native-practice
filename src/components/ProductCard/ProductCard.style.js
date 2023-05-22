/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#eceff1',
    borderRadius: 5,
    flex: 1,
    margin: 5,
  },
  image: {
    resizeMode: 'contain',
    height: 200,
    width: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
    color: 'black',
  },
  price: {
    fontSize: 16,
    color: '#1976d2',
    fontWeight: 'bold',
    padding: 10,
  },
  inStock: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
