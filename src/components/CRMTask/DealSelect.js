import React from "react";
import { Select } from 'antd';
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}
class DealSelect extends React.Component {
  render() {
    return (
      <div>
	    <Select defaultValue="全部业务机会" style={{ width: 120 ,'float':'left'}} onChange={handleChange}>
	      <Option value="全部业务机会">全部业务机会</Option>
	      <Option value="下个月关闭">下个月关闭</Option>
	      <Option value="本月关闭">本月关闭</Option>
	      <Option value="我的业务机会">我的业务机会</Option>
	      <Option value="新建本周">新建本周</Option>
	      <Option value="业务机会销售漏斗">业务机会销售漏斗</Option>
	      <Option value="最近业务机会">最近业务机会</Option>
	      <Option value="已赢得">已赢得</Option>
	    </Select>
      </div>
    );
  }
}

export default DealSelect;
