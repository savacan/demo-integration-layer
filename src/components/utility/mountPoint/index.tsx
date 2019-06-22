import * as React from 'react';
import { MicroIdetificationKey } from '../../../externals/manageExternals';
import URLResolver from '../../../utils/urlResolver';


interface IProps {
    microId: MicroIdetificationKey;
    type: 'micro' | 'custom'
}

class MountPoint extends React.Component<IProps> {
    constructor(props: Readonly<IProps>) {
        super(props);
    }
    componentDidMount() {
        const {microId} = this.props;
        console.log(`id: ${microId.segment + microId.id} is mounted`);
        const url = URLResolver(microId.segment);
        console.log(`target url is ${url}`)
    }

    render() {
        const {microId} = this.props;
        const id = `${microId.segment}-${microId.id}`
        return (
            <div id={id}>test</div>
        )
    }
}

export default MountPoint;