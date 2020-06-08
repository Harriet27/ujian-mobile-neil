import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import TabNav from './TabNav';
import {LoginScreen} from '../Screens';
import AsyncStorage from '@react-native-community/async-storage';
import {keepLogin} from '../Redux/Action/authAction';
import {ActivityIndicator} from 'react-native';
import Center from '../Support/Center';

const MainNavigation = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const username = useSelector(state => state.auth.username);
  const loadingState = useSelector(state => state.auth.loading);

  useEffect(() => {
    AsyncStorage.getItem('token')
      .then(res => {
        dispatch(keepLogin(res));
        setLoading(false);
      })
      .catch(err => {
        console.log(err, 'err');
        setLoading(false);
      });
  }, [dispatch]);

  if (loading && loadingState && !username) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }
  return (
    <NavigationContainer>
      {username ? <TabNav /> : <LoginScreen />}
    </NavigationContainer>
  );
};

export default MainNavigation;
