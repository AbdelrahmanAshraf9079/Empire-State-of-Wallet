import "./Transactions.css";
import useFetch from "../../Hooks/useFetch";
import { Table } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import  Footer  from "../FooterComp/Footer.js";

const Home = () => {
  const { data, setData } = useFetch("http://localhost:3000/api/transactions/");

  const handleClick = async (text) => {
    const res = await axios.put(
      "http://localhost:3000/api/transactions/",
      text
    );
    window.location.reload();

  };

  const TransData = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Corporate",
      dataIndex: "merchant_name",
      key: "corporate",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Checkbox",
      key: "checkbox",
      render: (record) => {
        return (
          <button
            className="bezosButton"
            onClick={() => handleClick({ corporate: record.merchant_name })}
          >{data.cacheData[record.id].bezosRelated ? "Related" : "Not Related"}</button>
        );
      },
    },
  ];

  return (
    <div className="TransactionsList">
      <Table columns={TransData} dataSource={data.cacheData} />
      {(data.totals)&& <Footer data={data}/>  }
    </div>
  );
};

export default Home;
