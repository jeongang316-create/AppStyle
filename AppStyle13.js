import { Text, View, Image, StyleSheet } from 'react-native';

import Food from './assets/food1.png';
import Food2 from './assets/food2.png';

export default function AppStyle13() {
  return (
    <View style={styles.container}>
    
      <View style={styles.cardContainer}>
        <Image
          source={Food}
          style={{ width: '100%', height: 200, borderRadius: 4 }}/>
          <Text style={styles.cardTitle}>강남맛집</Text>
          <Text style={styles.cardContent}>경기도 용인시</Text>
      </View>
    
          <View style={styles.cardContainer}>
        <Image
          source={Food2}
          style={{ width: '100%', height: 200, borderRadius: 4 }}/>
          <Text style={styles.cardTitle}>어서와요~~</Text>
          <Text style={styles.cardContent}>경기도 용인시</Text>
      </View>

    
    </View>

  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#ffffff', flex: 1 },
  cardContainer: {
    elevation: 5,  borderRadius: 4,    borderWidth: 0.5,
    borderColor: '#d6d7da',    margin: 20,
  },
  cardTitle: {
    width: '100%',    fontWeight: 'bold',
    fontSize: 20,    padding: 3,
  },
  cardContent: {
    width: '100%',    fontSize: 12,    padding: 3,
  },
});
