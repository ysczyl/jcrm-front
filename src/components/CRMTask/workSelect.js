import React from "react";
import { Select } from 'antd';
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}
class workSelect extends React.Component {
  render() {
    return (
      <div>
	    <Select defaultValue="今天的任务" style={{ width: 120 ,'float':'left'}} onChange={handleChange}>
	      <Option value="今天的任务">今天的任务</Option>
	      <Option value="我的任务">我的任务</Option>
	      <Option value="全部逾期任务">全部逾期任务</Option>
	      <Option value="过去7天任务">过去7天任务</Option>
	      <Option value="已委派任务">已委派任务</Option>
	    </Select>
      </div>
    );
  }
}

export default workSelect;
