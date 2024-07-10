// Logout.js
import React from 'react';
import { View, Button } from 'react-native';
import firebase from '../firebase';

export default function Logout() {
  const handleLogout = () => {
    firebase.auth().signOut();
  };

  return (
    <View>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
