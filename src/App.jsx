import React from "react";
import { useState, useEffect } from "react";
import { Axios } from "axios";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Dropdown, Space } from "antd";

const { Meta } = Card;

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {}, []);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  return (
    <div>
      {data.map((value) => {
        return (
          <Card
            key={value.id}
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined
                key="ellipsis"
                onClick={(e) => e.preventDefault()}
              />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title={value.title}
            />
          </Card>
        );
      })}
    </div>
  );
};

export default App;
