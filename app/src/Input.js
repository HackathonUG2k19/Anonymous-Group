import React from 'react';
import { userDone, pswd, userStatus, PetitionList } from './DataSet'
import Vote from './vote'


class InputForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: 'Type in Petition Name' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value : event.target.value });
    }

    handleSubmit(event) {
        var person = prompt("Please enter your name", "USERNAME");

        if (person == null || person == "") {
            return;
        }
        else {
            if (userDone[person] == null) {
                alert("incorrect username")
            }
            else {
                var password = prompt("Please enter your password", "PASSWORD");
                if (pswd[person] != password.toString()) {
                    alert("Wrong Password");
                }
                else {

                    for (let x = 0; x < PetitionList.length; x++) {
                        if (PetitionList[x][0] == this.state.value.toString()) {
                            console.log(PetitionList[x][0])
                            console.log(this.state.value.toString())
                            PetitionList[x][2].castVote(new Vote({ 'elect':this.state.value.toString(), 'vote': 1 }));
                            console.log(PetitionList[x][2].getSize(),"size of list or chain")
                            console.log("Added vote");
                        }
                    }
                }
            }
        }
        this.setState({ value: "Petition Name" })
        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                <input type="text" value={this.state.pet} onChange={this.handleChange} />        </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default InputForm;