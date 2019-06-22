import * as React from 'react';
import * as ReactDom from 'react-dom';

const Main: React.FC = (): JSX.Element => {
    return (
        <div> Hello, Happy World! </div>
    )
}

ReactDom.render(<Main />, document.getElementById('root'));