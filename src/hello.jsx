/* @flow */
import * as React from 'react';

type HelloProps = {
    language: string;
    framework: string;
};

export default class Hello extends React.Component<HelloProps>{
    //Do stuff
    
    //Render
    render(){
        return(
            <div className='welcome'>
                This example is using these following things:
                <ul>
                    <li>{this.props.language}</li>
                    <li>{this.props.framework}</li>
                    <li>Flow is a type checker</li>
                    <li>Axios for making HTTP request</li>
                </ul>
                Open the browser console to view results when you are testing.
            </div>
        );
    }
};