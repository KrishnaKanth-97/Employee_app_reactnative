import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';
import navigationService from '../../service/navigationService';
import { logout } from '../../actions/action';
import { TouchableOpacity } from 'react-native-gesture-handler';

class HomeScreen extends Component {

  static navigationOptions = () => {
    return {
      title: '',
      headerStyle: {
        backgroundColor: '#00AFCC',
        elevation: 0,
        shadowOpacity: 0,
        height: 50
      },
      headerRight: (
        <TouchableOpacity
          onPress={() => {
            navigationService.navigate('SignIn');
          }}
        >
          <Image
            source={require('../../assets/exit.png')}
            style={{ width: 22, height: 22, marginRight: 15 }}
          />
        </TouchableOpacity>
      ),
      headerLeft: null
      ,
    }
  };


  render() {
    const { username, EmployeeList } = this.props;
    const name = username.substring(0, username.lastIndexOf("@"));
    return (
      <View style={styles.container}>
        <View style={styles.generalView}>
          <View style={styles.generalTitle}>
            <Text style={styles.subHeadingOne}>
              Welcome {name}
            </Text>
            <Text style={styles.subHeadingTwo}>
              Have a nice day
            </Text>
          </View>
          <Image
            resizeMode='center'
            source={require('../../assets/male.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.listContainer}>
          <Text style={{ fontSize: 12 }}>
            Employee List
          </Text>
          <View style={{ borderBottomColor: '#C8C8C8', borderBottomWidth: 1, marginVertical: 5 }}>
          </View>
          <FlatList
            data={EmployeeList.user}
            numColumns={2}
            renderItem={(item) =>
              <View style={styles.gridBox}>
                <View style={{ height: 54, flexDirection: 'row' }}>
                  <Image
                    resizeMode='center'
                    source={require('../../assets/male.png')}
                    style={styles.smallLogo}
                  />
                  <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 12 }}>
                      Name: {item.item.name}
                    </Text>
                    <Text style={{ fontSize: 12 }}>
                      Age: {item.item.age}
                    </Text>
                  </View>
                </View>
                <View style={{ borderBottomColor: '#C8C8C8', borderBottomWidth: 1, marginVertical: 5, marginHorizontal: 10 }}>
                </View>
                <View style={{ height: 55, flexDirection: 'row' }}>
                  <Image
                    resizeMode='center'
                    source={require('../../assets/phoneLogo.png')}
                    style={styles.mailLogo}
                  />
                  <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                    <Text style={{ fontSize: 12, color: '#00AFCC'}}>
                      {item.item.phoneNo}
                    </Text>
                    <Text style={{ fontSize: 12, color: '#00AFCC', marginTop: 5 }}>
                      {item.item.email}
                    </Text>
                  </View>
                </View>
              </View>}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}


function mapStateToProps(state) {
  return {
    username: state.auth.username,
    EmployeeList: state.auth.EmployeeList
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE'
  },
  generalView: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
  },
  logo: {
    height: 80,
    width: 80,
    position: 'absolute',
    right: 0,
    backgroundColor: 'white',
    borderRadius: 30,
    marginRight: 10
  },
  smallLogo: {
    height: 38,
    width: 32,
    borderRadius: 30,
    margin: 10,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  generalTitle: {
    alignSelf: 'flex-start',
    paddingLeft: 10
  },
  subHeadingOne: {
    fontSize: 18,
  },
  subHeadingTwo: {
    fontSize: 14,
    paddingTop: 4
  },
  listContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
  },
  gridBox: {
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    width: '45%',
    height: 115,
    margin: 10
  },
  mailLogo: {
    height: 28,
    width: 28,
    margin: 8,
    marginLeft: 15
  }
})

export default connect(mapStateToProps, { logout })(HomeScreen);
