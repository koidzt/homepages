import { Box, Link, List, ListItem, ListItemText, Typography } from '@mui/material';

// const initialRowData = { title: '', lists: [{ subtitle: '', text: '' }] };

const sxContentAlign = {
  start: {
    sx: {},
    sxListItemText: {},
  },

  center: {
    sx: { textAlign: 'center' },
    sxListItemText: { textAlign: 'center' },
  },

  end: {
    sx: { textAlign: 'end' },
    sxListItemText: { textAlign: 'end' },
  },

  startReverse: {
    sx: {},
    sxListItemText: { display: 'flex', flexDirection: 'row-reverse', justifyContent: 'flex-end' },
  },

  centerReverse: {
    sx: { textAlign: 'center' },
    sxListItemText: { display: 'flex', flexDirection: 'row-reverse', justifyContent: 'center' },
  },

  endReverse: {
    sx: { textAlign: 'end' },
    sxListItemText: { display: 'flex', flexDirection: 'row-reverse', textAlign: 'end' },
  },
};

function RowData({ title = '', lists = [{ subtitle: '', text: '' }], sx, sxList, textAlign = 'start', ...props }) {
  return (
    <Box sx={{ ...sxContentAlign[textAlign].sx, ...sx }} {...props}>
      <Typography variant="h5" color={'primary.dark'}>
        {title.toLocaleUpperCase()}
      </Typography>

      <List dense disablePadding sx={{ ml: 1, ...sxList }}>
        {lists.map((list, idx) => (
          <ListItem dense disablePadding key={`description-${idx}`}>
            <ListItemText>
              <Box sx={sxContentAlign[textAlign].sxListItemText}>
                <Typography variant="subtitle1" color={'primary'} display={'inline-block'}>
                  {list.subtitle}
                </Typography>
                <Typography variant="subtitle1" color={'primary'} mx={1} display={'inline-block'}>
                  :
                </Typography>

                {list.link ? (
                  <Link
                    display={'inline-block'}
                    component="button"
                    variant="body1"
                    underline="hover"
                    color={'text.primary'}
                    onClick={() => window.open(list.link)}
                  >
                    {list.text}
                  </Link>
                ) : (
                  <Typography variant="body1" display={'inline-block'}>
                    {list.text}
                  </Typography>
                )}
              </Box>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default RowData;
