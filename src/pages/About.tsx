import Section from "../components/Section";

const About = () => (

    <Section title="About">
        <div className="about-container">
            <div className="about-text">
                <p>
                    Hey, I'm Kristiyan. I moved from Bulgaria to Germany to study at the{' '}
                    <a href="https://www.tum.de" target="_blank" rel="noopener noreferrer">
                        Technical University of Munich (TUM)
                    </a>
                    , where I did my Bachelor’s in Computer Science and stayed for a Master’s in Data Engineering and Analytics.
                    I’m currently working on my Master’s thesis about machine learning for spatial single-cell data with{' '}
                    <a href="https://scholar.google.com/citations?hl=en&user=hf0csdoAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noopener noreferrer">
                        Alessandro Palma
                    </a> and{' '}
                    <a href="https://guerrantif.github.io/" target="_blank" rel="noopener noreferrer">
                        Filippo Guerranti
                    </a>
                    {' '}under the supervision of{' '}
                    <a href="https://www.helmholtz-munich.de/en/icb/pi/fabian-theis" target="_blank" rel="noopener noreferrer">
                        Prof. Dr. Dr. Fabian Theis
                    </a>,
                    and{' '}
                    <a href="https://www.cs.cit.tum.de/daml/guennemann/" target="_blank" rel="noopener noreferrer">
                        Prof. Dr. Stephan Günnemann
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
            {/* <div style={{ width: '100%', justifyContent: 'center', marginTop: '1rem', display: 'flex' }}>
                <img src="/hacker.png" alt="img" style={{ width: '20px', height: '20px', paddingRight: '12px' }} />
                <a href="/public/CV.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    Download my CV
                </a>
                <img src="/hacker.png" alt="img" style={{ width: '20px', height: '20px', paddingLeft: '12px' }} />
            </div> */}
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
                    <span style={{color: 'white'}}>https://kristiyansakalyan.com/CV.pdf</span>
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