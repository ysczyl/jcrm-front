import React from "react";
import { Collapse } from 'antd';
import styles from './style.less';

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}
var json = {
    "chanceName": [
        {
            "chanceName": "ysc1",
            "userName": "客户名",
            "time": "2018-9-16",
            "money": "10000"
        },        {
            "chanceName": "ysc1",
            "userName": "客户所有人",
            "time": "2018-9-22",
            "money": "30000"
        },        {
            "chanceName": "ysc1",
            "userName": "类型",
            "time": "2018-11-26",
            "money": "10000"
        },        {
            "chanceName": "ysc1",
            "userName": "母公司",
            "time": "2018-12-16",
            "money": "100000"
        },        {
            "chanceName": "ysc1",
            "userName": "网址",
            "time": "2018-12-16",
            "money": "20000"
        },        {
            "chanceName": "ysc1",
            "userName": "电话",
            "time": "2018-12-18",
            "money": "130000"
        }
        ,        {
            "chanceName": "ysc1",
            "userName": "描述",
            "time": "2018-12-18",
            "money": "130000"
        }
        ,        {
            "chanceName": "ysc1",
            "userName": "行业",
            "time": "2018-12-18",
            "money": "130000"
        }
        ,        {
            "chanceName": "ysc1",
            "userName": "员工",
            "time": "2018-12-18",
            "money": "130000"
        }
    ]
}

class XQ1 extends React.Component {
  render() {
        let lis = json.chanceName.map((item,index)=>
            	<li className={styles.Li} key={index}>
		          <span>{item.userName}</span>
		          <p>{item.time}</p>
                  <div className={styles.hr}></div>
		        </li>
            );
    return (
      <div>
        <ul>
            {lis}
        </ul>
      </div>
    );
  }
}

export default XQ1;
