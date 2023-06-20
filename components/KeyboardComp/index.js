import React from "react";

const Keyboard = (props) => {
  const { click, verificar, del } = props;
  return (
    <div className="container">
      <div className="row">
        <div
          className="col btn btn-outline-primary mt-2 me-2 "
          onClick={() => {
            click(">");
          }}
        >
          {`>`}
        </div>
        <div
          className="col btn btn-outline-primary mt-2 me-2 "
          onClick={() => {
            click("=");
          }}
        >
          {`=`}
        </div>
        <div
          className="col btn btn-outline-primary mt-2 me-2 "
          onClick={() => {
            click("<");
          }}
        >
          {`<`}
        </div>
      </div>
      <div className="row">
        <div
          className="col btn btn-outline-primary mt-2 me-2 "
          onClick={() => {
            verificar();
          }}
        >
          ✔️
        </div>
        <div
          className="col btn btn-outline-primary mt-2 me-2 "
          onClick={() => {
            del();
          }}
        >
          ❌
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
