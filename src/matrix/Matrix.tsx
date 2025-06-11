// components/MatrixRainingLetters.tsx
import React, { useEffect, useRef } from "react";
import "./styles.css";

type MatrixRainingLettersProps = {
    color?: string;
    custom_class?: string;
    key?: string;
};

const renderMatrix = (
    ref: React.RefObject<HTMLCanvasElement | null>,
    color?: string
) => {
    const canvas = ref.current;
    if (!canvas) return () => { };

    const context = canvas.getContext("2d");
    if (!context) return () => { };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana =
        "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops: number[] = [];
    for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
    }

    const render = () => {
        context.fillStyle = "rgba(0, 0, 0, 0.05)";
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = color ?? "#0F0";
        context.font = `${fontSize}px monospace`;

        for (let i = 0; i < rainDrops.length; i++) {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };

    return render;
};

const MatrixRainingLetters: React.FC<MatrixRainingLettersProps> = ({
    color,
    custom_class = "",
    key: propKey
}) => {
    const ref = useRef<HTMLCanvasElement>(null);
    const keyName = "mrl-" + (propKey ?? "default");
    const className = `mrl-container ${custom_class}`;

    useEffect(() => {
        const render = renderMatrix(ref, color);
        const intervalId = setInterval(render, 30);
        return () => clearInterval(intervalId);
    }, [color]);

    return <canvas key={keyName} className={className} ref={ref} />;
};

export default MatrixRainingLetters;
