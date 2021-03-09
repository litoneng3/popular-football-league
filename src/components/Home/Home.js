import React, { useEffect, useState } from 'react';
import Leagues from '../Leagues/Leagues';

const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.leagues))
    }, [])
    return (
        <div>
            <h3>Leagues: {leagues.length}</h3>
            {
                leagues.map(league => <Leagues league={league}></Leagues>)
            }
        </div>
    );
};

export default Home;