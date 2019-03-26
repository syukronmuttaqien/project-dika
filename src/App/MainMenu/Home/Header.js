import React from 'react';
import {
  View, Button, Text
} from 'native-base';

import Icon from '#/Icon';
import ES from 'react-native-extended-stylesheet';

const styles = ES.create({
  navbar: {
    padding: 8,
    flexDirection: 'row',
    width: '100%',
    height: 48,
    position: 'absolute',
    top: 0,
    zIndex: 99,
  },
  title: {
    flex: 1,
    height: '100%',
  },

  leftBtn: {
    paddingLeft: 8,
  },

  rightBtn: {
    paddingRight: 8,
  },
});


const Header = () => (
  <View style={styles.navbar}>
    <Button style={styles.leftBtn} transparent>
      <Icon size={30} color={ES.value('$textColorPrimary')} name="user-circle" />
    </Button>
    <View style={styles.title}>
      <Text>&nbsp;</Text>
    </View>
    <Button style={styles.rightBtn} transparent>
      <Icon size={24} color={ES.value('$textColorPrimary')} name="bell" />
    </Button>
  </View>
);

export default Header;
