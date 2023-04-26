import AppBarWithBackToTop from '../../components/AppBar/AppBarWithBackToTop';
import { Paper } from '@mui/material';

function Timeline() {
  return (
    <AppBarWithBackToTop sxAppBar={{ mb: [2, 3] }}>
      <Paper sx={{ p: 1 }}>Timeline</Paper>
    </AppBarWithBackToTop>
  );
}

export default Timeline;
