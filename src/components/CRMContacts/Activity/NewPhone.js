import React, { PureComponent} from 'react';
import moment from 'moment';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import 'moment/locale/zh-cn';
import { Tabs, Icon ,Input ,Button,Divider,Avatar,Collapse,DatePicker} from 'antd';
import styles from './style.less';

var time = "";
var theme = "";
var name = "";
var name2 = "";
var relevant = "";
const { TextArea } = Input;
const Panel = Collapse.Panel;
function baocun() {
	theme = document.getElementById('theme').value;
	name = document.getElementById('name').value;
	name2 = document.getElementById('name2').value;
    relevant = document.getElementById('relevant').value;
    //继续调用上传接口
}
function onChange(value, dateString) {
time = dateString;
}
class NewPhone extends PureComponent {
  render() {
    return (
          <div style={{width:'96%',minHeight:'100px',marginLeft:'2%'}}>
              <span><span style={{color:'red'}}>*</span>主题</span>
              <Input id='theme' style={{width:'100%'}}></Input>
              <span>到期日期</span><br />
              <DatePicker  id='time' style={{width:'100%'}} defaultValue={moment('2018-11-30', 'YYYY-MM-DD')} onChange={onChange} locale={locale}/><br />
              <span><span style={{color:'red'}}>*</span>被分配人</span>
              <Input id='name' style={{width:'100%'}}></Input>
              <span>名称</span>
              <Input id='name2' style={{width:'100%'}}></Input>
              <span>相关项</span>
              <Input id='relevant' style={{width:'100%'}}></Input>
              <Button type="primary" style={{float:'right',marginTop:10}} onClick={baocun}>保存</Button>
          </div>
    );
  }
}

export default NewPhone;
