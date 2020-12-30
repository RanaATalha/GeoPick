import React from 'react';
import { IconButton, ButtonBaseProps } from '@material-ui/core';
import { ArrowBackRounded } from '@material-ui/icons';
import { RouteChildrenProps } from 'react-router-dom';

function BackBtn(props: RouteChildrenProps) {
    // handle click on back button
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        props.history.push('/');
    };

    return (
        <IconButton aria-label="backward" onClick={handleClick}>
            <ArrowBackRounded />
        </IconButton>
    );
}

export default BackBtn;
