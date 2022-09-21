import React, { Component } from 'react';
import { View, Text,Image, ScrollView,StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Appointment from './Appointment';
import { roundToNearestMinutes } from 'date-fns';


export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={style.container}>
      <View>
        <Image source={{uri:'https://th.bing.com/th/id/OIP.Gfp0lwE6h7139625a-r3aAHaHa?pid=ImgDet&rs=1'}} style={style.img}/>
      </View>
        </View>
      
    );
  }
}
// const Drawer = createDrawerNavigator();

// export default function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Profile" component={Profile} />
//       <Drawer.Screen name="Appointment" component={Appointment} />
//     </Drawer.Navigator>
//   );
// }

const style=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
    alignItems:'center'
  },
  img:{
    height:200,
    width:200,
    marginVertical:30,

  }
});