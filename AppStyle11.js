import {Text, View, StyleSheet} from 'react-native';

export default function AppStyle11() {
return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  )

}


//flex-start  flex-end  enter flex-space-between   space-around  space-evenly

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent : 'space-evenly',
    alignItems : "center",
    hello : 'abc'
  },
  box1: {
    width: 100,
    height : 100,
    backgroundColor: 'powderblue',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
  },
  box3: {
    width: 100,
    height: 100,
    backgroundColor: 'steelblue',
  },
});
