import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native'; // Import Text from react-native

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic
  };
  const handleSignUp = () => {
    navigation.navigate('SignUp'); 
  };
  const handleResetPassword = () => {
    navigation.navigate('ResetPassword'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />
      <Text style={styles.Text}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity title='Forgot Password' onPress={handleResetPassword}>
        <View>
          <Text style={styles.textButton}>Forgot Password?</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity title="Login" onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity title="Sign Up" onPress={handleSignUp} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left', // Corrected alignItems
    paddingHorizontal: 20, // Adjusted paddingHorizontal
    backgroundColor: '#272829',
    color:'#fff',
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
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
    fontSize: 20, // Adjusted fontSize
    marginTop: 5,
    marginLeft: 16,
  },
  textButton: {
    color: '#fff',
    fontSize: 16, // Adjusted fontSize
  },
  Text: {
    color:'#fff',
    fontSize:16,
  },
});

export default LoginScreen;
