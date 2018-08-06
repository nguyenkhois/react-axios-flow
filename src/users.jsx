/* @flow */
import * as React from 'react';
import axios from 'axios';

import API from './api';

type PersonListState = { persons: Array<any> };

export class PersonList extends React.Component<{}, PersonListState>{
    //Do stuff
    constructor(props: any) {
        super(props);
        this.state = {
            persons: []
        }; // Apply automatic type PersonListState
    }

    componentDidMount() {
        API.get('users/')
            .then((response) => {
                console.log(response.status, 'Get successfully the user list');
                this.setState({persons: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleDelete = (event: SyntheticMouseEvent<EventTarget>, userId: number) => {
        event.preventDefault();
        API.delete('/users/' + userId)
            .then((response) => console.log(response.status, 'Deleted successfully - userId: ' + userId))
            .catch((error) => console.log(error));
    }

    //Render
    render(){
        return(
            <div>
                <ul>
                    <ul>
                        {this.state.persons.map((person) =>
                                <li key={person.id.toString()}>{person.name} (<a href="#" onClick={(event)=>this.handleDelete(event, person.id)} title="Delete">X</a>)</li>
                        )}
                    </ul>
                </ul>
            </div>
        );
    }
};

type PersonAddState = { personName: string };
export class PersonAdd extends React.Component<{}, PersonAddState>{
    //Do stuff
    constructor(props: any) {
        super(props);
        this.state = { personName: ''};
    }

    handleInputChange = (event: SyntheticInputEvent<EventTarget>) => {
        this.setState({personName: event.target.value});
    }

    handleSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
        event.preventDefault();
        //console.log(this.state);
        const newPersonName = { name : this.state.personName };
        API.post('/users', newPersonName)
            .then((response) => console.log(response.status, 'Added successfully a new person', response.data))
            .catch((error) => console.log(error));

        this.setState({ personName: '' });
    }
    
    //Render
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="personName" onChange={this.handleInputChange} value={this.state.personName}/>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
};