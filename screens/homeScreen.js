import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, ActivityIndicator } from 'react-native'; // Import Text from react-native
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try{
      const response = await signInWithEmailAndPassword(FIREBASE_AUTH,email,password);
      console.log(response);
      navigation.navigate('ResetPassword');
    } catch(error){
    console.log(error);
    alert('Sign in failed: '+error.message);
    } finally {
      setLoading(false);
    }
  }


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
      { loading ? (
        <ActivityIndicator size='large' color='#2BAF17' />
      ):(
      <>
      <TouchableOpacity title='Forgot Password' onPress={handleResetPassword}>
        <View>
          <Text style={styles.textButton}>Forgot Password?</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity title="Login" onPress={signIn} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity title="Sign Up" onPress={handleSignUp} style={styles.button}>
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
    alignItems: 'flex',
    paddingHorizontal:20,
    backgroundColor: '#272829',
  },
  logoContainer: {
    marginLeft:20,
    alignItems: 'center',
    top:-180,
  },
  logo: {
    transform: [{ scale: 0.7 }],
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
    backgroundColor: '#6A6D76',
    height: 40,
    width: 100, 
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'left', 
    
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