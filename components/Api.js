import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
export default class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
        articles:[],

    };
  }
  fetch_api=async()=>{
    let data=await fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-07-24&sortBy=publishedAt&apiKey=6a98911e9a0743a9b5b89e4063f85575")
    let parseddata=await data.json()
    this.setState({articles:parseddata.articles})
  }
  axios_api=async()=>{
    let parseddata=await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-07-24&sortBy=publishedAt&apiKey=6a98911e9a0743a9b5b89e4063f85575");
    this.setState({articles:parseddata.data.articles})
  }
  componentDidMount(){
    // this.fetch_api()
    this.axios_api()
  }
  render() {
    return (
      <View>
        <FlatList
        data={this.state.articles}
        renderItem={({item})=><Text>{item.author?item.author:"NULL"}</Text>}
        style={{margin:12,}}
        />

      </View>
    );
  }
}
