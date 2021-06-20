import React from 'react';
import { Text, View, TextInput, FlatList, Button } from 'react-native';
import Cards from '../../components/Cards';
import Login from '../Login/LoginScreen';
import styles from './StyleItems';

export default class Items extends React.Component {
    state={
        id: 1,
        description:"",
        amount:0,
        total:0,
        isVisible: true,
    }
    DATA = [];
    
    handleSubmit = () => {
        this.setState({
            id: this.state.id + 1,
            description: this.state.description,
            amount: this.state.amount,
            total: Number(this.state.total) + Number(this.state.amount)
        })
        console.log(this.state);
        this.DATA.push({id:1 + this.state.id,description:this.state.description, amount: this.state.amount})
    
    }
    render(){
        
        const Item = ({ desc, amount }) => (
            <Cards desc={desc} amount={amount} />
        );
        const renderItem = ({ item }) => (
            <Item desc={item.description} amount={item.amount}/>
        );

        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Total Items: {this.DATA.length} </Text>
                <Text style={styles.logo}>Total Amount: {this.state.total} </Text>
                <View style={styles.card}>
                    <View style={styles.inputView} >
                        <TextInput  
                            style={styles.inputText}
                            placeholder="Item Description..." 
                            placeholderTextColor="#003f5c"
                            onChangeText={text => this.setState({description:text})}
                        />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            keyboardType='numeric'
                            style={styles.inputText}
                            placeholder="Amount..." 
                            placeholderTextColor="#003f5c"
                            onChangeText={text => this.setState({amount:text})}
                        />
                    </View>
                        <Button title="Submit" onPress={this.handleSubmit}/>
                </View>
                <FlatList
                    data={this.DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        )  
    }
}

