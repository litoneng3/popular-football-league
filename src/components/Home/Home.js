import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Leagues from '../Leagues/Leagues';

const Home = () => {
    let [leagues, setLeagues] = useState([]);

    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.leagues))
    }, []);
     leagues = leagues.slice(0,20)

    return (
        <div>
            <Header></Header>
            {
                leagues.map(league => <Leagues league={league} key={league.idLeague}></Leagues>)
            }
        </div>
    );
};

export default Home;