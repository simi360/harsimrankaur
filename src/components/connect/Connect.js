import React, { useState, useEffect } from "react";
import { Main, Label, Input } from "./Connect.styles";

const Connect = (props) => {
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    // eslint-disable-next-line  no-undef
    if (inputVal == __PSW__) {
      props.connectToSite();
    }
  }, [inputVal]);

  return (
    <Main>
      <div>
        <Label htmlFor="pswdInput">
          The website is protected,
          <br /> please use the given password
        </Label>
        <Input
          id="pswdInput"
          type="password"
          name="pswdInput"
          placeholder="Password"
          onChange={(e) => setInputVal(e.target.value)}
          value={inputVal}
        />
      </div>
    </Main>
  );
};

export default Connect;
