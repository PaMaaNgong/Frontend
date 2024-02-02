import * as React from 'react';
import { duration, styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {useParams} from "react-router-dom";
import {useEffect} from 'react'
import {getReviewDetail} from "../../repositories/Course";
import {ReviewDetail} from "../../models";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const {expand, ...other } = props;
    
    return <IconButton {...other} />;})

    (({theme, expand}) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
    }));

export const CommentDetail = () => {      
    const [expanded, setExpanded] = React.useState(false);
      
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
      
    const {courseId} = useParams<{courseId: string}>();
    const [reviews, setReviews] = React.useState<ReviewDetail[]>([]);
      
    useEffect( () => {
        getReviewDetail(`${courseId}`).then(response => {
          setReviews(response.data);
          console.log(response.data)
      })
    }, []);
      
    const RegexWhiteSpacePattern = /\s+/g;

  return (
    <div>
    {reviews.map(review => 
    <div> {review.content.replace(RegexWhiteSpacePattern, "") === "" || review.content === "\n"? null:
    <Card className="maxWidth-3/4 mb-5">
      <CardContent className="flex grid grid-cols-2 col-start-1 col-end-2 gap-x-[1em]">
        {/* <Typography variant="body2" color="text.secondary">
          {review.content}
        </Typography> */}
        <Typography> {review.content} </Typography>
        <div className="flex flex-col justify-items-end text-orange-300">
            <div className="text-end"> Rating: {review.rating} </div>
            <div className="text-end"> Year: {`${review.semester}/${review.year}`}</div>
            <div className="text-end">
                {review.grading_method.length === 2 ? review.grading_method[0] + " & " + review.grading_method[1] : review.grading_method.length === 1 ? review.grading_method[0] : "none"}
            </div>
        </div>
      </CardContent>

      <CardActions disableSpacing className="bg-gray-200">
        <div>More Detail</div>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Environment:</Typography>
          <Typography paragraph>
            {review.classroom_environment}
          </Typography>
          <Typography paragraph>Detail:</Typography>
          <Typography paragraph>
            - Exercise: {review.exercise_format}
            <br />
            - Exam: {review.examination_format}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>}
    </div>)}
    </div>)
}

export default CommentDetail;
