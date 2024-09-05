import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostListScreen from './PostListScreen';

const Stack = createNativeStackNavigator();
 function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='PostListScreen' component={PostListScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
   
  );
}
export default App;