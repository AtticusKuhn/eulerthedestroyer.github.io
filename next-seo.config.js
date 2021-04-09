export default {
  titleTemplate : 'My Site | %s',
  defaultTitle : 'My Site',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://eulerthedestroyer.github.io/',
    site_name: 'My Personal Site',
    title:"my site",
    description: 'a site to learn about me, my opinions, and my projects',
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 600,
        alt: 'my logo',
      },
    ],
  },
  twitter: {
    handle: '@eeeeeeeeeeeeeee',
    site: '@github',
    cardType: 'summary_large_image',
  },
  additionalLinkTags : [
    {
      rel: 'icon',
      href: '/images/logo.png',
    },
  ]
};