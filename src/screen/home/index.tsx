import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Home() {
    return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.txtTop}> Lista de Compras </Text>
      </View>

        <View style={styles.meio}>
            <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Adicione um novo produto"
                placeholderTextColor="#808080"
            />
            <TouchableOpacity style={styles.button}>
                <Image source={require("../../../assets/plus.png")} />
            </TouchableOpacity>
            </View>
        </View>

        <View style={styles.contadores}>
          <View style={styles.contadoresBox}>
            <Text style={styles.produtos}>Produtos</Text>
            <Text style={styles.contadorProdutos}></Text>
          </View>
          <View style={styles.contadoresBox}>
            <Text style={styles.finalizados}>Finalizados</Text>
            <Text style={styles.contadorProdutos}></Text>
          </View>
        </View>

    </View>

    );
}