import React, {useEffect, useState} from 'react';
import {FlatList} from 'native-base';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {RootTabScreenProps} from '../../../types';

import styles from './style';
import moment from 'moment';
import ModalVideo from './modal';

export default function Video({}: RootTabScreenProps<'Video'>) {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [video, setVideo] = useState('');

  function setModalVisible(visible: boolean, videoId: string) {
    setModal(visible);
    setVideo(videoId);
  }

  useEffect(() => {
    fetch(
      'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=contentDetails&maxResults=10&playlistId=UULA_DiR1FfKNvjuUpBHmylQ&key=AIzaSyDEL4L8DyXwmpRL8JCKGWx00Vp5xCSLeLw',
    )
      .then(response => response.json())
      .then(json => setData(json.items))
      .catch(error => console.error(error));
  }, []);

  function card(
    elem: {
      contentDetails: {videoPublishedAt: string};
      snippet: {
        resourceId: {videoId: string};
        title: string;
        description: string;
        channelTitle: string;
        thumbnails: {high: {url: string}};
      };
    },
    index: Number,
  ) {
    return (
      <TouchableOpacity
        onPress={() => setModalVisible(true, elem.snippet.resourceId.videoId)}
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
          {elem.snippet.channelTitle},{' '}
          {moment(elem.contentDetails.videoPublishedAt).format('DD/MM/Y')}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return card(item, index);
        }}
      />
      {modal && <ModalVideo video={video} close={() => setModal(false)} />}
    </View>
  );
}
