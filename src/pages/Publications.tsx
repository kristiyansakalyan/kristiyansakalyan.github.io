import Section from "../components/Section";
import PublicationItem from "../components/PublicationItem";

const Publications = () => (
    <Section title="Publications" noBorder>
        <PublicationItem
            title="Modeling Microenvironment Trajectories on Spatial Transcriptomics with NicheFlow"
            authors="Kristiyan Sakalyan*, Alessandro Palma*, Filippo Guerranti*, Fabian Theis, Stephan Günnemann"
            venue={
                <>
                    <a href="https://genbio-workshop.github.io/2025/" target="_blank" rel="noopener noreferrer">
                        ICML 2025 GenBio Workshop
                    </a>
                </>
            }
            tldr="We develop a Variational Flow Matching algorithm to learn microenvironment trajectories on time-resolved spatial transcriptomics."
        />
    </Section>
);

export default Publications;
