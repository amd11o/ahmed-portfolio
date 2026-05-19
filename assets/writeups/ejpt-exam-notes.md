# eJPT Exam Notes

These are my personal eJPT-style notes. I wrote them as a practical reminder for labs, not as a theoretical article.

The exam mindset is not: “find a random exploit and run it.”

The real mindset is:

```text
Recon → Enumeration → Exploitation → Privilege Escalation → Post-Exploitation → Pivoting → Internal Enumeration → Flags / Reporting
```

If I skip enumeration, I usually pay for it later.

---

## 1. First steps in any lab

I start by understanding my own position in the network.

```bash
ip a
ip route
hostname -I
```

Then I create folders before scanning.

```bash
mkdir -p scans notes loot screenshots exploits
```

I keep everything saved because I will come back to the same outputs many times.

---

## 2. Host discovery

```bash
nmap -sn <subnet>/24 -oN scans/host-discovery.txt
```

If ping discovery is unreliable, I verify with ARP, routing, or targeted scans.

```bash
arp -a
ip neigh
```

I never count hosts too fast. I separate Kali, gateway, pivot hosts, DMZ hosts, and internal hosts.

---

## 3. Port scanning workflow

Fast full TCP scan:

```bash
nmap -p- --min-rate 3000 -T4 <target-ip> -oN scans/full-tcp-<target>.txt
```

Service scan on discovered ports:

```bash
nmap -sV -sC -p <ports> <target-ip> -oN scans/services-<target>.txt
```

UDP quick check when needed:

```bash
sudo nmap -sU --top-ports 50 <target-ip> -oN scans/udp-<target>.txt
```

My note format:

```text
Host:
OS guess:
Open ports:
Interesting services:
Possible users:
Possible credentials:
Next actions:
```

---

## 4. Service enumeration cheat sheet

### FTP

```bash
ftp <target-ip>
nmap --script ftp-anon -p21 <target-ip>
```

Things I check:

- anonymous login
- uploaded files
- readable configs
- usernames or passwords inside files

### SMB

```bash
smbclient -L //<target-ip>/ -N
enum4linux-ng <target-ip>
smbclient -L //<target-ip>/ -U 'user%password'
```

If I have credentials, I test access carefully and document shares.

### HTTP / Web

```bash
whatweb http://<target-ip>
curl -I http://<target-ip>
nikto -h http://<target-ip>
ffuf -u http://<target-ip>/FUZZ -w /usr/share/wordlists/dirb/common.txt
```

For WordPress:

```bash
wpscan --url http://<target-ip>/ --enumerate u,p,t
```

For known versions:

```bash
searchsploit <service> <version>
```

### SSH / Login attacks

I only brute force when it is in scope and I have a reason.

```bash
hydra -L users.txt -P passwords.txt ssh://<target-ip>
hydra -l user -P passwords.txt smb://<target-ip>
```

---

## 5. Exploitation mindset

Before exploitation, I confirm:

- exact service
- exact version
- correct path or `TARGETURI`
- correct `LHOST`
- correct payload
- exploit is relevant to the environment

Metasploit example flow:

```text
search <vulnerability>
use <module>
show options
set RHOSTS <target-ip>
set TARGETURI <path>
set LHOST <tun0-ip>
run
```

I do not run a module blindly. I read the options first.

---

## 6. After getting a shell

Initial checks:

```bash
whoami
hostname
id
pwd
uname -a
ip a
ip route
```

Useful file checks:

```bash
ls -la
find / -name "*.conf" 2>/dev/null
find / -name "*backup*" 2>/dev/null
```

I look for:

- config files
- database credentials
- users
- SSH keys
- passwords in files
- internal IPs
- flags

Initial access is not the end. It is the start of post-exploitation.

---

## 7. Linux privilege escalation quick checks

```bash
sudo -l
find / -perm -4000 -type f 2>/dev/null
cat /etc/passwd
cat /etc/crontab
ls -la /home
```

If I find SUID binaries, I compare them with GTFOBins and test carefully.

---

## 8. Windows and SMB lessons

SMB can be very important in eJPT-style labs.

I check:

- share access
- reused credentials
- readable user files
- SAM/hash opportunities
- local admin access
- internal network clues

Commands I like:

```bash
smbclient -L //<target-ip>/ -U 'user%password'
crackmapexec smb <target-ip> -u user -p password --shares
crackmapexec smb <target-ip> -u user -p password --sam
john hashes.txt --wordlist=/usr/share/wordlists/rockyou.txt
```

Credential reuse can unlock the next stage.

---

## 9. Pivoting notes

Pivoting is where methodology matters.

I confirm:

- Which host is the pivot?
- What interfaces does it have?
- What is the internal subnet?
- Can I add a route?
- Can I scan through the pivot?
- Do I need port forwarding?

Metasploit route idea:

```text
background
route add <internal-subnet> <netmask> <session-id>
route print
```

Meterpreter checks:

```text
ipconfig
route
arp
```

Important lesson: not every Docker or bridge network is the real internal network. I verify using routes, ARP, and actual scan results.

---

## 10. Flags and final answers

Before submitting any flag or answer, I prefer to read the file directly from the machine again.

I avoid:

- old screenshots
- old notes
- guessing
- flags from previous attempts
- counting hosts without proof

If an answer has one attempt only, I slow down.

---

## 11. Tools I keep ready

```text
Nmap
WhatWeb
curl
ffuf / dirb
Nikto
WPScan
enum4linux-ng
smbclient
CrackMapExec
Hydra
John
Searchsploit
Metasploit
MySQL client
Burp Suite
```

The tool is not the skill. Knowing when and why to use it is the skill.

---

## 12. My final reminder

Do not jump. Do not guess. Do not trust one scan only.

Every answer should come from evidence.
