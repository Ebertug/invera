import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
  };

  return (
    <View style={styles.container}>
      <text>Email</text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />
      <text>Password</text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <text onPress={handleLogin}>Forgot Password?</text>
      <TouchableOpacity title="Login" onPress={handleLogin} style={styles.button}> <text style={styles.buttonText}> Login</text> </TouchableOpacity>
      <TouchableOpacity title="Sign Up" onPress={handleLogin} style={styles.button}> <text style={styles.buttonText}> Sign Up</text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
    paddingHorizontal: 200,
    backgroundColor: '#272829',
    color:'#fff',
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius:50,
    borderColor: '#fff',
    backgroundColor: '#6A6D76',
  },
  button: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
    backgroundColor:'#6A6D76',
    color: '#000',
    height: 40,
    width:150,
    marginTop: 10,
  },
  buttonText:{
    textAlign: 'left',
    color:'#fff',
    fontSize:32,
    marginLeft:16,
  }
});

export default LoginScreen;
