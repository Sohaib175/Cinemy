import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import {COLORS} from './src/constants/theme';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={headerStyle}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const headerStyle = {
  title: 'Movies',
  headerStyle: {backgroundColor: COLORS.baseColor},
  headerTitleStyle: {color: COLORS.textColor},
  headerLeft: () => (
    <IonicIcon name="menu" size={34} color={COLORS.textColor} />
  ),
  headerRight: () => (
    <IonicIcon name="search" size={25} color={COLORS.textColor} />
  ),
};

export default App;
