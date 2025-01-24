import InstagramIcon from '../icons/InstagramIcon.astro';
import GithubIcon from '../icons/GithubIcon.astro';
import LinkedInIcon from '../icons/linkedinIcon.astro';
import XIcon from '../icons/XIcon.astro';
import EmailIcon from '../icons/EmailIcon.astro';

const siteConfig: SiteConfig = {
    description: 'Quick desc of myself as well as some personal writings',
    image: {
        src: '/preview.jpg',
        alt: 'The C language logo LOL'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        },
        {
            text: ' ',
        },
        {
            text: ' ',
        },
        {
            text: ' ',
        },
        {
            text: 'Email',
            href: 'mailto:contact@carterpry.com',
            icon: EmailIcon
        },
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/carter-pry',
            icon: LinkedInIcon
        },
        {
            text: 'Github',
            href: 'https://github.com/carterpry',
            icon: GithubIcon
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/carter.pry',
            icon: InstagramIcon
        },
        {
            text: 'X',
            href: 'https://x.com/clpry_',
            icon: XIcon
        }
    ],
    socialLinks: [
        {
            text: 'Email',
            href: 'mailto:contact@carterpry.com',
            icon: EmailIcon
        },
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/carter-pry',
            icon: LinkedInIcon
        },
        {
            text: 'Github',
            href: 'https://github.com/carterpry',
            icon: GithubIcon
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/carter.pry',
            icon: InstagramIcon
        },
        {
            text: 'X',
            href: 'https://x.com/clpry_',
            icon: XIcon
        }
    ],
    hero: {
        title: 'Carter Pry',
        subtitle: 'Second year student at the University of Maryland',
        text: "I have a profound appreciation for top-notch software, cybersecurity, system infrastructures, and the principles of product-led growth. Feel free to read some of my writings on technology, satire posts, or just topics I find interesting.",

        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
};

export default siteConfig;