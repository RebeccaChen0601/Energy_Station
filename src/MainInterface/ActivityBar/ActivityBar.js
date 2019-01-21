
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight , Alert} from 'react-native';

import Icon from  'react-native-vector-icons/FontAwesome';
import GoogleIcon from  'react-native-vector-icons/MaterialIcons';

const starIcon = (<Icon name="star" size={30} color="#FDBE51" />);
const excerciseIcon = (<Icon name="adjust" size={30} color="#FDBE51"/>);
const expandIcon = (<Icon name="angle-double-down" size={30} color="#FDBE51" />);
const starOutlineIcon = (<GoogleIcon name="gggyhy" size={30} color="#FDBE51"/>);

export default class ActivityBar extends Component {
    state = {
      
    };

    render() {
        const {activityName, EnergyPtr, Length} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.TextInfo}>
                  <Text style={styles.title}> {excerciseIcon} {activityName}
                      <Text style={styles.topline}> {starOutlineIcon} {expandIcon} </Text>
                  </Text>
                  <View style={styles.descriptions}>
                      <Text>Length: <Text style={styles.length}> {Length} mins </Text>
                      </Text>
                  </View>
                  <View style={styles.descriptions}>
                    <Text style={styles.EnergyContainer}>
                      Energy: 
                      <Text style={styles.Energy}> {EnergyPtr} pts </Text>
                    </Text>
                  </View>
                </View>
            </View>
          );
    }
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: 'white',
    marginTop: 20,
    marginHorizontal: 20,
    height: 100,
    justifyContent: 'center',
    borderRadius: 5,
  },
  topline:{
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  length: {
    backgroundColor: '#ddd9d9',
    borderRadius: 10,
    padding: 5,
  },
  TextInfo: {
    marginLeft: 20,
  },
  EnergyContainer: {
    color: 'green',
  },
  Energy:{
    backgroundColor: 'green',
    color: 'white',
  },
  descriptions:{
    marginLeft: 20,
    marginBottom: 5,
  }
});