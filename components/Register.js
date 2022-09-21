import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import History from './History';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import validator from 'validator';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: [
        {id: 1, title: 'Other'},
        {id: 2, title: 'Male'},
        {id: 3, title: 'Female'},
      ],
      fname:'',
      nameerror_mess:'',
      email:'',
      emailerror_Mess:'',
      emailerror:true,
      number:'',
      numbererror_mess:'',
      numbererror:true,
      date:'',
      dateerror_mess:'',
      dateerror:true,
      nameerror:true,
    };
  }
  email_validation=()=>{
    if(validator.isEmpty(this.state.email)){
      this.setState({email_errorMess:'Field empty!!'})
    }
    else if (!validator.isEmail(this.state.email)){
       this.setState({email_errorMess:'Invalid!!'})
    }
    else {
      this.setState({emailerror:false})
      this.setState({emailerror_mess:''})
    }
  }
  namevalidation=()=>{
    if(validator.isEmpty(this.state.fname)){
      this.setState({nameerror_mess:'Field empty!!'})
    }
    else{
      this.setState({nameerror:false})
      this.setState({nameerror_mess:''})
    }
  }
  datevalidation=()=>{
    if(validator.isEmpty(this.state.date)){
      this.setState({dateerror_mess:'Field empty!!'})
    }
    else if(!validator.isDate(this.state.date)){
      this.setState({dateerror_mess:'Invalid!!'})
    }
    else{
      this.setState({dateerror:false})
      this.setState({dateerror_mess:''})
    }
  }
  numbervalidation=()=>{
    if(validator.isEmpty(this.state.number)){
      this.setState({numbererror_mess:'Field empty!!'})
    }
    else if(!validator.isMobilePhone(this.state.number)){
      this.setState({numbererror_mess:'Invalid!!'})
    }
    else{
      this.setState({numbererror:false})
      this.setState({numbererror_mess:''})
    }
  }
  validation=()=>{
    
    if(!(this.state.emailerror&&this.state.nameerror&&this.state.numbererror&&this.state.dateerror)) this.props.navigation.navigate('Login')
    
  }
  render(){
    return(
      <ScrollView>
        <View style={style.container}>
          <View>
            <Image
              source={{
                uri: 'https://th.bing.com/th/id/R.ddc2698eb2466ae6d148895a084a4dd2?rik=jVjWBoippBmL1w&riu=http%3a%2f%2fwww.triotree.com%2fimages%2flogo%402x.png&ehk=0OJb0fcbfMEg%2fUbxpinB2c7SgFYdMZVWq%2fmhGXmAu3Y%3d&risl=&pid=ImgRaw&r=0',
              }}
              style={style.img}
              resizeMode={'cover'}
            />
          </View>
          <Text style={style.heading}>Patient Registration form</Text>
          <View style={style.input}>
            <Text style={style.subhead}>Name</Text>
            <View style={style.nm}>
              <TextInput
                style={style.nm_sele}
                placeholder="First Name"
                onChangeText={(text)=>this.setState({fname:text})}
                textContentType="name"
                onBlur={this.namevalidation}></TextInput>
              <TextInput
                style={style.nm_sele}
                placeholder="Last Name"
                onChangeText={(text)=>this.setState({lname:text})}
                textContentType="name"></TextInput>
             </View>
                <Text style={{color:'red'}}>{this.state.nameerror_mess}</Text>
            
            <View style={style.input}>
            <Text style={style.subhead}>Address</Text>
            <TextInput
              style={style.textinput}
              placeholder="Address"
              textContentType="fullStreetAddress"
              multiline={true}></TextInput>
            </View>
            <View style={style.input}>
            <Text style={style.subhead}>Contact Details</Text>
            <TextInput
              style={style.textinput}
              keyboardType="number-pad"
              placeholder="Mobile Number"
              onChangeText={(text)=>this.setState({number:text})}
              maxLength={10}
              onBlur={this.numbervalidation}></TextInput>
              <Text style={{color:'red'}}>{this.state.numbererror_mess}</Text>
            <TextInput
              style={style.textinput}
              placeholder="ex: myname@example.com"
              onChangeText={(text)=>this.setState({email:text})}
              textContentType="emailAddress"
              onBlur={this.email_validation}></TextInput>
              <Text style={{color:'red'}}>{this.state.emailerror_Mess}</Text>
            </View>
            <View style={style.input}>
            <Text style={style.subhead}>General Information</Text>
            <Dropdown
              style={style.textinput}
              data={this.state.gender}
              placeholder="Gender"
              labelField="title"
              valueField="id"
              onChange={item => {
                this.setState({value: item.id});
              }}
            />
            <TextInput
              style={style.textinput}
              keyboardType="number-pad"
              placeholder="Date of birth(YYYY-MM-DD)" 
              onChangeText={(text)=>this.setState({date:text})}
              onBlur={this.datevalidation}></TextInput>
              <Text style={{color:'red'}}>{this.state.dateerror_mess}</Text>
            <TextInput
              style={style.textinput}
              keyboardType="number-pad"
              placeholder="Weight(in kg)" ></TextInput>
            <TextInput
              style={style.textinput}
              keyboardType="number-pad"
              placeholder="Height(in cm)"></TextInput>
            </View>
          </View>
          <View style={style.btn}>
            <Button title="Submit" onPress={this.validation}/>
          </View>
        </View>
      </ScrollView>
    );
  }
}
// const appnavigation=createNativeStackNavigator();
// function navigation(){
//   return (
//   <NavigationContainer>
//     <appnavigation.Navigator>
//       <appnavigation.Screen name='Register' component={Register}/>
//       <appnavigation.Screen name='History' component={History}/>

//     </appnavigation.Navigator>
//   </NavigationContainer>
//   );
// }
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
    borderColor: 'grey',
    borderRadius: 5,
  },
  input: {
    width: 300,
    borderColor: 'grey',
    borderRadius: 5,
    alignItems: 'center',
  },
  img: {
    width: 180,
    height: 80,
    marginBottom: 25,
    marginTop:20,
  },
  heading: {
    fontSize: 25,
    margin: 5,
  },

  name: {
    fontSize: 30,
    fontStyle: 'bold',

    margin: 25,
    marginTop: 10,
    color: 'blue',
  },
  subhead: {
    fontSize: 20,
  },
  textinput: {
    borderColor: 'grey',
    borderRadius: 5,
    borderWidth: 1,
    margin: 8,
    paddingHorizontal: 10,
    height: 50,
    width: 370,
  },
  nm: {
    flexDirection: 'row',
    width: 'auto',
  },
  nm_sele: {
    width: 180,
    borderColor: 'grey',
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
    paddingHorizontal: 10,
    height: 50,
  },
  btn: {
    margin: 25,
    width: 250,
  },
  gender: {
    textAlign: 'center',
    borderColor: 'grey',
    borderWidth: 1,
  },
  subhead: {
    width: 390,
    fontSize: 20,
    marginBottom: 10,
    marginTop:25,
  },
});

export default Register;