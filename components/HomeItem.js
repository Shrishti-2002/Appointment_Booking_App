import React, { Component } from 'react';
import { View, Text ,Image,StyleSheet} from 'react-native';

export default class HomeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={style.container}>
      <View style={style.box}>
        <Image source={{uri:this.props.img_url}} style={style.img}/>
      </View>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}

const style=StyleSheet.create({
    img:{
        width:65,
        height:65,
      
      },
      container:{
        width:105,
        height:105,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        margin:12,
        padding:4,
        
    
    },
    box:{
      marginBottom:2,
    }
});
