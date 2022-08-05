import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { number } from 'yup';


export default function App() {
  const [fecha, setFecha] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [concepto, setConcept] = useState("");
  const [codigo, setCode] = useState("");
  const [account, setCuenta] = useState("");
  const [debit, setDebit] = useState(0);
  const [credit, setCredit] = useState(0);

  const saveDate = (text: string) => {
    //validar que sea una fecha de verdad
    if (text.length >= 10 && text !== '2022-07-29') {
      alert('error en la fecha')
      return
    }
    //sino es un fecha lanzar un mensaje
    if (text.length >= 10){
      setFecha(text);
    console.log(fecha);

    }
  }

  const saveName = (text: string) => {
      setNombre(text);
      console.log(nombre);
      

  }

  const saveLastName = (text: string) => {
    setApellido(text);
    console.log(apellido);
    
  }

  const saveConcept = (text: string) => {
    setConcept(text);
    console.log(concepto);
  }

  const saveCode = (text: string) => {
    if (text.length >= 4 && text !== '2022') {
      alert('error en la fecha')
      return
    }
    
    if (text.length >= 10){
      setCode(text);
    console.log(codigo); 
  }
  const saveCuenta = (text: string) => {
    setCuenta(text);
    console.log(account);
}

  const saveDebit = (text: string) => {
    const textInNumber = Number (text);
    const isNaN = Number.isNaN(textInNumber)

    console.log('texInNumber', textInNumber);
    console.log('isNaN', isNaN);
    
    
    setDebit(Number(text));
    console.log(debit, text);

  };

  const saveCredit = (text: string) => {
    const textInNumber = Number (text);
    if (Number.isNaN(textInNumber) == true) {
      return false;
    }

    /* return !Number.isNaN(textInNumber) */

    console.log('texInNumber', textInNumber);
    console.log('isNaN', isNaN);
    
    
    setCredit(Number(text));
    console.log(credit, text);

  };

  const saveJournal = (text) => {};
  
  return (
    <View>
    <Text>APP Journals</Text>
    <Text>Fecha:</Text>
    <TextInput placeholder='Fecha' onChangeText={(text) => saveDate (text)} />

    <Text>Nombre: </Text>
    <TextInput placeholder='Nombre' onChangeText={(text) => saveName (text)} />

    <Text>Apellido: </Text>
    <TextInput placeholder='Apellido' onChangeText={(text) => saveLastName (text)} />

    <Text>Concepto: </Text>
    <TextInput placeholder='Concepto' onChangeText={(text) => saveConcept (text)} />

    <View>
        <Text>Codigo: </Text>
        <TextInput placeholder='Codigo'onChangeText={(text) => saveCode (text)} />

        <Text>Cuenta: </Text>
        <TextInput placeholder='Cuenta' onChangeText={(text) => saveCuenta (text)} />

        <Text>Debito: </Text>
        <TextInput placeholder=' Debito' onChangeText={(text) => saveDebit (text)} />

        <Text>Crédito: </Text>
        <TextInput placeholder='Crédito' onChangeText={(text) => saveCredit (text)} />

        <Button title='Guardar' onPress={(e) => saveJournal (e)}/>
      </View>
    </View>
  );
}
}