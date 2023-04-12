import AppBarWithBackToTop from '../../components/AppBar/AppBarWithBackToTop';
import { Avatar, Box, Grid, Paper, Typography } from '@mui/material';
import { ColData, RowData } from '../../components/DataBox';
import { resume } from '../../store/resume';
import Picture from '../../asset/image/picture.jpg';

function index() {
  return (
    <AppBarWithBackToTop sxAppBar={{ display: 'flex', mb: [2, 3] }}>
      <Paper sx={{ p: 1, m: 1 }}>
        <Box textAlign={'center'} mb={[1, 3]}>
          <Typography variant="h3" color={'primary.light'}>
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
                  mb: [2, 5],
                  borderWidth: 5,
                  borderStyle: 'ridge',
                  borderColor: 'primary.light',
                }}
              />
            </Box>

            <RowData {...resume.info} sxLists={{ mb: 5 }} />
            <RowData {...resume.skill} sxLists={{ mb: 5 }} />
            <RowData {...resume.contact} sxLists={{ mb: 5 }} />
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

export default index;
