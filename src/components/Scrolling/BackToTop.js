import { Fragment } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Fade from '@mui/material/Fade';
import Fab from '@mui/material/Fab';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DrawerAppBar from '../AppBar/DrawerAppBar';

function BackToTop(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };
  return (
    <Fragment>
      <CssBaseline />
      <Toolbar id="back-to-top-anchor" />
      <DrawerAppBar />

      <Container>{children}</Container>

      <Fade in={trigger}>
        <Box onClick={handleClick} role="presentation" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </Box>
      </Fade>
    </Fragment>
  );
}

export default BackToTop;
