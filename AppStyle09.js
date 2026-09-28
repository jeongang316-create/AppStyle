import { View, StyleSheet } from 'react-native';

export default function AppStyle09() {

  return <View style={styles.container}>

    
    <View style={{flex:1, backgroundColor:'red'}}/>
    <View style={{flex:1, backgroundColor:'green'}}/>
    <View style={{flex:1, backgroundColor:'blue'}}/>
    

</View>
}

const styles = StyleSheet.create({
  container : {backgroundColor:'green', flex : 1,  flexDirection:'column'},
})
