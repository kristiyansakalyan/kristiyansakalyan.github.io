import React, { useEffect, useRef } from "react";
import "./styles.css";

type MatrixRainingLettersProps = {
    color?: string;
    custom_class?: string;
    key?: string;
};

const MatrixRainingLetters: React.FC<MatrixRainingLettersProps> = ({
    color,
    custom_class = "",
    key: propKey,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const intervalRef = useRef<number | null>(null);
    const fontSize = 16;
    let rainDrops: number[] = [];

    const katakana =
        "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const alphabet = katakana + latin + nums;

    const setupCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const columns = Math.floor(canvas.width / fontSize);
        rainDrops = Array(columns).fill(1);
    };

    const draw = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = color ?? "#0F0";
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < rainDrops.length; i++) {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                rainDrops[i] = 0;
            }

            rainDrops[i] += 0.5; // Slower fall speed
        }
    };

    useEffect(() => {
        setupCanvas();
        const id = setInterval(draw, 20); // Lower FPS for a smoother slower effect
        intervalRef.current = id;

        const handleResize = () => {
            setupCanvas();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            window.removeEventListener("resize", handleResize);
        };
    }, [color]);

    const keyName = "mrl-" + (propKey ?? "default");
    const className = `mrl-container ${custom_class}`;

    return <canvas key={keyName} className={className} ref={canvasRef} />;
};

export default MatrixRainingLetters;