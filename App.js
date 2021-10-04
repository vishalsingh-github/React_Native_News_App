// In App.js in a new project

import * as React from "react";
import { StyleSheet, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import PostList from "./src/Screens/PostList";
import Post from "./src/Screens/Post";

const Stack = createNativeStackNavigator();

const client = new ApolloClient({
  uri: "https://www.spirenews.net/graphql",
});

function ActionBarIcon() {
  return (
    <Image
      source={{
        uri: "https://www.spirenews.net/wp-content/uploads/2021/06/logo-new.png",
      }}
      style={{
        width: 110,
        height: 20,
        borderRadius: 2,
        marginLeft: 15,
      }}
    />
  );
}

function App() {
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <Stack.Navigator initialRouteName={"Home"}>
          <Stack.Screen
            name="Home"
            component={PostList}
            options={{
              headerRight: (props) => <ActionBarIcon {...props} />,
            }}
          />
          <Stack.Screen
            name="Post"
            component={Post}
            options={{
              headerRight: (props) => <ActionBarIcon {...props} />,
            }}
          />
        </Stack.Navigator>
      </ApolloProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
