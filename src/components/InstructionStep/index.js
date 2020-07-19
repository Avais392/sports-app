import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import {Image} from 'react-native';

const InstructionStep = props => {
  useEffect(() => {}, []);
  return (
    <View style={{flex: 1, width: '100%'}}>
      <View style={styles.container}>
        <View style={styles.textView}>
        
          <Text style={styles.instructionNumber}>{props.number}</Text>
        </View>

        <Text style={styles.instructions}>{props.instruction}</Text>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require('../../assets/images/700.png')}
          />
        </View>
      </View>
    </View>
  );
};

InstructionStep.defaultProps = {
  number: '1',
  instruction: 'Helo World',
  imgSource: "{require('../../assets/images/700.png')}",
};

export default InstructionStep;
