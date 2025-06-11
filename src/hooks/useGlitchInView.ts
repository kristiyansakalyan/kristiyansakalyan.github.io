import { useEffect, useRef } from 'react';

export const useGlitchInView = <T extends HTMLElement = HTMLElement>(): React.RefObject<T | null> => {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        const el = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const glitchInterval = setInterval(() => {
                        if (Math.random() > 0.85) {
                            el.classList.add('glitch');
                            setTimeout(() => {
                                el.classList.remove('glitch');
                            }, 500);
                        }
                    }, 1000);

                    el.dataset.glitchInterval = glitchInterval.toString();
                } else {
                    const existing = el.dataset.glitchInterval;
                    if (existing) clearInterval(parseInt(existing));
                }
            },
            { threshold: 0.8 }
        );

        observer.observe(el);

        return () => {
            observer.disconnect();
            const existing = el.dataset.glitchInterval;
            if (existing) clearInterval(parseInt(existing));
        };
    }, []);

    return ref;
};
