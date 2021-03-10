import React from 'react';
import './DetailHeader.css';

const DetailHeader = (props) => {
    const { strLeague, strBadge } = props.league;
    return (
        <div className="detailHeader">
            <div className="d-flex justify-content-center">
                <img src={strBadge} alt="" />
            </div>

            <h4>{strLeague}</h4>

        </div>
    );
};

export default DetailHeader;