import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Container } from 'react-native-dezkit';

const ButtonScreen = () => {
  const onPress = () => {
    // console.log('hello');
  };
  return (
    <Container style={[styles.container]}>
      <Button type="text">Text Button</Button>
      <Button
        uppercase={false}
        type="default"
        color="primary"
        disabled
        onPress={onPress}
      >
        Default Button
      </Button>
      <Button type="default" outline>
        Default Outline
      </Button>

      <Button type="rounded" disabled>
        Rounded Button
      </Button>
      <Button type="rounded" outline>
        Rounded Outline
      </Button>
    </Container>
  );
};

export default ButtonScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
