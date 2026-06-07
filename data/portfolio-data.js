const portfolioData = {
  profile: {
    name: "Ahmed Gubran",
    kicker: "SOC Analyst • Penetration Testing • Incident Response",
    title: "Cybersecurity Graduate | SOC Analyst | Penetration Testing & SIEM Operations",
    subtitle: "Cybersecurity graduate with practical exposure to SOC monitoring, alert triage, incident investigation, vulnerability assessment, secure web practices, and penetration-testing fundamentals.",
    status: "Available for cybersecurity opportunities, SOC roles, internships, and authorized pentesting-related projects.",
    email: "ahmed.a2gubran@gmail.com",
    linkedin: "https://www.linkedin.com/in/amd11o",
    github: "https://github.com/amd11o",
    twitter: "https://x.com/amd11o",
    medium: "https://medium.com/@amd11o",
    tryhackme: "https://tryhackme.com/p/amd11o",
    location: "Malaysia / Yemen",
    handle: "@amd11o",
    cv: "assets/cv/Ahmed_Gubran_Resume.pdf",
    avatar: "assets/profile/ahmed-cyber-workspace.jpg",
    about: "Ahmed is a cybersecurity graduate with a Bachelor of Computer Science in Information Security from UTHM. His work combines defensive security experience in SOC operations with offensive security learning through penetration testing, web security, vulnerability assessment, CTF participation, and security-focused projects. Academic highlights include a UTHM CGPA of 3.55, Brawijaya academic mobility GPA/cGPA of 4.00, and multiple Dean’s Awards. This portfolio is designed as a professional evidence hub for certifications, awards, reports, write-ups, projects, and practical security learning."
  },

  heroTags: ["SOC Operations", "Penetration Testing", "Web Security", "SIEM", "Incident Response", "Vulnerability Assessment", "eJPT", "TryHackMe Top 5", "CTF"],
  identityPills: ["eJPT", "Security+", "HCIA", "CCNA", "AI-900", "TryHackMe Top 5", "Dean's Award"],

  quickModules: [
    { title: "Interactive Terminal", desc: "Navigate the portfolio using Linux-style commands such as ls, cat, open, whoami, neofetch, and settings.", target: "#terminal" },
    { title: "Credentials", desc: "Professional certificates, TryHackMe Top 5 highlight, penetration testing learning, security fundamentals, networking, Huawei security, and Microsoft fundamentals.", target: "#certifications" },
    { title: "Cyber Notebook", desc: "An interactive Kali-style notebook for rendered notes, lab reports, tools, project write-ups, exam prep, and security methodology.", target: "#writeups" },
    { title: "Awards", desc: "Dean’s Awards, academic mobility achievement, CTF participation, and hackathon participation.", target: "#awards" }
  ],

  stats: [
    { value: "3.55", label: "UTHM CGPA" },
    { value: "4.00", label: "Brawijaya GPA" },
    { value: "12+", label: "Credentials & Certificates" },
    { value: "Top 5", label: "TryHackMe Ranking" },
    { value: "4+", label: "Security Projects" },
    { value: "2", label: "Cyber/IT Internships" },
    { value: "3+", label: "Dean’s Awards Shown" }
  ],

  skills: [
    { icon: "⚔", title: "Penetration Testing", items: ["Reconnaissance", "Enumeration", "Web App Testing", "Vulnerability Assessment", "Privilege Escalation Basics", "Pivoting Basics", "Evidence Collection"] },
    { icon: "🛡", title: "SOC Operations", items: ["Security Monitoring", "Alert Triage", "Incident Analysis", "Incident Documentation", "Escalation Support", "Detection Logic", "Playbook Mindset"] },
    { icon: "📡", title: "SIEM & Monitoring", items: ["Microsoft Sentinel", "Splunk", "LogRhythm", "Microsoft Defender", "CrowdStrike Concepts", "KQL Basics", "Sigma/YARA Awareness", "Log Correlation"] },
    { icon: "🌐", title: "Networking", items: ["TCP/IP", "DNS", "HTTP/HTTPS", "VPN", "Firewalls", "IDS/IPS", "IPv4/IPv6"] },
    { icon: "🧪", title: "Web Security", items: ["SQL Injection Mitigation", "IDOR Access Control", "Input Validation", "Secure Coding", "Authentication Review", "OWASP Mindset"] },
    { icon: "📝", title: "Reporting", items: ["Security Findings", "Incident Reports", "Risk Rating", "Executive Summary", "Remediation Writing", "Redacted Evidence"] },
    { icon: "🧰", title: "Professional Tooling", items: ["Nmap", "Burp Suite", "Metasploit", "NetExec", "BloodHound", "Wireshark", "Volatility", "tcpdump", "YARA", "Sigma"] }
  ],

  experience: [
    {
      role: "Cybersecurity Consultant & Web Application Security Auditor",
      company: "Afwaj Al Haramain Travel & Tours, Cyberjaya, Malaysia",
      period: "Jan 2026 - Jun 2026",
      desc: "Conducted web application security assessment, vulnerability assessment, and threat modeling for the company's business platform. Reviewed security controls related to client database architecture, secure payment gateway integration, discount management workflows, access control, input validation, and secure coding practices. Prepared and presented a security assessment report with prioritized findings, business impact, and remediation recommendations.",
      tags: ["Web Security", "Vulnerability Assessment", "Threat Modeling", "Access Control", "Secure Coding", "Security Reporting"]
    },
    {
      role: "Cybersecurity Intern - SOC Team",
      company: "Cybertronium, Kuala Lumpur, Malaysia",
      period: "Aug 2025 - Jan 2026",
      desc: "Worked within the Security Operations Center (SOC) team to monitor, analyze, and investigate enterprise security events and alerts. Performed real-time log analysis, SIEM monitoring, alert triage, incident investigation, and escalation using Splunk and Microsoft Sentinel. Monitored endpoint security events using CrowdStrike and Microsoft Defender while supporting SOC operations, incident response workflows, and security documentation.",
      tags: ["SOC", "SIEM", "Log Analysis", "Alert Triage", "Incident Investigation", "Threat Detection", "Splunk", "Microsoft Sentinel", "CrowdStrike"]
    }
  ],

  certifications: [
    {
      title: "eLearnSecurity Junior Penetration Tester (eJPT)",
      issuer: "INE Security",
      date: "May 18, 2026",
      type: "Offensive Security",
      category: "Offensive",
      badge: "⚔️",
      desc: "Junior penetration testing credential focused on practical penetration testing skills, methodology, enumeration, exploitation workflow, and professional offensive-security learning.",
      image: "assets/certificates/ejpt-certificate.png",
      doc: "assets/certificates/ejpt-certificate.png"
    },
    {
      title: "CompTIA Security+",
      issuer: "CompTIA",
      date: "April 29, 2026",
      type: "Security Fundamentals",
      category: "Core Security",
      badge: "🛡️",
      desc: "Security+ certification supporting foundational knowledge across security concepts, risk, threats, architecture, operations, and security governance.",
      image: "assets/certificates/comptia-security-plus.jpg",
      doc: "assets/certificates/comptia-security-plus.jpg"
    },
    {
      title: "HCIA-Security Certification",
      issuer: "Huawei",
      date: "Valid through Dec 28, 2026",
      type: "Huawei Security",
      category: "Network",
      badge: "🏅",
      desc: "Huawei security certification recognizing completion of Huawei security certification requirements. This card uses the uploaded official certificate image.",
      image: "assets/certificates/hcia-security-certification.jpg",
      doc: "assets/certificates/hcia-security-certification.jpg"
    },
    {
      title: "HCIA-Security V4.0 Course",
      issuer: "Huawei Talent Online",
      date: "August 24, 2023",
      type: "Network Security",
      category: "Network",
      badge: "📘",
      desc: "Huawei security course completion covering security fundamentals and Huawei security concepts.",
      image: "assets/certificates/hcia-security-v4-course.png",
      doc: "assets/certificates/hcia-security-v4-course.png"
    },
    {
      title: "CCNAv7: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      date: "October 1, 2023",
      type: "Networking",
      category: "Network",
      badge: "🌐",
      desc: "Cisco Networking Academy course covering switching, routing, IPv4/IPv6 addressing, OSI model, and small network security practices.",
      image: "assets/achievements/ccna-introduction-to-networks.png",
      doc: "assets/docs/ccna-introduction-to-networks.pdf"
    },
    {
      title: "Microsoft Certified: Power Platform Fundamentals",
      issuer: "Microsoft / Certiport",
      date: "September 24, 2023",
      type: "Microsoft Fundamentals",
      category: "Microsoft",
      badge: "▣",
      desc: "Microsoft certification in Power Platform Fundamentals.",
      image: "assets/achievements/microsoft-pl900.png",
      doc: "assets/docs/microsoft-pl900.pdf"
    },
    {
      title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft / Certiport",
      date: "December 20, 2024",
      type: "Cloud & AI Fundamentals",
      category: "Microsoft",
      badge: "☁️",
      desc: "Microsoft certification in Azure AI Fundamentals, supporting awareness of cloud-based AI concepts and Microsoft Azure AI services.",
      image: "assets/certificates/microsoft-ai900-azure-ai-fundamentals.jpg",
      doc: "assets/certificates/microsoft-ai900-azure-ai-fundamentals.jpg"
    }
  ],

  awards: [
    {
      title: "Dean’s Award - Semester I 2023/2024",
      issuer: "Universiti Tun Hussein Onn Malaysia (UTHM)",
      date: "Semester I 2023/2024",
      category: "Dean Award",
      type: "Academic Excellence",
      badge: "🏆",
      desc: "Academic recognition for Bachelor of Computer Science (Information Security) with Honours. GPA: 3.80.",
      image: "assets/awards/deans-award-2023-s1.jpg",
      doc: "assets/awards/deans-award-2023-s1.jpg"
    },
    {
      title: "Dean’s Award - Semester II 2023/2024",
      issuer: "Universiti Tun Hussein Onn Malaysia (UTHM)",
      date: "Semester II 2023/2024",
      category: "Dean Award",
      type: "Academic Excellence",
      badge: "🏆",
      desc: "Academic recognition for Bachelor of Computer Science (Information Security) with Honours. GPA: 3.68.",
      image: "assets/awards/deans-award-2023-s2.jpg",
      doc: "assets/awards/deans-award-2023-s2.jpg"
    },
    {
      title: "Dean’s Award - Semester I 2024/2025",
      issuer: "Universiti Tun Hussein Onn Malaysia (UTHM)",
      date: "Semester I 2024/2025",
      category: "Dean Award",
      type: "Academic Excellence",
      badge: "🏆",
      desc: "Academic recognition for Bachelor of Computer Science (Information Security) with Honours. GPA: 3.91.",
      image: "assets/awards/deans-award-2024-s1.jpg",
      doc: "assets/awards/deans-award-2024-s1.jpg"
    },
    {
      title: "PETRONAS Inter-University 2023 CTF Competition",
      issuer: "PETRONAS Digital Sdn Bhd",
      date: "October 9, 2023",
      category: "CTF",
      type: "Capture The Flag",
      badge: "🚩",
      desc: "Certificate of participation for PETRONAS Inter-University 2023 Capture the Flag Competition held at Kuala Lumpur Convention Centre.",
      image: "assets/achievements/petronas-ctf-2023.png",
      doc: "assets/docs/petronas-ctf-2023.pdf"
    },
    {
      title: "BRIDG3 Hackathon Participation",
      issuer: "BRIDG3 Hackathon",
      date: "July 27-28, 2024",
      category: "Hackathon",
      type: "Hackathon",
      badge: "⚡",
      desc: "Certificate of participation in BRIDG3 Hackathon.",
      image: "assets/achievements/bridge3-hackathon.jpg",
      doc: "assets/achievements/bridge3-hackathon.jpg"
    },
    {
      title: "Academic Mobility Result Card",
      issuer: "University of Brawijaya, Faculty of Computer Science",
      date: "Academic Year 2024-2025",
      category: "Academic",
      type: "Academic Mobility",
      badge: "🎓",
      desc: "Study result card from academic mobility program. GPA and cGPA: 4.00.",
      image: "assets/achievements/brawijaya-study-result-card.png",
      doc: "assets/docs/brawijaya-study-result-card.pdf"
    }
  ],

  projects: [
   {
  title: "Afwaj Al Haramain Web Application Security Assessment",
  period: "Jan 2026 - Jun 2026",
  category: "Web Application Security Audit",
  desc: "Conducted web application security assessment, vulnerability assessment, and threat modeling for the company's business platform. Reviewed security controls related to client database architecture, secure payment gateway integration, discount management workflows, access control, input validation, and secure coding practices. Prepared a security assessment report with prioritized findings, business impact, and remediation recommendations.",
  image: "assets/projects/secure-travel-website.svg",
  tags: ["Web Security", "Vulnerability Assessment", "Threat Modeling", "Access Control", "Input Validation", "Secure Coding", "Security Reporting"],
  links: [
    { label: "Case Study", url: "assets/writeups/secure-web-app-case-study.md" }
  ]
},
    {
      title: "Phishing URL Detection System Using XGBoost",
      period: "May 2024 - Feb 2025",
      category: "Machine Learning Security",
      desc: "Developed a machine learning-based solution to detect phishing URLs using URL feature extraction, XGBoost classification, and malicious URL analysis to support early phishing detection.",
      image: "assets/projects/phishing-detection.svg",
      tags: ["Machine Learning", "XGBoost", "Phishing Detection", "Feature Extraction", "Cybersecurity"],
      links: [ { label: "GitHub", url: "https://github.com/amd11o" }, { label: "Project Notes", url: "assets/writeups/phishing-url-detection-project.md" } ]
    },
    {
      title: "Zero Trust Network Architecture Simulation",
      period: "Jan 2022 - May 2022",
      category: "Network Security Design",
      desc: "Designed and simulated a Zero Trust network architecture in EVE-NG using segmentation, access control, and continuous monitoring concepts to reduce unauthorized access.",
      image: "assets/projects/zero-trust.svg",
      tags: ["Zero Trust", "EVE-NG", "Segmentation", "Access Control", "Monitoring"],
      links: [ { label: "Architecture Notes", url: "assets/writeups/zero-trust-architecture-notes.md" } ]
    },
    {
      title: "SMAP Online Files Repository Vulnerability Research",
      period: "April 2026",
      category: "Access Control / Vulnerability Research",
      desc: "Prepared a professional vulnerability research report on repository-wide broken access control, IDOR-style object access risk, predictable PDF exposure, and remediation strategy for the SMAP Online Files Repository. The portfolio includes the SMAP report as uploaded, with separate notes for responsible disclosure, evidence handling, and remediation thinking.",
      image: "assets/projects/soc-operations.svg",
      tags: ["Broken Access Control", "IDOR", "Predictable References", "Remediation", "Responsible Testing", "Reporting"],
      links: [ { label: "View Report", url: "assets/reports/Vulnerability_Report_SMAP_Ahmed_Gubran.pdf" }, { label: "Open Notebook", url: "#writeups" } ]
    },
    {
      title: "SOC Operations Documentation Practice",
      period: "2025 - 2026",
      category: "Blue Team / Reporting",
      desc: "A structured documentation area for alert triage notes, incident response workflows, security findings, and escalation support templates.",
      image: "assets/projects/soc-operations.svg",
      tags: ["SOC", "SIEM", "Alert Triage", "Incident Reports"],
      links: [ { label: "Notes", url: "#writeups" } ]
    }
  ],

  writeupLibrary: {
    folders: [
      { id: "cybersecurity", icon: "🛡️", title: "Cybersecurity", color: "cyan", count: 8 },
      { id: "tools", icon: "🧰", title: "Tools", color: "orange", count: 2 },
      { id: "ejpt", icon: "⚔️", title: "eJPT & Labs", color: "purple", count: 3 },
      { id: "kali", icon: "🐉", title: "Kali Troubleshooting", color: "red", count: 1 },
      { id: "notes", icon: "🧠", title: "Useful Notes", color: "green", count: 2 }
    ],
    files: [
      { title: "eJPT Exam Notes", folder: "ejpt", type: "Markdown", status: "Completed", date: "2026", icon: "⚔️", url: "assets/writeups/ejpt-exam-notes.md", desc: "My practical eJPT-style notes: methodology, commands, tools, pivoting mindset, exam-day workflow, and mistakes I avoid." },
      { title: "Security+ Study Tips", folder: "cybersecurity", type: "Markdown", status: "Completed", date: "2026", icon: "🛡️", url: "assets/writeups/security-plus-study-tips.md", desc: "How I think about Security+: concepts, practice strategy, question technique, and exam-day reminders." },
      { title: "SMAP Vulnerability Research Report", folder: "cybersecurity", type: "PDF", status: "PDF", date: "April 2026", icon: "🔐", url: "assets/reports/Vulnerability_Report_SMAP_Ahmed_Gubran.pdf", desc: "SMAP Online Files Repository vulnerability research report prepared for academic/internal remediation and responsible documentation." },
      { title: "SMAP Vulnerability Report Notes", folder: "cybersecurity", type: "Markdown", status: "Completed", date: "2026", icon: "📝", url: "assets/writeups/smap-vulnerability-report-notes.md", desc: "Short notes summarizing the report focus, impact, and remediation mindset for portfolio reading." },
      { title: "Web Application Pentest Methodology", folder: "cybersecurity", type: "Markdown", status: "Completed", date: "2026", icon: "🌐", url: "assets/writeups/web-pentest-methodology.md", desc: "My web testing flow: mapping the app, auth, access control, injection, file features, evidence, and reporting." },
      { title: "Kali Linux Troubleshooting Playbook", folder: "kali", type: "Markdown", status: "Completed", date: "2026", icon: "🐉", url: "assets/writeups/kali-troubleshooting.md", desc: "Short practical fixes for VPN, routing, DNS, Burp proxy, Nmap speed, Metasploit DB, wordlists, and unstable shells." },
      { title: "SOC Alert Triage Notes", folder: "cybersecurity", type: "Markdown", status: "Completed", date: "2026", icon: "📡", url: "assets/writeups/soc-alert-triage.md", desc: "My SOC review structure: alert context, evidence, severity thinking, process checks, timeline, and closing notes." },
      { title: "Tools Cheatsheet", folder: "tools", type: "Markdown", status: "Completed", date: "2026", icon: "🧰", url: "assets/writeups/tools-cheatsheet.md", desc: "Quick commands for Nmap, web testing, WordPress, SMB, FTP, John, Linux, Windows, Burp, and documentation." },
      { title: "Windows Process Baseline for Memory Analysis", folder: "notes", type: "Article", status: "Completed", date: "2026", icon: "🧬", url: "assets/writeups/windows-process-baseline.md", desc: "A practical Windows process baseline for memory analysis, parent-child relationships, path checking, and masquerading awareness." },
      { title: "Personal Growth in Cybersecurity", folder: "notes", type: "Article", status: "Completed", date: "2026", icon: "✨", url: "assets/writeups/personal-growth-cybersecurity.md", desc: "My reflections on certificates, labs, SOC, pentesting, write-ups, GitHub, and long-term cybersecurity growth." },
      { title: "Secure Web Application Case Study", folder: "cybersecurity", type: "Notebook", status: "Completed", date: "2026", icon: "🔒", url: "assets/writeups/secure-web-app-case-study.md", desc: "A professional case study for the secure travel website project: risk areas, controls, testing mindset, and lessons learned." },
      { title: "Phishing URL Detection Project Notes", folder: "cybersecurity", type: "Notebook", status: "Completed", date: "2026", icon: "🧠", url: "assets/writeups/phishing-url-detection-project.md", desc: "Project notes for the phishing URL detection system: features, model idea, security value, limitations, and future work." },
      { title: "Zero Trust Architecture Notes", folder: "cybersecurity", type: "Notebook", status: "Completed", date: "2026", icon: "🏗️", url: "assets/writeups/zero-trust-architecture-notes.md", desc: "Architecture notes for the Zero Trust simulation: segmentation, access control, monitoring, and network design thinking." },
      { title: "Personal Tools Index", folder: "tools", type: "Notebook", status: "Completed", date: "2026", icon: "⌘", url: "assets/writeups/personal-tools-index.md", desc: "A cleaner tool index organized by phase: recon, web, SMB, credentials, post-exploitation, SOC, and reporting." },
      { title: "TryHackMe Profile Notes", folder: "ejpt", type: "Notebook", status: "Completed", date: "2026", icon: "🔥", url: "assets/writeups/tryhackme-profile-notes.md", desc: "Notes about Ahmed's TryHackMe profile, Top 5 highlight, lab methodology, and practical learning routine." },
      { title: "TryHackMe / CTF Write-up Placeholder", folder: "ejpt", type: "PDF / Link", status: "Planned", date: "Coming soon", icon: "🚩", url: "assets/writeups/ctf-writeup-roadmap.md", desc: "Roadmap note for legal CTF walkthroughs and authorized lab reports." }
    ]
  },

  reports: [
    {
      title: "SMAP Files Repository Vulnerability Report",
      type: "Critical Vulnerability Research",
      desc: "A formal vulnerability research report on SMAP Online Files Repository covering broken access control, IDOR-style object access risk, predictable PDF exposure, direct retrieval evidence, impact, and remediation recommendations.",
      link: "assets/reports/Vulnerability_Report_SMAP_Ahmed_Gubran.pdf"
    }
  ],

  contact: [
    { label: "Email", value: "ahmed.a2gubran@gmail.com", url: "mailto:ahmed.a2gubran@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/amd11o", url: "https://www.linkedin.com/in/amd11o" },
    { label: "GitHub", value: "github.com/amd11o", url: "https://github.com/amd11o" },
    { label: "X / Twitter", value: "x.com/amd11o", url: "https://x.com/amd11o" },
    { label: "Medium", value: "medium.com/@amd11o", url: "https://medium.com/@amd11o" },
    { label: "TryHackMe", value: "tryhackme.com/p/amd11o", url: "https://tryhackme.com/p/amd11o" },
    { label: "Resume", value: "Download CV", url: "assets/cv/Ahmed_Gubran_Resume.pdf" }
  ],

  terminal: {
    help: ["help", "ls", "pwd", "whoami", "neofetch", "cat profile.txt", "cat certs.txt", "cat skills.txt", "cat projects.txt", "ls writeups", "open writeups", "open certifications", "open projects", "open awards", "open github", "open twitter", "open medium", "open tryhackme", "settings", "ejpt --info", "cgpa", "tryhackme", "cat report.txt", "open smap-report", "ask cyberbot", "certs --verify", "socials", "clear", "sudo hire-ahmed"]
  },

  botSuggestions: [
    "What is Ahmed’s CGPA?", "Ahmed TryHackMe Top 5", "Explain nmap -sV", "eJPT exam strategy", "Security+ tips", "Explain IDOR", "Burp Suite checklist", "SOC triage steps", "Kali VPN issue", "Windows process baseline", "SMAP report summary"
  ],
  botSuggestionsAr: [
    "كم معدل أحمد؟", "أحمد في TryHackMe Top 5", "اشرح nmap -sV", "استراتيجية eJPT", "نصائح Security+", "اشرح IDOR", "قائمة Burp Suite", "خطوات SOC triage", "مشكلة VPN في Kali", "عمليات ويندوز الطبيعية", "ملخص تقرير SMAP"
  ],

  botCommands: ["/help", "/profile", "/cgpa", "/certs", "/skills", "/tryhackme", "/ejpt", "/security-plus", "/smap", "/tools", "/soc-tools", "/pentest-tools", "/owasp", "/soc", "/clear"],

  commandKnowledge: [
    { command: "nmap", aliases: ["nmap -sV", "nmap -sC", "nmap -p-", "nmap scan"], title: "Nmap", safe: "Network discovery and service enumeration in authorized labs.", example: "nmap -sV -sC -p <ports> <target-ip>", note: "My workflow is host discovery first, then full port scan, then service/version scripts on confirmed ports. Accuracy matters more than noise." },
    { command: "whatweb", aliases: ["whatweb http", "web fingerprint"], title: "WhatWeb", safe: "Fingerprint web technologies, titles, frameworks, and server hints.", example: "whatweb http://<target>", note: "I use it early to understand the web stack before directory discovery or vulnerability research." },
    { command: "gobuster", aliases: ["dirb", "ffuf", "directory brute force", "content discovery"], title: "Gobuster / dirb / ffuf", safe: "Content discovery for authorized web targets.", example: "gobuster dir -u http://<target>/ -w /usr/share/wordlists/dirb/common.txt", note: "I record interesting status codes, redirects, and hidden panels. I do not rely on one wordlist only." },
    { command: "burp", aliases: ["burp suite", "proxy", "repeater", "intruder"], title: "Burp Suite", safe: "Manual web testing proxy for authorized applications.", example: "Set browser proxy to 127.0.0.1:8080, intercept request, send to Repeater.", note: "I use Repeater for controlled testing, Comparer for response differences, and Logger/HTTP history for evidence." },
    { command: "hydra", aliases: ["password attack", "brute force", "login testing"], title: "Hydra", safe: "Credential testing only when explicitly authorized in labs or assessments.", example: "hydra -l <user> -P <wordlist> <target> ssh", note: "I document scope, rate limits, and lockout risk. Real environments require permission and careful throttling." },
    { command: "john", aliases: ["john the ripper", "hash cracking", "rockyou"], title: "John the Ripper", safe: "Password hash auditing in authorized labs.", example: "john --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt", note: "I always note hash source, format, and whether cracking is allowed by scope." },
    { command: "hashcat", aliases: ["gpu cracking", "hashcat mode"], title: "Hashcat", safe: "High-performance password audit tool for permitted hash sets.", example: "hashcat -m <mode> hashes.txt wordlist.txt", note: "I identify the correct hash mode first. Wrong mode wastes time and creates false assumptions." },
    { command: "searchsploit", aliases: ["exploit-db", "version exploit"], title: "Searchsploit", safe: "Local Exploit-DB search for known vulnerabilities.", example: "searchsploit <product> <version>", note: "I verify version, target path, prerequisites, and impact before using any exploit in a lab." },
    { command: "msfconsole", aliases: ["metasploit", "meterpreter", "msfvenom"], title: "Metasploit", safe: "Framework for authorized exploitation, validation, and post-exploitation in labs.", example: "msfconsole → search <cve> → use <module> → show options", note: "I always check RHOSTS, LHOST, TARGETURI, payload, and route/pivot context." },
    { command: "wpscan", aliases: ["wordpress scan", "wordpress enumeration"], title: "WPScan", safe: "WordPress enumeration and vulnerability checking in authorized scope.", example: "wpscan --url http://<target> --enumerate u,p,t", note: "Version, plugins, themes, and users can guide safer manual validation." },
    { command: "enum4linux", aliases: ["smb enum", "smbclient", "smbmap", "crackmapexec", "netexec"], title: "SMB Enumeration", safe: "SMB enumeration in lab or permitted internal testing.", example: "enum4linux -a <target>\nsmbclient -L //<target>/ -N", note: "I look for shares, users, null sessions, password policy, and reusable credentials." },
    { command: "curl", aliases: ["http request", "headers", "curl -i"], title: "curl", safe: "HTTP request testing and quick response inspection.", example: "curl -i http://<target>/", note: "Useful for headers, redirects, cookies, methods, and quick proof before opening a browser." },
    { command: "sqlmap", aliases: ["sql injection tool", "sqli testing"], title: "sqlmap", safe: "Automated SQL injection validation only when scope allows it.", example: "sqlmap -u 'http://<target>/item?id=1' --risk=1 --level=1", note: "I prefer manual confirmation first, then controlled automation with safe options." },
    { command: "nikto", aliases: ["web vuln scan", "nikto scan"], title: "Nikto", safe: "Web server misconfiguration checks in authorized labs.", example: "nikto -h http://<target>/", note: "Good for quick findings, but results need manual validation before reporting." },
    { command: "netcat", aliases: ["nc", "listener", "reverse shell"], title: "Netcat", safe: "Network utility for authorized labs and connectivity testing.", example: "nc -lvnp <port>", note: "I treat shells carefully, document how access was obtained, and stabilize only in legal environments." },
    { command: "find suid", aliases: ["suid", "linux privesc", "find / -perm -4000"], title: "Linux SUID Checks", safe: "Local privilege escalation enumeration in authorized systems.", example: "find / -perm -4000 -type f 2>/dev/null", note: "I compare results with GTFOBins and verify impact without damaging the host." },
    { command: "linpeas", aliases: ["linpeas.sh", "linux enum"], title: "LinPEAS", safe: "Linux privilege escalation enumeration tool for authorized labs.", example: "chmod +x linpeas.sh && ./linpeas.sh", note: "Automated output is a guide, not proof. I manually validate every interesting finding." },
    { command: "winpeas", aliases: ["winpeas.exe", "windows privesc"], title: "WinPEAS", safe: "Windows privilege escalation enumeration tool for authorized labs.", example: "winPEASx64.exe", note: "I focus on services, permissions, stored credentials, paths, and interesting registry settings." },
    { command: "volatility", aliases: ["memory forensics", "volatility3", "pslist", "pstree"], title: "Volatility", safe: "Memory forensics framework for incident response and DFIR labs.", example: "vol -f memory.raw windows.pslist", note: "Process name alone is not enough; I check parent, path, command line, handles, DLLs, and network activity." },
    { command: "grep", aliases: ["awk", "sed", "cut", "sort", "uniq"], title: "Linux Text Processing", safe: "Filtering command output and logs.", example: "grep -i 'error' file.log | sort | uniq -c", note: "Good filtering saves time during recon, log review, and report evidence collection." },
    { command: "feroxbuster", aliases: ["recursive content discovery", "ferox"], title: "Feroxbuster", safe: "Recursive web content discovery for authorized targets.", example: "feroxbuster -u http://<target>/ -w /usr/share/seclists/Discovery/Web-Content/raft-small-words.txt", note: "Useful when hidden directories branch into more content. I control depth and rate to avoid unnecessary noise." },
    { command: "httpx", aliases: ["projectdiscovery httpx", "web probing"], title: "httpx", safe: "Fast web probing and HTTP metadata collection for owned or authorized scopes.", example: "cat hosts.txt | httpx -title -tech-detect -status-code", note: "I use it to triage many hosts quickly before manual testing." },
    { command: "naabu", aliases: ["projectdiscovery naabu", "fast port scan"], title: "Naabu", safe: "Fast port discovery for permitted targets.", example: "naabu -host <target> -top-ports 1000", note: "I still confirm important ports with Nmap service detection before reporting." },
    { command: "nuclei", aliases: ["template scan", "nuclei templates"], title: "Nuclei", safe: "Template-based vulnerability checks only within authorized scope.", example: "nuclei -u https://<target> -severity low,medium,high,critical", note: "Nuclei output is a lead, not final proof. I validate findings manually before writing them." },
    { command: "subfinder", aliases: ["subdomain enumeration", "amass"], title: "Subfinder / Amass", safe: "Subdomain discovery for owned domains or bug bounty scopes.", example: "subfinder -d example.com -o subs.txt", note: "I keep scope strict and separate passive discovery from active probing." },
    { command: "katana", aliases: ["crawler", "spider", "url discovery"], title: "Katana", safe: "Web crawling and URL discovery for authorized web apps.", example: "katana -u https://<target> -depth 2 -o urls.txt", note: "Good for finding endpoints that manual browsing can miss." },
    { command: "gitleaks", aliases: ["secret scanning", "trufflehog"], title: "Gitleaks / TruffleHog", safe: "Secret scanning for repositories you own or are allowed to assess.", example: "gitleaks detect --source .", note: "I use it for defensive reviews before publishing code or reports." },
    { command: "bloodhound", aliases: ["active directory", "sharphound", "ad attack paths"], title: "BloodHound", safe: "Active Directory relationship analysis in authorized labs or enterprise assessments.", example: "Collect with SharpHound, import into BloodHound, review attack paths.", note: "I use it to understand relationships, not to guess. Findings must be validated before reporting." },
    { command: "ldapsearch", aliases: ["ldap enum", "active directory ldap"], title: "ldapsearch", safe: "LDAP enumeration in authorized environments.", example: "ldapsearch -x -H ldap://<dc-ip> -b 'DC=example,DC=local'", note: "Useful for directory structure, users, groups, and policy clues." },
    { command: "impacket", aliases: ["secretsdump", "psexec", "wmiexec", "kerberoast"], title: "Impacket Toolkit", safe: "Windows/AD protocol tooling for permitted labs and assessments.", example: "secretsdump.py domain/user:pass@<target>", note: "Powerful tools require clear authorization. I document exact purpose, output, and cleanup." },
    { command: "responder", aliases: ["llmnr", "nbns", "poisoning"], title: "Responder", safe: "Name-resolution poisoning lab tool only when explicitly permitted.", example: "sudo responder -I tun0", note: "High impact in real networks. I only use it in labs or approved internal assessments." },
    { command: "evil-winrm", aliases: ["winrm shell", "5985"], title: "Evil-WinRM", safe: "WinRM access with valid credentials in authorized Windows labs.", example: "evil-winrm -i <target> -u <user> -p '<password>'", note: "Useful for controlled post-exploitation when credentials and scope allow it." },
    { command: "kql", aliases: ["sentinel kql", "microsoft sentinel", "defender hunting"], title: "KQL Hunting", safe: "Security log analysis and detection hunting in Microsoft Sentinel/Defender.", example: "SecurityEvent | where EventID == 4625 | summarize count() by Account, Computer", note: "For SOC work, I focus on timeline, entities, frequency, and outliers." },
    { command: "sigma", aliases: ["sigma rules", "detection engineering"], title: "Sigma Rules", safe: "Generic detection rule format for suspicious behavior.", example: "Map suspicious process behavior to SIEM query logic.", note: "Useful for turning investigation lessons into reusable detections." },
    { command: "yara", aliases: ["malware rule", "yara rules"], title: "YARA", safe: "Pattern matching for malware triage and file classification.", example: "yara rule.yar sample.bin", note: "I avoid overly broad strings and test rules against clean samples to reduce false positives." },
    { command: "suricata", aliases: ["ids", "eve.json", "network detection"], title: "Suricata", safe: "Network IDS/IPS alerting and packet inspection.", example: "Review Suricata eve.json alerts and correlate with PCAP evidence.", note: "Good SOC skill: alert context matters more than alert title." },
    { command: "zeek", aliases: ["bro", "network logs", "conn.log", "dns.log"], title: "Zeek", safe: "Network telemetry generation for DFIR and SOC analysis.", example: "zeek -r traffic.pcap", note: "Zeek logs make PCAP analysis faster by separating DNS, HTTP, SSL, and connection metadata." },
    { command: "osquery", aliases: ["endpoint query", "fleet"], title: "osquery", safe: "Endpoint visibility through SQL-like queries.", example: "select * from processes where name like '%powershell%';", note: "Useful for hunting process, persistence, user, and network indicators." }
  ],
  knowledgeBase: [
    {
      topic: "Ahmed profile and CGPA",
      keywords: ["ahmed", "profile", "who is ahmed", "cgpa", "gpa", "grade", "grades", "معدل", "كم معدل", "درجات", "تعريف"],
      answer: "Ahmed Gubran is a cybersecurity graduate from UTHM focused on SOC operations, penetration testing, SIEM, vulnerability assessment, and secure web practices. His UTHM CGPA is 3.55/4.00. His Brawijaya academic mobility GPA/cGPA is 4.00/4.00. His Dean’s Award GPAs shown in the portfolio are 3.80, 3.68, and 3.91.",
      answerAr: "أحمد جبران خريج أمن سيبراني من UTHM، تركيزه على SOC، اختبار الاختراق، SIEM، تقييم الثغرات، وأمن تطبيقات الويب. معدل UTHM هو 3.55 من 4.00، ونتيجة Brawijaya GPA/cGPA هي 4.00 من 4.00، وجوائز العميد المعروضة بمعدلات 3.80 و3.68 و3.91."
    },
    {
      topic: "Ahmed certifications",
      keywords: ["cert", "certificate", "certification", "credential", "security+", "ejpt", "ccna", "hcia", "microsoft", "pl-900", "ai-900", "power platform", "azure ai", "شهادات"],
      answer: "Ahmed’s credentials include eJPT, CompTIA Security+, HCIA-Security Certification, HCIA-Security V4.0 Course, CCNAv7: Introduction to Networks, Microsoft Power Platform Fundamentals, and Microsoft Azure AI Fundamentals. The portfolio also includes Dean’s Awards, PETRONAS CTF participation, BRIDG3 Hackathon participation, and Brawijaya academic mobility results.",
      answerAr: "شهادات أحمد تشمل eJPT وCompTIA Security+ وHCIA-Security وHCIA-Security V4.0 Course وCCNAv7 Introduction to Networks وMicrosoft Power Platform Fundamentals وMicrosoft Azure AI Fundamentals. كما توجد جوائز العميد ومشاركة PETRONAS CTF وBRIDG3 Hackathon ونتيجة Brawijaya."
    },
    {
      topic: "Ahmed social profiles and TryHackMe",
      keywords: ["tryhackme", "try hack me", "thm", "top 5", "medium", "github", "twitter", "x.com", "linkedin", "social", "amd11o", "تراي هاك مي", "تراي هك مي"],
      answer: "Ahmed's public cybersecurity handle is amd11o. His GitHub is github.com/amd11o, X/Twitter is x.com/amd11o, Medium is medium.com/@amd11o, LinkedIn is linkedin.com/in/amd11o, and TryHackMe is tryhackme.com/p/amd11o. The portfolio also highlights a TryHackMe Top 5 profile/ranking note as part of his practical lab journey.",
      answerAr: "هاندل أحمد العام في السايبر هو amd11o. حساب GitHub هو github.com/amd11o، وحساب X/Twitter هو x.com/amd11o، وMedium هو medium.com/@amd11o، وLinkedIn هو linkedin.com/in/amd11o، وTryHackMe هو tryhackme.com/p/amd11o. البورتفوليو يذكر أيضاً TryHackMe Top 5 كجزء من رحلته العملية في اللابات."
    },
    {
      topic: "Professional pentesting and SOC tools",
      keywords: ["tools", "toolkit", "professional tools", "pentest tools", "soc tools", "red team tools", "blue team tools", "تولات", "أدوات"],
      answer: "For pentesting I keep a workflow toolbox: Nmap, WhatWeb, ffuf, feroxbuster, Burp Suite, WPScan, Nikto, Searchsploit, Metasploit, Hydra, John, Hashcat, NetExec/CrackMapExec, enum4linux-ng, smbclient, Impacket, BloodHound, ldapsearch, LinPEAS, WinPEAS, curl, tcpdump, Wireshark, and reporting templates. For SOC/DFIR I focus on Microsoft Sentinel, Splunk, KQL, Sigma, YARA, Volatility, Wireshark, Zeek, Suricata, osquery, Defender, and structured incident notes. The important part is choosing tools by phase, not running everything randomly.",
      answerAr: "للاختبار أستخدم Toolbox حسب المرحلة: Nmap, WhatWeb, ffuf, feroxbuster, Burp Suite, WPScan, Nikto, Searchsploit, Metasploit, Hydra, John, Hashcat, NetExec/CrackMapExec, enum4linux-ng, smbclient, Impacket, BloodHound, ldapsearch, LinPEAS, WinPEAS, curl, tcpdump, Wireshark، وقوالب تقارير. في SOC/DFIR أركز على Microsoft Sentinel, Splunk, KQL, Sigma, YARA, Volatility, Wireshark, Zeek, Suricata, osquery, Defender، وملاحظات حوادث منظمة. الأهم اختيار الأداة حسب المرحلة وليس تشغيل كل شيء عشوائياً."
    },
    {
      topic: "eJPT overview",
      keywords: ["ejpt", "junior penetration", "penetration tester", "ine", "exam", "practical", "what is ejpt", "about ejpt", "e-jpt", "اي جي بي تي"],
      answer: "eJPT stands for eLearnSecurity Junior Penetration Tester. I describe it as a practical junior penetration testing credential that rewards methodology: recon, scanning, enumeration, controlled exploitation in authorized labs, basic post-exploitation thinking, pivoting awareness, and clear notes. My portfolio includes eJPT Exam Notes with commands, tools, and exam workflow reminders.",
      answerAr: "eJPT تعني eLearnSecurity Junior Penetration Tester. أعتبرها شهادة عملية للمستوى المبتدئ في اختبار الاختراق وتركز على المنهجية: Recon، فحص الخدمات، Enumeration، استغلال مصرح في لابات، Post-exploitation، Pivoting، وتوثيق واضح. داخل البورتفوليو توجد ملاحظات eJPT مع أوامر وأدوات ونصائح تنظيمية."
    },
    {
      topic: "eJPT preparation",
      keywords: ["prepare ejpt", "ejpt preparation", "study ejpt", "how to pass ejpt", "ejpt tips", "ejpt labs", "exam tips", "nmap hydra john metasploit", "pivoting"],
      answer: "My eJPT preparation advice: do not jump to exploitation. Build a flow: identify your IP/subnet, discover hosts, run full port scans, enumerate each service, document everything, exploit only after evidence, enumerate after shell, check privilege escalation, look for credentials, prove pivot hosts, and read flags directly before submitting. Tools I keep ready: Nmap, ffuf/dirb, WhatWeb, WPScan, enum4linux-ng, smbclient, Hydra, John, Searchsploit, Metasploit, curl, and MySQL client.",
      answerAr: "نصيحتي لـ eJPT: لا تبدأ بالاستغلال مباشرة. امشِ بمنهجية: اعرف IP والشبكة، اكتشف الأجهزة، افحص كل المنافذ، اعمل Enumeration لكل خدمة، وثق كل شيء، استغل بعد وجود دليل، افحص الجهاز بعد الدخول، ابحث عن صلاحيات أعلى وبيانات دخول، أثبت جهاز الـ Pivot، واقرأ الفلاق مباشرة قبل التسليم. أدوات مهمة: Nmap, ffuf/dirb, WhatWeb, WPScan, enum4linux-ng, smbclient, Hydra, John, Searchsploit, Metasploit, curl, MySQL client."
    },
    {
      topic: "Security+ tips",
      keywords: ["security+", "comptia", "sy0", "security plus", "sec plus", "pass security", "how to pass security+", "سكيورتي بلس"],
      answer: "For Security+, I focus on understanding scenarios, not memorizing words. Know the difference between authentication, authorization, hashing, encryption, encoding, risk, vulnerability, threat, exploit, and control. Practice questions daily, review wrong answers, learn why distractors are wrong, and pay attention to words like best, first, next, most likely, and least. The Security+ Study Tips write-up in the portfolio has my full checklist.",
      answerAr: "لـ Security+ ركز على فهم السيناريو وليس حفظ الكلمات فقط. افهم الفرق بين Authentication وAuthorization وHashing وEncryption وEncoding وRisk وVulnerability وThreat وExploit وControl. حل أسئلة يومياً، راجع الأخطاء، وافهم لماذا الخيارات الخاطئة خادعة. انتبه لكلمات مثل best وfirst وnext وmost likely وleast. داخل البورتفوليو يوجد ملف Security+ Study Tips."
    },
    {
      topic: "Ahmed SMAP report",
      keywords: ["smap", "report", "vulnerability report", "uthm portal", "repository", "pdf exposure", "restricted", "access control", "idor report", "تقرير"],
      answer: "Ahmed’s SMAP report is an vulnerability research report about repository-wide broken access control and predictable PDF exposure in the UTHM SMAP Online Files Repository. The key issue is that restricted or hidden files should not rely on UI restriction only; the backend must verify authorization and ownership before serving any document. The portfolio links to the SMAP report as the main evidence document.",
      answerAr: "تقرير SMAP الخاص بأحمد يوثق Broken Access Control وPredictable PDF Exposure في UTHM SMAP Online Files Repository. الفكرة الأساسية أن إخفاء الملف من الواجهة لا يكفي؛ لازم الباكند يتحقق من الصلاحية والملكية قبل إرسال أي مستند. البورتفوليو يعرض التقرير كوثيقة الدليل الرئيسية."
    },
    {
      topic: "Ahmed experience",
      keywords: ["experience", "intern", "soc analyst", "afwaj", "uthm soc", "work", "خبرة", "تدريب"],
      answer: "Ahmed’s experience includes a SOC Analyst Internship at University SOC, UTHM, where he worked with alert review, log analysis, suspicious activity identification, severity assessment, and escalation support. He also completed a Cybersecurity & IT Internship / IT Support role at Afwaj Al Haramain, focusing on secure web practices, SQL injection mitigation using parameterized queries, IDOR-related authorization checks, Windows/Linux support, and operational security improvements.",
      answerAr: "خبرة أحمد تشمل تدريب SOC Analyst في University SOC بجامعة UTHM، حيث عمل على مراجعة التنبيهات، تحليل اللوقات، تحديد الأنشطة المشبوهة، تقييم الخطورة، ودعم التصعيد. كما لديه تدريب Cybersecurity & IT Intern / IT Support في Afwaj Al Haramain مع تركيز على ممارسات الويب الآمنة، تقليل SQL Injection باستخدام Parameterized Queries، تحسين Authorization لمشاكل IDOR، ودعم Windows/Linux."
    }
  ],

  cyberFallback: "I’m CyberBot. I can answer cybersecurity questions and Ahmed-specific questions. Try asking about IDOR, OWASP Top 10, SQL injection, XSS, CSRF, SSRF, Nmap, Burp Suite, SIEM, SOC triage, malware, phishing, incident response, Windows process baseline, Kali troubleshooting, eJPT, Security+, Ahmed’s CGPA, awards, certifications, projects, GitHub, X/Twitter, Medium, TryHackMe, professional pentest/SOC tools, or the SMAP report. I keep answers ethical, defensive, and scoped to authorized learning.",
  cyberFallbackAr: "أنا CyberBot. أقدر أجاوب عن أسئلة سايبر وأسئلة عن أحمد. جرّب تسأل عن IDOR، OWASP Top 10، SQL Injection، XSS، CSRF، SSRF، Nmap، Burp Suite، SIEM، SOC triage، Malware، Phishing، Incident Response، Windows process baseline، مشاكل Kali، eJPT، Security+، معدل أحمد، الجوائز، الشهادات، المشاريع، GitHub، X/Twitter، Medium، TryHackMe، أدوات Pentest/SOC الاحترافية، أو تقرير SMAP. الإجابات تكون أخلاقية ودفاعية وفي نطاق التعلم المصرح.",

  cyberKnowledgeBase: [
    {
      topic: "IDOR",
      keywords: ["idor", "insecure direct object", "object reference", "access another user", "user id", "رقم مستخدم"],
      answer: "IDOR happens when an application exposes an object reference, such as a user ID or file ID, and the backend does not verify whether the current user is allowed to access that object. Fix it with server-side ownership checks, role checks, deny-by-default authorization, indirect/opaque IDs, logging, and negative access-control tests.",
      answerAr: "IDOR تحدث عندما يعرض التطبيق معرف كائن مثل user ID أو file ID ولا يتحقق الباكند أن المستخدم الحالي يملك صلاحية الوصول. العلاج: فحص ملكية وصلاحية في الباكند، Deny by default، استخدام Opaque IDs، تسجيل محاولات الوصول، واختبارات Access Control سلبية."
    },
    {
      topic: "Broken Access Control",
      keywords: ["broken access control", "authorization", "privilege", "role", "permission", "ownership", "صلاحيات", "تحكم وصول"],
      answer: "Broken Access Control means users can perform actions or access data outside their permissions. Real fixes happen in the backend: central authorization middleware, object ownership checks, role/permission checks, protected file streaming, no direct public sensitive files, logging, rate limiting, and retesting with normal users, other users, and unauthenticated sessions.",
      answerAr: "Broken Access Control يعني أن المستخدم يقدر يعمل شيء أو يصل لبيانات خارج صلاحياته. العلاج الحقيقي يكون في الباكند: Middleware للصلاحيات، فحص ملكية الكائن، فحص الدور والصلاحية، تقديم الملفات عبر Endpoint محمي، منع الروابط العامة للملفات الحساسة، Logging، Rate limiting، وإعادة اختبار بمستخدم عادي ومستخدم آخر وبدون تسجيل دخول."
    },
    {
      topic: "OWASP Top 10",
      keywords: ["owasp", "top 10", "web vulnerabilities", "owasp top", "أواسب"],
      answer: "OWASP Top 10 is a common awareness list for major web application risks such as Broken Access Control, Cryptographic Failures, Injection, Insecure Design, Security Misconfiguration, Vulnerable Components, Authentication Failures, Integrity Failures, Logging/Monitoring Failures, and SSRF. I use it as a checklist, not as a replacement for manual testing.",
      answerAr: "OWASP Top 10 قائمة توعوية لأهم مخاطر تطبيقات الويب مثل Broken Access Control وCryptographic Failures وInjection وInsecure Design وSecurity Misconfiguration وVulnerable Components وAuthentication Failures وIntegrity Failures وLogging/Monitoring Failures وSSRF. أستخدمها كقائمة مراجعة وليس بديل للاختبار اليدوي."
    },
    {
      topic: "SQL Injection",
      keywords: ["sql injection", "sqli", "injection", "parameterized", "prepared statement", "حقن", "sql"],
      answer: "SQL Injection happens when untrusted input becomes part of a database query as code. Defenses: parameterized queries/prepared statements, safe ORM use, input validation, least-privilege DB users, generic error messages, and testing through code review plus DAST/SAST where appropriate.",
      answerAr: "SQL Injection تحدث عندما يتحول Input غير موثوق إلى كود داخل استعلام قاعدة البيانات. الحماية: Prepared Statements، استخدام ORM بشكل آمن، التحقق من المدخلات، أقل صلاحيات لحساب قاعدة البيانات، رسائل خطأ عامة، ومراجعة كود مع SAST/DAST عند الحاجة."
    },
    {
      topic: "XSS",
      keywords: ["xss", "cross site scripting", "script injection", "stored xss", "reflected xss", "dom xss", "سكربت"],
      answer: "XSS allows attacker-controlled script to run in a user’s browser. Defenses include context-aware output encoding, sanitizing rich HTML, avoiding unsafe DOM APIs, using Content Security Policy, and protecting cookies with HttpOnly, Secure, and SameSite.",
      answerAr: "XSS تسمح بتشغيل سكربت يتحكم به المهاجم داخل متصفح المستخدم. الحماية: Output Encoding حسب السياق، Sanitization للـ HTML، تجنب unsafe DOM APIs، تفعيل CSP، وحماية الكوكيز بـ HttpOnly وSecure وSameSite."
    },
    {
      topic: "CSRF",
      keywords: ["csrf", "cross site request forgery", "anti csrf", "same site", "csrf token"],
      answer: "CSRF tricks an authenticated browser into sending an unwanted state-changing request. Defenses: anti-CSRF tokens, SameSite cookies, re-authentication for sensitive actions, checking Origin/Referer where appropriate, and not using GET for state-changing actions.",
      answerAr: "CSRF يخدع متصفح مستخدم مسجل دخول ليرسل طلب يغير حالة النظام بدون قصد. الحماية: CSRF Tokens، SameSite Cookies، إعادة تحقق للعمليات الحساسة، فحص Origin/Referer عند الحاجة، وعدم استخدام GET للعمليات التي تغير البيانات."
    },
    {
      topic: "SSRF",
      keywords: ["ssrf", "server side request forgery", "metadata", "internal request", "169.254"],
      answer: "SSRF happens when a server is tricked into requesting internal or unintended resources. Defenses: strict allowlists, block private/metadata IP ranges, avoid user-controlled URLs, resolve and re-check DNS, restrict protocols, and monitor outbound server requests.",
      answerAr: "SSRF تحدث عندما يتم خداع السيرفر ليطلب موارد داخلية أو غير مقصودة. الحماية: Allowlist صارم، منع IPs الداخلية وmetadata، تجنب URLs يتحكم بها المستخدم، فحص DNS، تقييد البروتوكولات، ومراقبة الطلبات الخارجة."
    },
    {
      topic: "Nmap",
      keywords: ["nmap", "scan", "port scan", "service scan", "enumeration", "منفذ", "سكان"],
      answer: "Nmap is for authorized discovery and service enumeration. My clean workflow: host discovery, full TCP scan, service/version scan, targeted scripts only when needed, manual validation, and saved output files. Never scan systems outside your permission.",
      answerAr: "Nmap للاستكشاف المصرح به وفحص الخدمات. المنهجية: اكتشاف الأجهزة، فحص TCP كامل، معرفة الخدمة والإصدار، استخدام scripts عند الحاجة فقط، تحقق يدوي، وحفظ النتائج. لا تفحص أنظمة خارج الإذن."
    },
    {
      topic: "Burp Suite",
      keywords: ["burp", "burpsuite", "proxy", "repeater", "intruder", "web testing"],
      answer: "Burp Suite helps test web apps by intercepting requests, replaying them in Repeater, comparing responses, testing authentication/access control, and saving evidence. I prefer changing one parameter at a time so I understand the app behavior clearly.",
      answerAr: "Burp Suite يساعد في اختبار تطبيقات الويب عبر اعتراض الطلبات، إعادة إرسالها في Repeater، مقارنة الردود، اختبار المصادقة والصلاحيات، وحفظ الأدلة. أفضل تغيير باراميتر واحد كل مرة لفهم سلوك التطبيق."
    },
    {
      topic: "SIEM and SOC triage",
      keywords: ["siem", "soc", "triage", "alert", "sentinel", "splunk", "logrhythm", "logs", "incident", "تحليل تنبيهات", "لوق"],
      answer: "SOC triage means reviewing the alert, understanding user/host context, checking related logs, identifying indicators, deciding severity, documenting a timeline, and escalating or closing with evidence. SIEM tools like Sentinel and Splunk help correlate events and reduce investigation time.",
      answerAr: "SOC triage يعني مراجعة التنبيه، فهم سياق المستخدم والجهاز، فحص اللوقات المرتبطة، تحديد المؤشرات، تقييم الخطورة، كتابة Timeline، ثم التصعيد أو الإغلاق بالأدلة. SIEM مثل Sentinel وSplunk يساعد في ربط الأحداث وتقليل وقت التحقيق."
    },
    {
      topic: "Phishing",
      keywords: ["phishing", "email scam", "url phishing", "spoof", "تصيد", "رابط مزيف"],
      answer: "Phishing is social engineering that tries to steal credentials, deliver malware, or push a user into a risky action. Defenses include awareness, MFA, email filtering, DMARC/SPF/DKIM, URL analysis, safe reporting channels, and fast response after a clicked link.",
      answerAr: "التصيد هو هندسة اجتماعية لسرقة بيانات الدخول أو إيصال برمجية خبيثة أو دفع المستخدم لتصرف خطر. الحماية: التوعية، MFA، فلترة البريد، DMARC/SPF/DKIM، تحليل الروابط، قناة إبلاغ سهلة، واستجابة سريعة بعد الضغط على رابط."
    },
    {
      topic: "Malware and ransomware",
      keywords: ["malware", "ransomware", "trojan", "virus", "edr", "defender", "برمجيات خبيثة", "فدية"],
      answer: "Malware is malicious software; ransomware encrypts or extorts data. Defenses include EDR/AV, patching, least privilege, email filtering, application control, offline backups, segmentation, and an incident response plan for containment and recovery.",
      answerAr: "Malware برمجيات خبيثة، وRansomware تشفر أو تبتز البيانات. الحماية: EDR/AV، التحديثات، أقل صلاحيات، فلترة البريد، Application Control، نسخ احتياطية Offline، تقسيم الشبكة، وخطة استجابة للاحتواء والاستعادة."
    },
    {
      topic: "Windows process baseline",
      keywords: ["windows process", "memory analysis", "forensics", "lsass", "svchost", "winlogon", "process baseline", "parent process", "malware analysis", "عمليات ويندوز"],
      answer: "For Windows memory analysis, process name is not enough. I check the process path, parent process, command line, user context, start time, network connections, and whether the binary is signed. Normal names like svchost.exe or lsass.exe become suspicious when the path, parent, or behavior is wrong. The portfolio includes a Windows Process Baseline note for this.",
      answerAr: "في تحليل ميموري ويندوز، اسم العملية وحده لا يكفي. أفحص Path، Parent Process، Command Line، المستخدم، وقت التشغيل، الاتصالات، والتوقيع. أسماء طبيعية مثل svchost.exe أو lsass.exe تصبح مشبوهة إذا كان المسار أو الـ Parent أو السلوك غير طبيعي. يوجد في البورتفوليو ملف Windows Process Baseline."
    },
    {
      topic: "Kali troubleshooting",
      keywords: ["kali", "vpn", "tun0", "route", "dns", "burp proxy", "metasploit database", "rockyou", "zsh history", "troubleshooting", "كالي"],
      answer: "My Kali troubleshooting flow is: check IP, route, DNS, service, credentials, syntax, and scope. For VPN issues I check tun0 and routes. For Burp I check browser proxy and certificate. For Metasploit I start PostgreSQL and check db_status. The Kali Troubleshooting Notes file has the full quick checklist.",
      answerAr: "منهجيتي في مشاكل Kali: IP ثم Route ثم DNS ثم Service ثم Credentials ثم Syntax ثم Scope. في مشاكل VPN أفحص tun0 والراوت. في Burp أفحص البروكسي والشهادة. في Metasploit أشغل PostgreSQL وأفحص db_status. ملف Kali Troubleshooting Notes فيه القائمة المختصرة."
    },
    {
      topic: "Incident response",
      keywords: ["incident response", "ir", "containment", "eradication", "recovery", "forensics", "حادث", "استجابة"],
      answer: "Incident response usually follows preparation, identification, containment, eradication, recovery, and lessons learned. Good IR requires evidence preservation, timeline building, clear ownership, communication, and post-incident improvement.",
      answerAr: "الاستجابة للحوادث تمر غالباً بـ: التحضير، التعرف، الاحتواء، الإزالة، الاستعادة، والدروس المستفادة. الاستجابة الجيدة تحتاج حفظ الأدلة، بناء Timeline، تحديد المسؤوليات، تواصل واضح، وتحسين بعد الحادث."
    },
    {
      topic: "CVSS and risk",
      keywords: ["cvss", "risk", "severity", "critical", "high", "impact", "likelihood", "خطورة", "تقييم"],
      answer: "Risk combines likelihood and impact. CVSS helps score technical severity, but a professional report should also explain business impact, affected assets, exploitability, evidence, remediation priority, and retest requirements.",
      answerAr: "المخاطر تجمع بين احتمالية الاستغلال والتأثير. CVSS يعطي تقييم تقني، لكن التقرير الاحترافي يوضح التأثير العملي، الأصول المتأثرة، قابلية الاستغلال، الأدلة، أولوية المعالجة، ومتطلبات إعادة الاختبار."
    },
    {
      topic: "Pentest reporting",
      keywords: ["pentest report", "reporting", "finding", "executive summary", "remediation", "evidence", "تقرير اختراق", "توثيق"],
      answer: "A strong pentest report includes executive summary, scope, methodology, risk rating, evidence, impact, affected assets, clear remediation, references, and retest results. The best reports help teams fix issues, not just prove that issues exist.",
      answerAr: "تقرير الاختبار القوي يحتوي على Executive Summary، النطاق، المنهجية، تقييم الخطورة، الأدلة، التأثير، الأصول المتأثرة، خطوات علاج واضحة، مراجع، ونتائج إعادة اختبار. التقرير الممتاز يساعد الفريق يغلق الثغرات وليس فقط يثبت وجودها."
    },
    {
      topic: "CIA triad",
      keywords: ["cia", "confidentiality", "integrity", "availability", "سرية", "سلامة", "توافر"],
      answer: "The CIA triad is Confidentiality, Integrity, and Availability. Confidentiality prevents unauthorized access, integrity prevents unauthorized change, and availability keeps systems and data accessible when needed.",
      answerAr: "مثلث CIA يعني Confidentiality السرية، Integrity السلامة، Availability التوافر. السرية تمنع الوصول غير المصرح، السلامة تمنع التعديل غير المصرح، والتوافر يضمن أن الأنظمة والبيانات متاحة عند الحاجة."
    }
  ],


  extraCyberKnowledge: [
    { topic: "eJPT exam strategy", keywords: ["ejpt", "ine", "junior penetration tester", "exam", "pivoting", "routing"], answer: "For eJPT-style practice, I think in phases: identify my IP and subnet, discover hosts, enumerate every service, exploit only after evidence, upgrade access, collect proof, check routes, pivot carefully, enumerate internal hosts, and document everything. The important part is not memorizing commands; it is proving each step before moving on. I keep Nmap, enum4linux/smbclient, WPScan, Hydra, John, Metasploit, curl, and notes open during practice.", answerAr: "في eJPT-style practice أمشي بمراحل: أحدد IP والشبكة، أكتشف الأجهزة، أعمل Enumeration لكل خدمة، لا أستغل إلا بعد دليل، أرفع الصلاحيات، أجمع الأدلة، أفحص الراوت، أعمل Pivot بحذر، أفحص الشبكة الداخلية، وأوثق كل شيء. المهم ليس حفظ الأوامر فقط، بل إثبات كل خطوة قبل الانتقال للخطوة التالية." },
    { topic: "Security+ exam strategy", keywords: ["security+", "comptia", "sy0-701", "exam tips", "pbq"], answer: "For Security+, I focus on scenario thinking: what is the risk, which control reduces it, and what should be done first or best? I revise IAM, risk, cryptography basics, network controls, cloud, incident response, logging, governance, and business continuity. For PBQs, I slow down, identify the zones, users, protocols, direction of traffic, and least-privilege requirement before choosing controls.", answerAr: "في Security+ أركز على التفكير بالسيناريو: ما الخطر؟ ما التحكم المناسب؟ ما الخطوة الأولى أو الأفضل؟ أراجع IAM، المخاطر، أساسيات التشفير، حماية الشبكات، الكلاود، الاستجابة للحوادث، اللوقات، الحوكمة، والاستمرارية. في PBQ أهدأ وأحدد الشبكات، المستخدمين، البروتوكولات، اتجاه الترافيك، وأقل صلاحيات." },
    { topic: "SMAP vulnerability report", keywords: ["smap", "uthm", "report", "idor", "repository", "pdf exposure", "predictable filename"], answer: "Ahmed’s SMAP report documents a critical repository access-control issue involving predictable PDF references and direct file delivery. The security lesson is clear: hiding a file in the UI is not authorization. The backend must verify ownership on every file request, use opaque random identifiers, protect file streaming through application logic, invalidate exposed links, log access, rate limit requests, and retest after remediation.", answerAr: "تقرير SMAP يوثق مشكلة حرجة في التحكم بالوصول داخل مستودع الملفات، مع أسماء PDF قابلة للتوقع وتسليم مباشر للملفات. الدرس الأمني: إخفاء الملف في الواجهة ليس Authorization. لازم الباكند يتحقق من ملكية كل ملف، يستخدم معرفات عشوائية، يخدم الملفات عبر endpoint محمي، يلغي الروابط المكشوفة، يسجل الوصول، يطبق rate limiting، ويعيد الاختبار بعد الإصلاح." },
    { topic: "Ahmed academic results", keywords: ["cgpa", "gpa", "dean", "brawijaya", "grade", "result", "معدل"], answer: "Ahmed’s UTHM CGPA is 3.55/4.00. His Brawijaya academic mobility result shows GPA/cGPA 4.00/4.00. His Dean’s Award records shown in the portfolio include GPA 3.80, 3.68, and 3.91 across different semesters.", answerAr: "معدل أحمد في UTHM هو 3.55/4.00. ونتيجة Brawijaya في برنامج التبادل الأكاديمي GPA/cGPA هي 4.00/4.00. جوائز العميد المعروضة في البورتفوليو تتضمن GPA 3.80 و3.68 و3.91 في فصول مختلفة." },
    { topic: "Web testing workflow", keywords: ["web pentest", "web methodology", "owasp", "authentication", "access control", "file upload"], answer: "My web testing workflow is: map the application, identify roles, test authentication, test authorization and object access, inspect input points, review upload/download features, check session behavior, compare responses, document evidence, and write remediation. I focus heavily on broken access control because it is often more dangerous than a visible error message.", answerAr: "منهجيتي في Web Testing: أفهم التطبيق، أحدد الأدوار، أختبر تسجيل الدخول، أختبر الصلاحيات والوصول للكائنات، أفحص نقاط الإدخال، أراجع الرفع والتحميل، أفحص الجلسات، أقارن الاستجابات، أوثق الدليل، وأكتب علاج واضح. أركز جداً على Broken Access Control لأنها غالباً أخطر من رسالة خطأ ظاهرة." },
    { topic: "Responsible portfolio note", keywords: ["public", "redaction", "safe portfolio", "qr", "certificate id", "privacy"], answer: "Before publishing any public portfolio, I review certificates and reports for QR codes, candidate IDs, passport numbers, private URLs, tokens, screenshots with sensitive data, and internal-only evidence. A professional portfolio shows proof of work without leaking private information.", answerAr: "قبل نشر أي Portfolio عام، أراجع الشهادات والتقارير للتأكد من عدم وجود QR حساس، أرقام تحقق، رقم جواز، روابط خاصة، Tokens، صور فيها بيانات حساسة، أو أدلة داخلية. البورتفوليو الاحترافي يثبت الشغل بدون تسريب معلومات خاصة." }
  ],

  translations: {
    en: {
      text: {
        "#mainMenu a:nth-child(1)": "About",
        "#mainMenu a:nth-child(2)": "Terminal",
        "#mainMenu a:nth-child(3)": "Credentials",
        "#mainMenu a:nth-child(4)": "Projects",
        "#mainMenu a:nth-child(5)": "Write-ups",
        "#mainMenu a:nth-child(6)": "Awards",
        "#mainMenu a:nth-child(7)": "Contact",
        "#profileTitle": "Cybersecurity Graduate | SOC Analyst | Penetration Testing & SIEM Operations",
        "#profileSubtitle": "Cybersecurity graduate with practical exposure to SOC monitoring, alert triage, incident investigation, vulnerability assessment, secure web practices, and penetration-testing fundamentals.",
        "#about .section-title h2": "About Ahmed",
        "#terminal .section-title h2": "Linux-style Navigation Terminal",
        "#skills .section-title h2": "Security Skills",
        "#experience .section-title h2": "Experience Timeline",
        "#certifications .section-title h2": "Professional Credentials",
        "#projects .section-title h2": "Security Projects",
        "#awards .section-title h2": "Awards, Hackathons & University Achievements",
        "#writeups .section-title h2": "Latest Write-ups",
        "#reports .section-title h2": "Security Report",
        "#contact .section-title h2": "Contact Ahmed",
        "#openWriteupWindow": "Open File Manager",
        "#openBotHero": "Ask CyberBot",
        "#openBotContact": "Open CyberBot"
      },
      placeholder: { "#botInput": "Ask about a command, vulnerability, tool, exam, or Ahmed...", "#botSearch": "Search tools, concepts, commands, exams...", "#shellCommand": "type a command, e.g. help" }
    },
    ar: {
      text: {
        "#mainMenu a:nth-child(1)": "نبذة",
        "#mainMenu a:nth-child(2)": "الترمينال",
        "#mainMenu a:nth-child(3)": "الشهادات",
        "#mainMenu a:nth-child(4)": "المشاريع",
        "#mainMenu a:nth-child(5)": "المقالات",
        "#mainMenu a:nth-child(6)": "الإنجازات",
        "#mainMenu a:nth-child(7)": "التواصل",
        "#profileTitle": "خريج أمن معلومات | محلل SOC | اختبار اختراق وعمليات SIEM",
        "#profileSubtitle": "خريج أمن سيبراني لديه خبرة عملية في مراقبة التنبيهات، تحليل السجلات، دعم الاستجابة للحوادث، تقييم الثغرات، ممارسات الويب الآمنة، وأساسيات اختبار الاختراق.",
        "#about .section-title h2": "نبذة عن أحمد",
        "#aboutText": "أحمد خريج أمن سيبراني من UTHM، يجمع بين خبرة دفاعية في SOC والتعلم العملي في اختبار الاختراق، أمن الويب، تقييم الثغرات، CTF، والمشاريع الأمنية. معدل UTHM هو 3.55/4.00، ونتيجة Brawijaya GPA/cGPA 4.00، ولديه عدة جوائز عميد.",
        "#terminal .section-title h2": "ترمينال تنقل بأسلوب لينكس",
        "#terminal .section-title p": "استخدم أوامر بسيطة للتنقل داخل الموقع. جرّب: help, ls, whoami, cat certs.txt, open projects, cgpa, cat report.txt.",
        "#skills .section-title h2": "المهارات الأمنية",
        "#experience .section-title h2": "خط زمني للخبرة",
        "#certifications .section-title h2": "الشهادات الاحترافية",
        "#certifications .section-title p": "شهادات واعتمادات مختارة تعرض مسار التعلم والإنجازات بشكل منظم. اضغط على أي بطاقة للمعاينة.",
        "#projects .section-title h2": "المشاريع الأمنية",
        "#awards .section-title h2": "الجوائز والهاكاثونات وإنجازات الجامعة",
        "#awards .section-title p": "جوائز العميد، مشاركات CTF، الهاكاثون، ونتائج التبادل الأكاديمي.",
        "#writeups .section-title h2": "آخر المقالات والملفات",
        "#writeups .section-title p": "مكتبة ملاحظات سايبر بأسلوب Kali لعرض تقارير، لابات، أدوات، ومراجع عملية بشكل منظم واحترافي.",
        "#reports .section-title h2": "تقرير أمني",
        "#reports .section-title p": "قسم مختصر للتقرير الرسمي فقط، أما الملاحظات والمقالات فهي موجودة في مكتبة Kali أعلاه.",
        "#contact .section-title h2": "تواصل مع أحمد",
        "#contact .section-title p": "متاح لفرص الأمن السيبراني، SOC، التدريب، ومشاريع اختبار الاختراق المصرح بها.",
        "#openWriteupWindow": "فتح مدير الملفات",
        "#openBotHero": "اسأل CyberBot",
        "#openBotContact": "فتح CyberBot",
        ".bot-head strong": "CyberBot",
        ".bot-head small": "مساعد سايبر ومعلومات عن أحمد"
      },
      placeholder: { "#botInput": "اسأل أي سؤال سايبر أو اسأل عن أحمد...", "#botSearch": "ابحث في معرفة CyberBot...", "#shellCommand": "اكتب أمر مثل help" }
    }
  }
};
