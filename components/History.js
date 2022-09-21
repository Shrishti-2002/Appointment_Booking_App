import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Button,
    Image,
    ScrollView,
  } from 'react-native';
  import React, {Component} from 'react';
  import {Dropdown} from 'react-native-element-dropdown';
  import RadioButtonRN from 'radio-buttons-react-native';
  
  export default class History extends Component {
    constructor(props) {
      super(props);
      this.state = {
        gender: [
          {label: 'Yes'},
          {label: 'NO'},
        ],
      };
    }
    render() {
      return (
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
            <Text style={style.heading}>Patient's Medical History</Text>
            <View style={style.input}>
            <Text style={style.subhead}>Taking any medications, currently?</Text>
            <RadioButtonRN
            data={this.state.gender}
            style={{width:200}}
            />
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
  
  