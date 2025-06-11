import React from "react";

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

export default Section;