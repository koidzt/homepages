import dayjs from 'dayjs';

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

  link: {
    title: 'LINK',
    lists: [
      { subtitle: 'Github', text: 'koidzt', link: 'https://github.com/koidzt' },
      {
        subtitle: 'LinkedIn',
        text: 'Thanawan Panitpongsri',
        link: 'https://www.linkedin.com/in/thanawan-panitpongsri-7625761bb/',
      },
    ],
  },

  skill: {
    title: 'TECHNICAL SKILLS',
    lists: [
      { subtitle: 'Languages', text: 'HTML, CSS, Javascript, TypeScript, Node.js' },
      { subtitle: 'Frameworks', text: 'React.js, Express.js' },
      { subtitle: 'Library & Tools', text: 'Git, Sequelize, MogoDB, Axios, Antd, Bootstrap, Material UI' },
    ],
  },

  contact: {
    title: 'CONTACT DETAILS',
    lists: [
      { subtitle: 'Mobile Phone', text: '(088) 617 6222' },
      { subtitle: 'Email Address', text: 'thanawan.koi@hotmail.com' },
      { subtitle: 'Home Address', text: '579 Sukhumvit 22 Road, Klongton, Klongtoey, Bangkok 10110' },
    ],
  },
};
