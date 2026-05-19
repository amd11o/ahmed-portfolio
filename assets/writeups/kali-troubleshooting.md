# Kali Troubleshooting Notes

I keep this note short on purpose. During a lab, I do not want a long article. I want a clean checklist that brings me back to work quickly.

My rule before blaming the tool is simple:

```text
IP → Route → DNS → Service → Credentials → Syntax → Scope
```

Most lab problems are not advanced. They are usually a wrong IP, wrong port, wrong path, wrong route, or wrong assumption.

---

## 1. VPN is connected, but the target is not reachable

First, I confirm that Kali actually has the VPN interface and route.

```bash
ip a
ip route
ip a | grep tun0
```

Then I test the target with a small ping.

```bash
ping -c 2 <target-ip>
```

If the target does not respond, I check:

- Is the lab machine running?
- Am I using the correct VPN pack?
- Is `tun0` up?
- Is the subnet correct?
- Did the target IP change?
- Am I scanning the wrong network?

If everything looks wrong, I reconnect the VPN instead of wasting time debugging a broken route.

---

## 2. DNS or hostname is not working

For lab machines, I often add a temporary host entry.

```bash
sudo nano /etc/hosts
```

Example:

```text
10.10.10.10 target.local
```

Then I test both ping and HTTP.

```bash
ping target.local
curl -I http://target.local
```

If the IP works but the name does not, the issue is usually DNS or `/etc/hosts`, not the service.

---

## 3. Nmap is too slow or noisy

I start with discovery, then a full port scan, then version detection on the discovered ports.

```bash
nmap -sn <subnet>/24
nmap -p- --min-rate 3000 -T4 <target-ip> -oN scans/full-tcp.txt
nmap -sV -sC -p <ports> <target-ip> -oN scans/service-scan.txt
```

If the network is unstable, I slow down. Fast scans help, but wrong results waste more time than slow scans.

---

## 4. Burp Suite proxy is not intercepting

My Burp checklist:

- Browser proxy is `127.0.0.1:8080`
- Burp Proxy listener is running
- Intercept is ON when I need it
- HTTPS certificate is installed
- Browser is not using another proxy profile
- The target is actually being opened from the same browser profile

Quick test:

```text
http://burp
```

If this page does not open, the browser is not talking to Burp correctly.

---

## 5. Metasploit database issue

I do not start a lab day with a broken Metasploit database. I fix it first.

```bash
sudo systemctl start postgresql
msfdb init
msfconsole
```

Inside Metasploit:

```text
db_status
workspace -a lab
```

If `db_status` is not connected, I do not rely on database-backed features until it is fixed.

---

## 6. Wordlists are missing

RockYou is usually compressed by default.

```bash
ls /usr/share/wordlists/
sudo gzip -d /usr/share/wordlists/rockyou.txt.gz
```

Common web wordlist:

```bash
/usr/share/wordlists/dirb/common.txt
```

I also keep a small custom wordlist for lab names, company names, usernames, and common paths.

---

## 7. Python tool is not running

I check Python and pip first.

```bash
python3 --version
pip3 --version
```

If the tool has requirements, I use a virtual environment.

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

If a tool breaks because of dependencies, I do not install random packages globally unless I have to.

---

## 8. Reverse shell is unstable

Basic shell upgrade:

```bash
python3 -c 'import pty; pty.spawn("/bin/bash")'
export TERM=xterm
```

Then I avoid risky commands until I know the shell is stable. If the session dies, I repeat the exact working payload from my notes.

---

## 9. Zsh history warning

If I see a corrupted zsh history warning, I do not waste lab time unless it blocks me. Later I can rebuild it.

```bash
mv ~/.zsh_history ~/.zsh_history_old
fc -W ~/.zsh_history
```

---

## 10. My final check before changing tools

Before switching tools, I ask myself:

```text
Am I using the right IP?
Am I using the right port?
Am I using the right protocol?
Am I in scope?
Is the route correct?
Is the hostname correct?
Are the credentials correct?
Did I copy the command correctly?
```

This simple checklist saves me a lot of time.
