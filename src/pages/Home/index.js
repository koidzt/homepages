import BackToTop from '../../components/Scrolling/BackToTop';
import { Paper } from '@mui/material';

function index() {
  return (
    <BackToTop>
      <Paper sx={{ p: 1 }}>Home</Paper>
    </BackToTop>
  );
}

export default index;
