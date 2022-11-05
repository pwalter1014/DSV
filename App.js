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
      <Text> This is an array depending on how much it is called 
        it will create that many indexes however, 
        if you call an array with 10 indexes you are calling 10 indexes from 0 to 9. 
          </Text> 
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