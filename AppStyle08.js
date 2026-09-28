import { View, StyleSheet } from 'react-native';

export default function AppStyle08() {

  return <View style={styles.container}>

    <View style={styles.square} />
    <View style={[styles.square, {backgroundColor:'white'}]}/>
    <View style={[styles.square, {backgroundColor:'blue'}]} />

</View>
}

const styles = StyleSheet.create({
  container : {backgroundColor:'green', flex : 1,  flexDirection:'row'},
  square : {backgroundColor:'yellow', width:100, height:100}
})
