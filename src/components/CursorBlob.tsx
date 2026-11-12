import { useEffect, useRef } from 'react';

const CursorBlob = () => {
    const blobRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            const el = blobRef.current;
            if (!el) return;
            const x = e.clientX;
            const y = e.clientY;
            el.animate(
                { transform: `translate(${x - 150}px, ${y - 150}px)` },
                { duration: 600, fill: 'forwards', easing: 'ease-out' }
            );
        };
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    return (
        <div
            ref={blobRef}
            className="fixed top-0 left-0 pointer-events-none -z-10 mix-blend-screen"
            style={{ width: 300, height: 300 }}
        >
            <div
                className="w-full h-full rounded-full blur-3xl opacity-20"
                style={{
                    background: 'radial-gradient( circle at 50% 50%, rgba(0,212,255,0.8), rgba(139,92,246,0.6), rgba(244,114,182,0.4) )'
                }}
            />
        </div>
    );
};

export default CursorBlob;


