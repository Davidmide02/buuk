"use client";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  HomeOutlined,
  SettingOutlined,
  MenuOutlined,
  BookOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
// import { Menu } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link";

const { Header, Content, Footer } = Layout;

const items: MenuProps["items"] = [
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
    label: <Link href={"/About"}>About</Link>,
    key: "about",
    icon: <AppstoreOutlined />,
  },
  {
    label: <Link href={"/book"}>Books</Link>,
    key: "books",
    icon: <BookOutlined />,
  },
];
const menuStyle = {
  flex: 1,
  midWith: 0,
  // backgroundColor: "#0e21ed",
};

const AppHeader = () => {
  return (
    <header className=" font-bold bg-primary p-8 shadow-lg">
      <div className="con flex justify-between items-center">
        <div className="logo">
          <h1 className="text-white italic">
            B<span className="text-2xl">uu</span>K
          </h1>
        </div>
        <div className="menu">
          <Header
            style={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["home"]}
              items={items}
              style={menuStyle}
            />
          </Header>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
