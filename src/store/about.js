import dayjs from 'dayjs';
/* icon */
import HtmlSrc from '../asset/icon/Html.png';
import CssSrc from '../asset/icon/Css.png';
import JsSrc from '../asset/icon/Javascript.png';
import TsSrc from '../asset/icon/Typescript.png';
import ReactSrc from '../asset/icon/React.png';
import NodeSrc from '../asset/icon/Node.png';
import GitSrc from '../asset/icon/Git.png';
import ExpressSrc from '../asset/icon/Expressjs.png';
import SequelizeSrc from '../asset/icon/Sequelize.png';
import AntdSrc from '../asset/icon/Antd.png';
import BootstrapSrc from '../asset/icon/Bootstrap.png';
import MuiSrc from '../asset/icon/Mui.png';
import ReactRouterSrc from '../asset/icon/react-router-dom.png';

import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';

export const about = {
  info: {
    title: 'PERSONAL INFORMATION',
    lists: [
      { subtitle: 'Name', text: 'Thanawan Panitpongsri (Koi)' },
      { subtitle: 'Date of Birth', text: `July 27, 1992 (${dayjs().diff('1992-07-27', 'year')})` },
      { subtitle: 'Gander', text: 'Female' },
      { subtitle: 'Nationality', text: 'Thai' },
      { subtitle: 'Religion', text: 'Buddhism' },
    ],
  },

  skill: {
    title: 'TECHNICAL SKILLS',
    subtitle: 'Languages & Frameworks & Library & Tools',
    lists: [
      { src: HtmlSrc, label: 'HTML' },
      { src: CssSrc, label: 'CSS' },
      { src: JsSrc, label: 'Javascript' },
      { src: TsSrc, label: 'TypeScript' },

      { src: ReactSrc, label: 'React' },
      { src: NodeSrc, label: 'Node' },

      { src: GitSrc, label: 'Git' },
      { src: ExpressSrc, label: 'Express' },
      { src: SequelizeSrc, label: 'Sequelize' },
      { src: BootstrapSrc, label: 'Bootstrap' },
      { src: MuiSrc, label: 'Material UI' },
      { src: AntdSrc, label: 'Antd' },
      { src: ReactRouterSrc, label: 'React Router' },
    ],
  },

  link: {
    title: 'LINK',
    lists: [
      { subtitle: 'Github', link: 'https://github.com/koidzt', icon: GitHubIcon },
      { subtitle: 'Homepage', link: 'https://koidzt.netlify.app/', icon: HomeIcon },
      // {
      //   subtitle: 'LinkedIn',
      //   link: 'https://www.linkedin.com/in/thanawan-panitpongsri-7625761bb/',
      //   icon: LinkedInIcon,
      // },
    ],
  },

  contact: {
    title: 'CONTACT DETAILS',
    lists: [
      { subtitle: 'Mobile Phone', text: '(088) 617 6222' },
      { subtitle: 'Email Address', text: 'thanawan.koi@hotmail.com', link: 'mailto:thanawan.koi@hotmail.com' },
      { subtitle: 'Home Address', text: '579 Sukhumvit 22 Road, Klongton, Klongtoey, Bangkok 10110' },
    ],
  },
};
