import { Text, View } from "react-native";
import { styles } from "/home/caike/Documentos/src/nodeenv/GitHub/S1-05A/firstApp/src/styles/StyleSheet.js";

export default function Body() {
  return (
    <View style={styles.body}>
      <Text style={styles.textBody}>Esse é o Corpo!</Text>
    </View>
  );
}
