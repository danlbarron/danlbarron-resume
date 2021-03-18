import type AreasOfExpertise from '../models/AreasOfExpertise';
import type Education from '../models/Education';
import type EmploymentExperience from '../models/EmploymentExperience';
import type Resume from '../models/Resume';

const resume: Resume = {
    firstName: 'Danl',
    lastName: 'Barron',
    title: 'Senior Software Developer',
    objective: 'Software developer and someone who loves building things. My knowledge and experiences towards solving problems will be an essential part of both your team and your software.',
    areasOfExpertise: {
        languagesAndTools: [
            'C#',
            'JavaScript',
            'Typescript',
            'HTML',
            'CSS',
            'Less',
            'Sass',
            'SQL',
            'Python',
            'Visual Studio',
            'JetBrains Rider',
            'Webstorm',
            'Command-line interface (Batch, Bash, PowerShell)'
        ],
        technologies: [
            '.NET',
            'Node.js',
            'ASP.NET',
            'Web API',
            'MVC',
            'SignalR',
            'React',
            'React Router',
            'Next.js',
            'Express',
            'Entity Framework',
            'SQL Server',
            'Identity Server',
            'OpenID Connect',
            'OAuth 2.0',
            'Bootstrap',
            'Tailwind CSS'
        ],
        teamCollaborationTools: [
            'Agile',
            'Scrum',
            'Kanban',
            'Git',
            'Team Foundation Services'
        ],
        platforms: [
            'Windows',
            'Mac OS X',
            'Linux',
            'Azure',
            'Amazon Web Services',
            'DigitalOcean'
        ]
    },
    employmentHistory: [{
        companyName: 'Self-Employed',
        jobTitle: 'Senior Software Developer',
        startDate: '2018-03-01T00:00:00',
        endDate: '',
        isActiveRole: true,
        description: [
            'Provided expert consulting and development services to several medium to large-scale businesses. Typical projects included upgrading vital legacy projects to newer up-to-date web-based technologies.',
            'Provided technical direction on core technologies, domain-driven designs, architectures, and design patterns. Directly engaged various teams through training, pair-programming and code-reviews.',
            'Projects utilized various technologies including, but not limited to .NET Core, ASP.NET Core, SignalR, SQL Server, React, Next.js, Node.js, Laravel, PHP, MySQL, OAuth 2.0, and more.'
        ]
    }, {
        companyName: 'PNI Digital Media Ltd.',
        jobTitle: 'Senior Back-End Developer',
        startDate: '2015-03-01T00:00:00',
        endDate: '2018-03-01T00:00:00',
        isActiveRole: false,
        description: [
            'Developed, delivered, and maintained several large-scale business solutions for Staples Copy & Print.',
            'Contributions involved server-side API development, utilizing data-warehousing with high-transaction throughput and domain-driven design. Directly mentored and cross-trained team on new technologies and design patterns, via ongoing pair-programming and peer code reviews.',
            'Projects utilized various technologies including, but not limited to C#, ASP.NET Web API, MVC, SignalR, Azure, OpenID Connect 1.0, Entity Framework, LINQ, Microsoft SQL Server.'
        ]
    }, {
        companyName: 'Self-Employed',
        jobTitle: 'Software Consultant',
        startDate: '2011-04-01T00:00:00',
        endDate: '2015-02-01T00:00:00',
        isActiveRole: false,
        description: [
            'Provided software consulting and development services utilizing the latest in Microsoft web and open-source technologies.',
            'Primary responsibilities involved providing technical guidance via best practices and critical system-analysis. Directly engaged teams though cross-training, pair programming, CI/CD, unit-testing, and code reviews.',
            'Projects utilized various technologies including, but not limited to ASP.NET MVC, Web API, WCF Web Services, XAML, WinForms, Entity Framework, SQL Server, AngularJS, Bootstrap, jQuery, and KnockoutJS.'
        ]
    }, {
        companyName: 'Multimedia Games (MGAM)',
        jobTitle: 'Software Developer II',
        startDate: '2008-09-01T00:00:00',
        endDate: '2011-03-01T00:00:00',
        isActiveRole: false,
        description: [
            '09/10 - 03/11: Promoted to Software Developer II. Worked closely with Project Support and QA to reduce frequency of trouble tickets and bug reports. Duties involved development of internal QA tooling and automated testing of software systems, interacting with hardware device integration.',
            '09/09 - 09/10: Promoted to Product Support Engineer. Primary responsibilities involved providing Level 2 technical support for MGAM’s software product lines, system analysis, diagnostics, root-cause and occasionally teaming up with project management, developers, and other members of product support.',
            '09/08 - 09/09: Joined as Jr. Software/Database Developer. Contributions ranged from back-end casino/bingo systems, kiosks, WinCE point-of-sale systems, and internal tools for several of MGAM’s product lines.',
            'Technologies utilized: C#, C++, .NET Framework, Microsoft SQL Server, WinForms, and SOAP Web Services'
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

export function getObjective(): string {
    return resume.objective;
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