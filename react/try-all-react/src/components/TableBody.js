import React from 'react'

const TableBody = (props) => {
  // const { characterData } = props;
  // return (
  //   <tbody>
  //     {characterData.map((data, index) => (
  //       <tr key={index}>
  //         <th>{data.name}</th>
  //         <th>{data.job}</th>
  //       </tr>
  //     ))}
  //   </tbody>
  // );
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <th>{row.name}</th>
        <th>{row.job}</th>
        <th>
          <button className="btn btn-primary"  onClick={() => props.removeCharacter(index)}>删除</button>
        </th>
      </tr>
    )
  })

  return (
    <tbody>
      {rows}
    </tbody>
  );
}

export default TableBody;