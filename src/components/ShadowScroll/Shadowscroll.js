import React from "react";
import './Shadowscroll.css'

class Shadowscroll extends React.Component {

    render() {
        return React.createElement(
            "div",
            { className: "content_img" },
            React.createElement("div", null,
                React.createElement("h1", { className: "heading" }, "I'm Shadow Component"),
                React.createElement("p", { className: "description" }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."),
            )

        );
    }
}
export default Shadowscroll;

