import React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {Image} from 'react-native';
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from '../../types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import News from '../screen/News';
import Map from '../screen/Map';
import Video from '../screen/video';
import styles from './style';
const BottomTab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation({}: {}) {
  return (
    <NavigationContainer theme={DarkTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarActiveBackgroundColor: 'black',
        tabBarInactiveBackgroundColor: 'black',
        headerShown: false,
        tabBarLabelStyle:{fontFamily:'Poppins-Regular',fontSize:9}
      }}>
      <BottomTab.Screen
        name="News"
        component={News}
        options={({navigation}: RootTabScreenProps<'News'>) => ({
          title: 'News',

          tabBarIcon: ({color}) => (
            <Image
              source={require('../../assets/image/Lbutton.png')}
              style={styles.RLbutton}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name="Map"
        component={Map}
        options={({navigation}: RootTabScreenProps<'Map'>) => ({
          title: 'Map',

          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/image/Cbutton.png')}
              style={styles.Cbutton}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name="Video"
        component={Video}
        options={({navigation}: RootTabScreenProps<'Video'>) => ({
          title: 'Video',

          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/image/Rbutton.png')}
              style={styles.RLbutton}
            />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}
