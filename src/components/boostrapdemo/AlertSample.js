import React, { Component, useState } from 'react'
import { Button } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'

export default class AlertSample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true,
        }
    }    
    componentDidMount () { 
        // bootstrap leaves the 'fade' class in the when the Alert is visible
        // I set the state to force a redraw after loading
        this.setState({ isVisible: true });
    }
    componentDidUpdate() {
        // bootstrap leaves the 'fade' class in the when the Alert is visible
        // I remove it here so the Alert will display
        if (this.state.isVisible) {
            document.getElementById("myAlert").classList.remove("fade");
        }
    }
    render() {
        if (this.state.isVisible) {
            return (
                <Alert id="myAlert" variant="danger" onClose={() => this.setState({ isVisible: false })} show={true} dismissible>
                    <Alert.Heading>OMG - We're out of donuts!</Alert.Heading>
                    <p>
                        Proceed to the nearest donut emporium posthaste!
                  </p>
                </Alert>
            );
        }
        return <Button onClick={() => this.setState({ isVisible: true })}>Show Alert</Button>;
    }
}


// function AlertSample() {
//     const [show, setShow] = useState(true);
  
//     if (show) {
//       return (
//         <Alert variant="danger" onClose={() => setShow(false)} dismissible show={true} defaultShow={true}>
//           <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
//           <p>
//             Change this and that and try again. Duis mollis, est non commodo
//             luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
//             Cras mattis consectetur purus sit amet fermentum.
//           </p>
//         </Alert>
//       );
//     }
//     return <Button onClick={() => setShow(true)}>Show Alert</Button>;
//   }

//   export default AlertSample;
  
