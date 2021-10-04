import React from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from "react-native";
import HTML from "react-native-render-html";

const Post = ({ route, navigation }) => {
  const contentWidth = useWindowDimensions().width;
  const { content, title, image } = route.params;
  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Image
          source={{ uri: image }}
          resizeMode="center"
          style={{
            width: "100%",
            height: 200,
            borderRadius: 5,
            marginBottom: 10,
          }}
        />
        <HTML
          source={{ html: content }}
          contentWidth={contentWidth}
          style={styles.newspost}
        />
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            source={{
              uri: "https://www.spirenews.net/wp-content/uploads/2021/06/spirelogo-1.png",
            }}
            resizeMode="center"
            style={{
              width: "100%",
              height: 70,
              borderRadius: 2,
            }}
          />
        </TouchableWithoutFeedback>
      </ScrollView>
    </>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    // height: "90%"
  },
  // newspost: {
  //   a: {
  //     color: "green",
  //   },
  // },
  title: {
    flex: 1,
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 5,
  },
});
