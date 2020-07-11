import React, {useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  SectionList,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ExperiencesDetail from './wikitudeComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    marginHorizontal: 16,
  },
  icon: {
    alignContent: 'center',
    width: 40,
    marginHorizontal: 20,
  },
  safeArea: {
    flex: 1,
  },
  list: {
    flex: 1,
    width: '100%',
  },
  header: {
    backgroundColor: '#ededed',
    paddingLeft: 40,
    marginVertical: 8,
    alignContent: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    paddingLeft: 40,
    marginVertical: 8,
    alignContent: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    fontSize: 16,
    color: 'black',
    alignContent: 'center',
    margin: 'auto',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

const ExperiencesContent = props => {
  const experiencesData = [
    {
      title: 'Image Tracking',
      url: '/assets/ARchitectExamples/01_ImageTracking_1_ImageOnTarget/index',
      icon: 'photo',
      id: 1,
    },
    {
      title: 'Instant Tracking',
      url:
        '/assets/ARchitectExamples/05_InstantTracking_1_SimpleInstantTracking/index',
      icon: 'layers',
      id: 2,
    },
    {
      title: 'Object Tracking',
      url:
        '/assets/ARchitectExamples/06_ObjectTracking_1_BasicObjectTracking/index',
      icon: 'smartphone',
      id: 3,
    },
    {
      title: 'Geo Location(POI)',
      url: '/assets/ARchitectExamples/08_PointOfInterest_1_PoiAtLocation/index',
      icon: 'place',
      id: 4,
    },
  ];

  const sectionedExperiences = [
    {
      title: {name: 'Video', icon: 'video-label'},
      data: [
        {
          title: 'Simple Video',
          url: '/assets/ARchitectExamples/11_Video_1_SimpleVideo/index',
        },
        {
          title: 'Playback States',
          url: '/assets/ARchitectExamples/11_Video_2_PlaybackStates/index',
        },
        {
          title: 'Snapping Video',
          url: '/assets/ARchitectExamples/11_Video_3_SnappingVideo/index',
        },
        {
          title: 'Bonus: Transparent Video',
          url:
            '/assets/ARchitectExamples/11_Video_4_Bonus-TransparentVideo/index',
        },
      ],
    },
    {
      title: {name: 'Image Recognition', icon: 'photo'},
      data: [
        {
          title: 'Image on Target',
          url:
            '/assets/ARchitectExamples/01_ImageTracking_1_ImageOnTarget/index',
        },
        {
          title: 'Different Targets',
          url:
            '/assets/ARchitectExamples/01_ImageTracking_2_DifferentTargets/index',
        },
        {
          title: 'Interactivity',
          url:
            '/assets/ARchitectExamples/01_ImageTracking_3_Interactivity/index',
        },
        {
          title: 'Html Drawable',
          url:
            '/assets/ARchitectExamples/01_ImageTracking_4_HtmlDrawable/index',
        },
        {
          title: '3D Model on Target',
          url: '/assets/ARchitectExamples/07_3dModels_1_3dModelOnTarget/index',
        },
        {
          title: 'Appearing Animation',
          url:
            '/assets/ARchitectExamples/07_3dModels_2_AppearingAnimation/index',
        },
        {
          title: 'Snap To Screen',
          url: '/assets/ARchitectExamples/07_3dModels_4_SnapToScreen/index',
        },
        {
          title: 'Bonus: Sparkles',
          url:
            '/assets/ARchitectExamples/01_ImageTracking_5_Bonus-Sparkles/index',
        },
        {
          title: 'Gestures',
          url:
            '/assets/ARchitectExamples/02_AdvancedImageTracking_1_Gestures/index',
        },
        {
          title: 'Distance To Target',
          url:
            '/assets/ARchitectExamples/02_AdvancedImageTracking_2_DistanceToTarget/index',
        },
        {
          title: 'Extended Tracking',
          url:
            '/assets/ARchitectExamples/02_AdvancedImageTracking_3_ExtendedTracking/index',
        },
        {
          title: 'Multiple Targets',
          url:
            '/assets/ARchitectExamples/03_MultipleTargets_1_MultipleTargets/index',
        },
        {
          title: 'Distance Between Targets',
          url:
            '/assets/ARchitectExamples/03_MultipleTargets_2_DistanceBetweenTargets/index',
        },
        {
          title: 'Transformation Between Targets',
          url:
            '/assets/ARchitectExamples/03_MultipleTargets_3_TransformationBetweenTargets/index',
        },
        {
          title: 'Transformation Between Targets',
          url:
            '/assets/ARchitectExamples/03_MultipleTargets_3_TransformationBetweenTargets/index',
        },
      ],
    },
    {
      title: {name: 'Cloud Recognition', icon: 'cloud'},
      data: [
        {
          title: 'Single Image Recognition',
          url:
            '/assets/ARchitectExamples/04_CloudRecognition_1_SingleImageRecognition/index',
        },
        {
          title: 'Continuous Image Recognition',
          url:
            '/assets/ARchitectExamples/04_CloudRecognition_2_ContinuousImageRecognition/index',
        },
        {
          title: 'Using Response Metainformation',
          url:
            '/assets/ARchitectExamples/04_CloudRecognition_3_UsingMetainformationInTheResponse/index',
        },
      ],
    },
    {
      title: {name: 'Instant Tracking', icon: 'layers'},
      data: [
        {
          title: 'Image Tracking',
          url:
            '/assets/ARchitectExamples/05_InstantTracking_1_SimpleInstantTracking/index',
        },
        {
          title: '3D Model on Plane',
          url:
            '/assets/ARchitectExamples/05_InstantTracking_2_3dModelOnPlane/index',
        },
        {
          title: 'Interactivity',
          url:
            '/assets/ARchitectExamples/05_InstantTracking_3_Interactivity/index',
        },
        {
          title: 'Scene Interaction',
          url:
            '/assets/ARchitectExamples/05_InstantTracking_4_SceneInteraction/index',
        },
      ],
    },
    {
      title: {name: 'Object Tracking', icon: 'smartphone'},
      data: [
        {
          title: 'Object Tracking',
          url:
            '/assets/ARchitectExamples/06_ObjectTracking_1_BasicObjectTracking/index',
        },
        {
          title: '2D Image and Sound Augmentations',
          url:
            '/assets/ARchitectExamples/06_ObjectTracking_2_2dImageAndSoundAugmentations/index',
        },
        {
          title: 'Animated 3D Augmentations',
          url:
            '/assets/ARchitectExamples/06_ObjectTracking_3_Animated3dAugmentations/index',
        },
        {
          title: 'Animated 3D Augmentations',
          url:
            '/assets/ARchitectExamples/06_ObjectTracking_4_ExtendedObjectTracking/index',
        },
      ],
    },
    {
      title: {name: 'Geo Location Tracking', icon: 'place'},
      data: [
        {
          title: 'Poi At Location',
          url:
            '/assets/ARchitectExamples/08_PointOfInterest_1_PoiAtLocation/index',
        },
        {
          title: 'Poi With Label',
          url:
            '/assets/ARchitectExamples/08_PointOfInterest_2_PoiWithLabel/index',
        },
        {
          title: 'Multiple Pois',
          url:
            '/assets/ARchitectExamples/08_PointOfInterest_3_MultiplePois/index',
        },
        {
          title: 'Selecting Pois',
          url:
            '/assets/ARchitectExamples/08_PointOfInterest_4_SelectingPois/index',
        },
        {
          title: 'Presenting Details',
          url:
            '/assets/ARchitectExamples/10_BrowsingPois_1_PresentingDetails/index',
        },
      ],
    },
  ];
  const openWikitude = url => {
    console.log(props);
    // eslint-disable-next-line no-undef
    if (Platform.OS === 'android') {
      url = url.replace('/assets/', '');
    }
    props.navigation.navigate('Details', {url: url});
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <SectionList
        style={styles.list}
        sections={sectionedExperiences}
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.header}>
            <Icon
              name={title.icon}
              size={40}
              color="#900"
              style={styles.icon}
            />
            <Text style={styles.title}>{title.name}</Text>
          </View>
        )}
        renderItem={({item}) => (
          <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
            onPress={() => openWikitude(item.url)}
            style={styles.item}>
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </TouchableHighlight>
        )}
        keyExtractor={(item, index) => item + index}
      />
    </SafeAreaView>
  );
};

const Experiences = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Experiences" component={ExperiencesContent} />
      <Stack.Screen name="Details" component={ExperiencesDetail} />
    </Stack.Navigator>
  );
};

export default Experiences;
