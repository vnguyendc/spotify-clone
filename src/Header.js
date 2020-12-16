import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from "@material-ui/core"
import { useDataLayerValue } from './DataLayer';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Header() {
    const [{ user }, dispatch] = useDataLayerValue()

    return (
        <div className='header'>
            <div className='header__left'>
                <ArrowBackIosIcon className="header__icon"/>
                <ArrowForwardIosIcon className="header__icon"/>

                <div className="header__search">
                    <SearchIcon />
                    <input
                    placeholder="Search"
                    type="text"
                    />
                </div>
            </div>

            <div className='header__right'>
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
                <ExpandMoreIcon className="header__icon"/>
            </div>
        </div>
    )
}

export default Header
