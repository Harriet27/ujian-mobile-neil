import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';
import WelcomeIcon from '../Components/WelcomeIcon';
import {useDispatch} from 'react-redux';
import {loginAction} from '../Redux/Action/authAction';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');

  return (
    <View style={s.container}>
      <WelcomeIcon />
      <Input
        style={s.textInput}
        placeholder="Username"
        value={username}
        onChangeText={e => setUsername(e)}
      />
      <Button
        containerStyle={s.buttonStyle}
        buttonStyle={s.buttonColor}
        title="Login"
        onPress={() => dispatch(loginAction({username}))}
      />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  textInput: {
    width: '100%',
    marginVertical: 25,
  },
  buttonStyle: {
    marginVertical: 10,
    borderRadius: 20,
  },
  buttonColor: {
    backgroundColor: '#70DB82',
  },
});

export default LoginScreen;
