import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space, Menu } from "antd";
import "./bDropdown.css";
import { useEffect, useState } from "react";

export function BDropdown(props) {
  const {
    dropdownProps: { handleMenuClick, items, defaultSelectedKeys },
  } = props;
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    setSelectedItem(items?.find((item) => item?.key == defaultSelectedKeys));
  }, [items]);

  return (
    <>
      <div>{props?.previousSibling ?? props?.previousSibling}</div>
      <Space
        wrap
        style={{ ...props?.style }}
        size="large"
        block={"true"}
        direction="vertical"
      >
        <Dropdown
          overlay={
            <Menu>
              {items?.map((menuItem) => (
                <Menu.Item
                  key={menuItem?.key}
                  onClick={(e) => handleMenuClick?.(e)}
                  style={{ ...props?.style }}
                >
                  {menuItem?.icon} {menuItem?.label}
                </Menu.Item>
              ))}
            </Menu>
          }
          trigger={["click"]}
          className="dropdown-btn"
        >
          <Button style={{ ...props?.btnStyle }}>
            <Space style={{}} className="d-flex-a-jc-space-between">
              {defaultSelectedKeys === selectedItem?.key ? (
                selectedItem?.icon
              ) : (
                <></>
              )}
              {selectedItem?.label}
              <DownOutlined className="d-flex-align-center" />
            </Space>
          </Button>
        </Dropdown>
      </Space>
    </>
  );
}
