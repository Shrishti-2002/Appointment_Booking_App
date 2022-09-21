import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { View, Text,StyleSheet, Pressable } from 'react-native';

export default class Dates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed:false,
    };
  }
  
  render() {
    return (
      <Pressable onPress={()=>this.setState({pressed:true})}>
      <View style={style.container}>
        <Text> {this.props.title} </Text>
      </View>
      </Pressable>
    );
  }
}
const style=StyleSheet.create({
  container:{
    width:100,
    borderRadius:5,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    margin:12,
    backgroundColor:'lightgrey'
  },
  
});
