import {styles} from "./home.style.js";
import { View, Image } from "react-native";
import icons from "../../constants/icons.js";
import { SafeAreaView } from "react-native-safe-area-context";
import TextBox from "../../components/textbox/textbox.jsx";
import { useState } from "react";
import Categorias from "../../components/categorias/categorias.jsx";
import { banners, categorias } from "../../constants/dados.js";
import Banners from "../../components/banners/banners.jsx";

function Home() {

    const [busca, setBusca] = useState("");

    return <SafeAreaView style={styles.container}>
        <View style={styles.headerBar}>
            <Image source={icons.logo} style={styles.logo} />
            <Image source={icons.cart} style={styles.cart} />
        </View>

        <View style={styles.busca}>
            <TextBox placeholder="O que vamos pedir hoje?" onTextChange={(texto) => setBusca(texto)} value={busca}/>
        </View>

        <Categorias dados={categorias}/>

        <Banners dados={banners}/>
    </SafeAreaView>

}

export default Home;