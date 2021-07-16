import React from 'react';
import { Rating } from '@material-ui/lab';

const ShowInfo = ({ showData }) => (
  <div>
    <h1> Show Info </h1>
    <p className="showTitle">{showData.showTitle}</p>
    <div className="showInfo">
      <img className="showPhoto" src={showData.showPhoto} />
      {showData.showRating ? <Rating value={showData.showRating} readOnly /> : null}
      <p className="showDates">{new Date(Number(showData.showDate)).toLocaleDateString('en-US')}</p>
      <a href={showData.showWebsite} className="showWeb">
        Show's Website
      </a>
      <p className="showDescript"> {showData.showDescription} </p>
      <p className="showCast"> {showData.showCast} </p>
      <p className="showLocation">
        Theatre Address: {showData.showStreet}
        {showData.showCity} {showData.showZip} {showData.showState}
      </p>
    </div>
  </div>
);

export default ShowInfo;