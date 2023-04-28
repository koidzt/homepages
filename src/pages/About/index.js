import AppBarWithBackToTop from '../../components/AppBar/AppBarWithBackToTop';
import DelayLoading from '../../components/Loading/DelayLoading';
import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { RowData } from '../../components/DataBox';
import { about } from '../../store/about';
import MyselfImg from '../../asset/image/about.png';

function About() {
  return (
    <AppBarWithBackToTop>
      <DelayLoading color={'teal.main'} />
      <Paper sx={{ p: 2, mb: [2, 3] }}>
        <Grid container justifyContent={'center'} mb={3} sx={{ display: { sm: 'none' } }}>
          <Grid item xs={12} sm={3}>
            <Box position={'relative'} pb={'100%'}>
              <Box
                component={'img'}
                id={'imageMe'}
                alt={'my photo'}
                src={MyselfImg}
                width={'100%'}
                height={'100%'}
                borderRadius={'50%'}
                border={'7px outset'}
                borderColor={'info.light'}
                sx={{ objectFit: 'scale-down', objectPosition: '50% 50%' }}
                position={'absolute'}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container position={'relative'} mb={7}>
          <Grid item xs={12} sm={9}>
            <RowData {...about.info} />
          </Grid>

          <Grid item xs={12} sm={3}>
            <Box
              component={'img'}
              alt={'my photo'}
              src={MyselfImg}
              width={'250px'}
              height={'250px'}
              borderRadius={'50%'}
              border={'7px outset'}
              borderColor={'info.light'}
              position={'absolute'}
              top={0}
              right={0}
              sx={{ objectFit: 'scale-down', display: { xs: 'none', sm: 'block' } }}
            />
          </Grid>
        </Grid>

        <Grid container my={7} justifyContent={'center'}>
          <Grid item xs={10} sm={8} md={5}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5" color={'primary.dark'} mb={3}>
                {about.skill.title.toLocaleUpperCase()}
              </Typography>

              <Stack direction="row" justifyContent={'center'} useFlexGap flexWrap="wrap" spacing={3}>
                {about.skill.lists.map((item) => (
                  <Stack key={`${item.label}`} justifyContent={'center'} alignItems={'center'} spacing={1}>
                    <Box
                      component={'img'}
                      width={'40px'}
                      height={'40px'}
                      alt={`${item.label}`}
                      src={item.src}
                      sx={{ objectFit: 'scale-down' }}
                    />
                    <Typography variant="caption">{item.label}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>

        <Grid container alignItems={'flex-end'}>
          <Grid item xs={12} sm={6} md={4} mb={[7, 0, 0]}>
            <Box>
              <Typography variant="h5" color={'primary.dark'} textAlign={{ xs: 'center', sm: 'start' }}>
                {about.link.title.toLocaleUpperCase()}
              </Typography>

              {about.link.lists.map((list, idx) => (
                <Stack
                  key={`skill-${list.subtitle}`}
                  direction={'row'}
                  alignItems={'center'}
                  justifyContent={{ xs: 'center', sm: 'start' }}
                >
                  <Button
                    startIcon={<list.icon sx={{ width: 28, height: 28 }} />}
                    color="info"
                    sx={{ textTransform: 'none' }}
                    onClick={(e) => {
                      window.open(list.link);
                      e.preventDefault();
                    }}
                  >
                    <Typography variant="body1" color={'text.primary'}>
                      {list.subtitle}
                    </Typography>
                  </Button>
                </Stack>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={8}>
            <RowData {...about.contact} textAlign="endReverse" />
          </Grid>
        </Grid>
      </Paper>
    </AppBarWithBackToTop>
  );
}

export default About;
