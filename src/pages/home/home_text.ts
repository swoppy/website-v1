const p = (children: string) => `<p>${children}</p>`;

export default {
  about: () => 'ABOUT',
  projects: () => 'PROJECTS',
  contact: () => 'CONTACT',
  footTitle: () => 'swoppy.space © 2020',
  footLink: () => 'site code can be found here',
  twitLink: () => 'https://twitter.com/swoppy_',
  gitLink: () => 'https://github.com/swoppy',
  aboutDetail: () => `
    ${p(`
      Hi my name is Jason and I’m a frontend developer.
      Currently, the stack the I’m building UIs with are Reactjs,
      TypeScript and ofcourse CSS (css modules).
      I tend to suggest/add storybookjs when
      I’m working with larger teams.
    `)}
    ${p(`
      When I’m not working or doing any programming,
      I like to watch various markets like stocks,
      forex and cryptocurrencies as such
      if you could indulge me with my reflinks, here you go :)
    `)}
  `,
};