import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import { useRouter } from "next/router";
import { Resultados } from "../../../utils/data";
import ResultsEqua from "../../../components/ResultsEqua";
import EquacionScreen from "../../../components/EquacionScreen";
import Fraction from "fraction.js";

const Basic = () => {
  const router = useRouter();
  const { level } = router.query;
  const [operatorSelect, setOperatorSelect] = useState("");
  const [expression, setExpression] = useState("");
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);
  const [resp, setResp] = useState("");
  const [resultsScreen, setResultsScreen] = useState(false);
  const [cont, setCont] = useState(0);

  useEffect(() => {
    const Resultados = [];
    getNum();

    return () => {
      Resultados.splice(0, Resultados.length);
    };
  }, []);

  useEffect(() => {
    cont === 10 ? setResultsScreen(true) : setResultsScreen(false);
  }, [cont]);

  const getNum = () => {
    const operators = ["="];
    const operatorIndex = Math.floor(Math.random() * operators.length);
    const num1 = getRandomIntInclusive(-10, 10);
    const num2 = getRandomIntInclusive(-10, 10);
    const num3 = getRandomIntInclusive(-10, 10);
    const num4 = getRandomIntInclusive(-10, 10);
    const operator = operators[operatorIndex];

    if (num1 == num3) {
      setNumber3(num3 - 1);
    } else {
      setNumber3(num3);
    }
    setNumber1(num1);
    setNumber2(num2);
    setNumber4(num4);
    setOperatorSelect(operator);
    setExpression(
      `(${number1}X)+(${number2}) ${operator} (${number3}X)+(${number4})`
    );
    setResp("");
  };

  const getRandomIntInclusive = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  function decimalToFraction(decimal) {
    const fraction = new Fraction(decimal);
    return fraction.toFraction(true);
  }

  const verificar = () => {
    if (resp !== "") {
      let val = 0;
      let tempExp;
      let fract = 0;
      val = (number4 - number2) / (number1 - number3);
      if (!Number.isInteger(val)) {
        const decimal = val;
        const fraction = decimalToFraction(decimal);
        console.log(`${decimal} convertido para fração: ${fraction}`);
        fract = fraction;
        val = val.toFixed(2);
      }
      tempExp = {
        expression: `(${number1}X)+(${number2}) = (${number3}X)+(${number4})`,
        resp: resp,
        value: val.toString(),
        fraction: fract,
      };
      Resultados.push(tempExp);
      console.log(Resultados);
      getNum();
      setCont(cont + 1);
    }
  };

  const click = (param) => {
    setResp((prevResp) => prevResp + param);
  };

  const del = () => {
    setResp((prevResp) => prevResp.slice(0, -1));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Equations</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!resultsScreen ? (
        <EquacionScreen
          operatorSelect={operatorSelect}
          number1={number1}
          number2={number2}
          number3={number3}
          number4={number4}
          resp={resp}
          click={click}
          verificar={verificar}
          del={del}
        />
      ) : (
        <ResultsEqua Resultados={Resultados} />
      )}
    </div>
  );
};

export default Basic;
