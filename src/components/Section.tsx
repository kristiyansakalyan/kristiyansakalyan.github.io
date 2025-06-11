import React, { useRef, useEffect, useState } from 'react';


type SectionProps = {
    children: React.ReactNode,
    title: string
}

const Section: React.FC<SectionProps> = ({ children, title }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            id={title.toLowerCase()}
            className={`section-wrapper ${inView ? 'section--visible' : ''}`}
            style={{
                opacity: inView ? 1 : 0.1,
                transition: 'opacity 1s ease-out',
            }}
        >
            <h1 className="section-title">{"/" + title.toLowerCase()}</h1>
            <div className="section">{children}</div>
        </div>
    )
}

export default Section;