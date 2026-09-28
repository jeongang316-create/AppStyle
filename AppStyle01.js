import { View, Button} from 'react-native';

export default function AppStyle01() {
  return <View>
    <Button title="한글" />
    <Button title="button2" color="red"  />    
    <Button title="button3" color="#00ff00"     
      onPress={() => alert("clicked")}   />   
  </View>
}
