import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get("window");
const width = screen.width;

export default styles = StyleSheet.create({
  textStyles: {
    // fontWeight: "bold",
    fontSize: 24,
    color: "white",
    fontFamily: "Tektur-Regular",
  },
  btn: {
    backgroundColor: "#a6a6a6",
    margin: 1,
    borderRadius: 50,
    height: Math.floor(width * 0.25 - 10),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  btnOperator: {
    backgroundColor: "#ffc107",
  },
  result: {
    fontSize: 28,
    // fontWeight: "bold",
    marginBottom: 20,
    textAlign: "right",
    padding: 10,
    fontFamily: "Tektur-Regular",
  },
  container: {
    padding: 12,
    marginBottom: "auto",
    marginTop: "auto",
  },
  btnPressed: {
    backgroundColor: "#dcdcdc",
  },
});
