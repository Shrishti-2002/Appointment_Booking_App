import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Appointment from './Appointment'
import Profile from './Profile'
import Login from './Login'
import { createDrawerNavigator } from '@react-navigation/drawer'
// const tab=createBottomTabNavigator();
// export default function TabNav(){
//   return(
//     <tab.Navigator  >
//       <tab.Screen name='Home' component={Home} options={{tabBarIcon:()=>(<Image source={{uri:'https://i.pinimg.com/736x/f6/f4/2d/f6f42db70b390c660e327bb22b665404.jpg'}} style={style.icons}/>),headerShown: false} }/>
//       <tab.Screen name='Appointment' component={Appointment} options={{tabBarIcon:()=>(<Image source={{uri:'https://thumbs.dreamstime.com/b/doctor-appointment-icon-doctor-appointment-icon-flat-style-vector-eps-157761409.jpg'}} style={style.icons}/>) ,headerShown: true}}/>
//       <tab.Screen name='Settings' component={Profile} options={{tabBarIcon:()=>(<Image source={{uri:'https://th.bing.com/th/id/OIP.8huUd7sta6x2fsf80aK-SgHaHa?pid=ImgDet&w=1024&h=1024&rs=1'}} style={style.icons}/>) ,headerShown: true}}/>
//       <tab.Screen name='Profile' component={Profile} options={{tabBarIcon:()=>(<Image source={{uri:'https://www.vippng.com/png/detail/363-3631840_profile-icon-png-profile-icon-png-white-transparent.png'}} style={style.icons}/>) ,headerShown: true}}/>
//     </tab.Navigator>  
//  );
// }
const drawer=createDrawerNavigator();
export default function DrawerNav() {
  return (
    <drawer.Navigator>
        <drawer.Screen name='Home' component={Home}/>
        <drawer.Screen name ='Appointment' component={Appointment}/>
        <drawer.Screen name ='Documents' component={Appointment}/>
        <drawer.Screen name ='Reports' component={Appointment}/>
        <drawer.Screen name ='Hospital Schedule' component={Appointment}/>
        <drawer.Screen name ='Lab Tests' component={Appointment}/>
        <drawer.Screen name ='Docter Details' component={Appointment}/>
        <drawer.Screen name ='In-App Payment' component={Appointment}/>
        <drawer.Screen name ="Medical History" component={Appointment}/>
        <drawer.Screen name ="Settings" component={Appointment}/>
        <drawer.Screen name ='Profile' component={Appointment}/>
        <drawer.Screen name ='Logout' component={Login}/>
    </drawer.Navigator>
  )
}
const style =StyleSheet.create({
  icons:{
    width:30,
    height:30
  },
});