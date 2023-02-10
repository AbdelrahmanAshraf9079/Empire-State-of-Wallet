import "./Transactions.css";
import useFetch from "../../Hooks/useFetch";
import { Table, Button } from "antd";
import axios from "axios";
import Footer from "../FooterComp/Footer.js";
import PieChart from "../PieChart/PieChart";
import Spinner from "../Spinner/Spinner.js";

const Home = () => {
  //Fetch the table data from the backend api before loading the component
  const { data } = useFetch("http://localhost:3000/api/transactions/");

  //Handles the button click event and reloads the component
  const handleClick = async (text) => {
    await axios.put("http://localhost:3000/api/transactions/", text);
    window.location.reload();
  };
  // titles fill the column headers
  const TransData = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: '10%',
      //render items in the row with the dataIndex
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Corporate",
      dataIndex: "merchant_name",
      key: "corporate",
      width: '30%',
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      width: '20%',
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Bezos Related",
      key: "Bezos Related",
      render: (record) => {
        // checks if the record is bezos related or not and handles the click event
        return (
          <Button
            type="primary"
            danger={data.cacheData[record.id].bezosRelated}
            className="bezosButton"
            onClick={() => handleClick({ corporate: record.merchant_name })}
          >
            {data.cacheData[record.id].bezosRelated ? "Related" : "Not Related"}
          </Button>
        );
      },
    },
  ];

  return (
    <div className="TransactionsList">
      <Table columns={TransData} dataSource={data.cacheData} />
      {data.totals ? (
        <div className="last">
          <div className="Footer">
            <Footer data={data} />
          </div>
          <div className="Chart">
            <PieChart data={data} />
          </div>
        </div>
      ) : (
        <Spinner className="Spinner" />
      )}
    </div>
  );
};

export default Home;
