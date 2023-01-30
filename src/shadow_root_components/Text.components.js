import { IFrame } from "../reducers/IFrame";

export default function ShadowRootText() {

    return (
        <IFrame>
            <style>
                {require('!raw-loader!./Text.components.css').default}
            </style>
            <div className="text">
                <h1>Just text</h1>
                <h3>
                    My color won't be Black, if css is working.<br />
                    hover me to change my color to Blue.
                </h3>
            </div>
        </IFrame>
    )
}
