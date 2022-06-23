import {View} from 'native-base';
import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import {Modal} from 'react-native';
import {ModalParamList} from '../../../types';
import styles from './style';
export default function ModalVideo({video, close}: ModalParamList) {
  return (
    <Modal transparent onRequestClose={close}>
      <View style={styles.backmodale}>
        <View style={styles.modale}>
          <YoutubePlayer height={200} play={false} videoId={video} />
        </View>
      </View>
    </Modal>
  );
}
