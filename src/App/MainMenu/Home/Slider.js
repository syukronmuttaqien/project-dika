import React from 'react';
import ES from 'react-native-extended-stylesheet';

import { Image, View } from 'react-native';
import { Text } from 'native-base';
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';


import ImageBG from '!/Background/bg_main_menu.png';

// Styling
const styles = ES.create({
  image: {
    width: '100%',
    height: 240,
    backgroundColor: 'transparent'
  },
  viewPagerItem: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewPagerText: {
    padding: 32,
    position: 'absolute',
    color: '$textColorPrimary',
    fontSize: 18
  }
});

// Component
const ViewPager = ({ children }) => {
  const indicator = () => (
    <PagerDotIndicator pageCount={React.Children.count(children)} />
  );

  return (
    <View style={{ flex: 1 }}>
      <IndicatorViewPager style={{ height: 240 }} indicator={indicator()}>
        {children}
      </IndicatorViewPager>
    </View>
  );
};

// Exported Component
const Slider = () => (
  <ViewPager>
    <View style={styles.viewPagerItem}>
      <Image resizeMode="stretch" style={styles.image} square source={ImageBG} />
      <Text style={styles.viewPagerText}> Hello 1 </Text>
    </View>
    <View style={styles.viewPagerItem}>
      <Image resizeMode="stretch" style={styles.image} square source={ImageBG} />
      <Text style={styles.viewPagerText}> Hello 2 </Text>
    </View>
    <View style={styles.viewPagerItem}>
      <Image resizeMode="stretch" style={styles.image} square source={ImageBG} />
      <Text style={styles.viewPagerText}> Hello 3 </Text>
    </View>
  </ViewPager>
);

export default Slider;
