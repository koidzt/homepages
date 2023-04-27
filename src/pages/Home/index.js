import AppBarWithBackToTop from '../../components/AppBar/AppBarWithBackToTop';
import { useNavigate } from 'react-router';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import MyselfImg from '../../asset/image/home.jpg';
import MyTimeline from './MyTimeline';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';

function Home() {
  const navigate = useNavigate();

  const handleClickButton = (path = '/') => {
    return () => navigate(path);
  };
  return (
    <AppBarWithBackToTop>
      <Paper>
        <Grid container>
          <Grid item xs={12}>
            <Box textAlign={'center'} mt={2}>
              <Typography variant="h4" color={'lightBlue.dark'}>
                Thanawan Panitpongsri
              </Typography>
              <Typography variant="h4" color={'lightBlue.main'}>
                (Koi)
              </Typography>

              <Typography variant="h4" color={'lightBlue.light'}>
                Front-End Developer
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} textAlign={'end'}>
            <Button variant="text" startIcon={<PortraitOutlinedIcon />} onClick={handleClickButton('/about')}>
              About
            </Button>
            <Button variant="text" startIcon={<ContactPageOutlinedIcon />} onClick={handleClickButton('/resume')}>
              Resume
            </Button>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              alt={'my photo'}
              component={'img'}
              src={MyselfImg}
              width={'100%'}
              height={'100%'}
              sx={{ objectFit: 'cover' }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <MyTimeline />
          </Grid>
        </Grid>
      </Paper>
    </AppBarWithBackToTop>
  );
}

export default Home;
