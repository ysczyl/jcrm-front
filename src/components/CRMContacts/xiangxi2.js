import React from "react";
import styles from './style.less';
import { Collapse } from 'antd';

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}
var json = {
    "chanceName": [
        {
            "chanceName": "地址信息",
            "userName": "发货地址",
            "time": "2018-9-16",
            "money": "10000"
        },        {
            "chanceName": "系统信息",
            "userName": "创建人",
            "time": "2018-9-22",
            "money": "30000"
        },        {
            "chanceName": "自定义连接",
            "userName": '无',
            "time": "",
            "money": "10000"
        },        {
            "chanceName": "自定义连接",
            "userName": '无',
            "time": "",
            "money": "10000"
        },        {
            "chanceName": "自定义连接",
            "userName": '无',
            "time": "",
            "money": "10000"
        },        {
            "chanceName": "自定义连接",
            "userName": '无',
            "time": "",
            "money": "10000"
        },        {
            "chanceName": "自定义连接",
            "userName": '无',
            "time": "",
            "money": "10000"
        },        {
            "chanceName": "自定义连接",
            "userName": '无',
            "time": "",
            "money": "10000"
        },        {
            "chanceName": "自定义连接",
            "userName": '无',
            "time": "",
            "money": "10000"
        }
    ]
}
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
class XQ2 extends React.Component {
  render() {
        let Panels = json.chanceName.map((item,index)=>
            	<Panel className={styles.panel} header={item.chanceName} key={index}>
	                  <span>{item.userName}</span>
			          <p>{item.time}</p>
		        </Panel>
            );
    return (
      <div className={styles.list}>
	    <Collapse onChange={callback} style={{'background':'white'}}>
		    {Panels}
	    </Collapse>
      </div>
    );
  }
}

export default XQ2;
