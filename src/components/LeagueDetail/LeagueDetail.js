import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import femaleTeam from '../../Image/Photo/female.png';
import maleTeam from '../../Image/Photo/Rectangle 28.png';
import './LeagueDetail.css';
import DetailHeader from '../DetailHeader/DetailHeader';

const LeagueDetail = () => {
    const { id } = useParams();

    const [league, setLeague] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [id]);

    const { strLeague, strCountry, strGender, intFormedYear, strSport, strDescriptionEN, strFacebook,strTwitter, strYoutube, strDescriptionFR } = league;

    console.log(strCountry);

    let image =(strGender ==="Male" || strGender === undefined)? <img src={maleTeam} alt="MaleTeam" /> : <img src={femaleTeam} alt="FemaleTeam" />
    
   

    return (
        <div className="league-details container">
            <div className="logo-image">
                <DetailHeader league={league}></DetailHeader>
            </div>
            
            <div class="container px-4">
                <div class="row gx-5 bg-success rounded">
                    <div class="col-lg-6 col-sm-12">
                        <div class="p-3">
                            <div className="league-info mt-5">
                                <h4>{strLeague}: </h4>
                                <p><i class="far fa-calendar-alt"></i>  Founded: {intFormedYear}</p>
                                <p><i class="fas fa-flag"></i>  Country: {strCountry}</p>
                                <p><i class="far fa-futbol"></i>  Sport Type: {strSport}</p>
                                <p><i class="fas fa-mars"></i>  Gender: {strGender}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12">
                        <div class="p-3">
                            <div className="league-image">
                                {
                                    image
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="league-description mt-3">
                <p>{strDescriptionEN}</p>
                <p>{strDescriptionFR}</p>
            </div>

            <div className="league-footer col-lg-12 col-sm-12 d-flex justify-content-center mb-5">
                <a href={`http://${strFacebook}`} target="blank"><i class="fab fa-facebook"></i></a>
                <a href={`http://${strTwitter}`} target="blank"><i class="fab fa-twitter"></i></a>
                <a href={`http://${strYoutube}`} target="blank"><i class="fab fa-youtube"></i></a>
            </div>
        </div>

    );
};

export default LeagueDetail;