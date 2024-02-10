import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {s} from '../stylesheet';
import {Icon} from 'react-native-elements';

export const ShowMovie = props => {
  const {image, title, viewers, isHome, rating, isRecommended} = props;
  let viewsComa = viewers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return (
    <View style={[s.horizontalDataContainer, {flex: isHome ? null : 1}]}>
      <Image style={s.movieImage} source={image} />
      <View style={s.horizontalTitleContainer}>
        <Text style={s.horizontalTitle}>{title}</Text>
      </View>
      {isRecommended ? (
        <View>
          {rating === 5 ? (
            <Image
              source={require('../../assets/images/five-stars.png')}
              style={ls.ratingImage}
            />
          ) : rating === 4 ? (
            <Image
              source={require('../../assets/images/four-stars.png')}
              style={ls.ratingImage}
            />
          ) : rating === 3 ? (
            <Image
              source={require('../../assets/images/three-stars.png')}
              style={ls.ratingImage}
            />
          ) : rating === 2 ? (
            <Image
              source={require('../../assets/images/two-stars.png')}
              style={ls.ratingImage}
            />
          ) : (
            <Image
              source={require('../../assets/images/star.png')}
              style={ls.ratingImage}
            />
          )}
        </View>
      ) : (
        <View style={s.viewersContainer}>
          <Icon name="eye" type="entypo" size={18} color={'white'} />
          <View style={s.viewersText}>
            <Text>{viewsComa}</Text>
          </View>
        </View>
      )}
      {isHome ? null : <ButtonComponent {...props} />}
    </View>
  );
};

export const ButtonComponent = props => {
  return (
    <View style={ls.mainButtonContainer}>
      <View style={ls.buttonContainer}>
        <TouchableOpacity {...props}>
          <Text style={{color: 'black'}}>SEE DETAILS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export const MovieExplanation = props => {
  const {name, value, isRating, rating} = props;
  return (
    <View style={ls.mainContainer}>
      <View style={ls.nameContainer}>
        <Text style={ls.generalFontSize}>{name}</Text>
      </View>
      <Text style={ls.generalFontSize}>: </Text>
      <View style={ls.valueContainer}>
        {isRating === true ? (
          rating === 5 ? (
            <Image
              style={ls.ratingImage}
              source={require('../../assets/images/five-stars.png')}
            />
          ) : rating === 4 ? (
            <Image
              style={ls.ratingImage}
              source={require('../../assets/images/four-stars.png')}
            />
          ) : rating === 3 ? (
            <Image
              style={ls.ratingImage}
              source={require('../../assets/images/three-stars.png')}
            />
          ) : rating === 2 ? (
            <Image
              style={ls.ratingImage}
              source={require('../../assets/images/two-stars.png')}
            />
          ) : (
            <Image
              style={ls.ratingImage}
              source={require('../../assets/images/star.png')}
            />
          )
        ) : (
          <Text style={ls.textValue}>{value}</Text>
        )}
      </View>
    </View>
  );
};

const ls = StyleSheet.create({
  mainButtonContainer: {
    alignItems: 'baseline',
  },
  buttonContainer: {
    marginTop: 8,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#cce6cc',
  },
  mainContainer: {
    flexDirection: 'row',
    margin: 8,
  },
  nameContainer: {
    flex: 1,
  },
  generalFontSize: {
    fontSize: 16,
  },
  valueContainer: {
    flex: 3,
  },
  textValue: {
    textAlign: 'justify',
    fontSize: 16,
  },
  ratingImage: {
    width: 100,
    height: 20,
  },
});
