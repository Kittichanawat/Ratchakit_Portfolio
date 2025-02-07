import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faServer, faDatabase } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "TailwindCSS",
];

const labelsSecond = [
    "Node.js",
    "Express.js",
    "Bun",
    "Elysia",
    "Prisma",
    "PHP",

];

const labelsThird = [
    "MySQL",
    "PostgreSQL",
  
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Technical Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Frontend Development</h3>
                    <p>Passionate about creating modern web applications using React and Next.js. Focused on building responsive user interfaces with clean code practices and attention to user experience. Skilled in implementing designs using CSS frameworks like TailwindCSS and Bootstrap.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faServer} size="3x"/>
                    <h3>Backend Development</h3>
                    <p>Developing server-side applications using Node.js and Express.js. Experience with modern backend frameworks like Bun and Elysia. Skilled in database management and API development using Prisma ORM and PHP.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Database Management</h3>
                    <p>Familiar with relational database systems like MySQL and PostgreSQL. Basic understanding of database operations, SQL queries, and working with ORMs like Prisma for efficient database interactions in web applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;