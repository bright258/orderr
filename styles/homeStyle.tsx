import { StyleSheet } from "react-native";

export const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    fontStyle: "italic",
    marginTop: 50,
    marginLeft: 7,
    marginRight: 7,
    // backgroundColor: "#F9F9F9"
  },

  boldText: {
    fontSize: 25,
    color: "#362B19",
  },
  mediumHeroText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginLeft: -3.7,
  },
  bigHeroText: {
    fontSize: 37,
    fontWeight: "bold",
    color: "white",
  },

  inputStyle: {
    height: 30,
    width: 300,
    borderColor: "black",
    borderStyle: "dashed",
    backgroundColor: "white",
  },
  heroContainer: {
    height: 137.5,
    width: 306,
    backgroundColor: "#FF9F0D",
    marginTop: 24,
    borderRadius: 12,
  },

  newView: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  containerForImageAndHeroText: {
    marginLeft: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  imageInSmallerContainer: {
    height: 200,
    width: 100,
    marginTop: -45,
  },
  voucherButton: {
    backgroundColor: "white",
    height: 30,
    width: 115,
    borderRadius: 52,
  },
  searchBox: {
    backgroundColor: "#ffff",
    width: 306,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    marginTop: 15,
  },
  navSearchBox: {
    backgroundColor: "#ffff",
    width: 306,
    height: 30,
    borderRadius: 8,
    justifyContent: "center",
    marginTop: 15,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  showRoom: {
    height: 200.98,
    marginTop: -40,
    marginRight: 10,
    // backgroundColor: "black",
    width: 306,
    borderRadius: 12,
    marginBottom: 15
  },
  eachShowRoom: {
    width: 101.91,
    alignItems: "center",
    height: 150.98,
    backgroundColor: "#F9F9F9",
    marginTop: 20,
    borderRadius: 70,
    marginLeft: 10,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 100, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 60, 
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0




    
    
  },

  showRoomImage: {
    height: 104,
  },
  voucherBlurb: {
    color: "#FF9F0D",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 15,
    padding: 5,
  },
  navBar: { padding: 5, color: "#565656" },

  itemShowSlideStyle: {
    marginTop: 40,
}
});
