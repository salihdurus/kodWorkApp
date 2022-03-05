import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styles from './FavoritedJobs.style';
import JobCard from '../../components/JobCard';
import Button from '../../components/Button';
import Detail from '../Detail';

function FavoritedJobs({navigation}) {
  const favoritedJobList = useSelector(s => s.favoriteJobs);
  const dispatch = useDispatch();

  const handleRemove = job => {
    dispatch({type: 'REMOVE_FAVORITE', payload: {job: job}});
  };

  const handleJobDetail = (id, name) => {
    navigation.navigate('DetailScreen', {id, name});
  };
  
  const renderFavoriteJob = ({item}) => {
    return (
      <View style={styles.container}>
        <JobCard
          job={item}
          onSelect={() => handleJobDetail(item.id, item.name)}>
          <Button title={'Remove'} onPress={() => handleRemove(item)} />
        </JobCard>
      </View>
    );
  };
  return (
    <View>
      <FlatList data={favoritedJobList} renderItem={renderFavoriteJob} />
    </View>
  );
}
export default FavoritedJobs;
