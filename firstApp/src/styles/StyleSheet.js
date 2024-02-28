import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    backgroundColor: "black",
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },

  body: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  footer: {
    backgroundColor: "black",
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },

  textHeader: {
    fontSize: 20,
    color: 'white',
  },

  textBody: {
    fontSize: 40,
    color: 'red',
  },

  textFooter: {
    fontSize: 20,
    color: 'white',
  },
});
