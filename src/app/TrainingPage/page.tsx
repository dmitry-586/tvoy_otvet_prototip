"use client";

import { useState } from "react";
import Image from "next/image";
import { Collapse, CollapseProps, ConfigProvider, Modal, Select } from "antd";
import "@ant-design/v5-patch-for-react-19";

export default function Training() {
  const [newItems, setNewItems] = useState<{ [key: string]: string[] }>({});
  const [selectedValue, setSelectedValue] = useState("О ĸомпании");
  const [textareaValue, setTextareaValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDeleteItem = (key: string, item: string) => () => {
    setNewItems((prevItems) => {
      const newItems = { ...prevItems };
      newItems[key] = newItems[key].filter((i) => i !== item);
      if (newItems[key].length === 0) {
        delete newItems[key];
      }
      return newItems;
    });
  };

  const selectOptions = [
    { value: "О ĸомпании", label: "О ĸомпании" },
    { value: "Роль ассистента", label: "Роль ассистента" },
    { value: "Товары/услуги", label: "Товары/услуги" },
    { value: "Контаĸты/Доставĸа/Графиĸ", label: "Контаĸты/Доставĸа/Графиĸ" },
  ];

  const panelStyle: React.CSSProperties = {
    // marginBottom: 24,
    background: "white",
    borderRadius: 20,
    accentColor: "#7C3FF9",
    border: "none",
  };

  const items: CollapseProps["items"] = Object.keys(newItems).map(
    (key, index) => ({
      key: index.toString(),
      label: key,
      children: (
        <div>
          {Array.from(new Set(newItems[key])).map((item, index) => {
            const date = new Date();
            const formattedDate = date.toLocaleDateString();
            return (
              <Collapse
                key={index}
                defaultActiveKey="1"
                className="bg-white shadow-custom border-0"
                items={[
                  {
                    key: "1",
                    label: (
                      <div className="flex gap-5 items-center">
                        <span>Запись от {formattedDate}</span>

                        <button
                          className="flex gap-2 items-center hover:scale-105 hover:text-red-700 transition-all duration-200"
                          onClick={handleDeleteItem(key, item)}
                        >
                          <Image
                            src="/ServicesPage/garbage.svg"
                            alt="garbage"
                            width={16}
                            height={16}
                          />
                          <p>Удалить</p>
                        </button>
                      </div>
                    ),
                    children: <p>{item}</p>,
                    style: panelStyle,
                  },
                ]}
              />
            );
          })}
        </div>
      ),
      style: panelStyle,
    })
  );

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleAddNewItem = () => {
    setNewItems((prevItems) => {
      const newItems = { ...prevItems };
      if (!newItems[selectedValue]) {
        newItems[selectedValue] = [textareaValue];
      } else {
        if (!newItems[selectedValue].includes(textareaValue)) {
          newItems[selectedValue].push(textareaValue);
        }
      }
      return newItems;
    });
    setTextareaValue("");
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-5 h-max p-10 w-full max-[500px]:p-5">
      <h2 className="text-2xl">База знаний</h2>
      <div className="bg-white max-w-[1070px] flex flex-col rounded-[20px] shadow-custom p-5 gap-5 min-h-[400px]">
        <div className="flex gap-5 items-center">
          <h4 className="text-lg">Записанные данные</h4>
          <button
            onClick={showModal}
            className="flex gap-2 w-[200px] h-[35px] bg-[#7C3FF9] rounded-[20px] justify-center items-center text-white text-sm hover:scale-[1.02] transition-all duration-300"
          >
            Добавить новую запись
          </button>
          <Modal
            title="Добавить новые данные"
            open={isModalOpen}
            onOk={handleAddNewItem}
            onCancel={handleCancel}
            okText="Добавить"
            okButtonProps={{
              style: {
                backgroundColor: "#7C3FF9",
                borderColor: "#7C3FF9",
              },
            }}
            cancelButtonProps={{
              style: {
                backgroundColor: "#fff",
                borderColor: "#ddd",
                color: "#333",
              },
            }}
          >
            <div className="flex flex-col gap-5 mt-5">
              <div className="flex flex-col gap-3 text-[#212134]">
                <p>Категории</p>
                <ConfigProvider
                  theme={{
                    token: { fontSize: 16 },
                    components: {
                      Select: {
                        activeBorderColor: "#7C3FF9",
                        hoverBorderColor: "#7C3FF9",
                        activeOutlineColor: "transparent",
                        optionSelectedColor: "white",
                        optionSelectedBg: "#7C3FF9",
                        optionActiveBg: "#DCDCE4",
                        borderRadius: 20,
                        controlPaddingHorizontal: 10,
                        colorBorder: "#7C3FF9",
                      },
                    },
                  }}
                >
                  <Select
                    className="w-full max-w-[440px] h-[50px] bg-transparent text-base"
                    variant="outlined"
                    options={selectOptions}
                    value={selectedValue}
                    onChange={handleSelectChange}
                    suffixIcon={
                      <Image
                        src="/feedback/arrowDown.svg"
                        alt="arrowDown"
                        width={16}
                        height={16}
                      />
                    }
                  />
                </ConfigProvider>
              </div>
              <div className="flex flex-col gap-3 text-[#212134]">
                <p>Описание</p>
                <textarea
                  className="w-[440px] h-[140px] shadow-custom p-3 rounded-[20px] outline-none px-5 border border-[#7C3FF9] hover:scale-[1.02] transition-all duration-300 overflow-wrap break-word resize-y max-[500px]:w-full"
                  placeholder="Введите данные..."
                  value={textareaValue}
                  onChange={(e) => setTextareaValue(e.target.value)}
                />
              </div>
            </div>
          </Modal>
        </div>
        <ConfigProvider
          theme={{
            token: {
              fontSize: 18,
              borderRadius: 20,
              boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.05)",
              // colorBorder: "#7C3FF9",
            },
          }}
        >
          <Collapse
            bordered={true}
            items={items}
            size="large"
            className="bg-white shadow-custom border-0"
          />
        </ConfigProvider>
      </div>
    </div>
  );
}
