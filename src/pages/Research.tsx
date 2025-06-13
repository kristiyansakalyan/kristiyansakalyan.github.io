import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from '../components/Section';
import ExperienceItem from '../components/ExperienceItem';

const Research = () => (

    <Section title="Research" noBorder>
        <div className="experience-list">
            <ExperienceItem
                title="Modeling Microenvironment Trajectories on Spatial Transcriptomics"
                company="TUM"
                date="Jan 2024 - Present"
                bullets={[
                    "Graph and point cloud modeling of single-cell dynamics using Flow Matching and Optimal Transport."
                ]}
            />

            <ExperienceItem
                title="Conditional Flow Matching for Temporal Graphs"
                company="TUM"
                date="Oct 2024 - Jan 2024"
                bullets={[
                    <>
                        Extended flow matching to dynamic temporal graphs.{" "}
                        <a href="https://github.com/kristiyansakalyan/cfmstg" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'github']} /> Code
                        </a>
                    </>
                ]}
            />

            <ExperienceItem
                title="Continual Learning for Domain-Incremental Semantic Segmentation"
                company="ZEISS, MDSI, TUM"
                date="Apr 2024 - Oct 2024"
                bullets={[
                    <>
                        Reduced catastrophic forgetting in medical imaging using contrastive learning.{" "}
                        <a href="https://www.mdsi.tum.de/en/di-lab/vergangene-projekte/ss24-zeiss-continual-medical-image-segmentation-with-transformers/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon="file-pdf" /> Report
                        </a>
                    </>
                ]}
            />

            <ExperienceItem
                title="Explainable Document Embeddings"
                company="TUM"
                date="Oct 2023 - Apr 2024"
                bullets={[
                    <>
                        Extended Bag-of-Concepts framework with LLM-based concept labeling.{" "}
                        <a href="https://github.com/kristiyansakalyan/xboc" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'github']} /> Code
                        </a>
                    </>
                ]}
            />

            <ExperienceItem
                title="Patch by Patch Coarse-to-Fine 3D Shape Refinement"
                company="TUM"
                date="Oct 2023 - Feb 2024"
                bullets={[
                    <>
                        Enhanced geometric detail via patch-based refinement.{" "}
                        <a href="https://github.com/kristiyansakalyan/coarse-to-fine-shapes/blob/main/deliveries/final-paper.pdf" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon="file-pdf" /> Report
                        </a>,{" "}
                        <a href="https://github.com/kristiyansakalyan/coarse-to-fine-shapes/blob/main/deliveries/final-poster.pdf" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon="file-alt" /> Poster
                        </a>
                    </>
                ]}
            />

            <ExperienceItem
                title="Bachelor's Thesis"
                company="TUM & reFit Systems GmbH"
                date="Nov 2021 - Mar 2022"
                bullets={[
                    "Developed a multi-object tracking method to automate marker annotation for motion capture."
                ]}
            />

        </div>
    </Section>
)

export default Research;