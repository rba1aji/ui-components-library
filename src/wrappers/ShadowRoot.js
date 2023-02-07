import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';

export function ShadowRoot({ children }) {
    const root = useRef(null);

    React.useEffect(() => {
        const shadowRoot = root.current.attachShadow({ mode: 'open' });
        ReactDOM.createRoot(shadowRoot).render(children);
    }, [children]);

    return (
        <div ref={root}>{children}</div>
    );

}