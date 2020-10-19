import React from 'react';
import Chart from '../Components/Chart';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

export default function ControlledTabs({ oneCrypto, props }) {
    const [key, setKey] = React.useState('chart');

    return (
        <Tabs
            className="container"
            activeKey={key}
            onSelect={(k) => setKey(k)}
        >
            <Tab eventKey="chart" title="Chart">
                <Chart oneCrypto={oneCrypto} props={props} />
            </Tab>
            <Tab eventKey="desc" title="Description">
                <h1 className="container">I am desc tabs</h1>
            </Tab>
            <Tab eventKey="nexttab" title="Next Tab">
                <h1 className="container">I am Next Tab</h1>
            </Tab>
        </Tabs>
    );
}
