import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, ActivityIndicator, Image } from 'react-native';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
      console.log(response);
      navigation.navigate('ResetPassword');
    } catch (error) {
      console.log(error);
      alert('Sign in failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const GoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(FIREBASE_AUTH, provider);
      navigation.navigate('ResetPassword');
    } catch (error) {
      console.error('Error during Google Sign-In:', error);
      alert('Google Sign-In failed: ' + error.message);
    }
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleResetPassword = () => {
    navigation.navigate('ResetPassword');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      {loading ? (
        <ActivityIndicator size='large' color='#2BAF17' />
      ) : (
        <>
          <TouchableOpacity onPress={handleResetPassword} style={styles.textButtonContainer}>
            <Text style={styles.textButton}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={signIn} style={styles.button}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignUp} style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonGoogle} onPress={GoogleSignIn}>
            <Image source={require('../assets/google.png')} style={styles.googleImage} />
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
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#272829',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
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
    width: '100%', // Use full width
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'flex-start', // Align text to the left
    paddingLeft: 20, // Add padding to the left for text alignment
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  textButtonContainer: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
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
    width: 20,
    height: 20,
  },
});

export default LoginScreen;
