import {
  StyleSheet,
  Text,
  Linking,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  const openWebsite = (openWebsite: string) => {
    Linking.openURL(openWebsite);
  };

  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <TouchableOpacity>
        <Button
          onPress={() => {
            openWebsite('https://twitter.com/omkarjawalkar');
          }}
          title="Twitter"
        />
      </TouchableOpacity>
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
});
