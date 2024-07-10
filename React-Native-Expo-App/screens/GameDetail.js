//d2
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function GameDetail({ route, navigation }) {
  const { game } = route.params;

  const handleJoin = () => {
    navigation.navigate('GameDashboard', { game });
  };

  return (
    <View>
      <Text>{game.title}</Text>
      <Text>{game.description}</Text>
      <Button title="Join" onPress={handleJoin} />
    </View>
  );
}
