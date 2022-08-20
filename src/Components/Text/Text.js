import React from 'react'
import style from './Text.module.css'
function TextComponent({ txt, sub, idx }) {
    return (
        <div className={[style.wrapper].join(" ")}>
            <div className={[style.txt, "textWrapper"].join(" ")}  idx={idx}>
                <h1>{txt}</h1>
                <h3>{sub}</h3>
            </div>
        </div>
    )
}

export default TextComponent