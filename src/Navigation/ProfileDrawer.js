import React from 'react';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../Redux/Action/authAction';
import Center from '../Support/Center';
import {Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Profile} from '../Screens';

const Drawer = createDrawerNavigator();

const LogoutScreen = ({navigation: {dispatch}}) => {
  const dispatchRedux = useDispatch();

  const handleLogout = () => {
    dispatchRedux(logoutAction());
  };

  return (
    <Center>
      <Button title="Log Out" onPress={handleLogout} />
    </Center>
  );
};

const ProfileDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="ProfileAccount">
      <Drawer.Screen
        name="ProfileAccount"
        component={Profile}
        options={{title: 'Profile'}}
      />
      <Drawer.Screen name="Settings" component={LogoutScreen} />
    </Drawer.Navigator>
  );
};

export default ProfileDrawer;
