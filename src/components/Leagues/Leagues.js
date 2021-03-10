import React from 'react';
import { Link } from 'react-router-dom';
import './Leagues.css';

const Leagues = (props) => {
    const { idLeague, strLeague, strSport } = props.league;
    
    return (
        <div className="card bg-success col-sm-12 leagueStyle" style={{width: '21rem'}}>
            <div className="card-body">
                <h4>Name of the League: {strLeague}</h4>
                <h5>Sports Type: {strSport}</h5>
            </div>
            <div className="card-link text-center mb-3">
                <Link to={`/league/${idLeague}`}><button className="btn btn-primary">Show Details</button></Link>
            </div>

        </div>
    );
};

export default Leagues;