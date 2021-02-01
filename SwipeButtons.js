import React from 'react';
import "./SwipeButtons.css";

import IconButton from "@material-ui/core/IconButton";
import ReplaySharpIcon from '@material-ui/icons/ReplaySharp';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import GradeIcon from '@material-ui/icons/Grade';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
            <ReplaySharpIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__left">
            <CloseSharpIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__star">
            <GradeIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__right">
            <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__lightning">
            <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    );
};

export default SwipeButtons;
