import React from 'react'

const Print = ({data}) => {
    console.log(data);
  return (
    <div>
       {data.map((item)=>{
         return(<table>
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Department</th>
            </tr>
            <tr>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.age}</td>
                <td>{item.salary}</td>
                <td>{item.department}</td>
            </tr>
        </table>);
       })}
    </div>
  )
}

export default Print