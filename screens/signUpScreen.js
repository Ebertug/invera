import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity,ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../FirebaseConfig';
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    navigation.navigate('Login');
  };
  const signUp = async () => {
    setLoading(true);
    try{
      const response = await createUserWithEmailAndPassword(FIREBASE_AUTH,email,password);
      console.log(response);
      alert('Check your emails!');
    } catch(error){
    console.log(error);
    alert('Sign in failed: '+error.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <View style={styles.container}>
      
      <Text style={styles.Text}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />
      <Text style={styles.Text}>Confirm Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setConfirmEmail}
        value={confirmEmail}
      />
      <Text style={styles.Text}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Text style={styles.Text}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry
      />
{ loading ? (
        <ActivityIndicator size='large' color='#2BAF17' />
      ):(
      <>
      <TouchableOpacity onPress={signUp} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
    paddingHorizontal: 20,
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
    color: '#fff',
  },
  button: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
    backgroundColor:'#6A6D76',
    color: '#fff',
    height: 40,
    width:150,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'left',
  },
  buttonText:{
    textAlign: 'left',
    color:'#fff',
    fontSize: 20, // Adjusted fontSize
    marginLeft:16,
  },
  Text: {
    color:'#fff',
    fontSize:16,
  },
});

export default LoginScreen;
