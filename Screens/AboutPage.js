import React, {useState, useCallback} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  Text,
  Image,
  Linking,
} from 'react-native';

const Stack = createStackNavigator();
const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
  card: {
    backgroundColor: '#dfe2e6',
    alignContent: 'center',
    borderRadius: 2,
    borderWidth: 1,
    height: 300,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  titleCompany: {
    fontSize: 40,
    fontWeight: 'bold',
    position: 'absolute',
    top: 50,
    left: 150,
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  descriptionCompany: {
    marginLeft: 20,
    textAlign: 'center',
    fontSize: 13,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginVertical: 30,
  },
  button: {
    backgroundColor: '#59acf0',
    marginHorizontal: 20,
    marginVertical: 5,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoCompany: {
    marginLeft: 20,
    marginTop: 20,
    width: 120,
    height: 120,
  },
});
const aboutPageContent = () => {
  const openUrl = url => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView styles={styles.safearea}>
      <View style={styles.card}>
        <Image
          style={styles.logoCompany}
          source={require('../res/spinar.png')}
        />
        <Text style={styles.titleCompany}>SPINAR</Text>
        <Text style={styles.descriptionCompany}> Develop by Spinar Team</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              openUrl('mailto:info@spinar.mx');
            }}>
            <Text style={styles.buttonTitle}>Contact us!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              openUrl('http://spinarplus.com/');
            }}>
            <Text style={styles.buttonTitle}>Website</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}>
        <Image
          style={styles.logoCompany}
          source={require('../res/wikitude.png')}
        />
        <Text style={styles.titleCompany}>WIKITUDE</Text>
        <Text style={styles.descriptionCompany}>
          Wikitude SDK Version {"\n"}9.1.0
        </Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              openUrl('https://www.wikitude.com/');
            }}>
            <Text style={styles.buttonTitle}>Website</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const aboutPage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={aboutPageContent} />
    </Stack.Navigator>
  );
};
export default aboutPage;
