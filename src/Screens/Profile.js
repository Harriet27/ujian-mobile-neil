import React from 'react';
import {View, Text, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {useSelector} from 'react-redux';
import DP from '../Public/android.png';

const Profile = () => {
  const username = useSelector(state => state.auth.username);

  return (
    <View>
      <Image source={{uri: DP}} />
      <Icon type="material" size={200} name="emoji-emotions" color="gray" />
      <Text>{username}</Text>
    </View>
  );
};

export default Profile;
