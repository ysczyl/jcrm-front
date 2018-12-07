import React, { PureComponent} from 'react';
import moment from 'moment';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import 'moment/locale/zh-cn';
import { Tabs, Icon ,Input ,Button,Divider,Avatar,Collapse,DatePicker} from 'antd';
import styles from './style.less';
import Selects from './Select.js';

var DateBegin = "";
var timeBegin = "";
var DateEnd = "";
var timeEnd = "";
var theme = "";
var content = "";
var name = "";
var relevant = "";
var where = "";
const { TextArea } = Input;
const Panel = Collapse.Panel;
function baocun() {
	theme = document.getElementById('theme').value;
	content = document.getElementById('content').value;
	name = document.getElementById('name').value;
  relevant = document.getElementById('relevant').value;
  timeBegin = document.getElementById('timeBegin').value;
  timeEnd = document.getElementById('timeEnd').value;
  where = document.getElementById('where').value;
    //继续调用上传接口
}
function onChange(value, dateString) {
DateBegin = dateString;
}
function onChange2(value, dateString) {
DateEnd = dateString;
}
class NewEvent extends PureComponent {
  render() {
    return (
          <div style={{width:'96%',minHeight:'100px',marginLeft:'2%'}}>
              <span><span style={{color:'red'}}>*</span>主题</span>
              <Input id='theme' style={{width:'100%'}}></Input>
              <span>内容</span><br />
              <TextArea  id='content' style={{width:'100%',height:150}} /><br />
              <span><span style={{color:'red'}}>*</span>开始</span>
              <div style={{width:'100%',height:50}}>
                  <DatePicker style={{float:'left',width:'40%'}} defaultValue={moment('2018-11-30', 'YYYY-MM-DD')} onChange={onChange} /><Selects id='timeBegin' />
              </div>
              <span><span style={{color:'red'}}>*</span>结束</span>
              <div style={{width:'100%',height:50}}>
                  <DatePicker style={{float:'left',width:'40%'}} defaultValue={moment('2018-11-30', 'YYYY-MM-DD')} onChange={onChange2} /><Selects id='timeEnd' />
              </div>
              <span>位置</span>
              <Input id='where' style={{width:'100%'}}></Input>
              <span>名称</span>
              <Input id='name' style={{width:'100%'}}></Input>
              <span>相关项</span>
              <Input id='relevant' style={{width:'100%'}}></Input>
              <Button type="primary" style={{float:'right',marginTop:10}} onClick={baocun}>保存</Button>
          </div>
    );
  }
}

export default NewEvent;
