const p = (children: string) => `<p>${children}</p>`;

export default {
  about: () => 'ABOUT',
  projects: () => 'PROJECTS',
  contact: () => 'CONTACT',
  footTitle: () => 'swoppy.space © 2020',
  footLink: () => 'site code can be found here',
  twitLink: () => 'https://twitter.com/swoppy_',
  gitLink: () => 'https://github.com/swoppy',
  xmrAddress: () => '84rRE69ojJL7jqNXHuygDtDcTFK6hpMLgA3YN9SsMKBGWGzoYUKGQkZinnPvQkTkGvPNJFgcriC4tPHFni3mGJFdUUzh5n4',
  btcAddress: () => 'bc1qgxzkqq6sfemcu679qqhtkp7elae9n7x3tg5w9',
  tipBTC: () => 'tip BTC',
  tipXMR: () => 'tip XMR',
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
      forex and cryptocurrencies,
      also dabbles in indoor farming.
    `)}
  `,
};