import { useRef, useState, useContext, useEffect } from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input, Space } from "antd";
import { signUp, logIn } from "../../lib/function";
import NotificationContext from "../../store/notification-context";
import { useRouter } from "next/router";

type SignUpType = {
  username?: string;
  email?: string;
  password?: string;
  remember?: boolean;
};
type LogInType = {
  username?: string;
  password?: string;
  remember?: boolean;
};

const UserPage: React.FC = () => {
  const [register, setRegister] = useState<boolean>(false);
  const notificationCtx = useContext(NotificationContext);
  const router = useRouter();
  const [form] = Form.useForm();

  const onFinishSignUp: FormProps<SignUpType>["onFinish"] = (values) => {
    // console.log("Success:", values);
    const username = values.username;
    const email = values.email;
    const password = values.password;
    const remember = values.remember;
    signUp(username, email, password, remember, notificationCtx, setRegister);
  };
  const onFinishLogIn: FormProps<LogInType>["onFinish"] = (values) => {
    const username = values.username;
    const password = values.password;
    const remember = values.remember;
    logIn(username, password, remember, notificationCtx, router);
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <div className="flex m-8">
      <div className="my-0 mx-0 w-2/4">
        {register ? (
          <>
            <Form
              name="SignUp"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinishSignUp}
              autoComplete="on"
              className="py-6"
            >
              <Form.Item<SignUpType>
                label="Username"
                name="username"
                rules={[{ required: true, message: "Please input your username!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item<SignUpType>
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please input your email!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item<SignUpType>
                label="Password"
                name="password"
                rules={[{ required: true, message: "Please input your password!" }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item<SignUpType> name="remember" valuePropName="checked" wrapperCol={{ offset: 4, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 7, span: 16 }}>
                <Space>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                  <Button htmlType="button" onClick={onReset}>
                    Reset
                  </Button>
                  <Button htmlType="button" onClick={(e) => setRegister(false)}>
                    LogIn
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </>
        ) : (
          <>
            <Form
              name="LogIn"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinishLogIn}
              autoComplete="on"
              className="py-6"
            >
              <Form.Item<LogInType>
                label="Usernsme"
                name="username"
                rules={[{ required: true, message: "Please input your email!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item<LogInType>
                label="Password"
                name="password"
                rules={[{ required: true, message: "Please input your password!" }]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item<LogInType> name="remember" valuePropName="checked" wrapperCol={{ offset: 4, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 7, span: 16 }}>
                <Space>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                  <Button htmlType="button" onClick={onReset}>
                    Reset
                  </Button>
                  <Button htmlType="button" onClick={(e) => setRegister(true)}>
                    SignUp
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </>
        )}
      </div>
      <div className="w-2/4">
        <img src="/images/image_10.jpg" alt="" className="opacity-70 hover:opacity-100 rounded-lg" />
      </div>
    </div>
  );
};

export default UserPage;
