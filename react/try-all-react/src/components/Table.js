import React, {Component} from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

class Table extends Component{
  render() {
    const { characterData, removeCharacter } = this.props;
    // console.log(this.props);
    return (
      <table className="table table-striped">
        <TableHeader/>
        <TableBody 
          characterData={characterData}
          removeCharacter={removeCharacter}
          />
      </table>
    );
  }
}

export default Table;