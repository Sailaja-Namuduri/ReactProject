import React from "react";

const incCntHoc=(Comp)=>{
    class Increment extends React.Component{
        state={
            cnt:0
        }
        fnIncCnt=()=>{
            this.setState({
                cnt:this.state.cnt+1
            })
        }
        render(){
            return <Comp cnt={this.state.cnt} fnIncCnt={this.fnIncCnt} />
        }
    }
    return Increment;
}

export default incCntHoc



