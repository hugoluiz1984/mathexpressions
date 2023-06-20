import React from "react";
import Keyboard from "../Keyboard";
import styles from "../../styles/Home.module.css";

const BasicScreen = (props) => {
  const { operatorSelect, number1, number2, click, verificar, del, resp } =
    props;

  return (
    <main className={styles.main}>
      <div className="d-flex gap-5 justify-content-center ">
        <div className="container gap-5 justify-content-center me-5">
          <div className="row">
            <div className="d-flex justify-content-center">
              <h2>
                {operatorSelect === "÷"
                  ? `${number1 * number2} ${operatorSelect} ${number1}`
                  : `${number1} ${operatorSelect} ${number2}`}
              </h2>
            </div>
          </div>
          <div className="row">
            <div className={"col border bg-light m-2"}>
              <h2 className={styles.custom}>{resp}</h2>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Keyboard click={click} verificar={verificar} del={del} />
      </div>
    </main>
  );
};

export default BasicScreen;
