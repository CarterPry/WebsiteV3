---
title: 'Sudo Vulnerability (CVE-2023-22809)'
excerpt: The famous linux command that all have used, has fallen to the CVEs.
publishDate: 'Mar 02 2023'
isFeatured: true
tags:
  - Vulnerability
  - Linux
seo:
  image:
    src: '/sudoVuln.png'
    alt: SUDO
---

![SudoLogo](/sudoVuln.png)

## Cve-2023-22809
For most Linux users, one of the most used commands is the amazing “sudo”. Unless you’re an Arch user… then, “neofetch” takes over (It's me, I’m the Arch user). Unfortunately, a vulnerability called [Cve-2023-22809](https://nvd.nist.gov/vuln/detail/CVE-2023-22809) has compromised the security of "sudo", permitting malicious actors to modify files that they are not authorized to access. This is a decently high risk vulnerability that has a base score of 7.8. This is a significant threat because with an exploit like this, the attacker can edit essential files like ‘/etc/passwd’ or ‘/etc/group,’ and further gain access that they should not be having.

## How Does It Work?
It’s not as scary as it sounds, in order for an attacker to use this CVE, they would already need to have access to the victim computer’s LAN. For instance, if an attacker was able to gain access to a guest account, or any account for that matter, they could then escalate their privileges from within that user's terminal. Here’s an example of editing the ‘/etc/passwd’ file would look like without the proper access:

```json
EDITOR='nano -- /etc/group' sudoedit /etc/motd
```

How does it work? Calling the editing tool within the quotations and adding the ‘–’ afterwards helps mislead the front end into thinking that proper authorization is being used. With only a simple ‘–’ trick, you can create a good amount of messy problems like adding their own account to the sudo group and even possibly revoking the main user’s root privileges. When using the ‘sudoedit’ command, the ‘–’ deceives the parameters of the command usage and tricks your system into thinking that everything that comes after the dash should be permitted to be edited.

## Another Example
Let’s say I want to modify the /etc/group file on your system. My victim has a user account with sudo privileges that allows them to use the ‘sudoedit’ command to edit their “thought to be safe” files. The sudoers policy is what allows them to edit /etc/motd using ‘sudoedit.’

I can enter a command to exploit this concept and set the EDITOR environment variable to any text editor of choice by placing the ‘–’ argument afterwards. This sets the path to the file intended to modify. For example, I might write something like this:

```json
EDITOR='vim -- /etc/passwd' sudoedit /etc/motd
```

EDITOR = 'vim -- /etc/passwd' sets the EDITOR environment variable to vim -- /etc/passwd, where vim is what I’m using to write and -- /etc/passwd is my target file.

sudoedit /etc/motd, allows me to run the ‘sudoedit’ command with the /etc/motd file as the target. Normally, this command would allow me to edit the /etc/motd file with elevated privileges, as once again specified by the sudoers configuration. However, due to our ‘–’ argument, the EDITOR environment variable tricks the sudo front-end into treating everything after it as a file edited by me. This lets me get past the sudo policy, even though the sudoers policy only allows me to edit /etc/motd. With something as simple as that, I can now edit any file.

## Mitigation

To check if you still have this vulnerability on your system you can run the following command:

```json
sudo –version
```

If the output lists any version within the 1.8.0-1.9.12p1 range, then you need to update your system. Almost all major distros have patched this problem, so the easiest fix for a solution would be to update everything. Generally as soon as a vulnerability is made known, it is usually resolved promptly by the developers. So, unless you want to test it for yourself, just update your system, and you should be fine. In fact, update your system right now!






