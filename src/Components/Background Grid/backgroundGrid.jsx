import React, { useEffect, useRef } from 'react';
import './BackgroundGrid.css';

const InteractiveBackgroundGrid = ({ rows = 10, columns = 10, rainbowMode = false }) => {
    const gridRef = useRef(null);
    const lastHoveredRef = useRef(-1);
    const mouseDownRef = useRef(false);
    const lastHueRef = useRef(0);
    const prevDownRef = useRef({});

    useEffect(() => {
        const grid = gridRef.current;

        const render = (event) => {
            const x = event.clientX;
            const y = event.clientY;
            const row = Math.floor((y * rows) / window.innerHeight);
            const column = Math.floor((x * columns) / window.innerWidth);
            const isValid = row >= 0 && row < rows && column >= 0 && column < columns;
            const cellIndex = isValid ? row * columns + column : -1;
            const cells = grid.children;
            const hovered = isValid ? cells[cellIndex] : null;

            if (hovered) {
                const prevDown = prevDownRef.current;
                if (!prevDown[cellIndex] && (mouseDownRef.current || rainbowMode)) {
                    const hue = (lastHueRef.current + 12 + Math.floor(Math.random() * 16)) % 360;
                    hovered.style.setProperty('--click-bg', `hsl(${hue}, 70%, 80%, 0.5)`);
                    lastHueRef.current = hue;
                }
                hovered.classList.add('hovered');
                hovered.classList.toggle('clicked', mouseDownRef.current || rainbowMode);
                hovered.classList.toggle(
                    'hovered-fast-trans',
                    !prevDown[cellIndex] && !(mouseDownRef.current || rainbowMode)
                );
            }

            if (lastHoveredRef.current >= 0 && lastHoveredRef.current !== cellIndex) {
                const prevCell = cells[lastHoveredRef.current];
                prevCell.classList.remove('hovered', 'hovered-fast-trans', 'clicked');
                prevDownRef.current[lastHoveredRef.current] = false;
            }

            lastHoveredRef.current = cellIndex;
            if (cellIndex >= 0) {
                prevDownRef.current[cellIndex] = mouseDownRef.current || rainbowMode;
            }
        };

        document.addEventListener('mousemove', render, { capture: true, passive: true });
        document.addEventListener('mouseleave', () => render({ clientX: -1, clientY: -1 }), { passive: true });
        document.addEventListener(
            'mousedown',
            (e) => { mouseDownRef.current = true; render(e); },
            { capture: true, passive: true }
        );
        document.addEventListener(
            'mouseup',
            (e) => { mouseDownRef.current = false; render(e); },
            { capture: true, passive: true }
        );
        document.addEventListener(
            'dragend',
            (e) => { mouseDownRef.current = false; render(e); },
            { capture: true, passive: true }
        );

        return () => {
            document.removeEventListener('mousemove', render);
            document.removeEventListener('mouseleave', () => render({ clientX: -1, clientY: -1 }));
            // (you can similarly remove the other listeners if you like)
        };
    }, [rows, columns, rainbowMode]);

    return (
        <div className="interactive-bg">
            <div className="bg-grid" ref={gridRef} aria-hidden="true">
                {Array.from({ length: rows * columns }).map((_, i) => (
                    <div key={i} />
                ))}
            </div>
        </div>
    );
};

export default InteractiveBackgroundGrid;
