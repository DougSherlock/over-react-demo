import React, { Component } from 'react';
import AccordionSample from './components/boostrapdemo/AccordionSample';
import './App.css';

class BootstrapDemo extends Component {
    render() {
        return (
            <div>
                <h2>Some basic components from the React Bootstrap library</h2>
                <hr />
                <div className="demo-sample">
                    <AccordionSample />
                </div>
            </div>
        )
    }
}


export default BootstrapDemo;