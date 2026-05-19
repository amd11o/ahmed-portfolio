# SOC Alert Triage Notes

These are the notes I use to keep alert review structured. The goal is not to close alerts fast. The goal is to close them with evidence.

---

## 1. First questions

When I open an alert, I ask:

- What triggered the alert?
- Which user is involved?
- Which host is involved?
- Is the asset critical?
- What happened before and after the alert?
- Is this normal behavior for this user or host?

---

## 2. Evidence I like to collect

```text
Timestamp
Hostname
Username
Source IP
Destination IP
Process name
Command line
File path
Parent process
Hash, if available
Related alerts
Previous login/activity
```

---

## 3. Severity thinking

I do not rate severity by alert name only.

I consider:

- exposure of the affected asset
- privilege of the user
- confidence of detection
- whether there is lateral movement
- whether sensitive data is involved
- whether the activity is repeated

---

## 4. Useful process questions

For endpoint alerts:

- Is the process name normal?
- Is the path normal?
- Is the parent process normal?
- Is the command line suspicious?
- Is the binary signed?
- Did it create network connections?
- Did it write to startup locations?

---

## 5. Basic timeline format

```text
[Time] Alert triggered
[Time] User logged in
[Time] Process started
[Time] Network connection observed
[Time] File created/modified
[Time] Action taken
```

A clear timeline makes escalation easier.

---

## 6. Closing note format

```text
Assessment:
Evidence:
Impact:
Action taken:
Recommendation:
Status:
```

---

## 7. My reminder

A good SOC note should allow another analyst to understand my decision without asking me again.
