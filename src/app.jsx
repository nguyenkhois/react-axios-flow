/* @flow */
import * as React from 'react';

import Hello from './hello';
import { PersonList, PersonAdd } from './users';

export default class App extends React.Component<{}>{
    //Do stuff
    
    //Render
    render(){
        return(
            <div>
                <Hello language="Pure JavaScript" framework="React"/>,
                <PersonList />,
                <PersonAdd />
            </div>
        );
    }
};

// ------ Use only for Flow test ------
/* export function foo(x: ?number): string {
    if (x) {
        return x;
    }
    return "default string";
} */
