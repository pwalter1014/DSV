export default function App() {
    return (
      <View style={styles.container}>
         
        <Text style={styles.header}>Welcome, {"\n"}to the tutorial</Text>
        <Text style={styles.middleText}>Please select an Option Below</Text>
        
       
       
        <Button style={styles.buttons}
          title="Tutorial"
          color="#3a8727"
          onclick="document.location='Tutorial.js'">Tutorial</Button> 
      </View>
    );
  }