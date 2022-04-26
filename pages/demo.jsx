import React from "react";
import { Form, Input, Button,Table,Space } from "antd";
import "antd/dist/antd.css";

function DemoPage() {
  const [form] = Form.useForm();
  const { Column } = Table;
  const employeeDetails = [{
    id:"21434-434134-3434",
    employee_name: "John Doe",
    email:"abc@example.com"
  }]
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* Heading */}
      <div className="heading">
        <h1>Employee Mangement System</h1>
      </div>
      {/* Form */}
      <div className="form" style={{ width: "50%" }}>
        <Form form={form} layout="vertical">
          <Form.Item
            label="Employee Name"
            required
            tooltip="This is a required field"
            rules={[{ type: "email", required: true }]}
          >
            <Input placeholder="Enter Employee Name" />
          </Form.Item>
          <Form.Item
            label="Employee Email"
            required
            tooltip="This is a required field"
            rules={[{ type: "email", required: true }]}
          >
            <Input placeholder="Enter Employee email" />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </div>
      <div className="details-table">
        <Table dataSource={employeeDetails}>
          <Column title="Employee Id" dataIndex="id"  />
          <Column title="Employee Name" dataIndex="employee_name"  />
          <Column title="Email" dataIndex="email"  />
          <Column
            title="Action"
            key="action"
            render={(record) => (
              <Space size="middle">
                <Button
                  shape="round"
                  type="primary"
                  style={{ background: "#2ED47A", border: "none" }}
                >
                  Update
                </Button>
                <Button
                  shape="round"
                  type="danger"
                >
                  Delete
                </Button>
              </Space>
            )}
          />
        </Table>
      </div>
    </div>
  );
}

export default DemoPage;
