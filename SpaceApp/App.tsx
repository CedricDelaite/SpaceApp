/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NativeBaseProvider} from 'native-base';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Navigation from './src/navigation';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <NativeBaseProvider>
      {isLoading ? (
        <View style={styles.container}>
          <Image
            style={styles.gif}
            source={require('./assets/gif/loadingapp.gif')}
          />
          <Text style={styles.text}>SPACE APP</Text>
        </View>
      ) : (
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      )}
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    backgroundColor: '#08615E',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  gif: {
    width: '80%',
    height: 250,
    resizeMode: 'cover',
  },
  text: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
});

export default App;
