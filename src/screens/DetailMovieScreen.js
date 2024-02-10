import {View, Text, Image} from 'react-native';
import React from 'react';
import {s} from '../stylesheet';
import {MovieExplanation} from '../components/AppComponents';

const DetailMovieScreen = props => {
  const {route} = props;
  const movie = route.params.item;
  const viewers = movie.viewers;
  let viewsComa = viewers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return (
    <View style={s.mainContainer}>
      <View style={s.movieContainer}>
        <View style={s.middle}>
          <Image style={s.image} source={{uri: movie.imageLink}} />
        </View>
        <View style={s.titleContainer}>
          <Text style={s.titleDetail}>{movie.title}</Text>
        </View>
        <MovieExplanation value={movie.year} name="Release year" />
        <MovieExplanation name="Starring" value={movie.starring} />
        <MovieExplanation name="Description" value={movie.description} />
        <MovieExplanation name="Viewers" value={viewsComa} />
        <MovieExplanation name="Rating" isRating={true} rating={movie.rating} />
      </View>
    </View>
  );
};

export default DetailMovieScreen;
