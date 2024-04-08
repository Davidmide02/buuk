"use client";
import React from "react";
// import footerImage from "@/as"
import footerImage from "@/assest/footer.png";
import {
  TwitterOutlined,
  GithubOutlined,
  LinkedinOutlined,
  SendOutlined,
} from "@ant-design/icons";
import Link from "next/link";
// import { Button, Form, Input } from "antd";
import { Button, Checkbox, Form, type FormProps, Input } from "antd";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Footer = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <footer
      style={{ backgroundImage: `url(${footerImage})` }}
      className=" bg-primary text-white"
    >
      <div className="con grid grid-cols-4 justify-between p-8">
        <div className="socials">
          <Link
            href={"https://twitter.com/Davidmide02"}
            className="text-2xl hover:text-gray-400 p-1"
          >
            <TwitterOutlined />
          </Link>
          <Link
            href={"https://github.com/Davidmide02"}
            className="text-2xl hover:text-gray-400 p-1"
          >
            <GithubOutlined />
          </Link>
          <Link
            href={"https://linkedin.com/david-adenusi-27davidmide/"}
            className="text-2xl hover:text-gray-400 p-1"
          >
            <LinkedinOutlined />
          </Link>
        </div>

        <div className="newsletter col-span-2">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="Email"
              name="username"
              rules={[
                { required: true, message: "Please input your email!" },
                {
                  type: "email",
                  message: "Please enter a valid email address!",
                },
              ]}
            >
              <Input placeholder="example101@gmail.com" />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                htmlType="submit"
                style={{
                  flex: "flex",
                  justifyContent: "center",
                  backgroundColor: "white",
                  textDecorationColor: "red",
                }}
                icon={<SendOutlined />}
              >
                Subscribe
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className="dev-info">
          <Link
            href={"https://github.com/Davidmide02"}
            className="hover:text-gray-400 p-1"
          >
            <h3>Design and Develop by Davidmide ❤</h3>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
