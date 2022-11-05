import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, SafeAreaView, Alert } from "react-native";
import Search from './Search';
import { getInspectorDataForInstance } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-dev";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}){
  return (
<View style={styles.container}>
  

<Text style={styles.header}>Welcome, {"\n"}Data Structure Deadheads</Text>
<Text style={styles.middleText}>Please select an Option Below</Text>

<<<<<<< Updated upstream
=======
  <Button style={styles.buttons}
    
    title="Instructions"
    color="#3a8727"
    onPress={() => navigation.navigate('Instructions', {name: 'Instructions'})} />
>>>>>>> Stashed changes

      <Button style={styles.buttons}
        title="Arrays"
        color="#3a8727"
        onPress={() => navigation.navigate('Array', {name: 'Array'})} />

      <Button style={styles.buttons}
        title="Linked Lists"
        color="#3a8727"
        onPress={() => Alert.alert('Simple Button pressed')} />

 <Button style={styles.buttons}
  title="Trees"
  color="#3a8727"
  onPress={() => Alert.alert('Simple Button pressed')} />


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


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome' }}
          />

          <Stack.Screen 
            name="Array"
            component={Array}
          />

        </Stack.Navigator>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    justifyContent: 'center',
  },
  card: {
    width: 100, 
    height: 100, 
    backgroundColor: 'white', 
    margin: 16, 
    borderRadius: 2, 
    shadowColor: 'black', 
    shadowOpacity: 0.3, 
    shadowRadius: 1, 
    shadowOffset: { height: 1, width: 0.3 } 
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
