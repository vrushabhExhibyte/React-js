import "./Todo.css";
import { Form, Input, Checkbox, Button } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addTodo } from "../actions/index";
import { useDispatch } from "react-redux";

const Login = () => {
  const [inputData, setInputData] = useState("");

  const dispatch = useDispatch();

  const onFinish = (values, e) => {
    console.log("Success:", values);
    e.preventDeafult();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form-container">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Link to="/logout">
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => dispatch(addTodo(inputData))}
            >
              Submit
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
