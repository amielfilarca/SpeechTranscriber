import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  BackgroundContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  TextTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 60,
  },container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  logo: {
    height: 200,
    width: 170,
    resizeMode: 'cover',
    marginBottom: 30,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#2c599d',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2c599d',
    fontFamily: 'Lato-Regular',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  });
  
  export default styles;