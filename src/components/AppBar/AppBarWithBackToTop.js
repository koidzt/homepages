import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Fade from '@mui/material/Fade';
import Fab from '@mui/material/Fab';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DrawerAppBar from '../AppBar/DrawerAppBar';
import { Button, Stack } from '@mui/material';
import { hiddenMenu } from '../../config/menu.config';

function AppBarWithBackToTop({
  children,
  classes,
  component,
  disableGutters,
  fixed,
  maxWidth,
  sx,
  sxAppBar,
  showHiddenMenu = false,
}) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-page');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Stack minHeight={'100vh'} display={'flex'} justifyContent={'space-between'}>
      <Box>
        <CssBaseline />
        <Toolbar id="back-to-top-page" />
        <DrawerAppBar sx={sxAppBar} />

        <Container
          classes={classes}
          component={component}
          disableGutters={disableGutters}
          fixed={fixed}
          maxWidth={maxWidth}
          sx={sx}
        >
          {children}
        </Container>

        <Fade in={trigger}>
          <Box onClick={handleClick} role="presentation" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
            <Fab size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </Box>
        </Fade>
      </Box>

      {/* Footer */}
      {showHiddenMenu && (
        <Stack direction={'row'} spacing={1}>
          {hiddenMenu.map((item, idx) => (
            <Button key={item.name} variant="text" href={item.path} color="grey">
              {item.name}
            </Button>
          ))}
        </Stack>
      )}
    </Stack>
  );
}

export default AppBarWithBackToTop;
