import { useEffect } from "react";

const MatrixCursorTrail = () => {
    useEffect(() => {
        const katakana =
            "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
        const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const nums = "0123456789";
        const alphabet = katakana + latin + nums;

        const handler = (e: MouseEvent) => {
            const char = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            const span = document.createElement("div");
            span.innerText = char;
            span.style.position = "absolute";
            span.style.pointerEvents = "none";
            span.style.zIndex = "9999";
            span.style.fontSize = "14px";
            span.style.color = "#00ff2b";
            span.style.left = e.pageX + "px";
            span.style.top = e.pageY + "px";
            span.style.transition = "opacity 0.4s ease";
            span.style.opacity = "1";

            document.body.appendChild(span);

            requestAnimationFrame(() => {
                span.style.opacity = "0";
            });

            setTimeout(() => span.remove(), 500);
        };

        window.addEventListener("mousemove", handler);
        return () => window.removeEventListener("mousemove", handler);
    }, []);

    return null;
};

export default MatrixCursorTrail;
