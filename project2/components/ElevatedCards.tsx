import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';

export default function ElevatedCards() {
  const [cardsCount, setCardsCount] = useState(new Array(10));
  return (
    <>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView style={styles.scrollviewStyles} horizontal={true}>
        {cardsCount.map((count, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.textStyles}> {`${count}`}</Text>
          </View>
        ))}

        <View style={styles.card}>
          <Text style={styles.textStyles}>Elevated Cards</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.textStyles}>Elevated Cards</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.textStyles}>Elevated Cards</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.textStyles}>Elevated Cards</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.textStyles}>Elevated Cards</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.textStyles}>Elevated Cards</Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 12,
    marginHorizontal: 15,
  },

  scrollviewStyles: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  card: {
    width: 100,
    height: 100,
    margin: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  textStyles: {
    color: 'black',
  },
});
