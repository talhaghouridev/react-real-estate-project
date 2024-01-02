import React from "react";

const ContactCard = ({ name, date, icon:Icon, btn }) => {
  return (
    <>
      <div className="flexColCenter mode">
        <div className="flexStart">
          <div className="flexCenter icon">
            <Icon size={25} />
          </div>
          <div className="flexColStart detail">
            <span className="primaryText">{name}</span>
            <span className="secondaryText">{date}</span>
          </div>
        </div>
        <div className="flexCenter button">{btn}</div>
      </div>
    </>
  );
};

export default ContactCard;
