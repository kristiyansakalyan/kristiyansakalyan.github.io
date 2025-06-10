import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { MatrixRainingLetters } from "react-mdr";



type SectionProps = {
  children: React.ReactNode,
  title: string
}

const Section: React.FC<SectionProps> = ({ children, title }) => (
  <div id={title.toLowerCase()} className="section-wrapper">
    <h1 className="section-title">{"/" + title.toLowerCase()}</h1>
    <div className="section">{children}</div>
  </div>
)

const Navbar = () => (
  <nav className="navbar">
    <a href="#about">About</a>
    <a href="#publications">Publication</a>
    <a href="#research">Research</a>
    <a href="#work">Work</a>
  </nav>
)

const App = () => {

  const [visibleMain, setVisbleMain] = React.useState(false);
  const [visibleMatrix, setVisibleMatrix] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setVisbleMain(true);
    }, 3000); // 5 seconds

    return () => clearTimeout(timeout);
  }, []);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setVisibleMatrix(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
      {/* Matrix Background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
          opacity: visibleMatrix ? 1 : 0.1,
          transition: 'opacity 2s ease',
        }}
      >
        <MatrixRainingLetters />
      </div>

      <div
        className="main-page"
        style={{
          opacity: visibleMain ? 1 : 0,
          transition: 'opacity 2s ease',
          position: 'relative',
          // zIndex: 1,
        }}>
        <Navbar />

        <div className="header">
          <div className="animated-name">
            <div className="line line-top"></div>
            <h1>Kristiyan Sakalyan</h1>
            <div className="line line-bottom"></div>
          </div>

          <ul className="info-list">
            <li>
              M.Sc. Data Engineering & Analytics @ <a href="https://www.tum.de">TUM</a>
            </li>
            <li>
              ML Engineer @ <a href="https://www.rohde-schwarz.com">Rohde & Schwarz</a>
            </li>
          </ul>
        </div>


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
                I’m into generative models, graphs, and using ML to solve scientific problems. Always happy to chat or collaborate!
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
          </div>
        </Section>

        <Section title="Publications">
          <div style={{ textAlign: 'center' }}>
            <h2>Currently under review 🫰</h2>
          </div>
        </Section>

        <Section title="Education">
          <div className="experience-list">
            <div className="experience-item">
              <h3>Technical University of Munich (TUM)</h3>
              <p className="experience-sub">M.Sc. in Data Engineering & Analytics <span className="date">— Expected Sep 2025</span></p>
              <ul>
                <li>Expected average grade: 1.2</li>
                <li><a href="/assets/pdf/Ranking_2023w_Sakalyan.pdf" target="_blank">Top 4% of cohort</a></li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>Technical University of Munich (TUM)</h3>
              <p className="experience-sub">B.Sc. in Computer Science <span className="date">Oct 2018 — Oct 2022</span></p>
              <ul>
                <li>Thesis: Multi-object tracking for annotating markers for a motion capture system (Grade: 1.3)</li>
              </ul>
            </div>
          </div>
        </Section>


        <Section title="Research">
          <div className="experience-list">
            <div className="experience-item">
              <h3>Modeling Microenvironment Trajectories on Spatial Transcriptomics</h3>
              <p className="experience-sub">TUM <span className="date">Jan 2024 – Present</span></p>
              <ul>
                <li>Graph and point cloud modeling of single-cell dynamics using Flow Matching and Optimal Transport.</li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>Conditional Flow Matching for Temporal Graphs</h3>
              <p className="experience-sub">TUM <span className="date">Oct 2024 – Jan 2024</span></p>
              <ul>
                <li>Extended flow matching to dynamic temporal graphs.{' '}
                  <a href="https://github.com/kristiyansakalyan/cfmstg" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'github']} /> Code
                  </a>
                </li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>Continual Learning for Domain-Incremental Semantic Segmentation</h3>
              <p className="experience-sub">ZEISS, MDSI, TUM <span className="date">Apr 2024 – Oct 2024</span></p>
              <ul>
                <li>Reduced catastrophic forgetting in medical imaging using contrastive learning.{' '}
                  <a href="https://www.mdsi.tum.de/en/di-lab/vergangene-projekte/ss24-zeiss-continual-medical-image-segmentation-with-transformers/" target="_blank">
                    <FontAwesomeIcon icon="file-pdf" /> Report
                  </a>
                </li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>Explainable Document Embeddings</h3>
              <p className="experience-sub">TUM <span className="date">Oct 2023 – Apr 2024</span></p>
              <ul>
                <li>Extended Bag-of-Concepts framework with LLM-based concept labeling.{' '}
                  <a href="https://github.com/kristiyansakalyan/xboc" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'github']} /> Code
                  </a>
                </li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>Patch by Patch Coarse-to-Fine 3D Shape Refinement</h3>
              <p className="experience-sub">TUM <span className="date">Oct 2023 – Feb 2024</span></p>
              <ul>
                <li>Enhanced geometric detail via patch-based refinement.{' '}
                  <a href="https://github.com/kristiyansakalyan/coarse-to-fine-shapes/blob/main/deliveries/final-paper.pdf" target="_blank">
                    <FontAwesomeIcon icon="file-pdf" /> Report
                  </a>,{' '}
                  <a href="https://github.com/kristiyansakalyan/coarse-to-fine-shapes/blob/main/deliveries/final-poster.pdf" target="_blank">
                    <FontAwesomeIcon icon="file-alt" /> Poster
                  </a>
                </li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>Bachelor's Thesis</h3>
              <p className="experience-sub">TUM & reFit Systems GmbH <span className="date">Nov 2021 – Mar 2022</span></p>
              <ul>
                <li>Developed a multi-object tracking method to automate marker annotation for motion capture.</li>
              </ul>
            </div>
          </div>
        </Section>


        <Section title="Work">
          <div className="experience-list">
            <div className="experience-item">
              <h3>Machine Learning Engineer</h3>
              <p className="experience-sub">Rohde & Schwarz <span className="date">Jan 2025 – Present</span></p>
              <ul>
                <li>Researching computer vision methods that can be applied to <a href="https://www.rohde-schwarz.com/ch/produkte/aerospace-verteidigung-sicherheit/sicherheitsscanner/rs-qps-walk2000_63493-978496.html" target="_blank">QPS Walk 2000</a></li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>Data Engineer & Scientist</h3>
              <p className="experience-sub">Airbus Defence & Space <span className="date">Mar 2023 – Jan 2025</span></p>
              <ul>
                <li>Conducted machine learning research on 4D flight trajectory prediction, implementing transformer-
                  based, LSTM, Neural ODE, LSTM-ODE hybrid, Conditional Flow Matching, and Difusion models.</li>
                <li>Engineered data pipelines with Dask for large-scale processing and redesigned real-time prediction ser-
                  vices for airplane ETA using Python, Docker, Kubernetes, Helm, TerraForm, Azure Pipelines, Grafana,
                  Prometheus.</li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>Software Engineer</h3>
              <p className="experience-sub">Techpilot <span className="date">Aug 2022 – Feb 2023</span></p>
              <ul>
                <li>Led sprint planning, did code reviews, and ensured iterative delivery in a collaborative agile environment.</li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>Junior Software Engineer</h3>
              <p className="experience-sub">Techpilot <span className="date">Oct 2020 – Jul 2022</span></p>
              <ul>
                <li>Worked on full-stack systems using React, TypeScript, and Spring.</li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>R&D Engineer</h3>
              <p className="experience-sub">HARMAN <span className="date">Dec 2019 – May 2020</span></p>
              <ul>
                <li>Developed geolocation aggregation tools and POI de-duplication algorithms.</li>
              </ul>
            </div>
          </div>
        </Section>

      </div>
    </div>
  )
}

export default App