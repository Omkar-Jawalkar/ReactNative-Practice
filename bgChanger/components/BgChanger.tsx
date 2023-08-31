import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function BgChanger() {
  const [bgColor, setBgColor] = useState('#000000');

  const randomColorGenerator = () => {
    //Write logic to generate color

    let color = '#';
    let colorGeneratorString = '123456789abcdef';
    for (let index = 0; index < 6; index++) {
      color +=
        colorGeneratorString[
          Math.floor(Math.random() * colorGeneratorString.length)
        ];
    }
    console.log('color', color);

    return color;
  };

  const handleBgColorChange = () => {
    const randomColor = randomColorGenerator();
    setBgColor(randomColor);
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={bgColor} />
        <View
          style={[
            styles.bgView,
            {
              backgroundColor: bgColor,
            },
          ]}>
          <View>
            <TouchableOpacity>
              <Button
                color={'green'}
                title="Press me"
                onPress={handleBgColorChange}
                touchSoundDisabled={false}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  bgView: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 'auto',
  },
});
