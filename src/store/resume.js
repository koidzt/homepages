import dayjs from 'dayjs';

export const resume = {
  title: 'Thanawan Panitpongsri (Koi)',
  info: {
    title: 'PERSONAL INFORMATION',
    lists: [
      // { subtitle: 'Name', text: 'Thanawan Panitpongsri' },
      // { subtitle: 'Nickname', text: 'Koi' },
      { subtitle: 'Age', text: dayjs().diff('1992-07-27', 'year') },
      { subtitle: 'Gander', text: 'Female' },
      // { subtitle: 'Date of Birth', text: '27 July 1992' },
      { subtitle: 'Nationality', text: 'Thai' },
      { subtitle: 'Religion', text: 'Buddhism' },
    ],
  },

  skill: {
    title: 'TECHNICAL SKILLS',
    lists: [
      { subtitle: 'Languages', text: 'HTML, CSS, Javascript, TypeScript, JAVA' },
      { subtitle: 'Frameworks', text: 'React.js, Node.js, Express.js, Next.js, CUBA Platform' },
      { subtitle: 'Library & Tools', text: 'Git, Sequelize, MogoDB, Axios, Antd, Bootstrap, Material UI' },
    ],
  },

  link: {
    title: 'LINK',
    lists: [
      { subtitle: 'Github', text: 'https://github.com/koidzt', link: 'https://github.com/koidzt' },
      { subtitle: 'Homepage', text: 'https://koidzt.netlify.app/', link: 'https://koidzt.netlify.app/' },
    ],
  },

  contact: {
    title: 'CONTACT DETAILS',
    lists: [
      { subtitle: 'Mobile Phone', text: '(088) 617 6222' },
      { subtitle: 'Email Address', text: 'thanawan.koi@hotmail.com', link: 'mailto:thanawan.koi@hotmail.com' },
      { subtitle: 'Home Address', text: '579 Sukhumvit22 Road, Klongton, Klongtoey, Bangkok 10110' },
    ],
  },

  work: {
    title: 'WORK EXPERIENCE',
    contents: [
      {
        header: 'Software Developer',
        subtitle: 'AXONS',
        period: 'July 2023-Present',
        lists: [
          {
            subtitle: 'Trade Term Agreement Project',
            text: 'Web Applications for managing record data about that trade term agreement sent to request approved and approver can approved agreement.',
          },
          // {
          //   subtitle: 'Manage task by ',
          //   text: 'Develop Web Applications Frontend by Next.ts\nDevelop Web Applications Backend by JAVA CUBA Platform.',
          // },
          { subtitle: 'Support Project', text: 'Develop functions to support another project' },
        ],
      },
      {
        header: 'Front-End Developer',
        subtitle: 'Qbox Point Co., Ltd.',
        period: 'Mar 2021-May 2023',
        lists: [
          {
            subtitle: 'Packing Station Project',
            text: 'Web Applications for managing record data about that product packing from supplier send to customer.',
          },
          {
            subtitle: 'Farm Production Project',
            text: 'Web Applications for managing stock balance in warehouse of farm.',
          },
          { subtitle: 'Support Project', text: 'Develop functions to support another project' },
        ],
      },
      {
        header: 'Medical Representative',
        subtitle: 'Kaspa Pharmaceutical (Thailand) Co., Ltd.',
        period: 'Oct 2018-Aug 2020',
        lists: [
          { subtitle: '', text: 'Maintain and keep relationship with customer.' },
          { subtitle: '', text: 'Usually add new shop in my area.' },
          { subtitle: '', text: 'Achieve monthly and yearly target.' },
          { subtitle: '', text: 'Make appointment with customer for introduce product, follow order with customer.' },
        ],
      },
      {
        header: 'Export Sales Representative',
        subtitle: 'Yearrakarn Co., Ltd.',
        period: 'Aug 2016-Apr 2018',
        lists: [
          { subtitle: '', text: 'Maintain and keep relationship with customer.' },
          { subtitle: '', text: 'Achieve monthly and yearly target.' },
          { subtitle: '', text: 'Make appointment with customer for introduce product, follow order with customer.' },
        ],
      },
    ],
  },

  education: {
    title: 'EDUCATION',
    contents: [
      {
        header: 'Software Park Thailand',
        subtitle: 'Fullstack Javascript',
        period: 'Sep 2020-Jan 2021',
        lists: [{ subtitle: '', text: 'Certificate, Fullstack Web Developer (Codecamp#7)' }],
      },
      {
        header: 'Chulalongkorn University',
        subtitle: 'Bachelor of Science',
        period: 'Jun 2012-May 2016',
        lists: [
          { subtitle: '', text: 'Majored in Food Technology.' },
          { subtitle: '', text: 'Graduated with a GPA of 2.63' },
        ],
      },
      {
        header: 'Sainampeung School',
        subtitle: 'Mathematics-Science',
        period: 'May 2005-Mar 2011',
        lists: [
          { subtitle: '', text: 'Graduated with a GPA of 3.66.' },
          { subtitle: '', text: 'Member of Student Committee.' },
        ],
      },
    ],
  },
};
