import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

export default function FancyCard() {
  const [err, setErr] = useState('');

  return (
    <View
      style={{
        marginVertical: 14,
      }}>
      <Text style={styles.headingText}>Trending Places</Text>

      <View style={styles.cardContainer}>
        <Image
          style={styles.image}
          source={{uri: 'https://picsum.photos/400/400'}}
          onError={e => {
            console.log(e.nativeEvent.error);
          }}
        />
        <Text style={[styles.imageLabel, styles.colorText]}>Shoes</Text>
        <Text style={styles.colorText}>COOl</Text>
        <Text style={styles.colorText}>Super Cool</Text>
        <Text style={styles.colorText}>
          Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolorum quod laborum corrupti id cumque maxime, consectetur aut fugiat
          nemo provident error eligendi rerum? At vitae suscipit voluptatum
          consequuntur, error deleniti!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 12,
    marginHorizontal: 15,
  },

  card: {},
  cardEleveted: {},

  imageLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  colorText: {
    color: 'black',
    marginVertical: 6,
  },
  image: {
    width: 305,
    height: 180,
    resizeMode: 'stretch',
  },
  cardContainer: {
    marginHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 5,
  },
});
