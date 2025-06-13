import React, { useRef, useEffect, useState } from 'react';
import { useGlitchInView } from '../hooks/useGlitchInView';

type SectionProps = {
    children: React.ReactNode,
    title: string
    noBorder?: boolean
}

const Section: React.FC<SectionProps> = ({ children, title, noBorder = false }) => {
    const ref = useRef<HTMLDivElement>(null);

    const glitchRef = useGlitchInView<HTMLHeadingElement>()
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
            <h1 ref={glitchRef} className="section-title">{"/" + title.toLowerCase()}</h1>
            <div className="section" style={noBorder ? {
                boxShadow: 'none',
                border: 'none',
                backgroundColor: 'transparent',
            } : {}}>{children}</div>
        </div>
    )
}

export default Section;