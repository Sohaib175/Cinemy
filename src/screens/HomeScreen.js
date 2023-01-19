import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {API, IMAGE_POSTER_URL} from '../services/Api';
import axios from 'axios';
import {Image} from 'react-native';
const HomeScreen = () => {
  const [Images, setImages] = useState([]);

  let i = 0;
  tick = () => {
    slider.goToSlide(i);
    i += 1;
    if (i == Images.length) {
      i = 0;
    }
  };
  useEffect(() => {
    const timeout = setInterval(() => {
      this.tick();
    }, 5000);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 3}}>
        <AppIntroSlider
          data={Images}
          ref={ref => (slider = ref)}
          // slider={ref => ref}
          renderItem={({item, index}) => (
            <Image
              source={{
                uri: item,
              }}
              style={{flex: 1}}
              resizeMode="cover"
            />
          )}
          dotStyle={{backgroundColor: '#7466e3'}}
          showNextButton={false}
          showDoneButton={false}
          activeDotStyle={{backgroundColor: '#f77a55'}}
          dotClickEnabled={false}
        />
      </View>
      <View style={{flex: 5}}>
        <Button
          title="test"
          onPress={async () => {
            const res = await API.discover();
            console.log(res.data);

            const image = res.data.results.map(
              data => `${IMAGE_POSTER_URL}${data.backdrop_path}`,
            );

            let backImages = [];
            for (let i = 0; i < 10; i++) {
              backImages = [...backImages, image[i]];
            }
            setImages(backImages);
          }}
        />
        <Text>Home</Text>
        <Button
          title="test2"
          onPress={async () => {
            console.log(Images);
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
