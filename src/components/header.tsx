"use client";

import React, { useState } from "react";
import {
  AppstoreOutlined,
  HomeOutlined,
  SettingOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
  {
    label: "Navigation One",
    key: "mail",
    icon: <HomeOutlined />,
  },
  {
    label: "Navigation Two",
    key: "app",
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: "Navigation Three - Submenu",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: "alipay",
  },
];

// const AppHeader: React.FC = () => {
//   const [current, setCurrent] = useState('mail');

//   const onClick: MenuProps['onClick'] = (e) => {
//     console.log('click ', e);
//     setCurrent(e.key);
//   };

//   return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
// };

const AppHeader = () => {
  const links = ["Home", "About", "Contact", "Book"];
  return (
    <header className=" bg-primary relative p-2 flex flex-col justify-center items-center">
      <div className="logo">
        <h1 className="text-2xl italic">buuk</h1>
      </div>
      <div className=" md:hidden">

      <MenuOutlined className="text-white p-2 bg-white" />
      </div>
      <nav className="bg-green-0 absolute top-0 w-full h-screen text-center p-8">
        <div className="close flex justify-end">
          <CloseOutlined className=" text-2xl" />
        </div>
        <ul>
          {links.map((link) => (
            <li
              key={links.indexOf(link)}
              className="p-2 border-b-2 border-slate-300"
            >
              {link}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
