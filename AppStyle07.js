import { View, Image, StyleSheet } from 'react-native';

export default function AppAppStyle07() {
  return <View style={styles.container}>
      <View style={styles.square}>
      </View>
    </View>
}

const styles = StyleSheet.create({
  container : {backgroundColor:'green', flex : 1,  },
  square : {backgroundColor:'yellow', width:100, height:100}
})


