import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';
import Chip from '@mui/material/Chip';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://youtu.be/TC9QU6X36N0" target="_blank" rel="noreferrer"><img src={`${process.env.PUBLIC_URL}/E-commerce.png`} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://youtu.be/TC9QU6X36N0" target="_blank" rel="noreferrer"><h2>E-commerce System</h2></a>
                <p>Developed an e-commerce system with product browsing, shopping cart, order tracking, and payment proof uploads, along with an admin back office for managing products, orders, shipping, and revenue reports via a dashboard.</p>
                <div className="tech-stack">
                    <span className="stack-title">Tech stack:</span>
                    <div className="stack-chips">
                        <Chip label="React" className="chip" />
                        <Chip label="Node.js" className="chip" />
                        <Chip label="Express" className="chip" />
                        <Chip label="Bootstrap" className="chip" />
                        <Chip label="PostgreSQL" className="chip" />
                    </div>
                </div>
            </div>
            <div className="project">
                <a href="https://youtu.be/sMGtCWTnWWI" target="_blank" rel="noreferrer"><img src={`${process.env.PUBLIC_URL}/Bun.png`} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://youtu.be/sMGtCWTnWWI" target="_blank" rel="noreferrer"><h2>Repair Request Management System</h2></a>
                <p>Developed a repair shop management system to log repair requests, track progress, assign tasks, manage inventory, and generate reports with a real-time dashboard.</p>
                <div className="tech-stack">
                    <span className="stack-title">Tech stack:</span>
                    <div className="stack-chips">
                        <Chip label="Next.js " className="chip" />
                        <Chip label="Bun" className="chip" />
                        <Chip label="Elysia.js" className="chip" />
                        <Chip label="TailwindCSS" className="chip" />
                        <Chip label="PostgreSQL" className="chip" />
                    </div>
                </div>
            </div>
            <div className="project">
                <a href="https://youtu.be/Z3T1HbVqA8M" target="_blank" rel="noreferrer"><img src={`${process.env.PUBLIC_URL}/laravel.png`} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://youtu.be/Z3T1HbVqA8M" target="_blank" rel="noreferrer"><h2>Dormitory Management System</h2></a>
                <p>Developed a dormitory management system that allows room creation, resident transfers between rooms, expense billing, and revenue tracking. The system provides monthly income reports and category-based revenue analysis through interactive charts</p>
                <div className="tech-stack">
                    <span className="stack-title">Tech stack:</span>
                    <div className="stack-chips">
                        <Chip label="Laravel" className="chip" />
                        <Chip label="Livewire" className="chip" />
                        <Chip label="TailwindCSS" className="chip" />
                        <Chip label="PostgreSQL" className="chip" />
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    );
}

export default Project;