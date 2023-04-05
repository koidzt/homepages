import { ColorModeContext } from '../../App';
import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function ThemeModeButton() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
      {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}

export default ThemeModeButton;
