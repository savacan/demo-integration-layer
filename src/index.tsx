import * as React from 'react';
import * as ReactDom from 'react-dom';
import MountPoint from './components/utility/mountPoint';

const Main: React.FC = (): JSX.Element => {
    return (
        <div>
            <div> Hello, Happy World! </div>
            <MountPoint microId={{segment: 'testContent1', id: 'hoge'}} type='micro'></MountPoint>
        </div>
    )
}

ReactDom.render(<Main />, document.getElementById('root'));