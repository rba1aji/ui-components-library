import { IFrame } from "../reducers/IFrame";
import './Text.components.css';

export default function ShadowRootText(props) {

    // const fs = require('fs');
    // const path = require('path');
    // const stylesheet = fs.readFileSync(path.resolve(__dirname, './Text.components.css'), 'utf8');

    return (
        <IFrame
        // pass the css file absolute path to the IFrame component
        >
            <style>
                {/* {stylesheet} */}
            </style>
            <div className="sr-text">
                <h1>Just text</h1>
                <p>
                    My color will be red, if css is working. else it will be black.
                </p>
            </div>
        </IFrame>
    )
}