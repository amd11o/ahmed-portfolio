# Secure Web Application Case Study

This is a short case study from my secure web application work. I wrote it as a practical note, not as a marketing description. The main idea is simple: a web system is not secure because the page looks clean. It is secure when the backend validates input, checks authorization, protects data, and gives clear evidence that controls are working.

---

## 1. Project focus

The project involved a travel-related web system where the main security focus was:

- protecting customer data
- reducing injection risk
- improving authorization checks
- keeping user access controlled
- supporting stable business operation
- documenting the security thinking behind the implementation

---

## 2. Main risks I considered

### SQL Injection

Any input that reaches a database can become dangerous if it is placed directly inside a query. My focus was to reduce this risk through safer query handling and proper validation.

My rule:

```text
Never trust input only because it came from the UI.
Validate it, parameterize it, and handle errors carefully.
```

### IDOR / Broken Access Control

A user should not be able to access another user's record by changing an ID in the URL or request body.

Things I check:

- Does the backend verify ownership?
- Does the session user match the requested object?
- Can a normal user call an admin endpoint?
- Can a hidden button still be triggered by direct request?

### Data exposure

Even if the system is not exploited, bad error messages, exposed files, or weak access control can leak sensitive data.

---

## 3. Security controls I focused on

```text
Input validation
Parameterized queries
Authorization checks
Session-based access control
Sensitive error handling
Basic logging
Clear user roles
Safe file handling mindset
```

---

## 4. Testing mindset

When I review a web feature, I ask:

- What data does this feature read?
- What data does it change?
- Who is allowed to use it?
- Can another user reach it directly?
- What happens if I change the ID?
- What happens if I send unexpected input?
- Does the backend enforce the rule, or only the interface?

---

## 5. What I learned

The most important lesson is that secure coding and testing must work together. A developer can add validation, but the tester still needs to verify whether the backend behavior is actually safe.

A good web security fix should be:

```text
Specific enough to solve the issue
Simple enough for developers to maintain
Logged enough to support investigation
Tested enough to prove it works
```

---

## 6. Portfolio note

I keep this case study because it shows my practical direction: I do not only look for vulnerabilities; I also care about how to close them properly.
