import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div className="resume">
            <div className="header">
                <h1>U Sai Mani Ritish</h1>
                <p>Email: saimaniritish@gmail.com | Phone: +1 (425)-999-70XX</p>
            </div>

            <div className="section education">
                <h2>Education</h2>
                <h3>City University of Seattle</h3>
                <p>MS in Computer Science, 2026</p>
                <h3>University of Hyderabad</h3>
                <p>Diploma in AI & ML, 2025</p>
                <h3>Bachelor's in Mathematics, Statistics, and Computer Science</h3>
                <p>Indian Institute of Management and Commerce</p>
            </div>

            <div className="section skills">
                <h2>Skills</h2>
                <ul>
                    <li>Programming: Python, JavaScript, React</li>
                    <li>Tools: AWS, GitHub, Codespaces</li>
                    <li>Soft Skills: Team Management, People Skills</li>
                </ul>
            </div>

            <div className="section experience">
                <h2>Experience</h2>
                <h3>NGO Volunteer</h3>
                <p>Part-time teacher for moral science in rural areas</p>
                <h3>Hackathon Host</h3>
                <p>Organized and participated in coding events</p>
            </div>

            <div className="section projects">
                <h2>Projects</h2>
                <h3>AWS Cloud Foundations</h3>
                <p>Proposed a well-architected cloud solution</p>
                <h3>Interactive Web Clock</h3>
                <p>Built using HTML & CSS</p>
            </div>
        </div>
    );
};

export default Resume;
