import AppBarWithBackToTop from '../../components/AppBar/AppBarWithBackToTop';
import DelayLoading from '../../components/Loading/DelayLoading';
import { Avatar, Box, Grid, Paper, Typography } from '@mui/material';
import { ColData, RowData } from '../../components/DataBox';
import { resume } from '../../store/resume';
// import Picture from '../../asset/image/resume.jpg';
import Picture from '../../asset/image/IMG_0118.JPG';

function Resume() {
  return (
    <AppBarWithBackToTop>
      <DelayLoading color={'yellow.main'} timeout={1000} />
      <Paper sx={{ p: 1, m: 1 }}>
        <Box textAlign={'center'} mb={[1, 3]}>
          <Typography variant="h3" color={`info.light`}>
            {resume.title.toLocaleUpperCase()}
          </Typography>
        </Box>

        <Grid container spacing={[2, 3]}>
          <Grid item xs={12} md={4}>
            <Box display={'flex'} justifyContent={'center'}>
              <Avatar
                alt="picture"
                src={Picture}
                sx={{
                  width: [175, 200],
                  height: [175, 200],
                  mb: [2, 4],
                  borderWidth: 5,
                  borderStyle: 'ridge',
                  borderColor: 'info.light',
                }}
              />
            </Box>

            <RowData {...resume.info} sxList={{ mb: 4 }} />
            <RowData {...resume.skill} sxList={{ mb: 4 }} />
            <RowData {...resume.link} sxList={{ mb: 4 }} />
            <RowData {...resume.contact} sxList={{ mb: 4 }} />
          </Grid>

          <Grid item xs={12} md={8}>
            <ColData {...resume.work} sx={{ mb: 4 }} spacing={2} />
            <ColData {...resume.education} sx={{ mb: 4 }} spacing={2} />
          </Grid>
        </Grid>
      </Paper>
    </AppBarWithBackToTop>
  );
}

export default Resume;
