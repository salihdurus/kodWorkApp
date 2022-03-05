import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  name: {
    margin: 5,
    color: '#37474f',
    fontWeight: 'bold',
    fontSize: 25,
  },
  location_container: {
    margin: 5,
    flexDirection: 'row',
  },
  locations_header: {
    color: '#d75d5a',
    fontWeight: 'bold',
  },
  locations: {
    color: 'black',
    fontWeight: 'bold',
  },
  level_container: {
    margin: 5,
    flexDirection: 'row',
  },
  level_header: {
    color: '#d75d5a',
    fontWeight: 'bold',
  },
  level: {
    color: 'black',
    fontWeight: 'bold',
  },
  detail_header: {
    color: '#37474f',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
  },
  body_container: {
    flex: 1,
    margin: 2,
    borderWidth: 1,
    borderColor: '#e3e3e3',
    backgroundColor: 'white',
    padding: 5,
  },
  detail: {},
  button_container: {
    flexDirection: 'row',
    flex: 1,
    margin: 5,
  },
});
