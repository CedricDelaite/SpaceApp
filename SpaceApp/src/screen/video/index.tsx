import React, {useEffect, useState} from 'react';
import {FlatList} from 'native-base';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import {RootTabScreenProps} from '../../../types';
import styles from './style';
import moment from 'moment';
import ModalVideo from './modal';

export default function Video({}: RootTabScreenProps<'Video'>) {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [video, setVideo] = useState('');
  const [mot, setMot] = useState('');
  const [query, setQuery] = useState('');

  function setModalVisible(visible: boolean, videoId: string) {
    setModal(visible);
    setVideo(videoId);
  }

  useEffect(() => {
    setMot('');
    fetch(
      'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCLA_DiR1FfKNvjuUpBHmylQ&id=UCjsHDXUU3BjBCG7OaCbNDyQ&id=UCDC6DBi0kRp6Jk21xqfvFLA&id=UCcHwxw7UQsW2Vueib7ykUkQ&id=UC5X4e8ScZI2AFd_vkjSoyoQ&id=UCNqNkZ7kKfqimqHkgbWMNYA&id=UCQkLvACGWo8IlY1-WKfPp6g&id=UCq6OAftTQOuUBRdtUDq5SUA&id=UCtI0Hodo5o5dUb67FeUjDeA&id=UCqvjEkH_41m4DYaoNQwk4Bw&id=UCIBaDdAbGlFDeS33shmlD0A&id=UCo-3ThNQmPmQSQL_L6Lx1_w&id=UCvBqzzvUBLCs8Y7Axb-jZew&maxResults=25&key=AIzaSyAECHyZ8nSMQVAHP1sYdpX5fGjtYaiw_dk',
    )
      .then(response => response.json())
      .then(json => setData(json.items))
      .catch(error => console.error(error));
  }, []);

  function updateSearch(value: string) {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=contentDetails&maxResults=10&playlistId=${value}&key=AIzaSyAECHyZ8nSMQVAHP1sYdpX5fGjtYaiw_dk`,
    )
      .then(response => response.json())
      .then(json => setData(json.items))
      .catch(error => console.error(error));
  }

  function updateSearch2() {
    setQuery('');
    setMot('');
    fetch(
      'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCLA_DiR1FfKNvjuUpBHmylQ&id=UCjsHDXUU3BjBCG7OaCbNDyQ&id=UCDC6DBi0kRp6Jk21xqfvFLA&id=UCcHwxw7UQsW2Vueib7ykUkQ&id=UC5X4e8ScZI2AFd_vkjSoyoQ&id=UCNqNkZ7kKfqimqHkgbWMNYA&id=UCQkLvACGWo8IlY1-WKfPp6g&id=UCq6OAftTQOuUBRdtUDq5SUA&id=UCtI0Hodo5o5dUb67FeUjDeA&id=UCqvjEkH_41m4DYaoNQwk4Bw&id=UCIBaDdAbGlFDeS33shmlD0A&id=UCo-3ThNQmPmQSQL_L6Lx1_w&id=UCvBqzzvUBLCs8Y7Axb-jZew&maxResults=25&key=AIzaSyAECHyZ8nSMQVAHP1sYdpX5fGjtYaiw_dk',
    )
      .then(response => response.json())
      .then(json => setData(json.items))
      .catch(error => console.error(error));
  }

  function updateSearch3(search: string) {
    if (!search) {
      setMot('');
      fetch(
        'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCLA_DiR1FfKNvjuUpBHmylQ&id=UCjsHDXUU3BjBCG7OaCbNDyQ&id=UCDC6DBi0kRp6Jk21xqfvFLA&id=UCcHwxw7UQsW2Vueib7ykUkQ&id=UC5X4e8ScZI2AFd_vkjSoyoQ&id=UCNqNkZ7kKfqimqHkgbWMNYA&id=UCQkLvACGWo8IlY1-WKfPp6g&id=UCq6OAftTQOuUBRdtUDq5SUA&id=UCtI0Hodo5o5dUb67FeUjDeA&id=UCqvjEkH_41m4DYaoNQwk4Bw&id=UCIBaDdAbGlFDeS33shmlD0A&id=UCo-3ThNQmPmQSQL_L6Lx1_w&id=UCvBqzzvUBLCs8Y7Axb-jZew&maxResults=25&key=AIzaSyAECHyZ8nSMQVAHP1sYdpX5fGjtYaiw_dk',
      )
        .then(response => response.json())
        .then(json => setData(json.items))
        .catch(error => console.error(error));
    } else {
      setMot('recherche');
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${search}&videoCategoryId=28&type=video&key=AIzaSyAECHyZ8nSMQVAHP1sYdpX5fGjtYaiw_dk`,
      )
        .then(response => response.json())
        .then(json => setData(json.items))
        .catch(error => console.error(error));
    }
  }

  function card(
    elem: {
      contentDetails: {
        relatedPlaylists: {uploads: string};
        videoPublishedAt: string;
      };
      snippet: {
        resourceId: {videoId: string};
        title: string;
        description: string;
        channelTitle: string;
        thumbnails: {high: {url: string}};
        publishedAt: string;
      };
      id: {
        videoId: string;
      };
    },
    index: Number,
    
  ) {
    return (
      <TouchableOpacity
        onPress={() => {
          if (mot == 'playlist') {
            setModalVisible(true, elem.snippet.resourceId.videoId);
          } else if (mot == 'recherche') {
            setModalVisible(true, elem.id.videoId);
          } else {
            updateSearch(elem.contentDetails.relatedPlaylists.uploads) ||
              setMot('playlist');
          }
        }}
        style={styles.card}
        key={index.toString()}>
        <Text numberOfLines={2} style={styles.title}>
          {elem.snippet.title}
        </Text>

        <Image
          source={{uri: elem.snippet.thumbnails.high.url}}
          style={styles.image}
        />
        <Text numberOfLines={2} style={styles.description}>
          {elem.snippet.description}
        </Text>
        <Text style={styles.channeltitle}>
          {mot ? elem.snippet.channelTitle + ', ' : ''}
          {moment(elem.snippet.publishedAt).format('DD/MM/Y')}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '90%',
            height: 40,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 0.2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => updateSearch2()}
              style={{
                flex: 0.6,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black',
              }}>
              <Image
                style={{width: 40, height: 30}}
                source={require('../../../assets/image/ic_back.png')}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                height: 18,
                width: 18,
              }}
              source={require('../../../assets/image/ic_search.png')}
            />
          </View>

          <TextInput
            style={{
              flex: 1,
              color: 'black',
              // fontFamily:'Poppins-Regular',
            }}
            value={query}
            placeholder="Search"
            onChangeText={text => setQuery(text)}
            onSubmitEditing={() => {
              updateSearch3(query);
            }}
          />
          {query ? (
            <TouchableOpacity
              onPress={() => updateSearch2()}
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('../../../assets/image/ic_clear.png')} />
            </TouchableOpacity>
          ) : (
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          )}
        </View>
      </View>

      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return card(item, index);
        }}
        keyExtractor={(item, index) => String(index)}
      />
      {modal && <ModalVideo video={video} close={() => setModal(false)} />}
    </View>
  );
}
