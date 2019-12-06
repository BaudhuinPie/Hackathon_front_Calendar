import React from 'react';
import './BackOffice.css';
import Addpanel from './Addpanel';
import ASBLPanel from './ASBLPanel';
import AddpanelPie from '../AddpanelPie';

class BackOffice extends React.Component {
    render() {
        return (
            <div class="backoffice-zone">
                <AddpanelPie />
                <ASBLPanel />
            </div>
        )
    }
}

export default BackOffice;