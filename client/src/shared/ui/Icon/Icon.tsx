import {FC} from 'react';

const Icon: FC<{kind: string, style?: string}> = ({kind, style}) => {
    return (
        <i className={`material-icons ${style}`}>{kind}</i>
    );
}

export default Icon;