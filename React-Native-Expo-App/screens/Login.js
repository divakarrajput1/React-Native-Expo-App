// Login.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import firebase from '../firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Logged in
      })
      .catch(error => setError(error.message));
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
      {error ? <Text>{error}</Text> : null}
    </View>
  );
}
