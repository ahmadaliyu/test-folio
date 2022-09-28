import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import { DashboardScreenProps, DashboardStackParamList } from "../../types";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppText from "../../components/reusables/AppText";
import Colors from "../../constants/Colors";
import AppButton from "../../components/reusables/AppButton";
import {
  useAddUserMutation,
  useGetUserProfileQuery,
} from "../../redux/services/apiService";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<DashboardStackParamList, "DashboardScreen">;

export default function DashboardScreen({ navigation }: Props) {
  const { data } = useGetUserProfileQuery();
  // console.log(222, data);
  const dispatch = useDispatch();

  const [addItem, setAddItem] = useState(null);
  const [addUser, { isLoading }] = useAddUserMutation();

  const addNewUser = async () => {
    let user = {
      id: data.users.length,
      ...data[0],
    };

    await addUser(user);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginLeft: wp(3),
        }}
      >
        <FlatList
          data={data?.users}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("DetailScreen", { data: item })
              }
              style={[
                styles.touchable,
                {
                  marginHorizontal: wp(2),
                  backgroundColor: "#000000",
                  justifyContent: "flex-end",
                  // alignItems: "center",
                },
              ]}
            >
              <AppText
                title={item.name}
                color="#fff"
                fontSize={wp(4.5)}
                fontFamily="gilroy-semiBold"
                textAlign="center"
                lineHeight={30}
              />
              <AppText
                title={item.company.name}
                color="#fff"
                fontSize={wp(4.5)}
                fontFamily="gilroy-semiBold"
                textAlign="center"
                lineHeight={30}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          key={"#"}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
      <AppButton
        title="Add"
        width={"15%"}
        borderRadius={100}
        height={35}
        styleV={{
          transform: [{ scaleX: 2.5 }],
          position: "absolute",
          top: hp(90),
        }}
        color="blue"
        // mt={"95%"}
        fontSize={wp(3)}
        onPress={addNewUser}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  touchable: {
    shadowColor: "#000000",
    shadowOpacity: 0.05,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 1,
    // borderRadius: 10,
    width: "45%",
    height: hp(18),
    marginVertical: wp("0.9%"),
    // paddingVertical: hp(0.5),
    paddingHorizontal: wp("4%"),
    marginTop: hp("3%"),
    backgroundColor: "#161B33",
  },
  scrollViewStyle: {
    width: "100%",
  },
  title: {
    fontSize: wp(5),
    fontWeight: "bold",
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    width: wp(9),
    height: wp(9),
    borderRadius: wp(2.5),
    borderBottomLeftRadius: wp(0),
    // marginLeft: wp("5%"),
    backgroundColor: Colors.primary,
  },
});
