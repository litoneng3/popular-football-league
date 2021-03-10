import React from 'react';
import './Header.css';

const Header = (props) => {
    // const { strBadge } = props.league;
    // let image;
    // if(props.league.strBadge){
    //     image =<img src={props.league.strBadge} alt=""/>;
    // }
    return (
        <div className="fullHeader">
            <h3>Popular Football Leagues</h3>
        </div>
    );
};

export default Header;