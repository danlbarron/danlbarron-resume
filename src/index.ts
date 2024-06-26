import { existsSync, mkdirSync } from 'fs';
import path from 'path';
import { getFullName, getTitle, getProfessionalSummary, getAreasOfExpertise, getEmploymentHistory, getEducation } from './services/ResumeService';

import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import Resume from './documents/Resume';

const buildDir = path.join(__dirname, '..', '/build');
console.log(buildDir);

if (!existsSync(buildDir)) {
    mkdirSync(buildDir);
}

const fullName = getFullName();
const filePath = `${buildDir}/${fullName.replace(' ', '')}-Resume.pdf`;

const resumeProps = {
    fullName,
    title: getTitle(),
    professionalSummary: getProfessionalSummary(),
    areasOfExpertise: getAreasOfExpertise(),
    employmentHistory: getEmploymentHistory(),
    education: getEducation()
};

const resume = React.createElement(Resume, resumeProps);
ReactPDF.render(resume, filePath);