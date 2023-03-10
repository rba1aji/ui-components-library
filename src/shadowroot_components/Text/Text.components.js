import { ShadowRoot } from '../../wrappers/ShadowRoot'

export default function ShadowRootText() {

    return (
        <>
            <div>
                <h1>text outside shadow root</h1>

            </div>
            <ShadowRoot>
                <style>
                    {require('!raw-loader!./Text.components.css').default}
                </style>
                <div className="text">
                    <h1>text inside shadow root</h1>
                    <h3>
                        My color won't be Black, if css is working.<br />
                        hover me to change my color to Blue.
                    </h3>
                </div>
            </ShadowRoot>
        </>
    )
}
