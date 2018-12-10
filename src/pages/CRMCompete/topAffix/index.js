import React from "react";
import { Table, Divider, Tag,Affix, Button,Avatar,Icon  } from 'antd';
import styles from './style.less';
import { connect } from 'dva';
const ButtonGroup = Button.Group;
@connect(({ competitors, loading }) => ({
  competitors,
  projectLoading: loading.effects['competitors/getCompetitorsList'],
}))
class Affixs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      top: 0,
      bottom: 10,
      list:[],
      competitorName:this.props.competitorName,
      flag:false,
};
}

getCompetitorsList=(e)=> {
    const { dispatch } = this.props;
    dispatch({
    type: 'competitors/getCompetitorsList',
    payload: {competitorName:"?keyword="+this.state.competitorName}
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
    this.getCompetitorsList();
    this.flags();
}
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    this.setState({
      list: nextProps.competitors,
  },()=>{console.log(this.state.list)});
     this.flags();
  }
  render() {
    return (
        <Affix offsetTop={this.state.top} style={{width:'100%',height:100}}>
        <div className={styles.Affix}>
            <div className={styles.DIVAvatar}><Avatar src={'http://193.112.92.136/imgs/react.jpg'} className={styles.Avatar} /></div>
            <div className={styles.DIVSpan}><span className={styles.cosSpan}>竞争对手名</span><br /><strong className={styles.nameStrong}>{this.state.flag?this.state.list.competitorsList[0].competitorName:"ysc"}</strong></div>
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
                    <td>重要程度</td>
                    <td>描述</td>
                    <td>关注状态</td>
                    <td>关注类型</td>
                  </tr>
                  <tr>
                    <td>{this.state.flag?this.state.list.competitorsList[0].ex1:""}</td>
                    <td>{this.state.flag?this.state.list.competitorsList[0].description:""}</td>
                    <td>{this.state.flag?this.state.list.competitorsList[0].status:""}</td>
                    <td>{this.state.flag?this.state.list.competitorsList[0].types:""}</td>
                  </tr>
                </table>
            </div>
        </Affix>
    );
  }
}

export default Affixs;
