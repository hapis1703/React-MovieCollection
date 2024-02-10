import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {ShowMovie} from '../components/AppComponents';

const RecommendedScreen = props => {
  const {route, navigation} = props;
  const sortedRecommended = route.params.sortedRating;
  return (
    <View style={{backgroundColor: 'black'}}>
      <FlatList
        data={sortedRecommended}
        keyExtractor={item => item.id}
        contentContainerStyle={lstyle.mainContainer}
        numColumns={2}
        key={2}
        renderItem={({item}) => {
          return (
            <ShowMovie
              image={{uri: item.imageLink}}
              title={item.title}
              viewers={item.viewers}
              isRecommended={true}
              rating={item.rating}
              onPress={() => navigation.navigate('DetailMovie', {item})}
            />
          );
        }}
      />
    </View>
  );
};
const lstyle = StyleSheet.create({
  mainContainer: {
    padding: 8,
  },
});

export default RecommendedScreen;
