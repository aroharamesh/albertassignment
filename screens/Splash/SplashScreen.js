import React, { Component } from 'react';  
import { Platform, StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';  
import Login from '../Login/LoginScreen';
import Items from '../Items/Items';
import styles from './StyleSplash';

export default class SplashScreen extends Component {  
  constructor(){  
    super();  
    this.state={  
     isVisible : true,  
    }  
  }

  Hide_Splash_Screen = () => {  
    this.setState({   
      isVisible : false   
    });  
  }
   
  componentDidMount(){  
    var that = this;  
    setTimeout(function(){  
      that.Hide_Splash_Screen();  
    }, 3000);  
  }  
   
  render()  
    {  
      let Splash_Screen = (  
        <View style={styles.SplashScreen_RootView}>  
          <View style={styles.SplashScreen_ChildView}>  
            <Image 
              source={{uri:'https://static.javatpoint.com/tutorial/react-native/images/react-native-tutorial.png'}}  
              style={{width:'100%', height: '100%', resizeMode: 'contain'}} 
            />  
          </View>  
        </View> 
      )  
      return(  
        <View style = { styles.MainContainer }>  
          <Login />
            {  
              (this.state.isVisible === true) ? Splash_Screen : null  
            }  
        </View>  
      );  
    }  
}  
 