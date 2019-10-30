import React,{Component,Fragment } from 'react'
import './style.css'
import XiaojiejieItem from "./XiaojiejieItem"

class Xiaojiejie extends Component{
//js的构造函数，由于其他任何函数执行
constructor(props){
    super(props) //调用父类的构造函数，固定写法
    this.state={
        inputValue:'' , // input中的值
        list:['基础按摩','精油推背']    //服务列表
    }
}


render(){
    return  (
        <Fragment>
            {/* 正确注释的写法 */}
<div>
    <label htmlFor="jspang">加入服务：</label>
    <input id="jspang" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
    <button onClick={this.addList.bind(this)}> 增加服务 </button>
</div>
            <ul>
                {
                    this.state.list.map((item,index)=>{
                        return (
                            //----------------关键修改代码----start
                            <div>
                                <XiaojiejieItem />
                            </div>
                            //----------------关键修改代码----end
                           
                        )
                    })
                }
            </ul>  
        </Fragment>
    )
}

    inputChange(e){
        // console.log(e.target.value);
        // this.state.inputValue=e.target.value;
        this.setState({
            inputValue:e.target.value
        })
    }
    //增加服务的按钮响应方法
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
//删除单项服务
deleteItem(index){
    let list = this.state.list
    list.splice(index,1)
    this.setState({
        list:list
    })
    
}

}
export default Xiaojiejie 