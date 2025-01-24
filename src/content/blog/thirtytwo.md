---
title: '4,294,967,295'
excerpt: We were able to recreate a 32-bit integer bug in Fortnite and I was curious exactly how this worked.
publishDate: 'May 29 2024'
isFeatured: true
tags:
  - Programming
  - Binary
seo:
  image:
    src: '/intlimit.png'
    alt: fort
---

![Where we used the bug for the limit's amount of ammo](/intlimit.png)

## The Basics
The 32-bit integer limit is pretty much a fundamental constraint in data processing. A data type in computing that uses 32 bits (or 4 bytes) to represent the computing integer value. It can be either signed or unsigned, determining the range of values to be used.

## Unsigned Integer
An unsigned 32-bit integer can span anywhere from `0` to `2^32 − 1` or more in a more broken down format, from `0` to `4,294,967,295`. The calculation is fairly straightforward: since each bit can be either 0 or 1, the total number of combinations is 2^32, and the highest value is one less than this total due to the fact we started counting from zero, as all programming does. So, the title of this post is the max unsigned value for this bit system.

## Signed 32-bit Integer
A signed 32-bit integer uses one bit to represent the sign (either positive or negative), leaving 31 bits for the final outcome. This leaves a range of `−2^31` to `2^31 - 1`, equating to values all the way from `−2,147,483,648` up to `2,147,483,647`. The most significant bit (MSB) indicates the sign: 0 for the int to be positive and 1 to determine a negative, using a method called `two's complement.`

## Binary Representation
Binary is the foundation of computing systems—each bit in a binary number that's either 0 or 1. For an unsigned 32-bit integer, the binary representation ranges from `00000000000000000000000000000000/2` to `11111111111111111111111111111111/2`, corresponding to decimal and more familiar values of 0 to `4,294,967,295`.

## Two's Complement
For signed integers, the two's complement method is used, where you practically invert all bits of the number and add one to the least significant bit. For example, to represent -1 in a 4-bit environment, we would take the binary for 1, invert the bits (0111 is now 1000), and then add one, resulting in 1001. This banal system relies purely on binary arithmetic, specifically for handling negative these fun numbers.

To better understand the two's complement, consider -5 in an 8-bit system. First comes the binary version of 5, which is `00000101/2`. Then, invert all the singular bits to get `11111010/2`. Lastly, add 1 to the least significant bit to get your outcome `11111011/2`. This binary number represents -5 in the two's complement notation. This method vastly simplifies arithmetic operations, making everything more manageable and allowing the same hardware circuitry to handle both addition and subtraction.

## The Year 2038 Problem
One interesting minor issue pertaining to the limit is the 2038-year problem. This might make you think of the Y2K issue we had not too long ago (Yup, Part 2 of that fun event), but rather, it affects systems using a 32-bit signed integer for their time values (number of seconds since January 1, 1970). On January 19, 2038, these systems will go through an int overflow, leading to a lot of fun troubleshooting.

## Integer Overflow
Integer overflow happens when an operation attempts to position to a value outside the limit number of bits (Pretty self-explanatory). So, in this case, adding 1 to the maximum 32-bit signed integer (`2,147,483,647`) causes an int overflow, resulting in `-2,147,483,648`. It transitions to the complete opposite value due to the wraparound behavior from two's complement. Software devs will have a field day with the bugs coming from this.

## Gaming and Software Limits
In video games, the 32-bit integer limit serves its part in scores, monetary values, and other counters needed. Exceeding this limit is the same thing; errors or exploits are imminent. Many players might use hacks to exceed these limits, resulting in either negative or erroneous values to help cheat. A friend and I were even able to recreate a 32-bit int glitch in the famous [Forntite](https://www.fortnite.com/?lang=en-US), where the amount of ammo being dropped was at 0 and then lessened even more when released. There must not have been an error check for issues corresponding to this because instead of becoming 0 and just there being no ammo, it just went to the max value of `2,147,483,648` going in the opposite direction as seen on the title cover of this post. Don't think we could even play enough games to use up all that ammo.

## Moving Beyond 32-bit
To go past the limitations of 32-bit integers, we mostly transitioned to 64-bit architectures, making the range of values extensively larger. A 64-bit signed integer goes from `−2^63` to `2^63 − 1`, pushing back some issues for quite some time.

## Why do people still use 32-bit Int?
In terms of storage, they are more memory-efficient compared to their 64-bit counterpart, so for applications like games that need to manage large amounts of data, such as game worlds and characters, it's better to use the 32-bit. Compatibility is another factor; older hardware and software may not support 64-bit integers, making 32-bit integers necessary for specific applications. So, though you might think the 64 is faster and better in every way, that's not the case.

## The last time we upgraded bits
In the 1980s/1990s, the transition from 16-bit to 32-bit systems was a huge deal, addressing an extensive amount of memory allocation issues. Workstations could handle more substantial overhead-filled applications, which was a big deal.

The 32-bit model covered 4 GB of memory, which might not sound like much, but then you have to remember it's comparatively a large deal to the 16 MB limit of 16-bit systems we used to have. Computer-aided design (CAD), scientific simulations, and multimedia processing were drastically changed with the larger memory spaces.

## Transitioning to 64
A 64-bit system can address a theoretical maximum of 2^64 bytes of memory, or approximately 16 exabytes (1,000 Petabytes, or 1000000000 GB). Just imagine the improvement of fields that require large-scale data processing or high-performance computing with this expansion. For example, our everyday operating systems like Windows, macOS, and Linux Distros have defaulted to 64-bit architectures, enabling them to run complex applications and support more considerable amounts of RAM. Your computer right now is more than likely even running that same architecture and would be insanely slower without it.

## Benefits of 64-bit Systems
The benefits of 64-bit systems include the ability to handle larger memory spaces, increased numerical computations, and improved performance for applications that require extensive data manipulation. For example, modern operating systems like Windows, macOS, and various distributions of Linux have fully embraced 64-bit architectures, enabling them to run more complex applications and support more considerable amounts of RAM.

## Quantum Computing
One direction in the future is quantum computing (I am particularly very interested in this pathway), which leverages the principles of quantum mechanics to perform at inhumane speeds. Quantum computers use [qubits](https://www.quantum-inspire.com/kbase/what-is-a-qubit/), which can represent multiple states simultaneously, allowing for that insane speed rather than our boring 1 or 0 binary.

## Beyond Binary
Another area of exploration is the development of ternary (base-3). The ternary numeral system uses three as its base. As humans, by default, we all count on the base ten systems for reference: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10. This number system uses the digits 0, 1, and 2 to represent numbers. A ternary digit is essentially the same as a trit (trinary digit), and one trit is equivalent to log23 (about 1.58496) bits of information. These non-binary systems could offer more efficient data processing for certain types of problems, all while using less memory. While we are still in the experimental stages, research in this area is super exciting and could drastically change our architecture.

## Conclusion
The 32-bit integer limit is definitely an interesting insight into both the historical evolution of computer systems and the fun equational bugs in today's day and age. From the basics of binary arithmetic and two's complement representation to the history of our architectures, the bit integer limit serves as a concept that has shaped computing technology a good bit (pun intended).
