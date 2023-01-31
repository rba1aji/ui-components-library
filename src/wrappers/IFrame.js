import { createPortal } from "react-dom";
import { useState } from 'react';

export const IFrame = ({ children }) => {

    const [contentRef, setContentRef] = useState(null);
    const mountNode = contentRef?.contentWindow?.document?.body;

    return (
        <iframe
            ref={setContentRef}
            style={{
                border: "none",
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
                overflow: 'hidden',
            }}
            className='mx-auto px-auto'
            title="IFrame Shadow Root"
        >
            {mountNode && createPortal(children, mountNode)}
        </iframe>
    );
}

