---
title: 'Apache Guacamole'
excerpt: Manage your home server or lab through just your web browser from anthwere you want with this Docker container.
publishDate: 'Nov 09 2022'
isFeatured: true
tags:
  - Networking
  - Server-Management
  - Docker
seo:
  image:
    src: '/onzuguac.png'
    alt: onzu
---

![onzu](/onzuguac.png)

## Guacamole Docker 
Guacamole, not just another chip dip, but a tool that enables server management via web browser. This container allows users to access their servers, PC’s, or whatever connection they configure from anywhere, using nothing but a web browser.

I was introduced to this project by a friend, [Zach Robinson](https://zsrobinson.com), and decided to attempt it myself. To get started, I downloaded the Docker package and a VNC server on my Linux Mint PC. However, it is worth noting that Onzu-Guacamole is also compatible with other operating systems, making it a versatile tool for system admins.

The end goal of this project was to access my PC through my laptop using a browser like Firefox or Brave. This allows me to manage my server from anywhere, without the need for a complex setup or additional hardware. Additionally, Guacamole supports multiple connections, making it an ideal tool for system administrators looking to manage multiple servers at once.


## What's VNC
The virtual network computing (VNC) protocol is a screen sharing protocol that has similarities to Remote Desktop Protocol (RDP) yet functions differently. One of the primary differences between the two is that VNC doesn’t utilize a virtual session, but relies on the same display as what the user would see on the actual screen in front of them. This unique feature of VNC allows the mouse movement to be visible to anyone physically present at the server unlike RDP. I have never used the protocol before and used this as a fun opportunity to not just work with an unknown docker project, but implement it with another unknown configuration I was unaware of.

## Installing VNC
The first task at hand was to get the VNC server up and running. To achieve this, I installed the necessary packages and configured contents as needed to activate it. For Linux Mint there is a helpful guide that can be found [here](https://community.linuxmint.com/tutorial/view/2334).

## Installing Guacamole
Next you would need to add docker to your system, which may vary different installation methods based on your image. Once it was installed on my PC I used the command

```json
docker pull oznu/guacamole
```

## Running the Chip Dipping Package
To run this service, a few steps are required. First, the Docker command `docker run` should be used to start the package.

The 2nd line specifies the port with the left listed being for the host, and the right as the container port number. (I used -p 80:8080)

The 3rd line is the location of where you want the guacamole configuration to be held, a location at your choosing. 

Lastly the 4th line is the package specification. Which Docker container are you using for these commands?

The command below is a good guideline on how it should look.

```json
docker run\
  -p (Host):(Container)\
  -v (Dedicated Config Location):/config\
  oznu/guacamole
```

After running that command with the config directory filled in, I type my PC’s LAN IP into a browser, and a login page appears.

## Establishing Connections
Upon accessing the front page, the default credentials were already set as `guacadmin` for both username and password. To change this, all you would need to do was log in with the default values, and make the change in the settings. Additionally, creating multiple accounts with varying levels of permissions can be useful if you plan on sharing access to your browser project with others. I personally created a new account for a custom username and password so I could delete the default login  altogether.

Now to connect your brand new VNC service to the Guacamole.With a plethora of options to choose from, such as SSH, RDP, Telnet, and Kubernetes, I selected VNC and proceeded to enter the hostname of the PC's LAN IP, along with my personal credentials (Not to confuse the credentials I entered for Guacamole). There are additional options you can fill out like load balancing or number of connections, but leaving them blank is perfectly fine. There are only some required fields that would need a value. Once done, I could return to the home page and witness the new connection that is now established. I selected the connection and started using my PC through just my browser

## Outside your LAN
One of the cool things about this setup is the ability to make the VNC server accessible from a public IP. While this may not be the most secure option, it's still a pretty neat feature. You could port forward your router to make that Docker PC accessible, and even tie it to a domain name. For instance If I decided to go through with that concept, I could type in `carterpry.com` and would be brought straight to the guacamole login page.


