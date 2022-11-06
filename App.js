import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, BackHandler, Text, View, Button, SafeAreaView, Alert } from "react-native";
import Search from './Search';
import { getInspectorDataForInstance } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-dev";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}){
  return (
<View style={styles.container}>

<Text style={styles.header}>Welcome, {"\n"}Data Structure Deadheads</Text>
<Text style={styles.middleText}>Please select an Option Below</Text>

  <Button style={styles.buttons}
    title="Instructions"
    color="#3a8727"
    onPress={() => navigation.navigate('Instructions', {name: 'Instructions'})} />

  <Button style={styles.buttons}
    title="Arrays"
    color="#3a8727"
    onPress={() => navigation.navigate('Array', {name: 'Array'})} />

  <Button style={styles.buttons}
    title="Linked Lists"
    color="#3a8727"
    onPress={() => navigation.navigate('Linked List', {name: 'Linked List'})} />

  <Button style={styles.buttons}
    title="Binary Search Trees"
    color="#3a8727"
    onPress={() => navigation.navigate('Binary Search Tree', {name: 'Binary Search Tree'})} />

  <Button style={styles.buttons}
    title="Quit"
    color="#3a8727"
    onPress={() => BackHandler.exitApp()} />

<StatusBar style="auto" />
    </View>
  );
}

function Array() {
  return (
    <View style={styles.container}>

      <Text style={styles.header}>Array, {"\n"}Arrays</Text>
      <Text style={styles.middleText}>Please select an Option Below</Text>
      
      </View>
  );
};

function LinkedList() {
  return (
    <View style={styles.container}>

      <Text style={styles.header}>Array, {"\n"}Arrays</Text>
      <Text style={styles.middleText}>Please select an Option Below</Text>
      </View>
  );
};

function Bst() {
  return (
    <View style={styles.container}>

      <Text style={styles.header}>Array, {"\n"}Arrays</Text>
      <Text style={styles.middleText}>Please select an Option Below</Text>
      </View>
  );
};

function Instructions() {
  return (
    
    <ScrollView style={styles.container}>
      <Text style={styles.nested}>
      <Text style={styles.subtitle}>Arrays{"\n"}</Text>
      <Text style={styles.instructContainer}>1. An array is defined as the summation of objects of the same data type stored within adjacent memory locations{"\n"}{"\n"}</Text>
      <Text style={styles.instructContainer}>2. Starting at n=0, each index of an array indicates a memory locations in which a value, string{"\n"}{"\n"}</Text>
      <Text style={styles.instructContainer}>3. The basic methods that are in tandem to an array in Java are: Push, Pop, Insert, Delete, and Get{"\n"}{"\n"}</Text>
      <Text style={styles.instructContainer}>4. The average time complexities for array data structures are as follow: {"\n"}{"\n"}Push: O(1){"\n"}Pop: O(1){"\n"}Insert: O(N){"\n"}Delete: O(N){"\n"}Get: O(N)</Text>
      </Text>
      

      

    </ScrollView>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome, Data Structure Deadheads'}}
          />

          <Stack.Screen 
            name="Array"
            component={Array}
          />

          <Stack.Screen 
            name="Linked List"
            component={LinkedList}
          />

          <Stack.Screen 
            name="Binary Search Tree"
            component={Bst}
          />

          <Stack.Screen 
            name="Instructions"
            component={Instructions}
          />

        </Stack.Navigator>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37353d',
   
  
  },

  nested: {
    textAlign: 'center',
    borderColor: 'blue',
    borderWidth: 2,
    padding: 5,
  },

  instructContainer: {
    flex: 5,
    color: '#3a8727',
    textAlign: 'center',
    fontSize: 25,
    marginTop: 25,
    width: 400,
    padding:5,
  },

  subtitle: {
    textDecorationLine: 'underline',
    fontSize: 25,
    color: '#3a8727',
    
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