import "./Home.css";
import Navbar from "../Components/Navbar/Navbar.js";
import Transactions from "../Components/TransactionsList/Transactions.js";

// Home page component
const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className="TransTitle">Empire State of Wallet</h1>
      <Transactions />
    </div>
  );
};

export default Home;
