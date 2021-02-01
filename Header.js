import React from 'react';
import "./Header.css";
import AccountBoxSharpIcon from '@material-ui/icons/AccountBoxSharp';
import ForumSharpIcon from '@material-ui/icons/ForumSharp';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";

function Header({backButton}) {
    const history = useHistory();
    return (
        // BEM
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon className="header__icon" fontSize="large" />
                </IconButton>
            ) : (
                    <IconButton>
                        <AccountBoxSharpIcon className="header__icon" fontSize="large" />
                    </IconButton>
                )}

            <Link to="/">
                <img className="header__logo" src="https://i.imgur.com/qD44bPW.png" alt='heart' />
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ForumSharpIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link>
        </div>
    );
}

export default Header;
