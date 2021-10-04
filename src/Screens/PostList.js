import React from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const PostList = ({ navigation }) => {
  return (
    <Query
      query={gql`
        {
          posts {
            edges {
              node {
                postId
                title
                uri
                slug
                date
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                categories {
                  edges {
                    node {
                      name
                      posts {
                        nodes {
                          title
                        }
                      }
                    }
                  }
                }
                content
              }
            }
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) {
          return (
            <View>
              <Text>Loading...</Text>
            </View>
          );
        }
        console.log(data);
        return (
          <ScrollView style={styles.container}>
            {data.posts.edges.map((post, key) => {
              return (
                <TouchableOpacity
                  key={key}
                  onPress={() => {
                    navigation.navigate("Post", {
                      title: post.node.title,
                      image: post.node.featuredImage.node.sourceUrl,
                      id: post.node.postId,
                      content: post.node.content,
                    });
                  }}
                >
                  <View>
                    <Text style={styles.title}>{post.node.title}</Text>
                    <Image
                      source={{ uri: post.node.featuredImage.node.sourceUrl }}
                      resizeMode="center"
                      style={{
                        width: "100%",
                        height: 200,
                        borderRadius: 5,
                        marginBottom: 5,
                      }}
                    />

                    <Text
                      style={{
                        color: "red",
                        marginBottom: 5,
                        borderBottomColor: "black",
                        borderBottomWidth: 2,
                      }}
                    >
                      Learn More
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
            {/* this image does nothing */}
            <Image source={{ uri: "logo" }} style={{ width: 60, height: 20 }} />
          </ScrollView>
        );
      }}
    </Query>
  );
};

export default PostList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    flex: 1,
    fontSize: 15,
    fontWeight: "bold",
    //   marginBottom: 10,
    marginTop: 5,
  },
});
