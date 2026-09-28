import {View, Image} from 'react-native';

import Movie1 from './assets/movie1.jpg';


export default function AppStyle03() {

  return <View style={{top:8}}>
    <Image source={require('./assets/movie1.jpg')} />  
    <Image source={Movie1} />  
  </View>

}