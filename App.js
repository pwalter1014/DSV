
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,  Button, SafeAreaView, Alert } from "react-native";
import Search from './Search';
import { getInspectorDataForInstance } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-dev";

class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(element) {
    this.data[this.length] = element;
    this.length++;
    return this.data;
  }

  pop() {
    let item = this.data[this.length];
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }

  insertAt(item, index) {
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = item;
    this.length++;
    return this.data;
  }

  deleteAt(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }

  getElementAtIndex(index) {
    return this.data[index];
  }
}
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
