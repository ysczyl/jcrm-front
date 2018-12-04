import React from "react";
import { Table, Divider, Tag,Affix, Button,Avatar,Icon  } from 'antd';
import styles from './style.less';
const ButtonGroup = Button.Group;
class Affixs extends React.Component {
    state = {
    top: 0,
    bottom: 10,
  }
    componentWillMount(){
    console.log(this.props.name)//val值
}
  render() {
    return (
        <Affix offsetTop={this.state.top} style={{width:'100%',height:122}}>
        <div className={styles.Affix}>
            <div className={styles.DIVAvatar}><Avatar shape="square" src={'http://193.112.92.136/imgs/react.jpg'} className={styles.Avatar} /></div>
            <div className={styles.DIVSpan}><span className={styles.cosSpan}>业务机会</span><br /><strong className={styles.nameStrong}>{this.props.name}</strong></div>
            <div className={styles.DIVbtn1}>
              <ButtonGroup>
                <Button>查看客户层次结构</Button>
                <Button>编辑</Button>
                <Button>删除</Button>
                <Button>新建备注</Button>
              </ButtonGroup>
            </div>
            <div className={styles.DIVbtn2}> <Button type="default" icon="plus" size={10}>追加</Button></div>
        </div>
            <div className={styles.DIVTable}>
                <table>
                  <tr>
                    <td>客户名</td>
                    <td>结束日期</td>
                    <td>金额</td>
                    <td>业务机会所有人</td>
                  </tr>
                  <tr>
                    <td>{this.props.name}</td>
                    <td>2018-12-4</td>
                    <td>￥1300000</td>
                    <td>詹颜浩</td>
                  </tr>
                </table>
            </div>
        </Affix>
    );
  }
}

export default Affixs;
