import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  // Stav na uchovanie aktuálneho čísla (začína od 0)
  const [pocet, setPocet] = useState(0);

  // Funkcie na ovládanie počítadla
  const pripocitat = () => setPocet(pocet + 1);
  const odpocitat = () => {
    if (pocet > 0) setPocet(pocet - 1); // Podmienka: nikdy nejde pod 0
  };
  const vynulovat = () => setPocet(0);

  return (
    <View style={styles.kontajner}>
      <Text style={styles.titulok}>Počítadlo objednávok</Text>

      {/* 1. a 4. Zobrazenie čísla + podmienka na zmenu farby (červená pri 5 a viac) */}
      <Text style={[styles.cislo, { color: pocet >= 5 ? "#ff4d4d" : "#000" }]}>
        {pocet}
      </Text>

      {/* Riadok pre tlačidlá + a - */}
      <View style={styles.riadok}>
        {/* 2. a 5. Tlačidlo mínus s podmienkou pre deaktiváciu (disabled a zmena štýlu) */}
        <TouchableOpacity
          style={[styles.tlacidlo, pocet === 0 && styles.tlacidloDisabled]}
          onPress={odpocitat}
          disabled={pocet === 0}
        >
          <Text style={styles.textTlacidla}>−</Text>
        </TouchableOpacity>

        {/* Tlačidlo plus */}
        <TouchableOpacity style={styles.tlacidlo} onPress={pripocitat}>
          <Text style={styles.textTlacidla}>+</Text>
        </TouchableOpacity>
      </View>

      {/* 3. Tlačidlo na vynulovanie */}
      <TouchableOpacity
        style={[styles.tlacidlo, styles.tlacidloVynulovat]}
        onPress={vynulovat}
      >
        <Text style={styles.textTlacidla}>Vynulovať</Text>
      </TouchableOpacity>

      {/* 4. Text, ktorý sa zobrazí LEN vtedy, keď je hodnota 5 a viac */}
      {pocet >= 5 && <Text style={styles.limitText}>Dosiahnutý limit</Text>}
    </View>
  );
}

// Štýly (vzhľad aplikácie)
const styles = StyleSheet.create({
  kontajner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  titulok: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  cislo: {
    fontSize: 70,
    fontWeight: "bold",
    marginBottom: 20,
  },
  riadok: {
    flexDirection: "row", // Dáva tlačidlá vedľa seba do riadku
    marginBottom: 15,
  },
  tlacidlo: {
    backgroundColor: "#2196F3", // Pekná modrá farba z obrázka
    paddingHorizontal: 35,
    paddingVertical: 15,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  tlacidloDisabled: {
    backgroundColor: "#90caf9", // Svetlomodrá (neaktívna) farba, keď je stav 0
  },
  tlacidloVynulovat: {
    width: 160,
    alignItems: "center",
  },
  textTlacidla: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  limitText: {
    color: "#ff4d4d",
    fontSize: 14,
    marginTop: 15,
    fontWeight: "600",
  },
});
