import { useEffect, useRef } from 'react';
import { ShadowRoot } from '../../wrappers/ShadowRoot';
import './Anim.css'

function Util(props) {

    const elements = useRef(null);

    useEffect(() => {
        console.log(elements)
        elements.current.addEventListener('mouseover', () => {
            elements.current.classList.add('change-color')
        });
        elements.current.addEventListener('mouseout', () => {
            elements.current.classList.remove('change-color')
        });
    }, []);


    return (
        <>
            <style>
                {require('!raw-loader!./Anim.css').default}
            </style>
            <button className="emoji container " ref={elements}>
                <h2>
                    Im inside shadow root and i am unable to be animated with js selectors, so I am now animated with React.useRef. if you hover over me i will change my color
                </h2>
            </button>
        </>
    )

}


JSAnim.defaultProps = {

};


export default function JSAnim() {
    return (
        <ShadowRoot>
            <Util />
        </ShadowRoot>
    )
}