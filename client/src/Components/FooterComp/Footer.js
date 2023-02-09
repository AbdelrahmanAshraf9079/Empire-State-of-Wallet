import "./Footer.css"

const Home = (props) => {
  const totalAmount = Math.round((props.data.totals.totalAmount + Number.EPSILON) * 100) / 100
  const bezosAmount = Math.round((props.data.totals.bezos.totalAmount + Number.EPSILON) * 100) / 100
  const bezosPercentage = Math.round((props.data.totals.bezos.percentage + Number.EPSILON) * 100) / 100
  return (
    <div className="Footer">
      <div className="Stats">
      <p className="stats">Total Amount Spent = {totalAmount}</p>
      <p className="stats">Amount Spent for Bezos-affiliated companies = {bezosAmount}</p>
      <p className="stats">Bezos-affiliated companies Percentage = {bezosPercentage} %</p>
      </div>
    </div>
  )
}

export default Home