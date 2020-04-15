import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import api from "./services/api";

//Não possuem valor semântico (significativo)
//Não possuem estilização própria
//Todos os componentes possuem por padrão "display: flex"

// - View: div, footer, header, main, aside, section
// - Text: p, span, strong, h1,h2,h3

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    console.log("notworking");
    console.log(
      api.get("projects").then((response) => {
        // console.log(response.data);
        setProjects(response.data);
      })
    );
    console.log(projects);
    console.log("working");
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      {/*coloca cor na status bar*/}
      <View style={styles.container}>
        <Text style={styles.title}>Hello world</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  //componente de estilo do react-native, os containers não tem estilo próprio
  container: {
    //vai aparecer somente o fundo, cada componente tem seu estilo
    //já tem display:flex
    flex: 1, //para ocupar a tela toda
    backgroundColor: "#7159c1",
    justifyContent: "center", //coloca tudo na metade da tela
    alignItems: "center", //centraliza tudo
  },
  title: {
    //mostrando que cada componente tem seu estilo
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
