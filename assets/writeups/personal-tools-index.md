# Personal Tools Index

This is my personal index for moving through labs and SOC notes without getting lost. I do not use it as a full manual. I use it as a workflow reminder.

---

## Recon and discovery

```text
Nmap
Naabu
Rustscan
WhatWeb
httpx
subfinder
amass
katana
```

Goal: understand what exists before guessing what is vulnerable.

---

## Web application testing

```text
Burp Suite
ffuf
gobuster
feroxbuster
Nikto
WPScan
curl
sqlmap
nuclei
```

My focus areas:

- authentication
- authorization
- IDOR
- file upload/download
- injection points
- session handling
- business logic
- evidence collection

---

## Windows, SMB, and AD

```text
smbclient
enum4linux-ng
smbmap
NetExec / CrackMapExec
ldapsearch
Impacket
BloodHound
SharpHound
evil-winrm
Responder
```

My reminder: AD and credential tools are powerful, so I keep scope and authorization clear.

---

## Linux and Windows privilege escalation

```text
LinPEAS
WinPEAS
pspy
Seatbelt
PowerView
GTFOBins
LOLBAS
```

Automation gives hints. Manual validation gives confidence.

---

## SOC and DFIR

```text
Microsoft Sentinel
Splunk
KQL
Sigma
YARA
Volatility
Wireshark
tcpdump
Zeek
Suricata
osquery
Microsoft Defender
CrowdStrike concepts
```

My SOC flow:

```text
Alert → context → timeline → affected entity → indicators → severity → recommendation
```

---

## Reporting and portfolio hygiene

```text
Markdown notes
PDF reports
Screenshots
Redacted evidence
Gitleaks
TruffleHog
```

Before publishing anything, I check for secrets, private data, QR codes, internal URLs, and sensitive screenshots.
