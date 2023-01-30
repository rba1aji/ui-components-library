import { IFrame } from "../reducers/IFrame";

export default function ShadowRootText(props) {

    const cssString = require('!raw-loader!./Text.components.css').default;

    return (
        <IFrame>
            <style>{cssString}</style>
            <div className="text">
                <h1>Just text</h1>
                <h3>
                    My color will be red, if css is working. else it will be black.
                </h3>
            </div>
        </IFrame>
    )
}
