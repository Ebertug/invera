import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity,ActivityIndicator, Image,KeyboardAvoidingView } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../FirebaseConfig';
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);


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
      <KeyboardAvoidingView behavior='padding'>
    <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>   
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
      <TouchableOpacity title="Go Back" onPress={() => navigation.goBack() }  style={styles.button}> 
        <Text style={styles.buttonText}>Go Back</Text> 
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex',
    paddingHorizontal:20,
    backgroundColor: '#272829',
  },
  logoContainer: {
    marginLeft:20,
    alignItems: 'center',
    top:-195,
  },
  logo: {
    transform: [{ scale: 0.7 }],
  },
  input: {
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
    backgroundColor: '#6A6D76',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  buttonText: {
    textAlign:'center',
    color: '#fff',
    fontSize: 16,
    padding:10,
  },
  textButtonContainer: {
    alignSelf: 'left',
    marginBottom: 10,
  },
  textButton: {
    textAlign:'center',
    color: '#fff',
    fontSize: 16,
  },
  Text:{
    color:'#fff',
    fontSize:16,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  buttonGoogle: {
    borderRadius: 40,
    height: 40,
    width: 45,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleImage: {
    width: 40,
    height: 40,
  },
  Heading:{
    color:'#fff',
    fontSize:32, 
  },

});

export default LoginScreen;