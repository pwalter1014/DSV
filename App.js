import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getInspectorDataForInstance } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-dev';

class Array{

  constructor(){
    this.length = 0;
    this.data = {};
  }

  push(element){
    this.data[this.length] = element;
    this.length++;
    return this.data;
  }

  pop(){
    let item = this.data[this.length];
    delete this.data[this.length-1];
    this.length--;
    return this.data;
  }

  insertAt(item, index){
    for(let i = this.length; i >=index; i--){
      this.data[i] = this.data[i-1];
    }
    this.data[index] = item;
    this.length++;
    return this.data;
  }

  deleteAt(index){
    for(let i = index; i < this.length - 1; i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
    return this.data;
  }
}
export default function App() {
  return (
    <View style={styles.container}>
      <Text> App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


//This is a test to see if my git works properly -Ed