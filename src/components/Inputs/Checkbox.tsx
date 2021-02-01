import { Checkbox as MatCheckbox, withStyles, CheckboxProps } from '@material-ui/core';
import * as React from 'react';

const WhiteCheckbox = withStyles({
    root: {
        color: 'white',
        '&$checked': {
            color: 'white',
        },
    },
    checked: {},
})((props: CheckboxProps) => <MatCheckbox color="default" {...props} />);

function Checkbox(props: CheckboxProps) {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return <WhiteCheckbox checked={checked} onChange={handleChange} />;
}

export default Checkbox;
