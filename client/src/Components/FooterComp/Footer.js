import "./Footer.css"
import { Progress } from 'antd';

//Footer component contains the stats displayed at the bottom of the page
const Footer = (props) => {
  //Calculates the stats and round them up the decimals to digits of  2 using (/100)
  const totalAmount = Math.round((props.data.totals.totalAmount + Number.EPSILON) * 100) / 100
  const bezosAmount = Math.round((props.data.totals.bezos.totalAmount + Number.EPSILON) * 100) / 100
  const bezosPercentage = Math.round((props.data.totals.bezos.percentage + Number.EPSILON) * 100) / 100
  return (
      <div className="Stats">
      <p className="calculations">Total Amount Spent = {totalAmount}</p>
      <p className="calculations">Amount Spent for Bezos-affiliated companies = {bezosAmount}</p>
      <p className="calculations">Bezos-affiliated companies Percentage </p>
      <Progress percent={bezosPercentage} status="active" strokeColor= "red" />
      </div>
  )
}

export default Footer