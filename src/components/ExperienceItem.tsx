import React from 'react';

type ExperienceItemProps = {
    title: string;
    company: string;
    date: string;
    bullets: React.ReactNode[];
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, date, bullets }) => (
    <div className="experience-item">
        <h3>{title}</h3>
        <p className="experience-sub">
            {company} <span className="date">{date}</span>
        </p>
        <ul>
            {bullets.map((text, idx) => (
                <li key={idx}>{text}</li>
            ))}
        </ul>
    </div>
);

export default ExperienceItem;
