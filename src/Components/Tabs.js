import React from 'react';
import Chart from '../Components/Chart';
import Description from '../Components/descriptionTab';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

export default function ControlledTabs({ oneCrypto, props, pageId }) {
    const [key, setKey] = React.useState('chart');

    return (
        <Tabs
            className="container tabs-content"
            activeKey={key}
            onSelect={(k) => setKey(k)}
        >
            <Tab eventKey="chart" title="Price Chart">
                <Chart oneCrypto={oneCrypto} props={props} />
            </Tab>
            <Tab eventKey="desc" title="Description">
                <Description oneCrypto={oneCrypto} pageId={pageId} />
            </Tab>
            <Tab eventKey="nexttab" title="Next Tab">
                <h1 className="container">I am Next Tab</h1>
            </Tab>
        </Tabs>
    );
}
