import React, { useState } from "react";
import {  Tab, Tabs } from "react-bootstrap";
import ExteriorZeekr from "./ExteriorZeekr.jsx";
import ExteriorLotus from "./ExteriorLotus.jsx";
import ExteriorHuawei from "./ExteriorHuawei.jsx";
import styled from "styled-components";

const Styled = styled.div`
.btn_car {
  width: 25%;
  margin-right: 10px;
  margin-bottom: 30px;
  background: #8f8e8e00 !important;
  transition: background 0.3s;
  border: 1px solid rgb(165 165 165);
  color: black;
}
.btn_car:active {
  background-image: linear-gradient(to right, gray, black) !important;
  color: white;
}
.btn_car:disabled {
  background-image: none;
  cursor: not-allowed;
}
`;

const ExteriorTab = () => {
    const [key, setKey] = useState('Zeekr 007');

    return (
        <>
        <Styled>
    <Tabs
      className="btn_car"
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="Zeekr 007" title="Zeekr 007">
        <ExteriorZeekr />
      </Tab>
      <Tab eventKey="Lotus Eletre" title="Lotus Eletre">
       <ExteriorLotus />
      </Tab>
      <Tab eventKey="Huawei Aito M9" title="Huawei Aito M9">
     <ExteriorHuawei />
      </Tab>
    </Tabs>
    </Styled>     
        </>
    )
};

export default ExteriorTab;