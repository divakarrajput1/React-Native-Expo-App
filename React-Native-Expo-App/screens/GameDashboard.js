//D2
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Pedometer } from 'expo-sensors';

export default function GameDashboard({ route }) {
  const { game } = route.params;
  const [stepCount, setStepCount] = useState(0);

  useEffect(() => {
    const subscription = Pedometer.watchStepCount(result => {
      setStepCount(result.steps);
    });

    return () => subscription && subscription.remove();
  }, []);

  return (
    <View>
      <Text>{game.title}</Text>
      <Text>Steps: {stepCount}</Text>
    </View>
  );
}
