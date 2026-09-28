import { View, StyleSheet } from 'react-native';

export default function AppStyle10() {

  return <View style={styles.container}>

    
    <View style={{flex:1, backgroundColor:'red'}}/>
    <View style={{flex:1, backgroundColor:'green', width:50}}/>
    <View style={{flex:1, backgroundColor:'blue', width:100}}/>
    

</View>
}

const styles = StyleSheet.create({
  container : {backgroundColor:'black', flex : 1,  flexDirection:'column'},
})
