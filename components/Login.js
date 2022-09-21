
import { Text, View,StyleSheet, TextInput, Button, Image, Pressable } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Register from './Register';
import History from './History';
import DrawerNav from './DrawerNav';


class Login extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={style.container}>
         <Image source={{uri:'https://th.bing.com/th/id/R.ddc2698eb2466ae6d148895a084a4dd2?rik=jVjWBoippBmL1w&riu=http%3a%2f%2fwww.triotree.com%2fimages%2flogo%402x.png&ehk=0OJb0fcbfMEg%2fUbxpinB2c7SgFYdMZVWq%2fmhGXmAu3Y%3d&risl=&pid=ImgRaw&r=0'}}  style={style.img} resizeMode={'cover'}/>
        <Text style={style.heading}>Welcome To</Text>
        <Text style={style.name}>Company Name</Text>
       
        <View style={style.input}>
        <TextInput  style={style.textinput} placeholder='Enter Username'></TextInput>
        <TextInput style={style.textinput} placeholder='Enter Password'></TextInput>
        </View>
        <Text style={style.anchor}>Forget Password?</Text>
        <Text  onPress={()=>this.props.navigation.navigate('Register')}  style={style.anchor}>New User?</Text>
        <View style={style.btn}>
        <Button  title='Login' onPress={()=>this.props.navigation.navigate('Home')} />
        </View>
      </View>
    )
  }
}
const stack=createNativeStackNavigator();
function navigation(){
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name='Login' component={Login} />
        <stack.Screen name='Register' component={Register}/>
        <stack.Screen name='History' component={History}/>
        <stack.Screen name='Home' component={DrawerNav} />
      </stack.Navigator>
      
    </NavigationContainer>
  )
}

const style=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    img:{
        width: 180,
        height: 80,
        marginBottom:50,
    },
    heading:{
        fontSize:20,
    },
    name:{
        fontSize:30,
        fontStyle:'bold',
        margin:25,
        marginTop:10,
        color:'blue'
    },
    textinput:{
        textAlign:'center',
        borderColor:'grey',
        borderRadius:5,
        borderWidth:1,
        margin:8,
        paddingHorizontal:10,
        width:300,
    },
    anchor:{
      color:'#4cc9f0',

    },
    btn:{
        margin:25,
        width:250,
        
    },
});
export default navigation;