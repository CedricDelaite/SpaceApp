import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b2148ff',
  },

  card: {
    flex: 1,
    backgroundColor: '#313132',
    margin: 7,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '85%',
    height: 150,
    resizeMode: 'cover',
    marginTop: 5,
  },
  backmodale: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  modale: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    margin: 10,
  },
  title: {
    fontSize: 15,
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 5,
    fontFamily:'Poppins-Bold',
  },
  description: {
    fontSize: 13,
    color: 'white',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 5,
    fontFamily:'Poppins-Regular',
  },
  channeltitle: {
    fontSize: 11,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
    fontFamily:'Poppins-ExtraLight',
  },
});
