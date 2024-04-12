"use client";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  HomeOutlined,
  SettingOutlined,
  MenuOutlined,
  BookOutlined,
} from "@ant-design/icons";

import {  Button, Menu  } from "antd";
import Link from "next/link";


const items = [
  {
    label: (
      <Link href={"/"} className="">
        Home
      </Link>
    ),
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: <Link href={"/contact"}>Contact</Link>,
    key: "app",
    icon: <AppstoreOutlined />,
  },
  {
    label: <Link href={"/about"}>About</Link>,
    key: "about",
    icon: <AppstoreOutlined />,
  },
  {
    label: <Link href={"/booklist"}>Books</Link>,
    key: "books",
    icon: <BookOutlined />,
  },
];




// const menuStyle = {

  
// };

const AppHeader = () => {
  return (
    <header className=" font-bold bg-primary p-6 shadow-lg fixed w-full z-10">
      <div className="con flex justify-between items-center">
        <div className="logo">
          <h1 className="text-white text-2xl italic">
            B<span className="text-lg">uu</span>K
          </h1>
        </div>

        <div className="menu w-1/2">
         
            <Menu
              // theme="light"
              mode="horizontal"
              defaultSelectedKeys={["home"]}
              items={items}
              // style={{ backgroundColor:"green", display:"flex", alignItems:"center", textAlign:"center"}}
            >
              </Menu>
         
        </div>
        <div className="auth flex">
          <Button className="text-white mr-1">Sign in</Button>
          <Button className="bg-white">Sign out</Button>

        </div>
      </div>
    </header>
  );
};

export default AppHeader;

{/* <Header
style={{
  position: 'sticky',
  top: 0,
  zIndex: 1,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
}}
>
<div className="demo-logo" />
<Menu
  theme="dark"
  mode="horizontal"
  defaultSelectedKeys={['2']}
  items={items}
  style={{ flex: 1, minWidth: 0 }}
/>
</Header> */}