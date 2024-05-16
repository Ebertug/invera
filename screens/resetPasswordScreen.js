import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image,KeyboardAvoidingView } from 'react-native';
import { FIREBASE_AUTH } from '../FirebaseConfig';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSendResetRequest = async () =>{
    try{
      if(!email){
        alert('Please enter your email');
      } await sendPasswordResetEmail(FIREBASE_AUTH, email);
    alert('Password reset email sent','Password reset email sent to: '+email);
    } catch(error){
      console.error('Error sending password reset email',error);
    }
  }
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior='padding'>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.Heading}>Reset Password</Text>
      <Text style={styles.Text}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />
      <TouchableOpacity onPress={handleSendResetRequest} style={styles.button}>
        <Text style={styles.buttonText}>Send Email</Text>
      </TouchableOpacity>
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
    top:-280,
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
  }
});

export default LoginScreen;