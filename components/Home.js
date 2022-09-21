import React, { Component } from 'react';
import { View, Text,StyleSheet, ImageBackground,Image, ScrollView, Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeItem from './HomeItem';
import Appointment from './Appointment';
import Profile from './Profile';
import { createDrawerNavigator } from '@react-navigation/drawer'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
      return (
      <ScrollView>
      <View style={style.elements}>
        <HomeItem img_url="https://static.vecteezy.com/system/resources/previews/000/424/769/original/vector-documents-icon.jpg" title='Documents' onclick='Documents' />
        {/* <HomeItem img_url="https://thumbs.dreamstime.com/b/doctor-appointment-icon-doctor-appointment-icon-flat-style-vector-eps-157761409.jpg" title='Appointments'/> */}
        <HomeItem img_url="https://th.bing.com/th/id/OIP.NXYipLzHgGVn6LSB54MESwHaHa?pid=ImgDet&rs=1" title='Appointments'/>
        <HomeItem img_url="https://www.smartclinics.com.au/wp-content/uploads/2020/09/SC-Brand-Icons-TEAL_Calendar.png" title='Schedule'/>
        <HomeItem img_url="https://cdn1.iconfinder.com/data/icons/medical-tests-equipment-blue-line/64/25_medical-hospital-blood-test-25-1024.png" title='Medical Tests'/>
        <HomeItem img_url="https://cdn1.iconfinder.com/data/icons/medical-services-3/500/Medical-63-512.png" title='prescription'/>
        <HomeItem img_url="https://i1.wp.com/www.findadoctorbc.ca/wp-content/uploads/2020/09/cropped-iconfinder_Doctor_2_340900-1-1.png?fit=512%2C512&ssl=1" title='Docter Details'/>
        <HomeItem img_url="https://cdn1.iconfinder.com/data/icons/healthcare-medical/512/medical_1-512.png" title='Reports'/>
        <HomeItem img_url="https://cdn3.iconfinder.com/data/icons/grocery-store-3/64/53-512.png" title='Payment'/>
      </View>
      </ScrollView>
    );
  }
}

// const drawer=createDrawerNavigator();
// export default function DrawerNav() {
//   return (
//     <drawer.Navigator>
//         <drawer.Screen name='Home' component={Home}/>
//         <drawer.Screen name ='Appointment' component={Appointment}/>
//         <drawer.Screen name ='Documents' component={Appointment}/>
//         <drawer.Screen name ='Reports' component={Appointment}/>
//         <drawer.Screen name ='Hospital Schedule' component={Appointment}/>
//         <drawer.Screen name ='Lab Tests' component={Appointment}/>
//         <drawer.Screen name ='Docter Details' component={Appointment}/>
//         <drawer.Screen name ="Medical History" component={Appointment}/>
//         <drawer.Screen name ="Settings" component={Appointment}/>
//         <drawer.Screen name ='Profile' component={Appointment}/>
//         <drawer.Screen name ='Logout' component={Appointment}/>
//     </drawer.Navigator>
//   )
// }
const tab=createBottomTabNavigator();
export default function TabNav(){
  return(
    <tab.Navigator screenOptions={{headerShown:false}}  >
      <tab.Screen name='Home' component={Home} options={{tabBarIcon:()=>(<Image source={{uri:'https://i.pinimg.com/736x/f6/f4/2d/f6f42db70b390c660e327bb22b665404.jpg'}} style={style.icons}/>)} }/>
      <tab.Screen name='Appointment' component={Appointment} options={{tabBarIcon:()=>(<Image source={{uri:'https://thumbs.dreamstime.com/b/doctor-appointment-icon-doctor-appointment-icon-flat-style-vector-eps-157761409.jpg'}} style={style.icons}/>) }}/>
      <tab.Screen name='Settings' component={Profile} options={{tabBarIcon:()=>(<Image source={{uri:'https://th.bing.com/th/id/OIP.8huUd7sta6x2fsf80aK-SgHaHa?pid=ImgDet&w=1024&h=1024&rs=1'}} style={style.icons}/>) }}/>
      <tab.Screen name='Profile' component={Profile} initialParams={{Name:'Shrishti'}} options={{tabBarIcon:()=>(<Image source={{uri:'https://www.vippng.com/png/detail/363-3631840_profile-icon-png-profile-icon-png-white-transparent.png'}} style={style.icons}/>) }}/>
    </tab.Navigator>  
 );
}
const style =StyleSheet.create({
  head:{
    flex:1,
    flexDirection:'row',
  },
  elements:{
    marginTop:40,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around',
    
    
  },
  icons:{
    width:30,
    height:30
  },
});
