import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {WikitudeView} from 'react-native-wikitude-sdk';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Share from "react-native-share";
const styles = StyleSheet.create({
  AR: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
const Wikitude = ({route, navigation}) => {
  const wikitudeView = useRef(null);
  const [isFocus, setFocus] = useState(false);

  console.log('URL WIKITUDE: ', route.params.url);

  useEffect(() => {
    const subscribeFocus = navigation.addListener('blur', () => {
      console.log('Is blur');
      if (wikitudeView.current) {
        //wikitudeView.current.stopRendering();
      }
      setFocus(false);
    });
    navigation.addListener('focus', () => {
      console.log('Is focus');
      setFocus(true);
      if (wikitudeView.current) {
        //wikitudeView.current.resumeRendering();
      }
    });
    navigation.setOptions({
      headerRight: () => (
        <Icon name="camera" size={40} onPress={() => takeScreenshot()} />
      ),
    });
    return subscribeFocus;
  }, [navigation]);
  const config = {
    licenseKey:
      '1ZHYffmOd1wZioa1Je/vyzCgxPX8IYpVpKgKxTls2Y5EcfvTBhqT7p7a7h5fOLJZQWbFMsyf4WFZbpzL17KD/t3m1xApb9fTxoRoaHK7SXaLtUq7XuBoM+EmzeI5Hs/pvXzrcXlwRrpREphJuEBASvXGzeIK4X12rRV549SHTpZTYWx0ZWRfX51FvvjJaXcKp+g73pPTYlXQFcBpVmRd3kJdmVbD6HdQkvdNqoYH7etLXvZ0lzyi4jiFowAF2tod9Sk9vQ4+0DOgWaQGxbMPZ6pxMK7Xm0cwVA4YwwWzjRhVNRfntyKjrlTOihI3+SIjSpxqWVDxvn0q92TAVcUTtviypGjAmCmtlzc63jTLepQh00KJIMv095qt/Qf7vxVylGciR/Mq6obVPWMZfj1tt/3eHgvnmTlNscCApizLzMKIQ3iV5gm/l3L4XH24h9fQISsuF4BsgpUHN+EzHVUW+INF9XNa1h3dum/+0VVRwxT7vrMNiTiQJ/ipINcd3WMujvBt8rUDEgU/8mkeGe+D0baqq7uN/q27pRorwZBtPO3C+jyXL+vFXNFyHSYmXYZdrnexvUnxa6mZ7UiOJu4pDL8OMQ8g1qJe3BcGZX4wo5rLP8h6i/i1ShjVv8F9JKwh/qVSz5ZtOqvK6n61h4MA89Hc8xt7T/7fv8MAnWWGxJdkrA5BqSqnsFmnnTq9yOZ0MB2xeIjhtMI6qWkwEdpSWQFidzWQrVmCXPrVc/CAQD7RWI6+KyF20wzQH7S5wrtvwZK2Og5vbe2dqeLWdvQsCGzPJLmREkV/Q83ABzagPouJ4/6NoQQO6qed2E8Xua+deyWWrMLew02mEje2+f6LF38z4mn/ntMk5zv6Tl53plg=',
    url: route.params.url,
  };
  const takeScreenshot = () => {
    if (wikitudeView.current) {
      wikitudeView.current.captureScreen(true);
    }
  };
  const onFinishLoading = event => {
    // event.success = true
    //This event is called when the html is finish loaded
    //For fail event, use onFailLoading
    console.log('On Finish Loading');
  };
  const onJsonReceived = object => {
    console.log(object);
  };

  const onFailLoading = event => {
    console.log(event);
  };

  const onScreenCaptured = event => {
    if(!event.image) return;
    
    Share.open({
      message: 'Share this awesome AR with Wikitude',
      title: 'SpinAR Team',
      url: event.image,
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };
  if (!isFocus) {
    return <SafeAreaView />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <WikitudeView
          ref={wikitudeView}
          licenseKey={config.licenseKey}
          url={config.url}
          style={styles.AR}
          onFailLoading={onFailLoading}
          onJsonReceived={onJsonReceived}
          onFinishLoading={onFinishLoading}
          onScreenCaptured={onScreenCaptured}
        />
      </SafeAreaView>
    );
  }
};
export default Wikitude;
