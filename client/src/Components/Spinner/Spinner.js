import { Spin } from "antd";

const Spinner = () => {
  //Spinner loader component
  return (
    <Spin tip="Loading" size="large">
      <div className="content" />
    </Spin>
  );
};
export default Spinner;
