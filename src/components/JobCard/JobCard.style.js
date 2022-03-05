import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#c6c6c6',
    padding: 5,
    margin: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  company: {
    color: 'black',
  },
  location_container: {
    backgroundColor: '#ee5350',
    alignSelf: 'flex-start',
    borderRadius: 50,
    padding: 5,
    marginVertical: 3,
  },
  location: {
    borderRadius: 5,
    color: 'white',
    paddingRight: 5,
    paddingLeft: 5,
  },
  level: {
    alignSelf: 'flex-end',
    color: '#de5a57',
    fontWeight: 'bold',
    marginRight: 5,
    marginBottom: 5,
  },
});
