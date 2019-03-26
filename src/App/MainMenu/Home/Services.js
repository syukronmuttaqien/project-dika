import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, View, Text, Button
} from 'native-base';
import ES from 'react-native-extended-stylesheet';
import Icon from '#/Icon';
import { FlatList } from 'react-native-gesture-handler';

// Styling
const styles = ES.create({
  container: {
    // flex: 1,
    // flexWrap: 'wrap',
    // flexDirection: 'row',
    // flexBasis: '30%',
    // alignItems: 'flex-start',
    // justifyContent: 'center',
    marginTop: 8
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 16,
    paddingHorizontal: 16
  },
  card: {
    // flex: 1,
    width: '33.34%',
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
  bottomBar: {
    borderRadius: 8,
    marginTop: 32,
    width: '30%',
    height: 8,
    backgroundColor: '$secondaryDark',
    alignSelf: 'center'
  }
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
const Services = ({ items }) => (
  <View>
    <View style={styles.textContainer}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 14 }}>Explore Qtime</Text>
        <Text style={{ color: 'grey', fontSize: 12 }}>Check out all services</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Button style={{ position: 'absolute', right: -10 }} transparent><Text style={{ color: 'grey' }}>View All</Text></Button>
      </View>
    </View>
    <FlatList
      style={{ marginTop: 8 }}
      data={items}
      renderItem={renderItem}
      numColumns={3}
      keyExtractor={(item, index) => index}
    />
    <View style={styles.bottomBar} />
  </View>
);

// Prop Types
Services.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.any.isRequired,
      icon: PropTypes.string,
      text: PropTypes.string
    }).isRequired
  ).isRequired,
};

export default Services;
