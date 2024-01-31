import RatingsHistogram, {RatingDetail} from "./RatingHistogram";

const exampleRatings: RatingDetail[] = [
    {stars: 1, count: 150, percentage: 5},
    {stars: 1.5, count: 78, percentage: 2.5},
    {stars: 2, count: 200, percentage: 7},
    {stars: 2.5, count: 175, percentage: 6},
    {stars: 3, count: 400, percentage: 13},
    {stars: 3.5, count: 600, percentage: 20},
    {stars: 4, count: 900, percentage: 30},
    {stars: 4.5, count: 450, percentage: 15},
    {stars: 5, count: 147, percentage: 1.5},
];
export default function RatingHistogramPreview() {
    return <RatingsHistogram ratings={exampleRatings}/>
}