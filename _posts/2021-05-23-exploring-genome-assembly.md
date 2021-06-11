---
layout: post
title:  "Understanding the basics of genome assembly"
date: '2021-05-23'
category:
    - genome assembler
permalink: /blog/understanding-the-basics-of-genome-assembly/
---

Recently, I had to understand the basics of genome assembly. Genome assembly refers to the process of taking a large
number of short DNA sequences and putting them back together to create a representation of the original chromosomes
from which the DNA originated.

In a genome sequencing project, the DNA of the target organism is broken up into millions of small pieces and read on a
sequencing machine. These “reads” vary from 20 to 1000 nucleotide base pairs (bp) in length depending on the sequencing
method used. Typically, for [Illumina](https://www.illumina.com) type short read sequencing, reads of length 36 - 150 bp are produced.

The goal of a sequence assembler is to produce long contiguous pieces of sequence (contigs) from these reads. The
contigs are sometimes then ordered and oriented in relation to one another to form scaffolds.

#### Genome assembling glossary

* Genome — The genetic material of an organism. The genome incorporates
    a full set of chromosomes. A chromosome carries the genetic information for each cell.
    Each chromosome contains many genes, which are in turn made up of DNA and protein combined as chromatin.
* DNA — Deoxyribonucleic acid is the chemical compound that contains
    the instructions needed to develop and direct the activities of nearly all living organisms.
* Base — DNA is made of four chemical units, called nucleotide bases.
    The bases are adenine (A), thymine (T), guanine (G), and cytosine (C).
* Base pairs (bp) — In the DNA double helix, bases come in pairs.
    A always pairs with T and C always pairs with a G.
* Read — A small sequence of base pairs. Short reads contain hundreds of bps.
    Long reads contain thousands of bps.
* Contigs — Long contiguous pieces of sequence. Generating contigs from smaller reads is the goal of genome assemblers.
* De Bruijn graph — A compact representation based on short words (k-mers) that
is ideal for high coverage, very short read (25–50 bp) data sets.
* FastQ — A text-based file format for storing both a biological sequence (usually nucleotide sequence) and its
corresponding quality scores.

### Genome assemblers software

There are several genome assembler software packages that differ in Programming Language (PL), size of
reads (short of long) and support for error correction. A useful comparison of genome assemblers can
be found here: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0169662. 

{:class="table table-bordered table-striped table-hover"}
|Genome Assembler | PL | Reads | Error correction |
| --- | --- | --- | --- |
|[SPAdes](https://github.com/ablab/spades)| C++ | Short and Long | Yes |
|[Velvet](https://github.com/dzerbino/velvet)| C | Short | Yes |
|[SOAPdenovo2](https://github.com/aquaskyline/SOAPdenovo2)| C | Short | Yes |
|[Megahit](https://github.com/voutcn/megahit)| C++ | Short | Yes |
|[Raven](https://github.com/lbcb-sci/raven)| C++ | Long | No |

### Resources

I found the following youtube videos very helpful.

Video series by Dr. Loren Launen:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/dyGuXMyQEy8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Video-lecture by Jared Simpson (Ontario Institute for Cancer Research):

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/5wvGapmA5zM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
