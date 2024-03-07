import RatingsHistogram, {RatingDetail} from "./RatingHistogram";
import Typography from "@mui/material/Typography";
import React, {useEffect, useState} from "react";
import {getRating} from "../../../../repositories/Course";

const exampleRatings: RatingDetail[] = [
    {stars: 1, count: 150, percentage: 5},
    {stars: 2, count: 200, percentage: 7},
    {stars: 3, count: 400, percentage: 13},
    {stars: 4, count: 900, percentage: 30},
    {stars: 5, count: 147, percentage: 1.5},
];


const RatingChart: React.FC = ({}) => {
    return (
        <>
            <div className="text-[22px] font-semibold">Rating</div>
            <hr className="h-0.5 mx-auto bg-black" />
            <RatingsHistogram ratings={exampleRatings} />
        </>
    );
}

export default RatingChart;