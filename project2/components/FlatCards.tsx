import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>

      <View style={styles.flatCardsContainer}>
        <View style={[styles.flatCard, styles.customFlatCardStylesOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.flatCard, styles.customFlatCardStylesTwo]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.flatCard, styles.customFlatCardStylesThree]}>
          <Text>Green</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 12,
    marginHorizontal: 15,
  },

  flatCardsContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 12,
  },

  flatCard: {
    width: 100,
    height: 100,
    margin: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  customFlatCardStylesOne: {
    backgroundColor: 'red',
    borderRadius: 8,
  },
  customFlatCardStylesTwo: {
    backgroundColor: 'green',
    borderRadius: 8,
  },
  customFlatCardStylesThree: {
    backgroundColor: 'blue',
    borderRadius: 8,
  },
});
