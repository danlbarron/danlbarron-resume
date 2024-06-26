import type AreasOfExpertise from '../models/AreasOfExpertise';
import type Education from '../models/Education';
import type EmploymentExperience from '../models/EmploymentExperience';
import type Resume from '../models/Resume';

const resume: Resume = {
    firstName: 'Danl',
    lastName: 'Barron',
    title: 'Senior Software Developer',
    professionalSummary: 'Experienced senior software developer with a strong background in architecting and delivering scalable solutions across diverse industries. Skilled in a wide range of technologies including .NET, Vue, React, and modern web frameworks. Proven track record in leading teams, providing technical direction, and achieving client objectives through innovative software solutions.',
    areasOfExpertise: {
        programmingLanguages: [
            'C#',
            'JavaScript',
            'Typescript',
            'Python',
            'SQL',
            'HTML',
            'CSS',
            'Less',
            'Sass',
            'Bash',
            'Zsh',
            'PowerShell'
        ],
        frameworksAndLibraries: [
            '.NET',
            'Node.js',
            'ASP.NET',
            'Web API',
            'MVC',
            'Xamarin',
            '.NET MAUI',
            'SignalR',
            'React',
            'Next.js',
            'Vue.js',
            'Nuxt',
            'Express',
            'Entity Framework',
            'OpenID Connect',
            'OAuth 2.0',
            'Tailwind CSS'
        ],
        tools: [
            'Visual Studio',
            'JetBrains Rider',
            'Webstorm',
            'Git'
        ],
        platforms: [
            'Azure',
            'Amazon Web Services',
            'DigitalOcean',
            'Heroku',
            'Auth0',
            'Microsoft SQL Server',
        ],
        methodologies: [
            'Agile',
            'Scrum',
            'Kanban',
            'CI/CD'
        ]
    },
    employmentHistory: [{
        companyName: 'DBarron Consulting, LLC',
        jobTitle: 'Software Consultant / Managing Member',
        startDate: '2021-05-04T00:00:00',
        description: [
            'Led consulting engagements for medium to large-scale businesses, specializing in software architecture and senior development roles.',
            'Delivered solutions across financial, medical, and HR sectors using technologies such as .NET Core, Azure, Xamarin / .NET MAUI, Vue, and Nuxt.',
            'Provided technical guidance, training, and mentorship to teams, enhancing development practices and project outcomes.'
        ]
    }, {
        companyName: 'Self-Employed',
        jobTitle: 'Software Consultant',
        startDate: '2018-03-01T00:00:00',
        endDate: '2021-05-04T00:00:00',
        description: [
            'Upgraded legacy systems to modern web technologies for various clients, utilizing ASP.NET Core, React, Next.js, Xamarin, and SQL Server.',
            'Directed technical strategies, implemented domain-driven designs, and fostered team collaboration through pair programming and code reviews.',
        ]
    }, {
        companyName: 'PNI Digital Media Ltd.',
        jobTitle: 'Senior Back-End Developer',
        startDate: '2015-03-01T00:00:00',
        endDate: '2018-03-01T00:00:00',
        description: [
            'Developed and maintained large-scale solutions for Staples Copy & Print, focusing on API development and high-transaction data warehousing.',
            'Mentored teams on modern technologies and design patterns, improving development efficiency and product quality.',
            'Utilized various technologies including, but not limited to C#, ASP.NET Web API, SignalR, Azure, OpenID Connect 1.0, Entity Framework, LINQ, Microsoft SQL Server.'
        ]
    }, {
        companyName: 'Self-Employed',
        jobTitle: 'Software Consultant',
        startDate: '2011-04-01T00:00:00',
        endDate: '2015-02-01T00:00:00',
        description: [
            'Provided consulting services using Microsoft and open-source technologies, advising on best practices and system analysis.',
            'Facilitated team training through pair programming, CI/CD, and code reviews, utilizing ASP.NET MVC, AngularJS, and SQL Server.',
        ]
    }, {
        companyName: 'Multimedia Games (MGAM)',
        jobTitle: 'Software Developer II',
        startDate: '2008-09-01T00:00:00',
        endDate: '2011-03-01T00:00:00',
        description: [
            'Promoted through roles including Jr. Software/Database Developer, Product Support Engineer, and Software Developer II, contributing to casino and bingo systems.',
            'Developed internal tools and automated testing solutions, integrating hardware devices and reducing software issues.'
        ]
    }],
    education: [{
        schoolName: 'Austin Community College',
        degree: 'Associate',
        fieldOfStudy: 'Computer Science',
        startDate: '2006-01-01T00:00:00',
        endDate: '2007-01-01T00:00:00'
    }],
}

export function getFullName(): string {
    return `${resume.firstName} ${resume.lastName}`;
}

export function getTitle(): string {
    return resume.title;
}

export function getProfessionalSummary(): string {
    return resume.professionalSummary;
}

export function getAreasOfExpertise(): Readonly<AreasOfExpertise> {
    return { ...resume.areasOfExpertise };
}

export function getEmploymentHistory(): ReadonlyArray<Readonly<EmploymentExperience>> {
    return [...resume.employmentHistory];
}

export function getEducation(): ReadonlyArray<Readonly<Education>> {
    return [...resume.education];
}