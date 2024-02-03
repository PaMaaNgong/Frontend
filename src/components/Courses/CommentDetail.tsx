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
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';

import {ReviewDetail} from "../../models";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface CommentDetailProp {
  content: string;
  classroom_environment: string;
  examination_format: string;
  exercise_format: string;
  grading_method: Array<string>;
  semester: string;
  year: number;
  rating: number;
};

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

export const CommentDetail: React.FC<CommentDetailProp> = ({
  content,
  classroom_environment,
  examination_format,
  exercise_format,
  grading_method,
  semester,
  year,
  rating
}) => {   

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
    <Card className="maxWidth-3/4 mb-5">
      <CardContent className="flex grid grid-cols-2 col-start-1 col-end-2 gap-x-[1em]">
        <Typography> {content} </Typography>
        <div className="flex flex-col items-end text-orange-300">
            <Rating className="" value={rating} readOnly />
            <div className=""> Year: {`${semester}/${year}`}</div>
            <Chip label={grading_method.length === 2 ? grading_method[0] + " & " + grading_method[1] : grading_method.length === 1 ? grading_method[0] : "none"} className="w-3/6" color="warning" size="small"/>
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
            {classroom_environment}
          </Typography>
          <Typography paragraph>Detail:</Typography>
          <Typography paragraph>
            - Exercise: {exercise_format}
            <br />
            - Exam: {examination_format}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>)
}

export default CommentDetail;
