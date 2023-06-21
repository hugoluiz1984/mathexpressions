import React from "react";
import Keyboard from "../Keyboard";
import styles from "../../styles/Home.module.css";

const BasicScreen = (props) => {
  const {
    operatorSelect,
    number1,
    number2,
    number3,
    number4,
    click,
    verificar,
    del,
    resp,
  } = props;

  return (
    <main className={styles.main}>
      <div className="d-flex gap-5 justify-content-center ">
        <div className="container gap-5 justify-content-center me-5">
          <div className="row">
            <div className="d-flex justify-content-center">
              <h5>{`(${number1}X) + (${number2}) = (${number3}X)- (${number4})`}</h5>
            </div>
          </div>
          <div className="row">
            <div className={"col border bg-light m-1"}>
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
