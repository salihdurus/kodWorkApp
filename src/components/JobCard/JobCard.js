import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './JobCard.style';

function JobCard({job, onSelect, children}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Text style={styles.title}>{job.name}</Text>
        <Text style={styles.company}>{job.company.name}</Text>
        <View style={styles.location_container}>
          <Text style={styles.location}>
            {job.locations.length > 0 ? job.locations[0].name : ''}
          </Text>
        </View>
        <Text style={styles.level}>
          {job.levels.length > 0 ? job.levels[0].name : ''}
        </Text>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
}
export default JobCard;
