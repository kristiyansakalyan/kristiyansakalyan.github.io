import Section from "../components/Section";

const Education = () => (
    <Section title="Education">
        <div className="experience-list">
            <div className="experience-item">
                <h3>Technical University of Munich (TUM)</h3>
                <p className="experience-sub">M.Sc. in Data Engineering & Analytics <span className="date">Expected Sep 2025</span></p>
                <ul>
                    <li>Expected average grade: 1.2</li>
                    <li><a href="/public/Ranking_2023w_Sakalyan.pdf" target="_blank">Top 4% of cohort</a></li>
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
)

export default Education;