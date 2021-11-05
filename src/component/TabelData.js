import React from "react"

class TableData extends React.Component{
    // console.log(props.users.id)
    render(){
        return(
            <tr>
            <th scope="row">{this.props.users.id}</th>
            <td colspan="2">{this.props.users.name}</td>
            <td>{this.props.users.username}</td>
            <td>{this.props.users.email}</td>
          </tr>
        );
    }
}
export default TableData;