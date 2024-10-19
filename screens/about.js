import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Platform,
  SafeAreaView,
} from "react-native";
import colors from "../common/color";
const about = () => {
  const data = [
    { id: "1", text: "Item 1" },
    { id: "2", text: "Item 2" },
    { id: "3", text: "Item 3" },
  ];

  return (
    <SafeAreaView>
      <View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "red",
            flexDirection: "row",
            justifyContent: "space-around",
            color: "white",
          }}
        >
          <Text
            style={{ color: colors.textColor, width: 100 }}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {" "}
            1 2 3 anh co danh roi dong dola nao khong?
          </Text>
          <Text style={{ color: colors.textColor }}>2</Text>
          <Text style={{ color: colors.textColor }}>3</Text>
          <Text style={{ color: colors.textColor }}>4</Text>
        </View>
        <View>
          {Platform.OS == "ios" && (
            <Image source={require("../assets/favicon.png")} />
          )}
          {Platform.OS == "android" && (
            <Image
              source={{ uri: "https://reqres.in/img/faces/7-image.jpg" }}
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
          )}
        </View>

        <View style={{ backgroundColor: "blue" }}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Text style={{ color: "red" }}>{item.text}</Text>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default about;
