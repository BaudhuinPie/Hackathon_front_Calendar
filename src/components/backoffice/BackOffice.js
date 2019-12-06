import React from 'react';
import './BackOffice.css';
import Addpanel from './Addpanel';
import ASBLPanel from './ASBLPanel'

class BackOffice extends React.Component {
    render() {
        return (
            <div class="backoffice-zone">
                <Addpanel />
                <ASBLPanel />
            </div>
        )
    }
}

export default BackOffice;