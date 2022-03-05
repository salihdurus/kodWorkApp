import React, {useState} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import styles from './Detail.style';
import useFetch from '../../Hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import HtmlView from 'react-native-htmlview';
import Button from '../../components/Button';
import {useDispatch} from 'react-redux';

function Detail({route}) {
  const {id} = route.params;
  const {data, loading, error} = useFetch(`${Config.API_URL}/${id}`);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    Alert.alert('KodWork', 'Kaydınız başarıyla alındı !');
  };
  const handleFavoriteJob = () => {
    dispatch({type: 'ADD_FAVORITE', payload: {job: data}});
  };
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.name}>{data.name}</Text>
        <View style={styles.location_container}>
          <Text style={styles.locations_header}>Locations: </Text>
          <Text style={styles.locations}>{data.locations[0].name}</Text>
        </View>
        <View style={styles.level_container}>
          <Text style={styles.level_header}>Job Level: </Text>
          <Text style={styles.level}>{data.levels[0].name}</Text>
        </View>
        <Text style={styles.detail_header}>Job Detail</Text>
        <View style={styles.body_container}>
          <HtmlView value={data.contents} />
        </View>
        <View style={styles.button_container}>
          <Button title={'Submit'} icon={'login'} onPress={handleSubmit} />
          <Button
            title={'Favorite Job'}
            icon={'heart'}
            onPress={handleFavoriteJob}
          />
        </View>
      </View>
    </ScrollView>
  );
}
export default Detail;
