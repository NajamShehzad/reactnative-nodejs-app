import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput } from "react-native";
import { AsyncStorage } from "react-native";
import { Image } from "react-native";
import PhotoUpload from "react-native-photo-upload";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button } from "react-native-elements";

class UploadData extends Component {
  state = {
    myNumber: "",
    profilePhoto: "https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg"
  };

  onChanged(text) {
    if ((text * 1 && text.length < 12) || text == "" || text == "0") {
      this.setState({ myNumber: text });
      console.log(text);
    } else if (text.length > 10) {
      console.log("it should be les then 11");
    } else {
      console.log("Char not allowed");
    }
  }

  updateData = () => {
    alert(this.state.myNumber);
    alert(this.state.profilePhoto);
  }

  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 200 }}>
          <PhotoUpload
            // containerStyle={{height: 150, backgroundColor: 'powderblue'}}
            onPhotoSelect={avatar => {
              if (avatar) {
                console.log("Image base64 string: ", avatar);
              }
            }}
          >
            <Image
              style={{
                paddingVertical: 30,
                width: 150,
                height: 150,
                borderRadius: 75
              }}
              resizeMode="cover"
              source={{
                uri: this.state.profilePhoto
              }}
            />
          </PhotoUpload>
        </View>
        <View style={{ ...styles.horCenterCont }}>
          <Input
            placeholder="Enter you Number"
            containerStyle={styles.textInput}
            inputStyle={{ paddingLeft: 10, color: "gray" }}
            onChangeText={text => this.onChanged(text)}
            value={this.state.myNumber}
            inputContainerStyle={{
              backgroundColor: "lightgray",
              borderWidth: 0,
              borderRadius: 27
            }}
            leftIcon={{
              type: "font-awesome",
              name: "phone",
              size: 20,
              color: "gray"
            }}
          />
        </View>
        <View style={styles.horCenterCont }>
          <Button
            containerStyle={{width: '60%',marginTop: 20,}}
            buttonStyle={{backgroundColor: 'gray',borderRadius: 27}}
            title="UPDATE"
            onPress={this.updateData}
          />
        </View>
        {/* <Image source={this.state.avatarSource} style={styles.uploadAvatar} /> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonUpdate: {
    width: "70%",
    backgroundColor: "gray",
    borderRadius: 27
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  horCenterCont: {
    display: "flex",
    alignItems: "center"
  },
  textInput: {
    // paddingLeft: 20,
    // backgroundColor: "#ebebeb",
    // borderRadius: 27,
    // fontSize: 15,
    width: "70%",
    color: "gray",
    // height: 50,
    margin: "auto"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default UploadData;