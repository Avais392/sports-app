import React from 'react';
import {View, Text, Image} from 'react-native';
import Modal from 'react-native-modalbox';
import styles from './styles';

class SaveBidsPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bidType: '',
    };
  }

  openModal = (bidType, gif) => {
    let bidText = '';
    switch (bidType) {
      case 'duplicate':
        bidText = 'Duplicate';
        break;
      case 'invalid':
        bidText = 'Invalid';
        break;
      case 'lowest_unique':
        bidText = 'Lowest Unique';
        break;
      case 'above_rrp':
        bidText = 'Above RRP';
        break;
      case 'non_unique':
        bidText = 'Non Unique';
        break;
      case 'Not enough bids':
        bidText = 'Not enough';
        break;
      default:
        bidText = 'Unique';
        break;
    }
    this.setState({
      bidType: bidText,
      gif,
    });
    this.refs.modal.open();
  };
  backgroundColor = bidType => {
    switch (bidType) {
      case 'Unique':
        return (
          <View style={{...styles.bidTypeView, backgroundColor: '#3c74b1'}}>
            <Text style={styles.bidTypeText}>{bidType} Bid</Text>
          </View>
        );
      case 'Lowest Unique':
        return (
          <View style={{...styles.bidTypeView, backgroundColor: '#bd2532'}}>
            <Text style={styles.bidTypeText}>{bidType} Bid</Text>
          </View>
        );
      default:
        return (
          <View style={{...styles.bidTypeView, backgroundColor: 'black'}}>
            <Text style={styles.bidTypeText}>{bidType} Bid</Text>
          </View>
        );
    }
  };
  render() {
    const {bidType} = this.state;
    return (
      <Modal ref={'modal'} position={'center'} style={styles.mainContainer}>
        {this.backgroundColor(bidType)}
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={
              this.state.gif
                ? {uri: this.state.gif}
                : {
                    uri:
                      'https://media1.tenor.com/images/b6162bee1f73faec40c213bf560b0a67/tenor.gif?itemid=4887561',
                  }
            }
          />
        </View>
        <View style={styles.offerView}>
          <Text style={styles.offerText}>Over 500 BIDS for just £1.99</Text>
        </View>
      </Modal>
    );
  }
}

export default SaveBidsPopup;
