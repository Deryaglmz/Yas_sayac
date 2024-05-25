import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';

import Anasayfa from './android/app/src/screens/Anasayfa';
import YasSayac from './android/app/src/screens/YasSayac';

const Stack = createStackNavigator();

export default function App() { 
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Anasayfa' component={Anasayfa} />
        <Stack.Screen name='YasSayac' component={YasSayac} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
