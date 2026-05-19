# Zero Trust Architecture Notes

This note summarizes my Zero Trust network architecture simulation mindset. I use it as a simple reference for thinking about segmentation, access control, and monitoring.

Zero Trust does not mean “trust nothing and block everything.” It means every access request should be verified based on identity, device, context, and policy.

---

## 1. Core idea

The old idea is:

```text
Inside network = trusted
Outside network = untrusted
```

Zero Trust changes that mindset:

```text
Never trust by location. Verify every access request.
```

---

## 2. Design goals

In my simulation, the main goals were:

- reduce lateral movement
- separate users, servers, and sensitive services
- apply least privilege
- monitor traffic between segments
- make access policy explicit
- assume compromise is possible

---

## 3. Important components

```text
Identity and access control
Network segmentation
Firewall rules
Logging and monitoring
Device posture idea
Least privilege access
Continuous verification
```

---

## 4. Segmentation thinking

I like to separate the environment into logical zones:

```text
User zone
Server zone
Management zone
Security monitoring zone
External/DMZ zone
Restricted data zone
```

The important question is not only “can they connect?”

The better question is:

```text
Should this source be allowed to reach this destination on this exact service?
```

---

## 5. Monitoring mindset

A Zero Trust design without monitoring is incomplete. If access is denied or allowed, the security team should be able to see it.

Useful logs:

- authentication logs
- firewall logs
- endpoint logs
- DNS logs
- proxy logs
- privileged access logs

---

## 6. What I learned

Zero Trust is not one product. It is a design mindset.

The strongest part of the concept is that it forces me to think about:

```text
Who is accessing what?
From where?
Using which device?
For what purpose?
With what level of risk?
```

---

## 7. Portfolio note

This project helps show that I can think beyond individual vulnerabilities and look at architecture-level security decisions.
