import { Fragment } from 'react';
import AppBarWithBackToTop from '../../components/AppBar/AppBarWithBackToTop';
import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';

const TextColorTheme = (color) => (
  <Box m={2}>
    <Typography variant="h4" color={`${color}.light`}>
      {color}.light
    </Typography>
    <Typography variant="h4" color={`${color}.main`}>
      {color}.main
    </Typography>
    <Typography variant="h4" color={`${color}.dark`}>
      {color}.dark
    </Typography>
  </Box>
);

const BgColorTheme = (color) => (
  <Fragment>
    <Box bgcolor={`${color}.light`} textAlign={'center'}>
      <Typography variant="h5" lineHeight={'40px'} color={`${color}.contrastText`}>
        {color}.light
      </Typography>
    </Box>
    <Box bgcolor={`${color}.main`} textAlign={'center'}>
      <Typography variant="h5" lineHeight={'40px'} color={`${color}.contrastText`}>
        {color}.main
      </Typography>
    </Box>
    <Box bgcolor={`${color}.dark`} textAlign={'center'}>
      <Typography variant="h5" lineHeight={'40px'} color={`${color}.contrastText`}>
        {color}.dark
      </Typography>
    </Box>
  </Fragment>
);

const ButtonColorTheme = (color) => (
  <Box p={1} border={'2px dashed'} borderColor={`${color}.main`} borderRadius={'12px'}>
    <Stack direction={'row'} justifyContent={'space-around'} alignItems={'center'}>
      <Box borderRadius={'50%'} bgcolor={`${color}.main`} width={'20px'} height={'20px'} />
      <Typography variant="h5" lineHeight={'40px'} color={`${color}.main`}>
        {color}
      </Typography>
      <Box borderRadius={'50%'} bgcolor={`${color}.main`} width={'20px'} height={'20px'} />
    </Stack>

    <Stack spacing={1} alignItems={'center'}>
      <Button variant="text" color={`${color}`} sx={{ width: '250px' }}>
        <Typography variant="button" lineHeight={'40px'}>
          text
        </Typography>
      </Button>

      <Button variant="outlined" color={`${color}`} sx={{ width: '250px' }}>
        <Typography variant="button" lineHeight={'40px'}>
          outlined
        </Typography>
      </Button>

      <Button variant="contained" color={`${color}`} sx={{ width: '250px' }}>
        <Typography variant="button" lineHeight={'40px'}>
          contained
        </Typography>
      </Button>
    </Stack>
  </Box>
);

function Color() {
  return (
    <AppBarWithBackToTop showHiddenMenu sxAppBar={{ mb: [2, 3] }}>
      <Typography variant="h2" textAlign={'center'}>
        Color Theme
      </Typography>

      {/* Text */}
      <Paper sx={{ mb: [2, 3] }}>
        <Grid container>
          <Grid item xs={12} textAlign={'center'}>
            <Typography variant="h4" textAlign={'center'} mt={2}>
              Text Color
            </Typography>
          </Grid>

          {/* Col1 */}
          <Grid item xs={12} md={3} textAlign={'center'}>
            {TextColorTheme('primary')}
            {TextColorTheme('secondary')}
            {TextColorTheme('error')}
            {TextColorTheme('warning')}
            {TextColorTheme('info')}
            {TextColorTheme('success')}
          </Grid>

          {/* Col2 */}
          <Grid item xs={12} md={3} textAlign={'center'}>
            {TextColorTheme('pinkSweet')}
            {TextColorTheme('red')}
            {TextColorTheme('pink')}
            {TextColorTheme('purple')}
            {TextColorTheme('deepPurple')}
            {TextColorTheme('indigo')}
            {TextColorTheme('blue')}
          </Grid>

          {/* Col3 */}
          <Grid item xs={12} md={3} textAlign={'center'}>
            {TextColorTheme('lightBlue')}
            {TextColorTheme('cyan')}
            {TextColorTheme('teal')}
            {TextColorTheme('green')}
            {TextColorTheme('lightGreen')}
            {TextColorTheme('lime')}
          </Grid>

          {/* Col4 */}
          <Grid item xs={12} md={3} textAlign={'center'}>
            {TextColorTheme('yellow')}
            {TextColorTheme('amber')}
            {TextColorTheme('orange')}
            {TextColorTheme('deepOrange')}
            {TextColorTheme('brown')}
            {TextColorTheme('grey')}
            {TextColorTheme('blueGrey')}
          </Grid>
        </Grid>
      </Paper>

      {/* Bg */}
      <Paper sx={{ mb: [2, 3] }}>
        <Grid container>
          <Grid item xs={12} textAlign={'center'}>
            <Typography variant="h4" textAlign={'center'} mt={2}>
              Bg Color
            </Typography>
          </Grid>

          {/* Col1 */}
          <Grid item xs={12} md={3}>
            {BgColorTheme('primary')}
            {BgColorTheme('secondary')}
            {BgColorTheme('error')}
            {BgColorTheme('warning')}
            {BgColorTheme('info')}
            {BgColorTheme('success')}
          </Grid>

          {/* Col2 */}
          <Grid item xs={12} md={3}>
            {BgColorTheme('pinkSweet')}
            {BgColorTheme('red')}
            {BgColorTheme('pink')}
            {BgColorTheme('purple')}
            {BgColorTheme('deepPurple')}
            {BgColorTheme('indigo')}
            {BgColorTheme('blue')}
          </Grid>

          {/* Col3 */}
          <Grid item xs={12} md={3}>
            {BgColorTheme('lightBlue')}
            {BgColorTheme('cyan')}
            {BgColorTheme('teal')}
            {BgColorTheme('green')}
            {BgColorTheme('lightGreen')}
            {BgColorTheme('lime')}
          </Grid>

          {/* Col4 */}
          <Grid item xs={12} md={3}>
            {BgColorTheme('yellow')}
            {BgColorTheme('amber')}
            {BgColorTheme('orange')}
            {BgColorTheme('deepOrange')}
            {BgColorTheme('brown')}
            {BgColorTheme('grey')}
            {BgColorTheme('blueGrey')}
          </Grid>
        </Grid>
      </Paper>

      {/* Button */}
      <Paper sx={{ mb: [2, 3] }}>
        <Grid container spacing={1} p={1}>
          <Grid item xs={12} textAlign={'center'}>
            <Typography variant="h4" textAlign={'center'} mt={2}>
              Button Color
            </Typography>
          </Grid>

          {/* Col1 */}
          <Grid item xs={12} md={3}>
            <Stack spacing={1}>
              {ButtonColorTheme('primary')}
              {ButtonColorTheme('secondary')}
              {ButtonColorTheme('error')}
              {ButtonColorTheme('warning')}
              {ButtonColorTheme('info')}
              {ButtonColorTheme('success')}
            </Stack>
          </Grid>

          {/* Col2 */}
          <Grid item xs={12} md={3}>
            <Stack spacing={1}>
              {ButtonColorTheme('pinkSweet')}
              {ButtonColorTheme('red')}
              {ButtonColorTheme('pink')}
              {ButtonColorTheme('purple')}
              {ButtonColorTheme('deepPurple')}
              {ButtonColorTheme('indigo')}
              {ButtonColorTheme('blue')}
            </Stack>
          </Grid>

          {/* Col3 */}
          <Grid item xs={12} md={3}>
            <Stack spacing={1}>
              {ButtonColorTheme('lightBlue')}
              {ButtonColorTheme('cyan')}
              {ButtonColorTheme('teal')}
              {ButtonColorTheme('green')}
              {ButtonColorTheme('lightGreen')}
              {ButtonColorTheme('lime')}
            </Stack>
          </Grid>

          {/* Col4 */}
          <Grid item xs={12} md={3}>
            <Stack spacing={1}>
              {ButtonColorTheme('yellow')}
              {ButtonColorTheme('amber')}
              {ButtonColorTheme('orange')}
              {ButtonColorTheme('deepOrange')}
              {ButtonColorTheme('brown')}
              {ButtonColorTheme('grey')}
              {ButtonColorTheme('blueGrey')}
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </AppBarWithBackToTop>
  );
}

export default Color;
