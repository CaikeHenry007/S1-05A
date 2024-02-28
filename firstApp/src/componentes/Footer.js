import { Text, View } from "react-native";
import { styles } from "/home/caike/Documentos/src/nodeenv/GitHub/S1-05A/firstApp/src/styles/StyleSheet.js";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.textFooter}>Esse é o Rodapé!</Text>
    </View>
  );
}
