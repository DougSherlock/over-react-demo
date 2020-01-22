import React, { Component } from 'react';
import AccordionSample from './components/boostrapdemo/AccordionSample';
import AlertSample from './components/boostrapdemo/AlertSample';
import './App.css';

class BootstrapDemo extends Component {
    render() {
        return (
            <div>
                <h2>Some basic components from the React Bootstrap library</h2>
                <hr />
                <div className="demo-sample">
                    <div>
                        <h3>Bootstrap Alert</h3>
                    </div>
                    <AlertSample />
                </div>
                <div className="demo-sample">
                    <div>
                        <h3>Bootstrap Accordion</h3>
                    </div>
                    <AccordionSample />
                </div>
            </div>
        )
    }
}


export default BootstrapDemo;