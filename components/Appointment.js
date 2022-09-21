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
  import DateTime from './DateTime';


  class Register extends Component {
    constructor(props) {
      super(props);
      this.state = {
        docters:[
          {id: 1, title: 'Docter1'},
          {id: 2, title: 'Docter2'},
          {id: 3, title: 'Docter3'},
        ],
        specialisation :[
          {id: 1, title: 'specialisation 1'},
          {id: 2, title: 'specialisation 2'},
          {id: 3, title: 'specialisation 3'},
        ],
      };
    }
    
    render(){
      return(
        <ScrollView>
          <View style={style.container}>
            <Text style={style.heading}>Appointment</Text>
              
              <View style={style.input}>
              <Dropdown
                style={style.textinput}
                data={this.state.docters}
                placeholder='Docter'
                labelField='title'
                valueField='id'
                onChange={item => {
                this.setState({value: item.id});
                }}
               />
              </View>
              <View style={style.input}>
              <Dropdown
                style={style.textinput}
                data={this.state.specialisation}
                placeholder='Specialisation'
                labelField='title'
                valueField='id'
                onChange={item => {
                    this.setState({value: item.id});
                }}
                />
              </View>
              <View style={style.input}>
              <Text style={style.subhead}>Available Dates</Text>
              <ScrollView style={style.datetime} horizontal={true} >
              <DateTime title='Mar 23'/>
              <DateTime title='Mar 24'  />
              <DateTime title='Mar 25' />
              <DateTime title='Mar 26'/>
              </ScrollView>
              <Text style={style.subhead}>Available Time</Text>
              <ScrollView style={style.datetime} horizontal={true} >
              <DateTime title='10:00 am'/>
              <DateTime title='11:00 am'/>
              <DateTime title='12:00 pm'/>
              <DateTime title='1:00 pm'/>
              <DateTime title='3:00 pm'/>
              </ScrollView>
              </View>
            <View style={style.btn}>
              <Button title="Get An Appointment" onPress={this.validation}/>
            </View>
            </View>
        </ScrollView>
      );
    }
  }

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
      margin: 15,
    },
  
    name: {
      fontSize: 30,
      fontStyle: 'bold',
  
      margin: 25,
      marginTop: 10,
      color: 'blue',
    },
    subhead: {
      fontSize: 15,
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
      width: 200,
      fontSize:100,
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
    datetime:{
        width:400,

    },

  });
  
  export default Register;