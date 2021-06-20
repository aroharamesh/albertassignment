import React from 'react';
import { Text, View } from 'react-native';
import {Card} from 'react-native-shadow-cards';

export default class Cards extends React.Component {
render(){
  return (
    <View>
      <Card style={{padding: 10, margin: 10}}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{this.props.desc} {this.props.amount}</Text>
      </Card>
      
    </View>
  );
}
}