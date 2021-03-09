import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Leagues = (props) => {
    const {idLeague, strLeague}= props.league;

    const leagueStyle={
        border: '3px solid red',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px',
        width:'30%',
        float:'left'
    }
    return (
        <div style={leagueStyle}>
            
            <h2>ID: {idLeague}</h2>
            <h3>Name: {strLeague}</h3>
            <Link to={`/league/${idLeague}`}>Show Details</Link>
            
        </div>
    );
};

export default Leagues;