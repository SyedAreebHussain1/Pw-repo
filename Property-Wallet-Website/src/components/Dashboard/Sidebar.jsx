import React, { useEffect } from "react";
import { Menu, Layout, Button, Spin } from "antd";
import {
  LogoutOutlined,
  UserOutlined,
  DashboardOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import { Link, withRouter, useHistory } from "react-router-dom";
// import SubMenu from "antd/lib/menu/SubMenu";

const Sidebar = (props) => {
  const { Sider } = Layout;
  const history = useHistory();

  const handleLogout = () => {
    // localStorage.clear();
    history.replace("/login");
    localStorage.clear();
  };
  useEffect(() => {
    history.push("/dashboard/order");
  }, []);

  return (
    <Sider
      theme="light"
      width={240}
      // collapsible
      collapsed={props.collapsed}
      onCollapse={props.onCollapse}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        border: "1px solid rgba(102, 112, 133, 0.09)",

        // zIndex: 9999,
        // borderRight: "2px solid #F3CB61",
      }}
    >
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <img
          src={
            props.collapsed
              ? require("../images/mainlogoo.png")
              : require("../images/mainlogoo3.png")
          }
        />
      </div>
      {!props.collapsed && (
        <div style={{ paddingTop: "15%", paddingLeft: "10%" }}>
          <h2
            style={{ fontFamily: "Poppins", color: "grey", fontSize: "13px" }}
          >
            DASHBOARD
          </h2>
        </div>
      )}

      <Menu
        selectable={true}
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{
          color: "#3D4350",
          fontWeight: "500",
          fontSize: "0.8rem",
          fontFamily: "Poppins",
          marginTop: props.collapsed && "10%",
          // paddingLeft: "12px",
          // paddingRight:'12px'
        }}
      >
        <Menu.Item
          style={{ borderRadius: "3px" }}
          key="1"
          icon={
            <span style={{ marginRight: "5px" }}>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.375 3C3.34687 3 2.5 3.84687 2.5 4.875V8.20833C2.5 9.23646 3.34687 10.0833 4.375 10.0833H7.70833C8.73646 10.0833 9.58333 9.23646 9.58333 8.20833V4.875C9.58333 3.84687 8.73646 3 7.70833 3H4.375ZM4.375 4.25H7.70833C8.06104 4.25 8.33333 4.52229 8.33333 4.875V8.20833C8.33333 8.56104 8.06104 8.83333 7.70833 8.83333H4.375C4.02229 8.83333 3.75 8.56104 3.75 8.20833V4.875C3.75 4.52229 4.02229 4.25 4.375 4.25ZM11.875 4.66667C11.7922 4.6655 11.71 4.6808 11.6331 4.71168C11.5562 4.74256 11.4863 4.78841 11.4273 4.84657C11.3683 4.90472 11.3215 4.97401 11.2895 5.05043C11.2576 5.12684 11.2411 5.20884 11.2411 5.29167C11.2411 5.37449 11.2576 5.4565 11.2895 5.53291C11.3215 5.60932 11.3683 5.67861 11.4273 5.73677C11.4863 5.79492 11.5562 5.84077 11.6331 5.87165C11.71 5.90254 11.7922 5.91784 11.875 5.91667H17.7083C17.7912 5.91784 17.8734 5.90254 17.9502 5.87165C18.0271 5.84077 18.097 5.79492 18.156 5.73677C18.215 5.67861 18.2618 5.60932 18.2938 5.53291C18.3258 5.4565 18.3422 5.37449 18.3422 5.29167C18.3422 5.20884 18.3258 5.12684 18.2938 5.05043C18.2618 4.97401 18.215 4.90472 18.156 4.84657C18.097 4.78841 18.0271 4.74256 17.9502 4.71168C17.8734 4.6808 17.7912 4.6655 17.7083 4.66667H11.875ZM6.04167 5.5C5.7654 5.5 5.50045 5.60975 5.3051 5.8051C5.10975 6.00045 5 6.2654 5 6.54167C5 6.81793 5.10975 7.08289 5.3051 7.27824C5.50045 7.47359 5.7654 7.58333 6.04167 7.58333C6.31793 7.58333 6.58289 7.47359 6.77824 7.27824C6.97359 7.08289 7.08333 6.81793 7.08333 6.54167C7.08333 6.2654 6.97359 6.00045 6.77824 5.8051C6.58289 5.60975 6.31793 5.5 6.04167 5.5ZM11.875 7.16667C11.7922 7.1655 11.71 7.1808 11.6331 7.21168C11.5562 7.24256 11.4863 7.28841 11.4273 7.34657C11.3683 7.40472 11.3215 7.47401 11.2895 7.55043C11.2576 7.62684 11.2411 7.70884 11.2411 7.79167C11.2411 7.87449 11.2576 7.9565 11.2895 8.03291C11.3215 8.10932 11.3683 8.17861 11.4273 8.23677C11.4863 8.29492 11.5562 8.34077 11.6331 8.37165C11.71 8.40254 11.7922 8.41784 11.875 8.41667H15.2083C15.2912 8.41784 15.3734 8.40254 15.4502 8.37165C15.5271 8.34077 15.597 8.29492 15.656 8.23677C15.715 8.17861 15.7618 8.10932 15.7938 8.03291C15.8258 7.9565 15.8422 7.87449 15.8422 7.79167C15.8422 7.70884 15.8258 7.62684 15.7938 7.55043C15.7618 7.47401 15.715 7.40472 15.656 7.34657C15.597 7.28841 15.5271 7.24256 15.4502 7.21168C15.3734 7.1808 15.2912 7.1655 15.2083 7.16667H11.875ZM4.375 10.9167C3.34687 10.9167 2.5 11.7635 2.5 12.7917V16.125C2.5 17.1531 3.34687 18 4.375 18H7.70833C8.73646 18 9.58333 17.1531 9.58333 16.125V12.7917C9.58333 11.7635 8.73646 10.9167 7.70833 10.9167H4.375ZM4.375 12.1667H7.70833C8.06104 12.1667 8.33333 12.439 8.33333 12.7917V16.125C8.33333 16.4777 8.06104 16.75 7.70833 16.75H4.375C4.02229 16.75 3.75 16.4777 3.75 16.125V12.7917C3.75 12.439 4.02229 12.1667 4.375 12.1667ZM11.875 12.5833C11.7922 12.5822 11.71 12.5975 11.6331 12.6283C11.5562 12.6592 11.4863 12.7051 11.4273 12.7632C11.3683 12.8214 11.3215 12.8907 11.2895 12.9671C11.2576 13.0435 11.2411 13.1255 11.2411 13.2083C11.2411 13.2912 11.2576 13.3732 11.2895 13.4496C11.3215 13.526 11.3683 13.5953 11.4273 13.6534C11.4863 13.7116 11.5562 13.7574 11.6331 13.7883C11.71 13.8192 11.7922 13.8345 11.875 13.8333H17.7083C17.7912 13.8345 17.8734 13.8192 17.9502 13.7883C18.0271 13.7574 18.097 13.7116 18.156 13.6534C18.215 13.5953 18.2618 13.526 18.2938 13.4496C18.3258 13.3732 18.3422 13.2912 18.3422 13.2083C18.3422 13.1255 18.3258 13.0435 18.2938 12.9671C18.2618 12.8907 18.215 12.8214 18.156 12.7632C18.097 12.7051 18.0271 12.6592 17.9502 12.6283C17.8734 12.5975 17.7912 12.5822 17.7083 12.5833H11.875ZM6.04167 13.6242C5.96531 13.6242 5.88893 13.6607 5.8431 13.734L4.96338 15.1419C4.86588 15.2978 4.9782 15.5 5.16195 15.5H6.92139C7.10514 15.5 7.21787 15.2978 7.11995 15.1419L6.24023 13.734C6.1944 13.6607 6.11802 13.6242 6.04167 13.6242ZM11.875 15.0833C11.7922 15.0822 11.71 15.0975 11.6331 15.1283C11.5562 15.1592 11.4863 15.2051 11.4273 15.2632C11.3683 15.3214 11.3215 15.3907 11.2895 15.4671C11.2576 15.5435 11.2411 15.6255 11.2411 15.7083C11.2411 15.7912 11.2576 15.8732 11.2895 15.9496C11.3215 16.026 11.3683 16.0953 11.4273 16.1534C11.4863 16.2116 11.5562 16.2574 11.6331 16.2883C11.71 16.3192 11.7922 16.3345 11.875 16.3333H15.2083C15.2912 16.3345 15.3734 16.3192 15.4502 16.2883C15.5271 16.2574 15.597 16.2116 15.656 16.1534C15.715 16.0953 15.7618 16.026 15.7938 15.9496C15.8258 15.8732 15.8422 15.7912 15.8422 15.7083C15.8422 15.6255 15.8258 15.5435 15.7938 15.4671C15.7618 15.3907 15.715 15.3214 15.656 15.2632C15.597 15.2051 15.5271 15.1592 15.4502 15.1283C15.3734 15.0975 15.2912 15.0822 15.2083 15.0833H11.875Z"
                  fill="#667085"
                />
              </svg>
            </span>
          }
        >
          <Link style={{ color: "black" }} to="/dashboard/order">
            Sale Order
          </Link>
        </Menu.Item>
        <Menu.Item
          style={{ borderRadius: "3px" }}
          key="2"
          icon={
            <span style={{ marginRight: "5px" }}>
              <img
                style={{ paddingRight: "5px" }}
                src={require("../images/Wallet.png")}
              />
            </span>
          }
        >
          <Link style={{ color: "black" }} to="/dashboard/wallet">
            Wallet
          </Link>
        </Menu.Item>
        {/* <Menu.Item
          style={{ borderRadius: "3px" }}
          key="3"
          icon={
            <img
              style={{ paddingRight: "5px" }}
              src={require("../images/saleordericon.png")}
            />
          }
        >
          <Link style={{ color: "black" }} to="/dashboard/wallet">
            Wallet
          </Link>
        </Menu.Item>
        {/* <Menu.Item
          style={{ borderRadius: "3px" }}
          key="2"
          icon={
            <img
              style={{ paddingRight: "5px" }}
              src={require("../images/walleticon.png")}
            />
          }
        >
          <Link style={{ color: "black" }} to="/dashboard/requests">
            Withdraw Request
          </Link>
        </Menu.Item> */}
        <Menu.Item
          key="1000"
          style={{ borderRadius: "3px", color: "black" }}
          icon={<LogoutOutlined />}
          onClick={() => {
            handleLogout();
          }}
        >
          <span>Logout</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;