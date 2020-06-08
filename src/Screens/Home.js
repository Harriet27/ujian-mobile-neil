import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {getCat} from '../Redux/Action/catAction';
import CatCard from '../Components/catCard';
import Axios from 'axios';
import {API_URL, API_KEY} from '../Support/API_URL';

const Home = () => {
  const dispatch = useDispatch();

  const [cat, setCat] = useState([]);

  useEffect(() => {
    // dispatch(getCat());
    fetchCats();
  });

  const options = {
    headers: {
      'user-key': API_KEY,
    },
  };

  const fetchCats = async () => {
    try {
      for (var i = 0; i <= 10; i++) {
        let res = await Axios.get(`${API_URL}`, options);
        console.log(res.data[i].url);
        setCat(res.data.url);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <Text>ini Home</Text>
      <FlatList
        keyExtractor={item => item.id}
        contentContainerStyle={s.listStyle}
        onRefresh={() => console.log('Refreshing')}
        data={cat}
        refreshing={false}
        renderItem={({item}) => <CatCard image={item.url} />}
      />
    </View>
  );
};

const s = StyleSheet.create({
  listStyle: {
    alignItems: 'center',
  },
});

export default Home;
