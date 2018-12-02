import React, { Component }  from 'react';

class Table extends Component {
  render () {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Name</td>
            <td>job</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>nihao</td>
            <td>你好</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;