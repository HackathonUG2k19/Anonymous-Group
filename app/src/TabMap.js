import React, { Component } from 'react';
import { PetitionList } from './DataSet'
class Table extends React.Component {


    render() {
        const calcSize = (num) => {
            return num.getSize();
        }
        console.log(PetitionList.length)
        return (
            <table>
                <tbody>
                    {
                        PetitionList.map((numList, i) => (
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{numList[0]}</td>
                                <td>{numList[1]}</td>
                                <td>{numList[2].countVotesOf(numList[0])}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }
}

export default Table;