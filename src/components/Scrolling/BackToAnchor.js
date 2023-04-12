import { Fragment } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Fade from '@mui/material/Fade';
import Fab from '@mui/material/Fab';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function BackToAnchor({
  children,
  id = 'back-to-anchor',
  ReactNoteIcon,
  sxButtonToAnchor = { position: 'fixed', bottom: 16, left: 16 },
  sizeButton = 'small',
}) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(`#${id}`);

    if (anchor) {
      anchor.scrollIntoView({
        block: 'start', // start | center |end
      });
    }
  };

  return (
    <Fragment>
      <CssBaseline />
      <Box id={id} />

      <Box>{children}</Box>

      <Fade in={trigger}>
        <Box onClick={handleClick} role="presentation" sx={sxButtonToAnchor}>
          <Fab size={sizeButton} aria-label="scroll back to top">
            {ReactNoteIcon ? ReactNoteIcon : <KeyboardArrowUpIcon />}
          </Fab>
        </Box>
      </Fade>
    </Fragment>
  );
}

export default BackToAnchor;
