import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

// const initialRowData = { title: '', lists: [{ subtitle: '', text: '' }] };

function RowData({ title = '', lists = [{ subtitle: '', text: '' }], sx, sxLists, ...props }) {
  return (
    <Box sx={sx} {...props}>
      <Typography variant="h5" color={'primary.dark'}>
        {title.toLocaleUpperCase()}
      </Typography>

      <List dense disablePadding sx={{ ml: 1, ...sxLists }}>
        {lists.map((list, idx) => (
          <ListItem dense disablePadding key={`description-${idx}`}>
            <ListItemText>
              <Typography variant="subtitle1" color={'primary'} mr={1} display={'inline-block'}>
                {list.subtitle} :
              </Typography>
              <Typography variant="body1" display={'inline-block'}>
                {list.text}
              </Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default RowData;
