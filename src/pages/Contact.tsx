import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faGoogleScholar } from '@fortawesome/free-brands-svg-icons';
import Section from '../components/Section';

const iconLinks = [
    {
        href: 'mailto:kristiyan.sakalyan@tum.de',
        icon: faEnvelope,
        label: 'Email',
    },
    {
        href: 'https://www.linkedin.com/in/kristiyan-sakalyan/',
        icon: faLinkedin,
        label: 'LinkedIn',
    },
    {
        href: 'https://scholar.google.com/citations?user=1H2U8RIAAAAJ',
        icon: faGoogleScholar,
        label: 'Google Scholar',
    },
    {
        href: 'https://github.com/kristiyansakalyan',
        icon: faGithub,
        label: 'GitHub',
    },
];

const Contact = () => (
    <Section title="Contact">
        <div className="contact-icons">
            {iconLinks.map(({ href, icon, label }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="contact-icon"
                >
                    <FontAwesomeIcon icon={icon} />
                </a>
            ))}
        </div>
    </Section>
);

export default Contact;
