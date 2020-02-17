import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {observer} from "mobx-react";

import MenuStore from "./utils/store/MenuStore";
import LanguageStore from "./utils/store/LanguageStore";
import {TakeSend} from "./screens/bottomtab/takesend/TakeSend";
import {TakeSendList} from "./screens/bottomtab/takesend/TakeSendList";
import {TabIcon} from "./components/tabmenu/TabIcon";
import {TabLabel} from "./components/tabmenu/TabLabel";
import About from "./screens/bottomtab/about/About";
import {Text, View} from 'react-native';

const Tab = createBottomTabNavigator();
const TakeSendStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function TakeSendStackScreen() {
  return (
    <TakeSendStack.Navigator initialRouteName={"TakeSend"}>
      <TakeSendStack.Screen name="TakeSend" options={{ title: LanguageStore.resource.bottom_tab_menu.take_send.title }} component={TakeSend} />
      <TakeSendStack.Screen name="TakeSendList" options={{ title: LanguageStore.resource.bottom_tab_menu.take_send.list_title }} component={TakeSendList} />
    </TakeSendStack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName={"TakeSendTab"}>
      {MenuStore.isLogin ? <Tab.Screen name="TakeSendTab" component={TakeSendStackScreen}
                                       options={{
                                         tabBarLabel: ({focused,color}) => <TabLabel title={LanguageStore.resource.bottom_tab_menu.take_send.title} focused={focused} />,
                                         tabBarIcon: ({focused,color,size}) => <TabIcon size={size} focused={focused} iconName={"camera"} />
                                       }}
      /> : <></> }
      <Tab.Screen name="TakeSendTab" component={TakeSendStackScreen}
                  options={{
                    tabBarLabel: ({focused,color}) => <TabLabel title={LanguageStore.resource.bottom_tab_menu.take_send.title} focused={focused} />,
                    tabBarIcon: ({focused,color,size}) => <TabIcon size={size} focused={focused} iconName={"camera"} />
                  }}
      />
      <Tab.Screen name="About" component={About}
                  options={{
                    tabBarLabel: ({focused,color}) => <TabLabel title={LanguageStore.resource.bottom_tab_menu.about.title} focused={focused} />,
                    tabBarIcon: ({focused,color,size}) => <TabIcon size={size} focused={focused} iconName={"sliders-h"} />
                  }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notification</Text>
    </View>
  );
}

@observer
export default class App extends React.Component {
    render() {
        return (
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Home" component={HomeScreen} />
              <Drawer.Screen name="Notifications" component={NotificationsScreen} />
              <Drawer.Screen name="Tabs" component={TabNavigator} />
            </Drawer.Navigator>
          </NavigationContainer>
        )
    }
}
