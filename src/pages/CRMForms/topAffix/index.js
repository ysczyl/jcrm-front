import React from "react";
import { Table, Divider, Tag,Affix, Button,Avatar,Icon  } from 'antd';
import styles from './style.less';
import { connect } from 'dva';
const ButtonGroup = Button.Group;
@connect(({ consumer, loading }) => ({
  consumer,
  projectLoading: loading.effects['consumer/customerSearch'],
}))
class Affixs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      top: 0,
      bottom: 10,
      list:[],
      cid:this.props.cid,
      flag:false,
};
}

  customerSearch=(e)=> {
    const { dispatch } = this.props;
    dispatch({
    type: 'consumer/customerSearch',
    payload: {cid:this.state.cid,}
  });
}
  flags=(e)=>{
    console.log(this.state.list)
    if(this.state.list.length != 0){
      this.setState({
        flag:true,
      },()=>{console.log(this.state.flag)});
    }
  }
  componentDidMount(){
    this.customerSearch();
    this.flags();
}
  componentWillReceiveProps(nextProps){
    this.setState({
      list: nextProps.consumer,
  },()=>{console.log(this.state.list)});
     this.flags();
  }
  render() {
    console.log(this.state.list)
    return (
        <Affix offsetTop={this.state.top} style={{width:'100%',height:100}}>
        <div className={styles.Affix}>
            <div className={styles.DIVAvatar}><Avatar src={'http://193.112.92.136/imgs/react.jpg'} className={styles.Avatar} /></div>
            <div className={styles.DIVSpan}><span className={styles.cosSpan}>客户</span><br /><strong className={styles.nameStrong}>{this.state.flag?this.state.list.customerSearch[1][0].consumerName:"ysc"}</strong></div>
            <div className={styles.DIVbtn1}>
              <ButtonGroup>
                
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
                    <td>电话</td>
                    <td>开单地址</td>
                    <td>网址</td>
                    <td>客户所有人</td>
                  </tr>
                  <tr>
                    <td>15858293500</td>
                    <td>浙江省杭州市临安区胜联路168号</td>
                    <td>www.baidu.com</td>
                    <td>袁少城</td>
                  </tr>
                </table>
            </div>
        </Affix>
    );
  }
}

export default Affixs;
