---
layout: post
title:  "Experimenting with the velvet genome assembly software package"
date: '2021-05-31'
category:
    - docker
    - genome
    - assembler
permalink: /blog/experimenting-with-velvet-genome-assembler/
---

### Overview

`velvet` is a software package that can manipulate de Bruijn graphs for genomic sequence assembly.
A de Bruijn graph is a compact representation based on short words (k-mers) that is ideal for high coverage,
very short read (25–50 bp) data sets. `velvet` works with short reads and produce contigs of significant length.

`velvet` is available on [github](https://github.com/dzerbino/velvet)

To learn more about `velvet` you can read the associated
[paper](https://genome.cshlp.org/content/18/5/821.short).

### Downloading and installing `velvet`

You can download and compile `velvet` using the following commands:

```bash
git clone https://github.com/dzerbino/velvet
cd velvet
make
```

If you want to install `velvet` with OpemMP support to enable multi-threading you can compile `velvet` with:

```bash
make 'OPENMP=1'
```

To verify that your installation supports OpenMP you can run `./velveth` and see under compilation settings:

> Version 1.2.10\
> Copyright 2007, 2008 Daniel Zerbino (zerbino@ebi.ac.uk)\
>
> This is free software; see the source for copying conditions.  There is NO\
> warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
> 
> Compilation settings:\
> CATEGORIES = 2\
> MAXKMERLENGTH = 31\
> OPENMP\
> ...


### Running the included `velvet` tests

The velvet package includes a number of tests to verify that the software runs correctly.
To run the tests follow these commands"

```bash
cd tests
./run-tests.sh
```


### Dockerizing `velvet`

`velvet` can be configured to run from within a docker container. There are a number of ways to do this.
The following dockerfile shows how to create a docker image that
loads velvet to a docker container from a local copy, compile it within the container,
and run the velvet tests.

```dockerfile
FROM gcc:5.4

RUN mkdir -p /app/velvet

ADD Makefile /app/velvet

RUN mkdir /app/velvet/src
ADD src /app/velvet/src

RUN mkdir /app/velvet/tests
ADD tests /app/velvet/tests

RUN mkdir /app/velvet/third-party
ADD third-party /app/velvet/third-party

WORKDIR /app/velvet
RUN make

WORKDIR /app/velvet/tests
ENTRYPOINT ["./run-tests.sh"]
```

Make sure you save the above dockerfile in the velvet root directory and then run

```bash
docker build velvet:latest .
docker run velvet:latest
```

[//]: ### Confidentiality-preserving genome assembly with `velvet` and Intel SGX

### `velvet` drawbacks
The velvet software package is fairly old and not very well maintained. At the time of writing,
the latest commit in https://github.com/dzerbino/velvet was on Aug 15th, 2014. A major drawback
of de novo genome assemblers, including but not specific to `velvet`, is that they require a lot
of memory.


### Resources

* https://github.com/dzerbino/velvet
* https://www.ebi.ac.uk/~zerbino/velvet/
* https://holtlab.net/tag/velvet/
