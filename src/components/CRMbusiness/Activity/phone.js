import React, { PureComponent} from 'react';
import { Tabs, Icon ,Input ,Button,Divider,Avatar,Collapse} from 'antd';
import styles from './style.less';

const { TextArea } = Input;
const Panel = Collapse.Panel;
var json = {
    "chanceName": [
        {
            "chanceName": "地址信息",
            "userName": "发货地址",
            "time": "2018-9-16",
            "money": "10000"
        }
    ]
}

class Phone extends PureComponent {
  render() {
        let phones = json.chanceName.map((item,index)=>
              <Panel header="电话" key={index}>
                    <span>内容</span>
                    <p>{item.time}</p>
              </Panel>
            );
    return (
          <div style={{width:'96%',minHeight:'100px',marginLeft:'2%'}}>
              <span><span style={{color:'red'}}>*</span>主题</span>
              <Input style={{width:'100%'}}></Input>
              <span>留言</span>
              <TextArea rows={5} style={{width:'100%'}}></TextArea>
              <span>名称</span>
              <Input style={{width:'100%'}}></Input>
              <span>相关项</span>
              <Input style={{width:'100%'}}></Input>
              <Button type="primary" style={{float:'right',marginTop:10}}>保存</Button>
              <Divider>过去活动</Divider>
              <Collapse style={{'background':'white'}}>
                {phones}
              </Collapse>
          </div>
    );
  }
}

export default Phone;
