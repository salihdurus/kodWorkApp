import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import useFetch from '../../Hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Config from 'react-native-config';
import JobCard from '../../components/JobCard';
import styles from './Jobs.style';

function Jobs({navigation}) {
  const {data, loading, error} = useFetch(Config.API_URL + '?page=1');
  
  const handleJob = (id, name) => {
    navigation.navigate('DetailScreen', {id, name});
  };


  const renderJob = ({item}) => {
    return (
      <JobCard job={item} onSelect={() => handleJob(item.id, item.name)} />
    );
  };


  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data.results}
        renderItem={renderJob}
      />
    </View>
  );
}
export default Jobs;
