import { Box, Typography } from '@mui/material';
import { myTimeline } from '../../store/timeline';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useState } from 'react';
import { TimelineOppositeContent } from '@mui/lab';

function MyTimeline() {
  const [focusIdx, setFocusIdx] = useState(null);

  const handleClickIcon = (idx) => () => {
    if (focusIdx === idx) {
      setFocusIdx(null);
    } else {
      setFocusIdx(idx);
    }
  };

  const TimelineItemBox = ({
    children,
    variant = 'filled',
    Icon,
    colorIcon,
    colorLine,
    handleClickIcon,
    disabled,
    hideLine = false,
  }) => (
    <TimelineItem>
      <TimelineOppositeContent>{children[1]}</TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot
          variant={variant}
          onClick={disabled ? null : handleClickIcon}
          sx={{
            cursor: disabled ? 'auto' : 'pointer',
            borderColor: `${colorIcon}.main`,
            bgcolor: variant === 'filled' ? `${colorIcon}.main` : `none`,
            color: `${colorIcon}.${variant === 'filled' ? 'contrastText' : 'main'}`,
          }}
        >
          {Icon && <Icon />}
        </TimelineDot>
        {!hideLine && <TimelineConnector sx={{ bgcolor: colorLine || 'brown.main', minHeight: '40px' }} />}
      </TimelineSeparator>
      <TimelineContent>{children[0]}</TimelineContent>
    </TimelineItem>
  );

  return (
    <Timeline position={'alternate'}>
      {myTimeline.map((item, idx) => (
        <TimelineItemBox
          key={`timeline-${idx}`}
          handleClickIcon={handleClickIcon(idx)}
          Icon={item.icon}
          colorIcon={item.color}
          colorLine={'grey.dark'}
          hideLine={idx === myTimeline.length - 1}
          disabled={!item.description}
          variant={focusIdx === idx ? 'filled' : 'outlined'}
        >
          {/* children[0] */}
          <Box>
            <Typography variant="subtitle1" fontWeight={'bold'}>
              {item.period}
            </Typography>
            <Typography variant="body1" color={`${item.color}.dark`}>
              {item.title}
            </Typography>
            <Typography variant="subtitle2" color={`${item.color}.main`}>
              {item.position}
            </Typography>
          </Box>

          {/* children[1] */}
          {focusIdx === idx && (
            <Box border={'2px dashed'} borderColor={`${item.color}.main`} borderRadius={'12px'}>
              <Typography variant="body2" color={`${item.color}.light`}>
                {item.description}
              </Typography>
            </Box>
          )}
        </TimelineItemBox>
      ))}
    </Timeline>
  );
}

export default MyTimeline;
