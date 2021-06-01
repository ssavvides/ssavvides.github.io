---
layout: post
title:  "Understanding the basics of genome assembly"
date: '2021-05-23'
category:
    - genome
    - assembler
permalink: /blog/understanding-the-basics-of-genome-assembly/
---

Recently, I had to understand the basics of genome assembly. I found the following youtube videos very helpful.

Video series by Dr. Loren Launen:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/dyGuXMyQEy8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Video-lecture by Jared Simpson (Ontario Institute for Cancer Research):

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/5wvGapmA5zM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[//]:  #### Genome assembling glossary
A de Bruijn graph is a compact representation based on short words (k-mers) that
is ideal for high coverage, very short read (25–50 bp) data sets.

### Genome assemblers software

There are several genome assembler software packages that differ in Programming Language (PL), size of
reads (short of long) and support for error correction.

{:class="table table-bordered table-striped table-hover"}
|Genome Assembler | PL | Reads | Error correction |
| --- | --- | --- | --- |
|[SPAdes](https://github.com/ablab/spades)| C++ | Short and Long | Yes |
|[Velvet](https://github.com/dzerbino/velvet)| C | Short | Yes |
|[SOAPdenovo2](https://github.com/aquaskyline/SOAPdenovo2)| C | Short | Yes |
|[Raven](https://github.com/lbcb-sci/raven)| C++ | Long | No |
