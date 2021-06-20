import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './StyleLogin';
import Items from '../Items/Items';

export default class Login extends React.Component {
  state={
    username:"",
    password:""
  }

  componentDidMount(){  
    this.setState({
      isVisible : false
    })  
  }

  handleSubmit = () => {
      if(this.state.username==='admin' && this.state.password==='admin')
        this.setState({isVisible : true})
  }

  render(){
    let Item_Screen = (  
        <Items />
      )
    return (
      <>
        {  
          (this.state.isVisible === true) ? Item_Screen : (
          <View style={styles.container}>
            <Text style={styles.logo}>Alberta App</Text>
            <View style={styles.inputView} >
              <TextInput  
                style={styles.inputText}
                placeholder="Username..." 
                placeholderTextColor="#003f5c"
                onChangeText={text => this.setState({username:text})}/>
            </View>
            <View style={styles.inputView} >
              <TextInput  
                secureTextEntry
                style={styles.inputText}
                placeholder="Password..." 
                placeholderTextColor="#003f5c"
                onChangeText={text => this.setState({password:text})}/>
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={this.handleSubmit}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </View>)  
        }  
      </>
    );
  }
}

