/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect,useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {WikitudeView} from 'react-native-wikitude-sdk';
const config = {
  licenseKey: 'SM77tH5TA9wTlRnJfaovgS3hDg0OjDbL9cn6A3Nv5Qbozpn+tuhDkBA6sVLPCj1YXt/u+A50ZAO4oIpORPcuZq5sivcE9TpEKibNvTs2O8y2POZXCCOLeoH9IXwOtbHgrdQxv8KIp4y0nWwzMX5J00pRUzbwUSvWoYg0GutYAKdTYWx0ZWRfX0pInanyhBWDZ6pUxiswXqcwN5/QdrrhDPI1MnmzNckZAU2zfgVEiTwmMgiJfOr6IccFYtkR5UnCk+4kpdIeCbupNmzMPjKNJdEMZ2woFQDuyKjchhMna4oSR8jktMlTyJbWYxKUZDiYiHTC6uYcpJjHG++PIv11uL6rVAZqBTqGYVnhKbdrY8RpxBIJh9wS4pWMo8mFDwO6Y58U8JOlm0G7BnsZtFN6fPoo+KYDW02J+QjLKrcHsYiloeShrjJQHGvCkknSNcBSkq7Yj87fDWCIqBf76cQCjq0kV4RZhKss8FC6d8DalZuahTm0mzWXMICJSrX8aweonAAWX5NJT6F8AyHicaXpZpM47WXJULkrChkGQ5AXUelhzwFKS3sivZIBegIcfKx8Ab9PFbhpbL0uVJ/rfc2nc2ryzkHLPYTx2wI0jXdgijvFiMyyJgVGV3LO+9wCrYv6o2zfRD68uhRBMDFNNUgrNiEF1Tmn/Pf4J3llher1bbI6QE/p+OWhW2jZWGBXeqKk0k5GLkJJpzIFklu/sODNBjfJt1K0BJkRuR1iQaA5hsstQakTUIBJ6Peuji4qWWXdPoczipGNglTOal3eqiac5qf54V1GO2SDoq+9gjpXYgEDVZOQ7gNLtwuheVHzlKoLCrUUxWBheZS2Gjn3MrAfrljqq/13MNcE3xysll6pob8=',
  url: 'http://spinar-dev.com/wikitude/We3/principal/index.html',
}


const App = ()=>{

  const wikitudeView = useRef(null)

  useEffect(() => {
    //wikitudeView.resumeRendering();
   console.log(wikitudeView.current.setWorldUrl(config.url));
  }, []);
  const onFinishLoading = event => {
    // event.success = true
    //This event is called when the html is finish loaded
    //For fail event, use onFailLoading
    console.log(event);
    this.refs.wikitudeView.callJavascript("alert('On event')");
  };
  const onJsonReceived = object => {
    console.log(object);
  };

  const onFailLoading = event =>{
    console.log(event);
  };
  return (
    <SafeAreaView style={styles.container}>
      <WikitudeView
        ref={wikitudeView}
        licenseKey={config.licenseKey}
        url={config.url}
        worldUrl={config.url}
        style={styles.AR}
        onFailLoading={onFailLoading}
        onJsonReceived={onJsonReceived}
        onFinishLoading={onFinishLoading}
      />
    </SafeAreaView>
  )
}
function Separator() {
  return <View style={styles.separator} />;
}
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
    marginTop: 30,
    backgroundColor: 'transparent',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
