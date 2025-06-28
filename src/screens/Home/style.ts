import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#233',
    paddingTop: 35,
    paddingLeft: 15
  },
  ScrollView: {
    backgroundColor: '#232'
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loc_box: {
    flex: 1,
    flexDirection: 'column'
  },
  title: { fontSize: 20, marginBottom: 20 },
  stretch: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 15,
    resizeMode: 'stretch',
  },
  searchbox: {
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5
  },
  box1: {
    flex: 1,
    justifyContent: 'space-around',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5
  },
  logocard: {
    marginBottom: 20,
    alignItems: 'center'
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btntext: {
    marginLeft: 10,
  },
  logo: {

    aspectRatio: 2,
    resizeMode: 'contain',
    marginBottom: 35,
  },
  textinput: {
    width: 322,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,

  },
  btn_footer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },

  weather_card: {
    marginTop: 20,
    justifyContent: 'space-around',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5
  },
  weatherinfo: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  loc_semiboldtext: {
    color: 'white',
    fontWeight: '300',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
