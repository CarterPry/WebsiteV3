---
title: 'Cold Boot Attack'
excerpt: The hardware attacking method that compromises your data all through just your RAM.
publishDate: 'Jun 26 2023'
isFeatured: true
tags:
  - Hardware
  - Vulnerability
seo:
  image:
    src: '/coldBootAttack.png'
    alt: RAM
---

![Cold Boot](/coldBootAttack.png)

## Cold Boot Attack
Though the cold boot attack was found in 2008, I was still curious how it actually functioned. A physical exploit on someone’s RAM, after the pc has been shutdown or restarted. I did think this was an interesting concept, for when you think of RAM, you think of temporary memory that’s always changing, not memory that can be stolen from you. It was discovered by a group of researchers at Pinecston and presented at the 2008 IEEE Symposium on Security and Privacy. You can read the research for yourself [here](https://www.usenix.org/legacy/event/sec08/tech/full_papers/halderman/halderman.pdf).

A basic summary of this attack is the Attacker shuts down or restarts the cold boot PC, takes out the RAM, freezes all the modules, and then uses a forensic tool to read the data that may be still dwelling within the chips. This is not a very commonly used vulnerability, due to the fact you can only do it to a PC once, and need full physical access to literally take out hardware. However, I do think this is an interesting process, that though without power, or any drives, there is still potential data that could be stolen.

## Taking out the RAM
First the threat actor needs physical access to the victim’s PC. They need full physical access to not only shutdown/restart the PC, but to also remove the RAM after the fact. The reason you have to shutdown/restart the computer is because once done the RAM will retain its current data and not lose everything immediately. The RAM sticks do begin a process of dissipating all of its temporarily stored information once the power has been cut, however it does take a period of time for it to fully be clear of data, depending on your type of RAM.

## Freezing your computer parts
To stop anything valuable from being lost, the Attacker freezes the RAM modules ([DIMM](https://en.wikipedia.org/wiki/DIMM)/[RIMM](https://www.computerhope.com/jargon/r/rimm.htm)), with liquid nitrogen, compressed air, or another similar concept. This method slows down the data dissipation process happening within the RAM, allowing time for the sticks to be robbed of its info. The modules being frozen slows down all instructions that might be running within the RAM and greatly decreases its performance/processing to keep its information for a little while longer for the hacker.

## Reading the modules

Now the final step for the evil hacker to steal your data, is to take out the RAM modules and use a type of forensic tool to read the information. A RAM reading device would be needed to analyze the physical modules, as well as some sort of diagnostic program to view it all. There are some translations needed like formatting all of the binary data into a readable ASCII format and an extra possibility of needing to decrypt some of the stolen information, but overall the process is complete.

## Reality of the attack

The reality of this attack is that it’s not used that frequently at all. Most threat actors use methods that don’t require full physical access, much less a RAM module reader, and a ton of evidence to show that something is wrong. I feel as if any victim that saw their PC popped open and missing all of their RAM might conclude that someone was recently there. Although I do think it is a cool concept, it is not something you typically would have to worry about, but like most attacks, it is something good to be aware of. So if you see anyone that’s running away with your RAM sticks, you may want to stop them.
