import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modalbox';
import styles from './styles';
import axios from 'axios';
import {Events} from '../../assets/Events';

class ApprovePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bidsRequired: 0,
    };
  }
  openModal = (approvedString, endpoint, data) => {
    this.refs.modal.open();
    const bidsRequired = approvedString.replace(/\D/g, '');
    this.setState({
      bidsRequired,
      endpoint,
      data,
    });
  };
  onApprove = () => {
    this.refs.modal.close();
    axios
      .post(this.state.endpoint, {...this.state.data, 'user-approved': 1})
      .then(response => {
        if (response.data.response.random) {
          Events.trigger(
            'change_bid_amount',
            parseInt(response.data.user['bids-left']),
          );
          Events.trigger('auctionScreenBidChange', parseInt(response.data.user['bids-left']));
          Events.trigger('buyBidsBidChange', parseInt(response.data.user['bids-left']));
          Events.trigger('single_auction_details', response.data.response);
          this.props.popup(
            response.data.response.random,
            response.data.response.image,
          );
        } else {
          this.props.popup('Not enough bids');
        }
      });
  };
  render() {
    return (
      <Modal position={'center'} ref={'modal'} style={styles.mainContainer}>
        <View style={styles.textView}>
          <Text style={styles.text}>
            This bid requires {this.state.bidsRequired} bid amount.
          </Text>
          <Text style={styles.text}>Do you wish to continue?</Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonView}
            onPress={() => this.onApprove()}>
            <Text style={styles.buttonText}>Approve</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonView}
            onPress={() => this.refs.modal.close()}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

export default ApprovePopup;
