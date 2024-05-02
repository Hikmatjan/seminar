import React from "react";
import { Wrapper } from "./style";
const App = () => {
  return (
    <div className="bg-[#46A358]">
      <Wrapper>
        <Wrapper.Left>
          <img
            className="size"
            src="https://babm.uz/thogeeck/2022/07/logo-babm.png"
            alt="Logo"
          />
        </Wrapper.Left>
        <Wrapper.Middle>
          <Wrapper.Middle.Item>Yuriqnoma</Wrapper.Middle.Item>
          <Wrapper.Middle.Item>Videodarslar</Wrapper.Middle.Item>
        </Wrapper.Middle>
        <Wrapper.Right></Wrapper.Right>
      </Wrapper>
    </div>
  );
};

export default App;
