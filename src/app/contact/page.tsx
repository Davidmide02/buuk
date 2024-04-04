"use client";
import React from "react";
import { Button, Form, Input, InputNumber } from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const Contact = () => {
  return (
    <div className="contact">
      <div className="p-8 grid grid-cols-1 justify-center items-center text-center">
        <h1 className="text-4xl p-2 mb-2">Contact page</h1>
        <p className="text-lg p-2 m-2">
          Reach out to us, we'll be glad to hear from you
        </p>
        <div className="contact-form">
          <Form {...formItemLayout} variant="filled" style={{ maxWidth: 6000 }}>
            <Form.Item
              label="Name"
              name="Input"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Input placeholder="John Doe" size="large" />
            </Form.Item>

            <Form.Item
              label="Phone number"
              name="Phone number"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <InputNumber
                style={{ width: "100%" }}
                placeholder="09038387358"
                size="large"
              />
            </Form.Item>

            <Form.Item
              label="Message"
              name="TextArea"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Input.TextArea
                placeholder="Enter your message here"
                size="large"
                cols={20}
                rows={15}
              />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Button htmlType="submit" size="large">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
