import { useEffect } from 'react';
import { ShadowRoot } from '../../wrappers/ShadowRoot';

export default function EmojiAnim(props) {

    const { emoji } = props;

    return (
        <ShadowRoot>
            <style>
                {`
                  @keyframes run {
                     0% {
                          transform: translateX(0);
                        }
                     100% {
                         transform: translateX(100%);
                        }
                 }`
                }
            </style>
            <div className="container">
                <h1 className="bus">
                    {emoji}
                </h1>
            </div>
        </ShadowRoot>
    )
}


EmojiAnim.defaultProps = {
    emoji: '🚂🚎🚎'
};
