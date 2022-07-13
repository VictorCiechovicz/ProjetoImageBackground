import React from 'react'
import { ImageBackground, Text, View } from 'react-native'

import Raposa from './assets/raposa.png'
import Aterrissagem from './assets/aterrissagem.png'
import DesignToxico from './assets/design-toxico.png'

import estilos from './estilos'

export default function App() {
  return (
    <View style={estilos.box}>
      <Text style={estilos.titulo}>Top Fotografias</Text>
      <Text style={estilos.paragrafo}>Candidatas a prêmio de fotografia da vida selvagem em 2021</Text>

      <View style={estilos.box} >
        <ImageBackground style={estilos.img} source={Raposa}>
          <Text style={estilos.titulobox}>Raposa da tempestade</Text>
          <Text style={estilos.paragrafobox}>Jonny Armstrong</Text>
        </ImageBackground>
      </View>

      <View style={estilos.box}>
        <ImageBackground style={estilos.img} source={Aterrissagem}>
          <Text style={estilos.titulobox}>Aterrissagem de Apolo</Text>
          <Text style={estilos.paragrafobox}>Ermelin Dupiex</Text>
        </ImageBackground>
      </View>

      <View style={estilos.box}>
        <ImageBackground style={estilos.img} source={DesignToxico}>
          <Text style={estilos.titulobox}>Design tóxico</Text>
          <Text style={estilos.paragrafobox}>Gheorghe Popa</Text>
        </ImageBackground>
      </View>
    </View>
  )
}
