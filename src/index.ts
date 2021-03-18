import { existsSync, mkdirSync } from 'fs';
import path from 'path';
import { getFullName, getTitle, getObjective, getAreasOfExpertise, getEmploymentHistory, getEducation } from './services/ResumeService';

import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import Resume from './documents/Resume';

const buildDir = path.join(__dirname, '..', '/build');
console.log(buildDir);

if (!existsSync(buildDir)) {
    mkdirSync(buildDir);
}

const fullName = getFullName();
const filePath = `${buildDir}/${fullName} - Resume.pdf`;

const resumeProps = {
    fullName,
    title: getTitle(),
    objective: getObjective(),
    areasOfExpertise: getAreasOfExpertise(),
    employmentHistory: getEmploymentHistory(),
    education: getEducation()
};

const resume = React.createElement(Resume, resumeProps);
ReactPDF.render(resume, filePath);