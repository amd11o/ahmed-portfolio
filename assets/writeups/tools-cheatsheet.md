# Professional Pentest & SOC Tools Cheatsheet

This is my practical tool map. I keep it organized by workflow because tools are only useful when they support a clear method.

My rule:

```text
Objective first → tool second → evidence always
```

---

## 1. Network discovery and service enumeration

```bash
ip a
ip route
nmap -sn <subnet>/24 -oN scans/host-discovery.txt
nmap -p- --min-rate 3000 -T4 <target-ip> -oN scans/full-tcp.txt
nmap -sV -sC -p <ports> <target-ip> -oN scans/service-scan.txt
sudo nmap -sU --top-ports 50 <target-ip> -oN scans/udp-top50.txt
```

Professional habit: I do not report a service only because one fast scan showed it. I confirm important findings with service/version detection.

Useful additions:

```bash
naabu -host <target-ip> -top-ports 1000
rustscan -a <target-ip> -- -sV
```

---

## 2. Web reconnaissance and content discovery

```bash
whatweb http://<target-ip>
curl -I http://<target-ip>
nikto -h http://<target-ip>
ffuf -u http://<target-ip>/FUZZ -w /usr/share/wordlists/dirb/common.txt
feroxbuster -u http://<target-ip>/ -w /usr/share/seclists/Discovery/Web-Content/raft-small-words.txt
```

For larger scopes:

```bash
subfinder -d example.com -o subs.txt
cat subs.txt | httpx -title -tech-detect -status-code -o web.txt
katana -u https://example.com -depth 2 -o urls.txt
```

I use automation to find leads, then I validate manually.

---

## 3. Burp Suite manual testing workflow

```text
Proxy → HTTP history → Repeater → Compare responses → Change one value → Save evidence
```

I use Burp for:

- authentication checks
- authorization / IDOR testing
- session behavior
- file upload/download features
- request tampering
- response comparison
- evidence screenshots

Good habit: one parameter change at a time. If I change too many things, I cannot explain the finding clearly.

---

## 4. WordPress and CMS testing

```bash
wpscan --url http://<target-ip>/ --enumerate u,p,t
searchsploit <cms> <version>
```

I look for:

- core version
- vulnerable plugins
- themes
- usernames
- backup files
- exposed admin panels

---

## 5. SMB, Windows, and Active Directory basics

```bash
smbclient -L //<target-ip>/ -N
enum4linux-ng <target-ip>
smbmap -H <target-ip>
netexec smb <target-ip> -u <user> -p <password> --shares
```

If Active Directory is in scope:

```bash
ldapsearch -x -H ldap://<dc-ip> -b "DC=example,DC=local"
bloodhound-python -d example.local -u <user> -p <password> -ns <dc-ip> -c All
```

Useful Impacket examples:

```bash
secretsdump.py domain/user:pass@<target>
GetUserSPNs.py domain/user:pass -dc-ip <dc-ip> -request
```

I treat AD tools carefully because they can be noisy and high impact.

---

## 6. Credential testing and hash auditing

```bash
hydra -l <user> -P <wordlist> ssh://<target-ip>
john hashes.txt --wordlist=/usr/share/wordlists/rockyou.txt
john --show hashes.txt
hashcat -m <mode> hashes.txt wordlist.txt
```

Before running any credential testing, I check scope, lockout risk, and rate limits.

---

## 7. Linux post-exploitation checks

```bash
whoami
id
hostname
ip a
ip route
sudo -l
find / -perm -4000 -type f 2>/dev/null
find / -name "*.conf" 2>/dev/null
```

Automation helpers:

```bash
linpeas.sh
pspy64
```

I use automated tools as a guide, then manually validate interesting findings.

---

## 8. Windows post-exploitation checks

```cmd
whoami
hostname
ipconfig /all
route print
arp -a
net user
net localgroup administrators
```

Automation helpers:

```text
winPEASx64.exe
Seatbelt.exe
SharpHound.exe
```

I focus on services, permissions, stored credentials, scheduled tasks, registry clues, and internal network routes.

---

## 9. Network traffic and packet analysis

```bash
tcpdump -i tun0 -nn host <target-ip>
wireshark
zeek -r traffic.pcap
```

For SOC/network detection practice:

```text
Zeek logs: conn.log, dns.log, http.log, ssl.log
Suricata: eve.json alerts
Wireshark: conversations, streams, DNS, HTTP, TLS
```

Packets help me confirm what tools are actually doing.

---

## 10. SOC, detection, and DFIR tools

```text
Microsoft Sentinel
Splunk
KQL
Sigma
YARA
Volatility
Wireshark
Zeek
Suricata
osquery
Microsoft Defender
CrowdStrike concepts
```

Example KQL thinking:

```text
SecurityEvent
| where EventID == 4625
| summarize FailedLogons=count() by Account, Computer
```

Detection mindset:

```text
Alert title → entity context → timeline → evidence → severity → action → documentation
```

---

## 11. Secret scanning and repository hygiene

```bash
gitleaks detect --source .
trufflehog filesystem .
```

Before publishing projects, I check for:

- API keys
- passwords
- tokens
- private URLs
- database credentials
- internal screenshots
- certificate IDs or QR codes

---

## 12. Reporting checklist

For every finding, I try to save:

```text
What I tested
Command or request used
Evidence output
Screenshot
Impact
Risk level
Recommendation
Retest idea
```

A tool result is not a finding by itself. A finding needs proof, impact, and a clear fix.
