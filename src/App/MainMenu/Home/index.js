import React, { Component } from 'react';
import {} from 'react-native';
import { Container, Content } from 'native-base';
import ES from 'react-native-extended-stylesheet';
// import { ScrollView } from 'react-native-gesture-handler';
// Import From Asset

// Local Component
import Header from './Header';
import Slider from './Slider';
import Services from './Services';
import Tips from './Tips';

const styles = ES.create({
  container: {
    backgroundColor: '$secondary'
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          key: 1,
          icon: 'stethoscope',
          text: 'Check Up',
        },
        {
          key: 2,
          icon: 'user-circle',
          text: 'Register',
        },
        {
          key: 3,
          icon: 'user-circle',
          text: 'Family',
        },
      ],
      tips: [
        {
          key: 1,
          icon: 'comment-dots',
          text: 'Tips 1',
        },
        {
          key: 2,
          icon: 'comment-dots',
          text: 'Tips 2',
        },
        {
          key: 3,
          icon: 'comment-dots',
          text: 'Tips 3',
        },
        {
          key: 4,
          icon: 'comment-dots',
          text: 'Tips 4',
        },
        {
          key: 5,
          icon: 'comment-dots',
          text: 'Tips 5',
        },
        {
          key: 6,
          icon: 'comment-dots',
          text: 'Tips 6',
        },
        {
          key: 7,
          icon: 'comment-dots',
          text: 'Tips 7',
        },
        {
          key: 8,
          icon: 'comment-dots',
          text: 'Tips 8',
        },
        {
          key: 9,
          icon: 'comment-dots',
          text: 'Tips 9',
        },
      ],
    };
  }

  render() {
    const { services, tips } = this.state;
    return (
      <Container style={styles.container}>
        <Content>
          <Header />
          <Slider />
          <Services items={services} />
          <Tips items={tips} />
        </Content>
      </Container>
    );
  }
}

export default Home;
