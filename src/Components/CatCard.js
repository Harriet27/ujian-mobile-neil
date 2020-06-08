import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const CatCard = ({image}) => {
  return (
    <View style={s.cardContainer}>
      <Image style={s.cardImage} source={{uri: image}} />
    </View>
  );
};

const s = StyleSheet.create({
  cardContainer: {
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    height: 250,
    width: 250,
    marginVertical: 10,
  },
  cardImage: {
    height: 150,
    width: 150,
  },
});

export default CatCard;
