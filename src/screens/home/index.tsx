import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import homeData from '../../utils/constant/home.json';
import {setHomeList} from '../../redux/slice/homeSlice';
import {setUserPref} from '../../utils/storageUtils';

const HomeListing = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const homeLists = useSelector(state => state.home.homeList);

  useEffect(() => {
    dispatch(setHomeList(homeData));
  }, []);

  const renderItem = ({item}: any) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('HomeDetails', {id: item.id})}>
      <View style={styles.homeCard}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text style={styles.textStyle}>{item.address}</Text>
        <Text style={styles.textStyle}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View />
        <Text style={styles.textStyle}>Home Listing</Text>
        <TouchableOpacity
          onPress={() => {
              navigation.navigate('Login');
              setUserPref('user', '');
          }}>
          <Text style={styles.textStyle}>Logout</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={homeLists}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id.toString()}
      />
    </View>
  );
};

export default HomeListing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  homeCard: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: 150,
  },
  header: {
    marginVertical: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    color: 'black',
  },
});
