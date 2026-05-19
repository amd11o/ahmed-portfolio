# Windows Process Baseline for Memory Analysis

When I started analyzing Windows memory, I was suspicious of almost every process. That wasted time. So I began building a small baseline of normal Windows processes.

This note is not a final truth. It is my first checklist before deciding whether a process needs deeper investigation.

---

## My analysis rule

A process name alone is never enough.

I check:

```text
Process name
File path
Parent process
Command line
User context
Start time
Network connections
Digital signature
Number of instances
Behavior compared to baseline
```

A normal name in a wrong path can still be malicious.

---

## Common Windows processes I expect

### System

Represents kernel and core operating system activity.

### smss.exe

Session Manager Subsystem. One of the first user-mode processes after boot. It prepares system sessions.

### csrss.exe

Client/Server Runtime Subsystem. Important for core Windows user-mode functions.

### wininit.exe

Starts important system initialization tasks and service-related processes.

### services.exe

Service Control Manager. Starts and manages Windows services.

### svchost.exe

Service Host. It is normal to see many instances, but I always check path, parent, command line, and hosted service.

### lsass.exe

Local Security Authority Subsystem Service. Handles authentication and security policy. It is a high-value target for credential theft.

### winlogon.exe

Handles logon and logoff operations.

### explorer.exe

Windows shell: desktop, taskbar, and file manager.

### dwm.exe

Desktop Window Manager. Handles visual desktop rendering.

### conhost.exe

Console Window Host. Usually appears with command-line activity.

### taskhostw.exe

Host process for background Windows tasks.

### spoolsv.exe

Print Spooler service. If printing is not expected, I still check context.

### RuntimeBroker.exe

Manages permissions for modern Windows apps.

### fontdrvhost.exe

Usermode Font Driver Host.

### System Idle Process

Not a real process in the usual sense. It represents unused CPU time.

---

## Red flags I care about

- `svchost.exe` running outside `C:\Windows\System32`
- `lsass.exe` with suspicious access attempts
- strange parent-child relationships
- unsigned binary pretending to be a Windows process
- command line with encoded PowerShell
- process running from Temp, Downloads, or user profile paths
- unexpected network connections
- process name with small spelling changes

---

## Parent-child relationship examples

Normal relationships depend on context, but these are the types of questions I ask:

```text
Why did Office spawn PowerShell?
Why did browser spawn cmd.exe?
Why did a script interpreter connect outbound?
Why is a system-looking process running from AppData?
Why did a service create an unknown executable?
```

The parent process often explains the story better than the process name.

---

## My takeaway

The baseline does not prove that a system is clean. It helps me decide what deserves attention first.

In memory analysis, the interesting part is usually not only “what is running,” but “where it is running from, who started it, and what it is doing.”
