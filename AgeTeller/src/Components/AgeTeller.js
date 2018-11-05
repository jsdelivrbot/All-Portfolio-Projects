import React, { Component } from "react";
import partyPopper from "../assests/party-popper.jpg";

class AgeTeller extends Component {
  timesince(date) {
    let today = new Date().getTime();
    let otherDay = new Date(date).getTime();
    let difference = Math.abs(today - otherDay);

    let days = Math.floor(difference / (1000 * 3600 * 24));
    let Years = Math.floor(days / 365);
    days -= Years * 365;
    let month = Math.floor(days / 31);
    days -= month * 31;

    return `${Years} Years ${month} Months and ${days} Days`;
  }
  render() {
    return (
      <div>
        <h3>{this.props.date}</h3>
        <h4>Congraturations on {this.timesince(this.props.date)}!</h4>
        <img src={partyPopper} alt="party-popper" className="partyPopper" />
      </div>
    );
  }
}

export default AgeTeller;
