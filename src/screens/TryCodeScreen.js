import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {userData} from '../../data/TryCodeData';
const TryCodeScreen = () => {
  const compareAge = (a, b) => {
    const ageA = a.age;
    const ageB = b.age;

    if (ageA < ageB) {
      return 1;
    } else if (ageA > ageB) {
      return -1;
    } else {
      return 0;
    }
  };
  const sortedAge = [...userData].sort(compareAge);
  return (
    <View style={{flex: 1}}>
      <FlatList
        contentContainerStyle={{padding: 8}}
        data={sortedAge}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View
              style={[
                styles.containerAnItem,
                {
                  backgroundColor:
                    item.gender.toLowerCase() === 'male'
                      ? 'moccasin'
                      : 'lavender',
                },
              ]}>
              <Image source={{uri: item.imageLink}} style={styles.imageView} />
              <Text>{item.name}</Text>
              <Text>{item.gender}</Text>
              <Text>{item.age}</Text>
              {item.age >= 6 && item.age <= 12 ? (
                <Text>Child</Text>
              ) : item.age >= 13 && item.age <= 17 ? (
                <Text>Teen</Text>
              ) : item.age >= 18 && item.age <= 64 ? (
                <Text>Adult</Text>
              ) : null}
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerAnItem: {
    margin: 8,
    borderWidth: 1,
  },
  imageView: {
    width: 100,
    height: 100,
  },
});

export default TryCodeScreen;
