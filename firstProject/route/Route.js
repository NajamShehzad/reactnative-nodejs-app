import React, { Component } from "react";
import { Router, Stack, Scene, Tabs, Actions } from "react-native-router-flux";
import LoginPage from "../components/LoginPage/LoginPage";
import Home from "../components/Home/Home";
import UploadData from "../components/UploadData/UploadData";
import { Icon } from "react-native-elements";
import Profile from "../components/Profile/Profile";
import Services from "../components/Services/Services";
import ContactsList from "../components/ContactsList/ContactsList";
import AddService from "../components/AddService/AddService";
import { Header } from 'react-native-elements'


const ElementHeader = (props) => {
  console.log(props);
  return (<Header
  backgroundColor= '#6200EE'
leftComponent={{ icon: 'menu', color: '#fff' }}
centerComponent={{ text: Actions.currentScene.name, style: { color: '#fff' } }}
rightComponent={{ icon: 'home', color: '#fff' }}
/>)
}
class Route extends Component {
  render() {
    const TabIcon = ({ focused, title }) => {
      switch (title) {
        case "home":
          console.log(focused);
          return (
            <Icon
              name="home"
              type="font-awesome"
              size={30}
              color={focused ? "#6200EE" : "#6200ee7a"}
            />
          );
        case "profile":
          return (
            <Icon
              name="user"
              type="font-awesome"
              size={30}
              color={focused ? "#6200EE" : "#6200ee7a"}
            />
          );
        default: {
          return (
            <Icon
              // name={focused ? "far fa-user" : "ios-speedometer-outline"}
              type="font-awesome"
              size={30}
              color={focused ? "#6200EE" : "#6200ee7a"}
            />
          );
        }
      }
    };

    return (
      <Router navBar={ElementHeader}>
        <Stack key="root">
          <Scene key="loginpage" component={LoginPage} title="Login" />

          <Scene
            key="home"
            tabs={true}
            showLabel={false}
            hideNavBar={true}
            tabBarPosition="bottom"
            // activeBackgroundColor="gray"
            // inactiveBackgroundColor="darkgray"
          >
            <Scene
              key="homePage"
              title="home"
              component={Home}
              icon={TabIcon}
              showLabel={false}
              // hideNavBar={true}
            />
            <Scene
              key="profilePage"
              title="profile"
              // component={Profile}
              icon={TabIcon}
              showLabel={false}
              // hideNavBar={true}
            >
              <Scene
                key="profilePageDashboard"
                // title="home"
                component={Profile}
                // icon={TabIcon}
                showLabel={false}
                // hideNavBar={true}
              />
              <Scene
                key="profilePageServices"
                // title="home"
                component={Services}
                // icon={TabIcon}
                showLabel={false}
                // hideNavBar={true}
              />
              <Scene
                key="contactListPage"
                // title="home"
                component={ContactsList}
                // icon={TabIcon}
                // showLabel={false}
                // hideNavBar={true}
              />
              <Scene
                key="addServicePage"
                // title="home"
                component={AddService}
                // icon={TabIcon}
                // showLabel={false}
                // hideNavBar={true}
              />
            </Scene>
          </Scene>

          <Scene key="uploaddata" component={UploadData} title="Upload Data" />
        </Stack>
      </Router>
    );
  }
}

export default Route;
