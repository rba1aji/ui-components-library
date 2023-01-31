import React from 'react';
import ReactDOM from 'react-dom/client';

export function ShadowRoot({ children }) {
    const shadowRoot = React.useRef(null);

    React.useEffect(() => {
        const shadow = shadowRoot.current.attachShadow({ mode: 'open' });
        ReactDOM.createRoot(shadow).render(children);
    }, [children]);

    return (
        <div ref={shadowRoot}>{children}</div>
    );

}