import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Breadcrumb, Layout, Menu } from "antd";
import "antd/dist/antd.css";
import React, { Children, useState } from "react";

const { Header, Content, Footer, Sider } = Layout;
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Prisoner", "sub1", <UserOutlined />, [
    getItem("register", "3"),
    getItem("all prisoners", "4"),
    getItem("prisoner that we have their money", "5"),
  ]),
  getItem("Transactions", "sub2", <TeamOutlined />, [
    getItem("Recieved money", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];
const Dashboard = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid xs={3}>
                  <Item>All female prisoner</Item>
                </Grid>
                <Grid xs={3}>
                  <Item>All male prisoner</Item>
                </Grid>
                <Grid sm={3}>
                  <Item>juvenile prison</Item>
                </Grid>
                <Grid xs={3}>
                  <Item>mixed prisons</Item>
                </Grid>
              </Grid>
            </Box>
          </div>
          {children}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by IT group
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
