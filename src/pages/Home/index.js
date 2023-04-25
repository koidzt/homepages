import AppBarWithBackToTop from '../../components/AppBar/AppBarWithBackToTop';
import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import MeImg from '../../asset/image/home.jpg';

function Home() {
  return (
    <AppBarWithBackToTop sxAppBar={{ mb: [2, 0.75] }}>
      <Paper>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box component={'img'} src={MeImg} width={'100%'} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack height={'100%'} justifyContent={'center'} alignItems={'center'} spacing={3}>
              <Box textAlign={'center'}>
                <Typography variant="h4" color={'lightBlue.dark'}>
                  Miss Thanawan Panitpongsri
                </Typography>
                <Typography variant="h4" color={'lightBlue.main'}>
                  (Koi)
                </Typography>
              </Box>

              <Typography variant="h4" color={'lightBlue.light'}>
                Front-End Developer
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </AppBarWithBackToTop>
  );
}

export default Home;
