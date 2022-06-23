import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  card: {
    flex: 1,
    backgroundColor: '#313132',
    margin: 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    width: '85%',
    height: 150,
    resizeMode: 'cover',
    marginTop: 5,
  },
  title: {
    fontFamily:'Poppins-Bold',
    fontSize: 15,
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 5,
  },
  summary: {
    fontSize: 13,
    color: 'white',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 5,
    fontFamily:'Poppins-Regular',
  },
  newsite: {
    fontSize: 11,
    marginBottom: 10,
    color: '#D0D0D0',
    fontFamily:'Poppins-ExtraLight',
  },
});
