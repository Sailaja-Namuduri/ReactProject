import React from "react"

class Select extends React.Component{
    render(){
        return <select>
            {
                this.props.data.map((v,i)=>{
                    return <option key={i}>{v}</option>
                })
            }
        </select>
    }
}

export default Select