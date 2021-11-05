import React from 'react'
import TableData from "./TabelData"
const Table = props => {
    const td=  props.props.map(user=>{
        return <TableData key={user.id}  users={user} />
      });
    return (
        <table class="table">
      
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Userneme</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        
      {
          td
      }
        
      </tbody>
    </table>

    )
}

export default Table;
