import React from 'react';
import './ASBLPanel.css'
const ASBLs = ["SPA", "RTJ", "EKDK", "DDFEROP", "EKKDJ", "MLOP", "JNBVP", "WDFG"]

class ASBLPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open:false
        }
    }

    componenDidMount = () => {

    }

    render() {
        return (
            <div className="asbl-zone">
                {ASBLs.map((ASBL, index) => (
                    <p>{ASBL}</p>
                ))}
            </div>
        )
    }
}

export default ASBLPanel;