import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export function Home() {
    
type ProductType = {
    id: string;
    nome: string;
    concluido: boolean;
  };

  const [products, setProducts] = useState<ProductType[]>([]);
  const [finishedProducts, setFinishedProducts] = useState<ProductType[]>([]);
  const [produtoName, setProductName] = useState("");

  function handleAddProduct() {
    if (!produtoName.trim()) return;

    if (
      products.find((p) => p.nome === produtoName) ||
      finishedProducts.find((p) => p.nome === produtoName)
    ) {
      return Alert.alert(
        "Este cadastrado ja foi feito!",
        "Na sua lista já exite um cadastrado com esse nome."
      );
    }

    const newProduct: ProductType = {
      id: String(new Date().getTime()),
      nome: produtoName,
      concluido: false,
    };

    setProducts((prev) => [...prev, newProduct]);
    setProductName("");
  }


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

        <View style={styles.listaVazia}>
            <Image
            source={require("../../../assets/lista.png")}
            style={styles.imagemLista}
            />
            <Text style={styles.txtListaVazia1}>
            Você ainda não tem produtos na lista de compra
            </Text>
            <Text style={styles.txtListaVazia2}>
            Adicione produtos e organize sua lista de compras
            </Text>
        </View>

        </View>
    </View>

    );
}