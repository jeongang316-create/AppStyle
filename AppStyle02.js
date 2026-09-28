import { View, TouchableOpacity, Text } from 'react-native';

export default function AppStyle01() {
  return <View>
    
      <TouchableOpacity style={{backgroundColor: "#fe5746", height:40,
        justifyContent: "center",   
        alignItems: "center"
      }}
      onPress={()=>alert('clicked')}
      >
        <Text style={{color:"white"}}>Press Here</Text>
      </TouchableOpacity>


      <View style={{backgroundColor: "#fe5746", height:40,
        justifyContent: "center",   
        alignItems: "center"
      }} >
        <Text style={{color:"white"}}>Press Here</Text>
      </View>


  </View>
}


/*
 justifyContent y축 가운데로  
 alignItems: "center" : x축 가운데로
 */