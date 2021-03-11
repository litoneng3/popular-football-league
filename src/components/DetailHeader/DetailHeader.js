import React from 'react';
import './DetailHeader.css';

const DetailHeader = (props) => {
    const { strLeague, strBadge, strBanner } = props.league;
    return (
        <div className="detailHeader">
            <img id="banner" className="col-sm-12" src={strBanner} alt=""/>
            <div className="d-flex justify-content-center col-sm-12">
                <img id="badge" src={strBadge} alt="" />
            </div>
            <h4>{strLeague}</h4>
        </div>
    );
};

export default DetailHeader;