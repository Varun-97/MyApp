import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import homeDetails from '../../utils/constant/homeDetails.json'
import { setHomeDetail } from '../../redux/slice/homeSlice';

const HomeDetails = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const { id } = route.params;
  const detail = useSelector(state => state.home.homeDetail);

  useEffect(() => {
    dispatch(setHomeDetail(homeDetails[id]));
  }, [id]);

  const handleUnlock = () => {
    alert('Home unlocked successfully!');
  };

  if (!detail) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.textStyle}>Home Detail</Text>
      </View>
      <Text style={styles.textStyle}>{detail.address}</Text>
      <Image source={{ uri: detail.image }} style={styles.image} />
      <Text style={styles.textStyle}>{detail.details}</Text>
      <Text style={styles.textStyle}>{detail.description}</Text>
      <Button title="Unlock" onPress={handleUnlock} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  image: {
    width: '100%',
    height: 150,
  },
  header: {
    marginVertical: 20,
    alignItems: 'center',
},
textStyle: {
    color: 'black'
  }
});

export default HomeDetails;