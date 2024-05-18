import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import { FIREBASE_DB } from '../FirebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

const HomeScreen = () => {
  const handleLogout = async () =>{
      console.log('User logged out');
      navigation.navigate('Login');
  };

  const handleSaveHouseKeeping = async () => {
      const inveraCollectionRef = collection(FIREBASE_DB, 'invera');
      addDoc(inveraCollectionRef, {
        message: 'Housekeeping',
      });
  };
  const handleSaveInRoomDining = async () => {
    const inveraCollectionRef = collection(FIREBASE_DB, 'invera');
    addDoc(inveraCollectionRef, {
      message: 'inRoom',
    });
};
const handleSaveTechnicalService = async () => {
  const inveraCollectionRef = collection(FIREBASE_DB, 'invera');
  addDoc(inveraCollectionRef, {
    message: 'TechnicalService',
  });
};

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.topContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Activities</Text>
          <View style={styles.item}>
            <Text style={styles.itemText}>Tea Party</Text>
            <Text style={styles.itemText}>11:00</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Pool Party</Text>
            <Text style={styles.itemText}>16:00</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Night Party</Text>
            <Text style={styles.itemText}>01:00</Text>
          </View>
        </View>
        
<View style={styles.section}>
          <Text style={styles.sectionTitle}>Menu</Text>
          <View style={styles.item}>
            <Text style={styles.itemText}>Breakfast</Text>
            <Text style={styles.itemText}>09:00</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Lunch</Text>
            <Text style={styles.itemText}>13:00</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Dinner</Text>
            <Text style={styles.itemText}>19:00</Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Services</Text>
          <View style={styles.item}>
            <TouchableOpacity onPress={handleSaveHouseKeeping}>
            <Text style={styles.itemText}>Housekeeping</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
          <TouchableOpacity onPress={handleSaveInRoomDining}>
            <Text style={styles.itemText}>In-Room Dining</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
          <TouchableOpacity onPress={handleSaveTechnicalService}>
            <Text style={styles.itemText}>Technical Service</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
          <TouchableOpacity onPress={handleLogout} style={styles.button}>
            <Text style={styles.buttonText}>Log out</Text>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#272829',
    alignItems: 'flex',
    alignItems: 'center',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'space-between',
    width:500,
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'space-between',
    width:500,
    alignItems: 'center',
  },
  section: {
    flex: 1,
    backgroundColor: '#6A6D76',
    borderRadius: 8,
    padding: 10,
    margin: 8,
    width: '50%',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  itemText: {
    fontSize: 16,
    color: '#fff',
  },
  logoContainer: {
    marginLeft:20,
    alignItems: 'center',
    top:-15,
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
    color:'#fff',
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
    width:130,
  },
  textButton: {
    textAlign:'left',
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

export default HomeScreen;
