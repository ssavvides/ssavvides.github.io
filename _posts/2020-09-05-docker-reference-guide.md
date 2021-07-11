---
layout: post
title:  "Basics of Docker"
date: '2020-09-05'
category:
    - docker
permalink: /blog/docker-reference-guide/
---

### Overview

`Docker` is a containerization technology that enables OS-level virtualization.
Each container is isolated from each other and contains its own software and its own operating system.
All containers running on the same host use the same host kernel.
This means they use fewer resources than full-fledged virtual
machines, but it also means that a host with a Linux Kernel can only host docker containers with
Linux-based operating systems.

For Linux in particular, docker achieves container isolation by utilizing the `cgroups` Linux kernel feature that
limits and isolates the resource usage (CPU, memory, disk I/O, network, etc.) of a process and by using kernel
`namespaces`.

> Namespaces provide the first and most straightforward form of isolation: processes running within
> a container cannot see, and even less affect, processes running in another container, or in the host system.

— [docs.docker.com/engine/security](https://docs.docker.com/engine/security)

> Control Groups are another key component of Linux Containers. They implement resource accounting and limiting.
> They provide many useful metrics, but they also help ensure that each container gets its fair share of memory,
> CPU, disk I/O; and, more importantly, that a single container cannot bring the system down by exhausting one of
> those resources.  
>
> So while they do not play a role in preventing one container from accessing or affecting the data and processes
> of another container, they are essential to fend off some denial-of-service attacks. They are particularly important
> on multi-tenant platforms, like public and private PaaS, to guarantee a consistent uptime (and performance) even
> when some applications start to misbehave.  

— [docs.docker.com/engine/security](https://docs.docker.com/engine/security)

### Most common `docker` commands

A good reference for docker commands can be found here:
[docs.docker.com/engine/reference/commandline/docker/](https://docs.docker.com/engine/reference/commandline/docker/)

#### Most common commands

`docker images` — List available images  
`docker ps` — List containers  
`docker push` — Push an image to a registry  
`docker pull` — Pull an image from a registry  
`docker build` — Build an image using a dockerfile   
`docker exec` — Run a command in a running container  
`docker logs` — Display the logs of a container  
`docker rm` — Remove containers  
`docker rmi` — Remove images  
`docker run` — Run a container  
`docker tag` — Create a (soft) copy of an image and name it with the given tag  
`docker top` — Display process info such as pid for running containers  
  
`docker rmi -f $(docker images -q)` — Remove all images  
`docker rm -f $(docker ps -aq)` — Remove all images  
&ensp;&ensp;`-q` only print image/container id  
&ensp;&ensp;`-a` show stopped/killed containers  

`docker run -p 1234:1234 -v /data:/data -it --rm <image>:<tag>` — Run a container  
&ensp;&ensp;`-p` publish a port `<container-port>:<host-port>`.  
&ensp;&ensp;`-v` bind mount a volume.  
&ensp;&ensp;`-i` interactive, keep stdin open.  
&ensp;&ensp;`-t` tty, allocate a pseudo-tty. Usually used together with `-i` to make a container look like a terminal connection.  
&ensp;&ensp;`-d` detach, run detached, can use `docker logs` to see output.  
&ensp;&ensp;`--rm` remove container when it exits.  


### Run docker without sudo
Run:  
`sudo usermod -aG docker $USER`  
Then restart your terminal session.

### Docker registries

The most popular registries that can hold docker images are

* Docker Hub
* Elastic Container Registry (ECR)
* Azure Container Registry (ACR)
