import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Logout from './screens/Logout';
import GameCardFeed from './screens/GameCardFeed';
import GameDetail from './screens/GameDetail';
import GameDashboard from './screens/GameDashboard';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="GameCardFeed" component={GameCardFeed} />
        <Stack.Screen name="GameDetail" component={GameDetail} />
        <Stack.Screen name="GameDashboard" component={GameDashboard} />
        <Stack.Screen name="Logout" component={Logout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
