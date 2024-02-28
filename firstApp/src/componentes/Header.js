import { Text, View } from "react-native";
import { styles } from "/home/caike/Documentos/src/nodeenv/GitHub/S1-05A/firstApp/src/styles/StyleSheet.js";

export default function Header() {
  return (

    <View style={styles.header}>
        <Text style={styles.textHeader}>Esse é o Cabeçalho!</Text>
    </View>

  );
}
