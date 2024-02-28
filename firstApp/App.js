// Importando os elementos utilizados
import { View } from "react-native";

// Importando o componente do Cabeçalho
import Header from "./src/componentes/Header";

// Importando o componente do Corpo
import Body from "./src/componentes/Body";

// Importando o componente do Rodapé
import Footer from "./src/componentes/Footer";

// Importando o componente do StyleSheet
import { styles } from "./src/styles/StyleSheet";

export default function App() {
  return (
    <View style={styles.container}>

      {/* Cabeçalho */}
      <Header />

      {/* Corpo */}
      <Body />

      {/* Rodapé */}
      <Footer />
    </View>
  );
}
