import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {s} from '../stylesheet';
import React, {useEffect} from 'react';
import {ShowMovie} from '../components/AppComponents';

const MostViewedScreen = props => {
  const {route, navigation} = props;
  const sortedMostViewed = route.params.sortedViews;
  return (
    <View style={{backgroundColor: 'black'}}>
      <FlatList
        contentContainerStyle={lstyle.mainDataContainer}
        data={sortedMostViewed}
        keyExtractor={item => item.id}
        numColumns={2}
        key={2}
        renderItem={({item}) => {
          return (
            <ShowMovie
              image={{uri: item.imageLink}}
              title={item.title}
              viewers={item.viewers}
              onPress={() => navigation.navigate('DetailMovie', {item})}
            />
          );
        }}
      />
    </View>
  );
};
const lstyle = StyleSheet.create({
  mainDataContainer: {
    padding: 8,
  },
  movieContainer: {
    margin: 8,
    padding: 16,
    backgroundColor: 'skyblue',
  },
  movieImage: {
    width: 130,
    height: 200,
  },
});

export default MostViewedScreen;
