import { SocialProfileJsonLd } from 'next-seo';
import Link from 'next/link';

const About =()=>{
  return (<>
    <NextSeo
      title="about me"
      description="learn all about me"
      openGraph={{
        title: 'about me',
        description: 'learn all about me',
        url: 'https://eulerthedestroyer.github.io/about',
        type: 'profile',
        profile: {
          firstName: 'Leonard',
          lastName: 'Euler',
          username: 'euler',
        },
      }}
    />
    <SocialProfileJsonLd
      type="Person"
      name="Leonard Euler"
      url="http://www.eulerthedestroyer.github.io"
      sameAs={[
        'http://www.github.com/eulerthedestroyer/',
      ]}
    />
    <h1>About me</h1>
    <p>Some of my interests include: programming, mathematics, functional programming, and history</p>
    <Link href='http://www.github.com/eulerthedestroyer/'>
      <a>
        View me on Github
      </a>
    </Link>
  </>)
}
export default About