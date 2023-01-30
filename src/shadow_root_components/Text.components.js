import { IFrame } from "../reducers/IFrame";

export default function ShadowRootText(props) {

    const cssString = require('!raw-loader!./Text.components.css').default;

    return (
        <IFrame>
            <div className="text">
                <style>
                    {cssString}
                </style>
                <h1>Just text</h1>
                <p>
                    My color will be red, if css is working. else it will be black.
                </p>
            </div>
        </IFrame>
    )
}
