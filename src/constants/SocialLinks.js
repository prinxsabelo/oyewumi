import React from "react"
import {

    FaLinkedin,
    FaBehance
} from "react-icons/fa"

const data = [

    {
        id: 1,
        icon: <FaLinkedin className="social-icon"></FaLinkedin>,
        url: "https://www.linkedin.com/in/oyewumi-olukunle-10b07716a",
    },
    {
        id: 2,
        icon: <FaBehance className="social-icon"></FaBehance>,
        url: "https://www.behance.net/olukunleoyewumi",
    },

]
const links = data.map(link => {
    return (
        <li key={link.id}>
            <a href={link.url} className="social-link">
                {link.icon}
            </a>
        </li>
    )
})

const SocialLinks = ({ styleClass }) => {
    return (
        <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
    )
}
export default SocialLinks