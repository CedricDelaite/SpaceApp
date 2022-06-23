import {FlatList} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity, Linking} from 'react-native';

import {RootTabScreenProps} from '../../../types';
import styles from './style';
import moment from 'moment';
export default function News({}: RootTabScreenProps<'News'>) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v3/articles')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  function card(
    item: {
      url: string;
      title: string;
      summary: string;
      newsSite: string;
      publishedAt: string;
      imageUrl: string;
    },
    index: number,
  ) {
    return (
      <TouchableOpacity
        onPress={() => Linking.openURL(item.url)}
        style={styles.card}
        key={index.toString()}>
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
        <Image source={{uri: item.imageUrl}} style={styles.image} />
        <Text numberOfLines={2} style={styles.summary}>
          {item.summary}
        </Text>
        <Text style={styles.newsite}>
          {item.newsSite}, {moment(item.publishedAt).format('DD/MM/Y')}
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
    </View>
  );
}
