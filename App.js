import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert } from 'react-native';
import Search from './Search';

import React, { Component } from 'react'

export default function App() {
  return (
    <View style={styles.container}>
       
      <Text style={styles.header}>Welcome, {"\n"}Data Structure Deadheads</Text>
      <Text style={styles.middleText}>Please select an Option Below</Text>
      
     
     
      <Button style={styles.buttons}
        title="Geeks"
        color="#3a8727"
        onPress={() => Alert.alert('Simple Button pressed')}/>
       
        
          <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37353d',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    color: '#3a8727',
    width: 400,
    fontSize: 15,
    textAlign: 'left',
    marginTop: 40,
    marginLeft: 15,
  },

  middleText: {
    flex: 6,
    color: '#3a8727',
    textAlign: 'center',
    fontSize: 25,
    marginTop: 75,
    width: 400,
  },

  buttons: {
    boder: 'none',
    color: 'pink',
  }
});
