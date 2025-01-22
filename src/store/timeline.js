import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import CakeIcon from '@mui/icons-material/Cake';
import { List, ListItem, ListItemText } from '@mui/material';

const CustomListItem = ({ children }) => (
  <ListItem sx={{ textAlign: 'inherit', py: 0 }}>
    <ListItemText>{children}</ListItemText>
  </ListItem>
);

export const myTimeline = [
  {
    icon: BusinessCenterIcon,
    color: 'green',
    period: 'July 2023 - Present',
    title: 'AXONS',
    position: 'Software Developer',
    description: (
      <List dense disablePadding>
        <CustomListItem>Trade Term Agreement Project.</CustomListItem>
        <CustomListItem> - Frontend by Next typescript.</CustomListItem>
        <CustomListItem> - Backend by JAVA CUBA Platform.</CustomListItem>
        <CustomListItem>Support Other Project.</CustomListItem>
      </List>
    ),
  },
  {
    icon: BusinessCenterIcon,
    color: 'cyan',
    period: 'Mar 2021 - May 2023',
    title: 'Qbox Point Co., Ltd.',
    position: 'Front-End Developer',
    description: (
      <List dense disablePadding>
        <CustomListItem>Packing Station Project.</CustomListItem>
        <CustomListItem>Farm Production Project.</CustomListItem>
        <CustomListItem>Management Center Project.</CustomListItem>
        <CustomListItem>Support Other Project.</CustomListItem>
      </List>
    ),
  },
  {
    icon: SchoolIcon,
    color: 'blue',
    period: 'Sep 2020 - Jan 2021',
    title: 'Codecamp by Software Park Thailand',
    position: 'Learned Fullstack Web Developer',
    description: (
      <List dense disablePadding>
        <CustomListItem>
          HTML, CSS, Javascript, React.js, Node.js, Express, Sequelize, MySQL, MogoDB, Axios, Git
        </CustomListItem>
      </List>
    ),
  },
  {
    icon: BusinessCenterIcon,
    color: 'indigo',
    period: 'Oct 2018 - Aug 2020',
    title: 'Kaspa Pharmaceutical (Thailand) Co., Ltd.',
    position: 'Medical Representative',
    description: (
      <List dense disablePadding>
        <CustomListItem>Outstanding Achievement Award 2017</CustomListItem>
        <CustomListItem>Maintain and keep relationship with customer.</CustomListItem>
        <CustomListItem>Usually add new shop in my area.</CustomListItem>
        <CustomListItem>Achieve monthly and yearly target.</CustomListItem>
        <CustomListItem>
          Make appointment with customer for introduce product, follow order with customer.
        </CustomListItem>
      </List>
    ),
  },
  // {
  //   icon: SchoolIcon,
  //   color: 'grey',
  //   period: 'May 2018 - Sep 2018',
  //   title: 'Fast English',
  //   position: 'The study of English Language',
  //   description: 'The study of English Language',
  // },
  {
    icon: BusinessCenterIcon,
    color: 'purple',
    period: 'Aug 2016 - Apr 2018',
    title: 'Yearrakarn Co., Ltd.',
    position: 'Export Sales Representative',
    description: (
      <List dense disablePadding>
        <CustomListItem>Maintain and keep relationship with customer.</CustomListItem>
        <CustomListItem>Achieve monthly and yearly target.</CustomListItem>
        <CustomListItem>
          Make appointment with customer for introduce product, follow order with customer.
        </CustomListItem>
      </List>
    ),
  },
  {
    icon: SchoolIcon,
    color: 'lightPink',
    period: 'Jun 2012 - May 2016',
    title: 'Chulalongkorn University',
    position: 'Bachelor of Science',
    description: (
      <List dense disablePadding>
        <CustomListItem>Majored in Food Technology.</CustomListItem>
        <CustomListItem>Graduated with a GPA of 2.63</CustomListItem>
        <CustomListItem>Volunteer Engineering Students Camp 41th(2013), 42th(2014), 44th(2016)</CustomListItem>
        <CustomListItem>
          Packaging design team for community trading support event at Kaeng Khoi, Saraburi 2014.
        </CustomListItem>
        <CustomListItem>Leadership team of chair-ball in Open Can Sport Event 22th 2013</CustomListItem>
        <CustomListItem>Captain of the rugby team 2012.</CustomListItem>
      </List>
    ),
  },
  {
    icon: SchoolIcon,
    color: 'deepOrange',
    period: 'May 2005 - Mar 2011',
    title: 'Sainampeung School',
    position: 'Mathematics-Science',
    description: (
      <List dense disablePadding>
        <CustomListItem>Graduated with a GPA of 3.66</CustomListItem>
        <CustomListItem>Member of Student Committee.</CustomListItem>
        <CustomListItem></CustomListItem>
      </List>
    ),
  },
  {
    icon: SchoolIcon,
    color: 'orange',
    period: 'May 1997 - Mar 2005',
    title: 'Sainamtip School',
    position: 'Elementary education',
    description: '',
  },
  { icon: CakeIcon, color: 'yellow', period: 'July 1992', title: 'I was born', position: '', description: '' },
];
