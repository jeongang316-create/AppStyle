import { View, Image } from 'react-native';

import Movie1 from './assets/movie1.jpg';

export default function AppStyle06() {
  return (
    <View style={{ top: 8 }}>
      <Image
        style={{ width: 150, height: 100 }}
        source={{ uri: 'https://picsum.photos/id/237/200/300' }}
        resizeMode="cover"
      />
    </View>
  );
}
