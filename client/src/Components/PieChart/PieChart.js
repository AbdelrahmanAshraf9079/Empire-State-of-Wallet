import { ResponsivePie } from "@nivo/pie";

const PieChart = (props) => {
  let rem = props.data.totals.totalAmount - props.data.totals.bezos.totalAmount;

  // data displayed in the chart
  const pieData = [
    {
      id: "Bezos-affiliated",
      label: "Bezos-affiliated",
      value: props.data.totals.bezos.totalAmount,
      color: "hsl(103, 70%, 50%)",
    },
    {
      id: "Remainder",
      label: "Remainder",
      value: rem,
      color: "hsl(104, 70%, 50%)",
    },
  ];

  return (
    <ResponsivePie
      data={pieData}
      margin={{ top: 30, right: 20, bottom: 30, left: 20 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
    />
  );
};

export default PieChart;
