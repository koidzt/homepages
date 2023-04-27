import AppBarWithBackToTop from '../../components/AppBar/AppBarWithBackToTop';
import { Box, Grid, Link, Paper, Stack, Typography } from '@mui/material';
import { RowData } from '../../components/DataBox';
import { about } from '../../store/about';
import MyselfImg from '../../asset/image/about.jpg';

function About() {
  return (
    <AppBarWithBackToTop>
      <Paper sx={{ p: 3 }}>
        <Grid container justifyContent={'center'} mb={5} sx={{ display: { md: 'none' } }}>
          <Grid item xs={12} md={3}>
            <Box
              component={'img'}
              alt={'my photo'}
              src={MyselfImg}
              width={'100%'}
              borderRadius={'50%'}
              border={'7px outset'}
              borderColor={'amber.main'}
            />
          </Grid>
        </Grid>

        <Grid container position={'relative'} mb={10}>
          <Grid item xs={12} md={9}>
            <RowData {...about.info} />
          </Grid>

          <Grid item xs={12} md={3}>
            <Box
              component={'img'}
              alt={'my photo'}
              src={MyselfImg}
              width={'250px'}
              height={'250px'}
              borderRadius={'50%'}
              border={'7px outset'}
              borderColor={'amber.main'}
              position={'absolute'}
              top={0}
              right={0}
              sx={{ display: { xs: 'none', md: 'block' } }}
            />
          </Grid>
        </Grid>

        <Grid container my={10}>
          <Grid item xs={12}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5" color={'primary.dark'}>
                {about.skill.title.toLocaleUpperCase()}
              </Typography>

              {about.skill.lists.map((list, idx) => (
                <Box key={`skill-${list.subtitle}`} sx={{ textAlign: 'center' }}>
                  <Typography variant="subtitle1" color={'primary'}>
                    {list.subtitle}
                  </Typography>

                  <Typography variant="body1">{list.text}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Grid container alignItems={'flex-end'}>
          <Grid item xs={12} md={4} mb={[10, 0]}>
            <Box>
              <Typography variant="h5" color={'primary.dark'}>
                {about.link.title.toLocaleUpperCase()}
              </Typography>

              {about.link.lists.map((list, idx) => (
                <Stack key={`skill-${list.subtitle}`} direction={'row'} alignItems={'center'}>
                  <Typography variant="subtitle1" mr={1} color={'primary'}>
                    {list.subtitle} :
                  </Typography>

                  <Link
                    component="button"
                    variant="body1"
                    underline="hover"
                    color={'text.primary'}
                    onClick={(e) => {
                      window.open(list.link);
                      e.preventDefault();
                    }}
                  >
                    {list.text}
                  </Link>
                </Stack>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <RowData {...about.contact} textAlign="endReverse" />
          </Grid>
        </Grid>
      </Paper>
    </AppBarWithBackToTop>
  );
}

export default About;
