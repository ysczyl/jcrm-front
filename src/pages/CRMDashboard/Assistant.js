import React from "react";
import styles from './Analysis.less';
import { Collapse } from 'antd';

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}
var json = {
    "chanceName": [
        {
            "chanceName": "ysc1",
            "userName": "username1",
            "time": "2018-9-16",
            "money": "10000"
        },        {
            "chanceName": "ysc1",
            "userName": "username3",
            "time": "2018-9-22",
            "money": "30000"
        },        {
            "chanceName": "ysc1",
            "userName": "username15",
            "time": "2018-11-26",
            "money": "10000"
        },        {
            "chanceName": "ysc1",
            "userName": "username15",
            "time": "2018-12-16",
            "money": "100000"
        },        {
            "chanceName": "ysc1",
            "userName": "username21",
            "time": "2018-12-16",
            "money": "20000"
        },        {
            "chanceName": "ysc1",
            "userName": "username41",
            "time": "2018-12-18",
            "money": "130000"
        }
    ]
}
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
class Assistant extends React.Component {
  render() {
        let Panels = json.chanceName.map((item,index)=>
            	<Panel header={item.chanceName} key={index} className={styles.assistantPanel}>
		          <p>{item.userName}</p>
		          <p>{item.time}</p>
		          <p>￥{item.money}</p>
		        </Panel>
            );
    return (
      <div className={styles.assistant}>
      		<strong className={styles.assistantSpan}>助理</strong><br />
	    <Collapse onChange={callback} style={{'background':'white'}}>
		    {Panels}
	    </Collapse>
      </div>
    );
  }
}

export default Assistant;
