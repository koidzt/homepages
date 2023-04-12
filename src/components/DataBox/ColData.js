import { Box, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';

// const initialColData = {
//   title: '',
//   contents: [{ header: '', subtitle: '', period: '', lists: [{ subtitle: '', text: '' }] }],
// };

const initContents = [{ header: '', subtitle: '', period: '', lists: [{ subtitle: '', text: '' }] }];

function ColData({ title = '', contents = initContents, sx, spacing, sxContents, sxLists, ...props }) {
  return (
    <Box sx={sx} {...props}>
      <Typography variant="h5" color={'primary.dark'} gutterBottom>
        {title.toLocaleUpperCase()}
      </Typography>

      <Stack spacing={spacing} ml={1} sx={sxContents}>
        {contents.map((content, index) => (
          <Box key={`${title}-content-${index}`}>
            <Typography variant="h6" color={'primary'}>
              {content.header}
            </Typography>

            <Typography
              variant="subtitle1"
              display={'inline-block'}
              fontWeight={'bold'}
              fontStyle={'oblique'}
              color={'secondary.light'}
            >
              {content.subtitle}
            </Typography>
            {content.period && (
              <Typography
                variant="body1"
                display={'inline-block'}
                fontStyle={'oblique'}
                color={'secondary.dark'}
                borderLeft={'1px solid'}
                borderColor={'primary.dark'}
                ml={1}
                pl={1}
              >
                {content.period}
              </Typography>
            )}

            {Array.isArray(content.lists) && (
              <List dense disablePadding sx={{ ml: 1, ...sxLists }}>
                {content.lists.map((list, idx) => (
                  <ListItem disablePadding key={`description-${idx}`}>
                    <ListItemText>
                      {list.subtitle && (
                        <Typography variant="subtitle2" fontWeight={500} mr={0.75} display={'inline-block'}>
                          {list.subtitle} :
                        </Typography>
                      )}
                      <Typography variant="body2" display={'inline-block'}>
                        {list.text}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default ColData;
