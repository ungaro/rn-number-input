'use strict';

import React, {
  AppRegistry,
  StyleSheet,
  Dimensions,
  Animated,
  Text,
  View
} from 'react-native';

import NumberInput from './app/components/index';
import KeyboardSpacer from 'react-native-keyboard-spacer';

const $coral = '#347FD6';

class example extends React.Component {
  constructor() {
    super();
    this.state = {
      chickenWings: 1
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.form}>
          <Text style={styles.componentTitle}>{'<NumberInput />'}</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Chicken Wings:</Text>
            <NumberInput
              value={this.state.chickenWings}
              min={-10}
              max={10}
              decimalPoints={3}
              onChange={(value) => this.setState({ chickenWings: value })}
              arrowColour={$coral}
              width={70}
              height={40}
            />
          </View>
        </View>

        <KeyboardSpacer />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    paddingBottom: 50,
  },
  componentTitle: {
    marginBottom: 50,
    fontSize: 20
  },
  form: {
    width: 200,
    justifyContent: 'center'
  },
  label: {
    fontStyle: 'italic'
  },
  componentTitle: {
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 25,
    fontSize: 16,
    color: $coral
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#C4C4C4',
    paddingTop: 10,
    borderBottomWidth: 1,
    paddingBottom: 10,
  }
});

AppRegistry.registerComponent('example', () => example);
