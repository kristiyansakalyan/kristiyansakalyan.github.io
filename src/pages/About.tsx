import Section from "../components/Section";
import { scrollTo } from "../common/utils";

const About = () => (

    <Section title="About">
        <div className="about-container">
            <div className="about-text">
                <p>
                    Hey, I'm Kristiyan. I moved from Bulgaria to Germany to study at the{' '}
                    <a href="https://www.tum.de" target="_blank" rel="noopener noreferrer">
                        Technical University of Munich (TUM)
                    </a>
                    , where I completed my Bachelor’s in Computer Science and Master’s in Data Engineering and Analytics.
                </p>
                <p>
                    I recently finished my Master’s thesis on machine learning for spatial single-cell data, conducted with{' '}
                    <a href="https://scholar.google.com/citations?hl=en&user=hf0csdoAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noopener noreferrer">
                        Alessandro Palma
                    </a>{' '}
                    and{' '}
                    <a href="https://guerrantif.github.io/" target="_blank" rel="noopener noreferrer">
                        Filippo Guerranti
                    </a>{' '}
                    under the supervision of{' '}
                    <a href="https://www.helmholtz-munich.de/en/icb/pi/fabian-theis" target="_blank" rel="noopener noreferrer">
                        Prof. Dr. Dr. Fabian Theis
                    </a>{' '}
                    and{' '}
                    <a href="https://www.cs.cit.tum.de/daml/guennemann/" target="_blank" rel="noopener noreferrer">
                        Prof. Dr. Stephan Günnemann
                    </a>.
                    The{' '}
                    <a
                        href=""
                        onClick={(e) => {
                            e.preventDefault();
                            scrollTo("publications");
                        }}
                    >
                        work
                    </a>{' '}
                    was accepted at{' '}
                    <strong>NeurIPS 2025</strong> and the{' '}
                    <strong>ICML GenBio Workshop 2025</strong>.
                </p>
                <p>
                    I'm currently working as a Research Scientist at{' '}
                    <a href="https://www.helmholtz-munich.de/en/" target="_blank" rel="noopener noreferrer">
                        Helmholtz Munich
                    </a>{' '}
                    in the{' '}
                    <a href="https://www.eml-munich.de/" target="_blank" rel="noopener noreferrer">
                        EML Group
                    </a>{' '}
                    led by{' '}
                    <a href="https://www.eml-munich.de/people/zeynep-akata" target="_blank" rel="noopener noreferrer">
                        Prof. Dr. Zeynep Akata
                    </a>.
                </p>
                <p>
                    I'm into generative models, graphs, and using ML to solve scientific problems. Always happy to chat or collaborate!
                </p>
            </div>

            <div className="about-profile">
                <img
                    src="/profile_picture.jpg"
                    alt="Kristiyan Sakalyan"
                    className="about-img"
                    loading="eager"
                />
                <p className="about-location">Munich, Germany</p>
            </div>
            <div
                style={{
                    width: '100%',
                    justifyContent: 'center',
                    marginTop: '1rem',
                    display: 'flex',
                    fontFamily: 'monospace',
                    color: '#00ff2b',
                }}
            >
                <img
                    src="/hacker.png"
                    alt="img"
                    style={{ width: '20px', height: '20px', paddingRight: '12px' }}
                />
                <a
                    href="/CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#00ff2b',
                        textDecoration: 'none',
                        backgroundColor: 'black'
                    }}
                >
                    <span>$</span> wget&nbsp;
                    <span style={{ color: 'white' }}>https://kristiyansakalyan.github.io/CV.pdf</span>
                </a>
                <img
                    src="/hacker.png"
                    alt="img"
                    style={{ width: '20px', height: '20px', paddingLeft: '12px' }}
                />
            </div>

        </div>
    </Section>
)

export default About;