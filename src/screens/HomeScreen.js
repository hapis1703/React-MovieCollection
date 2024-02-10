import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {s} from '../stylesheet';
import {movieData} from '../../data/MovieData';
import {ShowMovie, ButtonComponent} from '../components/AppComponents';
import {useState, useEffect} from 'react';
import {Icon} from 'react-native-elements';

const HomeScreen = props => {
  const {navigation} = props;

  const compareRating = (a, b) => {
    const ratingA = a.rating;
    const ratingB = b.rating;

    if (ratingA > ratingB) {
      return -1;
    } else if (ratingA < ratingB) {
      return 1;
    } else {
      return 0;
    }
  };
  const compareViews = (a, b) => {
    const viewA = a.viewers;
    const viewB = b.viewers;
    if (viewA > viewB) {
      return -1;
    } else if (viewA < viewB) {
      return 1;
    } else {
      return 0;
    }
  };
  const sortedRating = [...movieData].sort(compareRating);
  const sortedViews = [...movieData].sort(compareViews);
  const threeRecommended = [];
  const threeMostViewed = [];
  for (let i = 0; i < 3; i++) {
    threeRecommended.push(sortedRating[i]);
    threeMostViewed.push(sortedViews[i]);
  }

  return (
    <View style={s.mainContainer}>
      <FlatList
        data={threeRecommended}
        keyExtractor={item => item.id}
        contentContainerStyle={s.flatListContainer}
        renderItem={({item}) => {
          return (
            <View style={s.dataContainer}>
              <Image style={s.movieImage} source={{uri: item.imageLink}} />
              <View style={s.movieDescriptionContainer}>
                <View style={s.movieTitleContainer}>
                  <Text style={s.title}>{item.title}</Text>
                </View>
                <View style={s.yearContainer}>
                  <Icon
                    name="calendar"
                    type="antdesign"
                    color={'white'}
                    size={18}
                    style={{marginRight: 2}}
                  />
                  <Text>{item.year}</Text>
                </View>
                {item.rating === 5 ? (
                  <Image
                    style={s.starRating}
                    source={require('../../assets/images/five-stars.png')}
                  />
                ) : item.rating === 4 ? (
                  <Image
                    style={s.starRating}
                    source={require('../../assets/images/four-stars.png')}
                  />
                ) : item.rating === 3 ? (
                  <Image
                    style={s.starRating}
                    source={require('../../assets/images/three-stars.png')}
                  />
                ) : item.rating === 2 ? (
                  <Image
                    style={s.starRating}
                    source={require('../../assets/images/two-stars.png')}
                  />
                ) : (
                  <Image
                    style={s.starRating}
                    source={require('../../assets/images/star.png')}
                  />
                )}
                <ButtonComponent
                  onPress={() => navigation.navigate('DetailMovie', {item})}
                />
              </View>
            </View>
          );
        }}
        ListHeaderComponent={
          <View>
            <View style={s.mainCategoryContainer}>
              <View style={s.categoryContainer}>
                <Text style={s.categoryText}>Most Viewed</Text>
              </View>
              <View style={s.seeAllContainer}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('MostViewed', {sortedViews})
                  }>
                  <Text style={s.seeAllText}>See All</Text>
                </TouchableOpacity>
              </View>
            </View>
            <FlatList
              horizontal
              data={threeMostViewed}
              keyExtractor={item => item.id}
              contentContainerStyle={{
                flex: threeMostViewed.length === 0 ? 1 : null,
              }}
              ListEmptyComponent={
                <View style={{alignItems: 'center', flex: 1}}>
                  <Text>No items in this category.</Text>
                </View>
              }
              renderItem={({item}) => {
                return (
                  <ShowMovie
                    image={{uri: item.imageLink}}
                    title={item.title}
                    viewers={item.viewers}
                    isHome={true}
                  />
                );
              }}
            />
            <View style={s.mainCategoryContainer}>
              <View style={s.categoryContainer}>
                <Text style={s.categoryText}>Recommended</Text>
              </View>
              <View style={s.seeAllContainer}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Recommended', {sortedRating})
                  }>
                  <Text style={s.seeAllText}>See All</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        }
        ListEmptyComponent={
          <View style={{alignItems: 'center'}}>
            <Text>No items in this category.</Text>
          </View>
        }
      />
    </View>
  );
};
export default HomeScreen;
