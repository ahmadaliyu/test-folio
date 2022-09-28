import { Ionicons } from "@expo/vector-icons";
import { Actionsheet, Center, Modal, useDisclose } from "native-base";
import * as React from "react";
import { StyleSheet, View, TouchableOpacity, StatusBar } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppText from "../../components/reusables/AppText";
import Colors from "../../constants/Colors";
import { DashboardScreenProps } from "../../types";

const DetailScreen = ({ navigation }: DashboardScreenProps) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#fff"} />
      <View style={{ marginTop: hp(7) }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBox}
        >
          <Ionicons name="ios-chevron-back-outline" size={wp(6)} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.default,
  },
  backBox: {
    justifyContent: "center",
    alignItems: "center",
    width: wp(8),
    height: wp(8),
    borderRadius: wp(1),
    borderColor: "#c4c4c4",
    borderWidth: 1,
    marginLeft: wp("5%"),
  },
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.default,
    paddingHorizontal: wp(2),
    paddingVertical: wp(3),
    borderRadius: 10,
    borderColor: "#B5B5B5",
    borderWidth: 1,
    width: "90%",
  },
});

export default React.memo(DetailScreen);
