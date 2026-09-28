import {View, Image} from 'react-native';

import Movie1 from './assets/movie1.jpg';


export default function AppStyle04() {

  return <View style={{top:8}}>
    <Image source={Movie1} style={{width:100, height:100}}/>  
    <Image source={Movie1} style={{width:100}}/>  
    <Image source={Movie1} style={{height:20}}/>  
  </View>

}