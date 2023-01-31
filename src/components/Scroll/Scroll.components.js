import React from 'react'
import './Scroll.components.css'

function Scroll() {
    return (

        <div class="content_img" onClick="scrollToTop">
            <img src={"https://images.unsplash.com/photo-1674718223062-4a57d2909a2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"} width='100%' height='100%' />
            <div className='main_container'>
                <h1>Scrolling Animation</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <hr />
            </div>
        </div>

    )
}

export default Scroll
