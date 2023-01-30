import { createPortal } from "react-dom";
import { useEffect, useState } from 'react';

export const IFrame = ({
    children,
    ...props
}) => {
    const { stylesheetHref } = props;

    const [contentRef, setContentRef] = useState(null);
    const mountNode = contentRef?.contentWindow?.document?.body;
    const iframeDoc = contentRef?.contentWindow?.document;

    useEffect(() => {
        const stylesheet = document.createElement('link');
        stylesheet.rel = "stylesheet";
        stylesheet.href = stylesheetHref;
        iframeDoc?.head?.appendChild(stylesheet);

        iframeDoc?.body?.style?.setProperty("background-color", "transparent");

    }, [iframeDoc]);


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

