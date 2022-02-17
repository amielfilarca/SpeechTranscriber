import { TouchableOpacity, Text, View, Image, Button } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import imagePath from '../../constant/imagePath';
import styles from '../OnBoardingScreen/styles';
import navigationStrings from '../../constant/navigationStrings';


const OnBoardingScreen = ({ navigation }) => {

  const gotoLogin = () => {
    navigation.replace(navigationStrings.SLOGIN)
  }

  const Skip = ({...props}) => {
    return(
      <TouchableOpacity
      style ={styles.btnStyles}
      {...props}>
        <Text style={styles.btnText}>Skip</Text>
      </TouchableOpacity>
    )
  }

  const Next = ({...props}) => {
    return(
      <TouchableOpacity
      style ={styles.btnStyles}
      {...props}>
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>
    )
  }

  const Done = ({...props}) => {
    return(
      <TouchableOpacity
      style ={styles.btnStyles}
      {...props}>
        <Text style={styles.btnText}>Done</Text>
      </TouchableOpacity>
    )
  }


  return (
    <Onboarding 
  SkipButtonComponent={Skip}
  NextButtonComponent={Next}
  DoneButtonComponent={Done}
  onSkip={gotoLogin}
  onDone={gotoLogin}
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image 
      source={imagePath.OB1} 
      style = {styles.imagecontainer}/>,
      title: 'Create your Account',
      subtitle: 'User can able to register and login to their accounts',
    },
    {
      backgroundColor: '#fff',
      image: <Image 
      source={imagePath.OB2}
      style = {styles.imagecontainer}/>,
      title: 'Manage your account',
      subtitle: 'User can be able to edit their personal information',
    },
    {
      backgroundColor: '#fff',
      image: <Image 
      source={imagePath.OB3}
      style = {styles.imagecontainer} />,
      title: 'Privacy and Data Protection',
      subtitle: 'Securing the persons account and information',
    },
    {
      backgroundColor: '#fff',
      image: <Image 
      source={imagePath.OB4} 
      style = {styles.imagecontainer}
      />,
      title: 'Speech Transcription',
      subtitle: 'Real-time speech transcription using Google Speech Recognition',
    },{
      backgroundColor: '#fff',
      image: <Image source={imagePath.OB5} 
      style = {styles.imagecontainer}
      />,
      title: 'Transcription History',
      subtitle: 'Users can be able to review previous Transcriptions',
    },
    {
      backgroundColor: '#fff',
      image: <Image source={imagePath.OB6} 
      style = {styles.imagecontainer}
      />,
      title: 'User Reviews',
      subtitle: 'Gives us Feedback to improve our mobile application',
    },
  ]}
/>
  );
}

export default OnBoardingScreen;
