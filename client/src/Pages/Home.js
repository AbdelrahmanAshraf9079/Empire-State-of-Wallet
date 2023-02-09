import "./Home.css";
import Navbar from "../Components/Navbar/Navbar.js";
import Transactions from "../Components/TransactionsList/Transactions.js";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className="TransTitle">All Transactions</h1>
      <Transactions />
    </div>
  );
};

export default Home;
