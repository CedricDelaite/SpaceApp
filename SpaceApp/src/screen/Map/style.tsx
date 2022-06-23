import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b2148ff',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  card: {
    flex: 1,
    backgroundColor: 'blue',
    margin: 10,
    alignItems: 'center',
  },

  image: {
    width: '80%',
    height: 150,
    resizeMode: 'cover',
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'transparent',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 5,
  },
  buttonClose: {
    backgroundColor: '#0E3AB9',
  },
  rowTeam: {
    marginVertical: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  titlemodal: {
    marginBottom: 10,
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontFamily:'Poppins-SemiBold'
  },
  contentbutton: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
});
