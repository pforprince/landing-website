import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
const { TextArea } = Input;
function AppContact() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Get in Touch</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum!
          </p>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="fullname"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="telephone"
            rules={[
              { required: true, message: "Please input your telephone!" },
            ]}
          >
            <Input type="number" placeholder="Telephone" />
          </Form.Item>
          <Form.Item
            name="subject"
            rules={[{ required: true, message: "Please input your subject!" }]}
          >
            <Input type="text" placeholder="Subject" />
          </Form.Item>
          <Form.Item
            name="message"
            rules={[{ required: true, message: "Please input your Message!" }]}
          >
            <TextArea placeholder="Message" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Send
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AppContact;
