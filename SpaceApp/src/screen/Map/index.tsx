import React, {useEffect, useState} from 'react';
import {Text, View, Image, Pressable, Modal} from 'react-native';

import {RootTabScreenProps} from '../../../types';
import styles from './style';
import MapView, {Marker} from 'react-native-maps';
import {Button} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPeopleGroup, faPerson} from '@fortawesome/free-solid-svg-icons';
import {Location} from '../../../types';

export default function Map({}: RootTabScreenProps<'Map'>) {
  const locationArray: Location = {
    latitude: '50.628665',
    longitude: '3.409834',
  };
  const [data, setData] = useState(locationArray);
  const [crew] = useState([
    {name: 'Sergey Korsakov'},
    {name: 'Oleg Artemyev'},
    {name: 'Denis Matveev'},
    {name: 'Kjell Lindgren'},
    {name: 'Robert Hines'},
    {name: 'Jessica Watkins'},
    {name: 'Samantha Cristoforetti'},
  ]);
  const [isLoading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('https://api.wheretheiss.at/v1/satellites/25544')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function setModalVisible(visible: boolean) {
    setModal(visible);
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Image
          style={styles.image}
          source={require('../../../assets/gif/loading.gif')}
        />
      ) : (
        <View style={{flex: 1}}>
          <Button
            style={{backgroundColor: '#0E3AB9', height: 50}}
            onPress={() => setModalVisible(!modal)}>
            <View style={{flexDirection: 'row'}}>
              <FontAwesomeIcon size={20} color="white" icon={faPeopleGroup} />
              <Text style={{fontFamily:'Poppins-SemiBold', color: 'white'}}>
                {' '}
                ISS Crew
              </Text>
            </View>
          </Button>
          <MapView
            style={styles.map}
            region={{
              latitude: parseFloat(data.latitude),
              longitude: parseFloat(data.longitude),
              latitudeDelta: 50,
              longitudeDelta: 50,
            }}>
            <Marker
              title="ISS"
              icon={require('../../../assets/image/iss.png')}
              coordinate={{
                latitude: parseFloat(data.latitude),
                longitude: parseFloat(data.longitude),
              }}
            />
          </MapView>
        </View>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModalVisible(!modal);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.titlemodal}>Crew member list</Text>

            {crew.map((elem: {name: string}, index) => {
              return (
                <View style={styles.rowTeam} key={index}>
                  <FontAwesomeIcon size={20} color="black" icon={faPerson} />
                  <Text style={{color: 'black',fontFamily:'Poppins-Regular'}}>{elem.name}</Text>
                </View>
              );
            })}

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modal)}>
              <Text style={styles.contentbutton}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
