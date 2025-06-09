import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
  person: {
    padding: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "orangered",
    borderRadius: 20,
    borderStyle: "dashed",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  personName: {
    textAlign: "center",
    fontSize: 17,
    fontFamily: "byekan",
    fontWeight: "bold",

  },
   input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "orange",
        fontSize: 15,

    },
     header: {
    height: 120,
    padding: 25,
    backgroundColor: "goldenrod",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 25,
    fontFamily: "byekan",
    fontWeight: "bold",

  }
})

