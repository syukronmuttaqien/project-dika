/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { View, Text, Card } from 'native-base';

import ES from 'react-native-extended-stylesheet';
import Icon from '#/Icon';

// Styling
const styles = ES.create({
  textContainer: {
    flex: 1,
    marginTop: 16,
    paddingHorizontal: 16
  },
  card: {
    width: 180,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16
  },
  item: {
    padding: 16,
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Component
// eslint-disable-next-line react/prop-types
const renderItem = ({ item }) => (
  <View key={item.key} style={styles.card}>
    <Card style={styles.item}>
      <Icon name={item.icon} size={48} color={ES.value('$primary')} />
      <Text style={{ marginTop: 8, color: ES.value('$primary') }}>{item.text}</Text>
    </Card>
  </View>
);

// Exported Component
const Tips = ({ items }) => (
  <View>
    <View style={styles.textContainer}>
      <Text style={{ fontSize: 14 }}>Today's Tips</Text>
      <Text style={{ color: 'grey', fontSize: 12 }}>Daily Information Just For You</Text>
    </View>
    <FlatList
      style={{ marginTop: 8, paddingBottom: 16 }}
      data={items}
      renderItem={renderItem}
      horizontal
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
);

// Prop Types
Tips.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.any.isRequired,
      icon: PropTypes.string,
      text: PropTypes.string
    }).isRequired
  ).isRequired,
};

export default Tips;
