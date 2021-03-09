import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const LeagueDetail = () => {
    const { id } = useParams();

    const [league, setLeague] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [id]);

    const { strLeague, strCountry, strBadge, strGender,intFormedYear } = league;
    

    return (
        <div>
            <h3>this is league detail..</h3>
            <img src={strBadge} alt=""/>
            <h5>Founded: {intFormedYear}</h5>
            <h4>Gender: {strGender}</h4>
            <h3>Country: {strCountry}</h3>
            <h3>League Name: {strLeague}</h3>
        </div>
    );
};

export default LeagueDetail;