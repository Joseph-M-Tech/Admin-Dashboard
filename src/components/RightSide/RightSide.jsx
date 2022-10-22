import React from "react";
import CustomerReview from "../CustomerReview/CR";
import Updates from "../Updates/Update";
import Login from "../Users/Login"
import "./RightSide.css";

const RightSide = () => {
    return (
        <div className="RightSide">
        <div>
            <Login/>
        </div>
        <div>
            <h3>Updates</h3>
            <Updates />
        </div>
        <div>
            <h3>Customer Review</h3>
            <CustomerReview />
        </div>
        </div>
    );
};

export default RightSide;