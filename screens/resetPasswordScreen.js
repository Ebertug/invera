import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity,Alert } from 'react-native';
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
  Heading:{
    color:'#fff',
    fontSize:32,
    alignItems: 'center',
  },
});

export default LoginScreen;
