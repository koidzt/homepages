import AppBarWithBackToTop from '../../components/AppBar/AppBarWithBackToTop';
import { Box, Paper, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const TimelineItemBox = ({ children }) => (
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot sx={{ bgcolor: 'amber.main' }} />
      <TimelineConnector sx={{ bgcolor: 'brown.main' }} />
    </TimelineSeparator>
    <TimelineContent>{children}</TimelineContent>
  </TimelineItem>
);

function MyTimeline() {
  return (
    <AppBarWithBackToTop sxAppBar={{ mb: [2, 3] }}>
      <Paper sx={{ p: 1 }}>
        <Timeline position="alternate">
          <TimelineItemBox>
            <Box>
              <Typography variant="subtitle1" fontWeight={'bold'}>
                Mar 2021 - Present
              </Typography>
              <Typography variant="body1" color={'green.main'}>
                Front-End Developer at Qbox Point Co., Ltd.
              </Typography>
            </Box>
          </TimelineItemBox>

          <TimelineItemBox>
            <Box>
              <Typography variant="subtitle1" fontWeight={'bold'}>
                Sep 2020 - Jan 2021
              </Typography>
              <Typography variant="body1" color={'cyan.main'}>
                Learned Fullstack Web Developer from Codecamp by Software Park Thailand
              </Typography>
            </Box>
          </TimelineItemBox>

          <TimelineItemBox>
            <Box>
              <Typography variant="subtitle1" fontWeight={'bold'}>
                Oct 2018 - Aug 2020
              </Typography>
              <Typography variant="body1" color={'blue.main'}>
                Medical Representative at Kaspa Pharmaceutical (Thailand) Co., Ltd.
              </Typography>
            </Box>
          </TimelineItemBox>

          {/* <TimelineItemBox>
            <Box>
              <Typography variant='subtitle1'>May 2018 - Sep 2018</Typography>
              <Typograph variant='body1'y color={'grey'}>The study of English Language at Fast English</Typography>
            </Box>
          </TimelineItemBox> */}

          <TimelineItemBox>
            <Box>
              <Typography variant="subtitle1" fontWeight={'bold'}>
                Aug 2016 - Apr 2018
              </Typography>
              <Typography variant="body1" color={'deepPurple.main'}>
                Export Sales Representative at Yearrakarn Co., Ltd.
              </Typography>
            </Box>
          </TimelineItemBox>

          <TimelineItemBox>
            <Box>
              <Typography variant="subtitle1" fontWeight={'bold'}>
                Jun 2012 - May 2016
              </Typography>
              <Typography variant="body1" color={'pinkSweet.main'}>
                Bachelor of Science in Food Technology at Chulalongkorn University
              </Typography>
            </Box>
          </TimelineItemBox>

          <TimelineItemBox>
            <Box>
              <Typography variant="subtitle1" fontWeight={'bold'}>
                May 2005 - Mar 2011
              </Typography>
              <Typography variant="body1" color={'deepOrange.main'}>
                Mathematics-Science at Sainampeung School
              </Typography>
            </Box>
          </TimelineItemBox>

          <TimelineItemBox>
            <Box>
              <Typography variant="subtitle1" fontWeight={'bold'}>
                May 1997 - Mar 2005
              </Typography>
              <Typography variant="body1" color={'amber.main'}>
                Elementary education at Sainamtip School
              </Typography>
            </Box>
          </TimelineItemBox>

          {/* <TimelineItemBox>
            <Box>
              <Typography variant='subtitle1'></Typography>
              <Typograph variant='body1'y color={'grey'}>
              </Typography>
            </Box>
          </TimelineItemBox> */}
        </Timeline>
      </Paper>
    </AppBarWithBackToTop>
  );
}

export default MyTimeline;
