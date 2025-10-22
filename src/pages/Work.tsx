import ExperienceItem from "../components/ExperienceItem";
import Section from "../components/Section";

const Work = () => (
    <Section title="Work" noBorder>
        <div className="experience-list">
            <ExperienceItem
                title="Research Scientist"
                company="Helmholtz Munich"
                date="Oct 2025 - Present"
                bullets={[
                    <>
                        Parf of the <a href="https://www.eml-munich.de/">EML Group</a>{' '}
                        led by <a href="https://www.eml-munich.de/people/zeynep-akata">Prof. Dr. Zeynep Akata</a>
                    </>
                ]}
            />

            <ExperienceItem
                title="Machine Learning Engineer"
                company="Rohde & Schwarz"
                date="Jan 2025 - Oct 2025"
                bullets={[
                    <>Researching computer vision methods that can be applied to{' '}
                        <a
                            href="https://www.rohde-schwarz.com/ch/produkte/aerospace-verteidigung-sicherheit/sicherheitsscanner/rs-qps-walk2000_63493-978496.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            QPS Walk 2000
                        </a>
                    </>,
                    "Differentiable Threshold Optimization",
                    "Differentiable Top-K and Crop Selection",
                    "Deterministic Re-implementation of a Custom High-Speed PyTorch DataLoader",
                    "Anomaly Detection with PatchCore"
                ]}
            />

            <ExperienceItem
                title="Data Engineer & Scientist"
                company="Airbus Defence & Space"
                date="Mar 2023 - Jan 2025"
                bullets={[
                    "Conducted machine learning research on 4D flight trajectory prediction, implementing transformer-based, LSTM, Neural ODE, LSTM-ODE hybrid, Conditional Flow Matching, and Diffusion models.",
                    "Engineered data pipelines with Dask for large-scale processing and redesigned real-time prediction services for airplane ETA using Python, Docker, Kubernetes, Helm, TerraForm, Azure Pipelines, Grafana, Prometheus."
                ]}
            />
            <ExperienceItem
                title="Software Engineer"
                company="Techpilot"
                date="Aug 2022 - Feb 2023"
                bullets={[
                    "Led sprint planning, did code reviews, and ensured iterative delivery in a collaborative agile environment."
                ]}
            />
            <ExperienceItem
                title="Junior Software Engineer"
                company="Techpilot"
                date="Oct 2020 - Jul 2022"
                bullets={[
                    "Worked on full-stack systems using React, TypeScript, and Spring."
                ]}
            />
            <ExperienceItem
                title="R&D Engineer"
                company="HARMAN"
                date="Dec 2019 - May 2020"
                bullets={[
                    "Developed geolocation aggregation tools and POI de-duplication algorithms."
                ]}
            />
        </div>
    </Section>
)

export default Work;