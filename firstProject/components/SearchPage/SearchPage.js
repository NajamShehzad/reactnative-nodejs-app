
import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { Header,SearchBar } from 'react-native-elements';
import { AsyncStorage } from "react-native";
import { Actions } from "react-native-router-flux";
import axios from "axios";
import path from "../../config/Path";
import { Dropdown } from 'react-native-material-dropdown';


class SearchPage extends Component {
  state = {
    updateSearch: ''
  };
  _asyncGetRegStudent = async () => {
    try {
      let user = await AsyncStorage.getItem("regStudent");
      return JSON.parse(user);
    } catch (er) {
      return false;
    }
  };
  componentDidMount() {
   
    
  }
  render() {
    const users = [
      {
        name: "brynn",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
      }
    ];
    const { userServices, userData, updateSearch } = this.state;
    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];
    return (
      <View>
     {/* <Header backgroundColor= '#6200EE'> */}
 <SearchBar
        placeholder="Type Here..."
        onChangeText={(updateSearch) => this.setState({updateSearch})}
        containerStyle={{width: '100%',backgroundColor: "#6200EE"}}
        inputContainerStyle={{backgroundColor: '#fff'}}
        inputStyle={{color: "#6200EE"}}
        value={updateSearch}
      />
       <Dropdown
        label='Categories'
        data={data}
        fontSize={15}
        containerStyle={{width: '100%',backgroundColor: "#6200EE", padding: 0,margin: 0,border: 3,borderColor: 'white'}}
        overlayStyle={{border: 0}}
        shadeOpacity={0}
      />
{/* </Header> */}
        <ScrollView contentContainerStyle={styles.scrollView}>
          {/* <Text style={styles.welcome}>SearchPage</Text> */}
         
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  scrollView: {
    padding: 0,
    margin: 0,
    width: "100%"
  }
});

export default SearchPage;
