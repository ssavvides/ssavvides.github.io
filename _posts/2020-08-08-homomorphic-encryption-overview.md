---
layout: post
title:  "Homomorphic Encryption Overview"
date: '2020-08-08'
category:
    - homomorphic encryption
    - privacy enhancing technologies
permalink: /blog/homomorphic-encryption-overview/
---

## Overview
Homomorphic encryption is a cryptographic (software-only) technology that allows computations directly over encrypted data. In other words, it allows anyone to compute functions of the underlying plaintext through the encryption layers. The result of such computations is also encrypted, meaning only the secret-key holder can see the result. For encryption schemes that allow to publicly compute over encrypted data and provide unencrypted results, refer to “Functional Encryption”. Homomorphic encryption schemes differ in the kind of operations they support, the number of operations (computation depth) they support, their performance, and their usability.

This property of some encryption schemes has first been disclosed in 1978 in a paper titled “On Data Banks and Privacy Homomorphisms”, by Rivest, Adleman, and Dertouzos, immediately following the work of Rivest, Shamir, and Adleman who invented the RSA scheme that happens to be homomorphic with respect to multiplication. Craig Gentry of lattice-based crypto proposed the first implementation of a Fully Homomorphic Encryption scheme in 2009 and then helped in the 2nd generation implementation proposal in 2011.



## The glovebox analogy 

> Data is secured inside a sealed glovebox; anyone can put their hands into the gloves and manipulate it. Only someone with access to a key can open the box and extract the manipulated data.
> 
> One problem is that the gloves are made of a material that becomes rigid after too much movement, and at some point they become unusable. At this point, a “bootstrapping” operation needs to be performed: Put the glovebox and the key inside a larger glovebox with fresh gloves, and from outside this box, open the inner box with the key, extract the data, and continue manipulating.

— Craig Gentry (paraphrased)



## History
The homomorphic encryption property was first discussed in 1978 in a paper titled “On Data Banks and Privacy Homomorphisms”, by Rivest, Adleman, and Dertouzos, immediately following the work of Rivest, Shamir, and Adleman who invented the RSA scheme that happens to be homomorphic with respect to multiplication.

Some partially homomorphic schemes followed; Paillier, Okamoto-Uchiyama, Naccache-Stern, Cohen-Fischer, all of them achieving homomorphic addition or multiplication of messages, but not both. The first example of an additively and multiplicatively homomorphic scheme is due to Boneh, Goh and Nissim. Their scheme, based on bilinear couplings in elliptic curves, was capable of evaluating any number of + gates, but only one × gate.

Craig Gentry proposed the first implementation of a Fully Homomorphic Encryption scheme in 2009 and then helped in the 2nd generation implementation proposal in 2011.



## Remarks

### Why is it called “homomorphic”?
Because it provides a ring homomorphism between the plaintext space and the ciphertext space (although this is not a requirement; there may exist schemes that provide incomplete homomorphisms, but work as proper homomorphisms with high probability).

## FHE cannot be deterministic

If a HE scheme is deterministic, an attacker can solve equations. There is an example already in the 1978 paper:

```
x == k <==> { HE.Enc(x) + ... + HE.Enc(x) == HE.Enc(k) * HE.Enc(x) }
              ^ ------- k times -------^
```

### The noise problem
Every known homomorphic encryption scheme follows the same blueprint described above. Additionally, to each ciphertext, a “noise” is associated. This noise relates to security and increases in size each time a homomorphic operation is performed. If the noise is beyond a threshold, the ciphertext cannot be decrypted anymore. Gentry came up with the “Bootstrapping” operation (see the glovebox analogy above) that allows to “clean” a ciphertext; i.e., replace it with another whose noise is smaller and decrypts to the same plaintext. This is the bottleneck operation of current FHE schemes, and the cost also includes a change of keys (more precisely, it involves evaluating a whole circuit homomorphically; namely, the decryption circuit).



## Types of HE

### Fully Homomorphic Encryption (FHE)
The holy grail of homomorphic encryption is FHE which allows any number of arbitrary computations (Turing complete) to be performed over encrypted data without the need to ever decrypt it. At the time of this writing, all known FHE schemes exhibit high overhead both in terms of ciphertext size overhead as well as encryption/decryption/evaluation time overheads.

### Somewhat Homomorphic Encryption (SHE)
SHE schemes allow only a bounded number of some computations over encrypted data. Related to SHE is Leveled Homomorphic Encryption which similarly allows a bounded number of some computations over encrypted data, but the number of operations (depth) is an input parameter to the scheme, and the length of ciphertexts does not depend on this parameter. A scheme that allows a bounded number of arbitrary computations is called a Levelled Fully Homomorphic Encryption scheme. It is often the case that FHE schemes are constructed using a SHE scheme plus a bootstrapping step.

### Partially Homomorphic Encryption (PHE)
PHE schemes allow an unbounded number of computations but only with respect to a single operation, such as addition or multiplication. For example, the RSA scheme introduced in 1978 is homomorphic with respect to multiplication and allows an arbitrary number of multiplications over encrypted data.

### Property-Preserving Encryption (PPE)
Another category of encryption schemes that allows computation over encrypted data is PPE. PPE schemes are not homomorphic in that their ciphertexts are not malleable but rather preserve some property of the underlying plaintext that can be used to carry out computations. Examples include deterministic encryption, order-preserving encryption, and searchable encryption. Importantly, the former two examples offer low-security guarantees.

## Most popular HE schemes

### FHE (and breakthroughs)

{:class="table table-bordered table-striped table-hover"}
| Scheme | Breakthroughs |
| --- | --- | 
| Gentry’s Ideal lattice scheme (G09) | Seminal work. Defined the HE blueprint for all schemes to follow. |
| Brakerski-Gentry-Vaikuntanathan (BGV) | First construction without the bootstrapping procedure (key switching instead) |
| Brakerski/Fan-Vercauteren (BFV) | A simplified variant of Gentry’s scheme |
| Cheon-Kim-Kim-Song (CKKS) a.k.a. HEAAN | Clever idea of using garbage digits of approximate arithmetic as the homomorphic noise. A “homomorphic float point calculator” |
| Ducas-Micciancio (FHEW) | Significant improvements on the bootstrapping operation |
| NTRU | Multi-key FHE revealed connections with secure multi-party computation |
| Gentry-Sahai-Waters (GSW) | Conceptually simpler, novel underlying problem (approximate eigenvalues). It is interesting that ciphertext multiplication is not commutative, allowing to optimize noise growth |
| Chillotti-Gama-Georgieva-Izabachene (TFHE) | Significant improvements on the bootstrapping operation |

### PHE

{:class="table table-bordered table-striped table-hover"}
| Scheme | Security based on | Homomorphic operation |
| --- | --- | --- |
|ElGamal| Computational Diffie–Hellman assumption | Multiplication<br>∃⊠ st E(x) ⊠ E(y) = x × y |
| Goldwasser-Micali | Quadratic residuosity problem | Exclusive Or<br>∃⊠ st E(x) ⊠ E(y) = x ⊕ y |
| Paillier | Decisional composite residuosity assumption | Addition<br>∃⊠ st E(x) ⊠ E(y) = x + y |
| (Textbook) RSA | Factoring | Multiplication<br>∃⊠ st E(x) ⊠ E(y) = x × y |



## Mathematical problems HE schemes are based on

### Lattices
A lattice is a discrete additive subgroup of R^n. Worth noticing:

* Strong security reductions (Average-Case to Worst-Case reductions - Ajtai et.al.)
* Fast, simple implementation (linear algebra-type algorithms)
* Large key sizes (often, a public key needs to represent an n-th dimensional basis of a lattice)
* Well-studied cryptanalysis (basis reduction algorithms e.g. LLL)
* Resistance to post-quantum cryptanalysis

### Learning with Errors
This problem consists in solving a linear system of equations, where each equation is almost correct (up to addition by a small number). This problem and its ring equivalent allowed to define FHE without lattices, and without bootstrapping.

### NTRU problems
The NTRU (N-th truncated) encryption scheme has a FHE variant, and the underlying problems (in precise rings of polynomials) are well studied.

### Approximate eigenvalues
The GSW scheme is based on the problem of guessing approximate eigenvalues for an operator (i.e, usual eigenvalues up to addition of some small value).

### Circular Security
Encrypting a private key under its own public key is needed for bootstrapping. This “circular security” has been questioned, although there are no known attacks that take advantage of this. There are HE schemes known to be circular-secure.

### Number Theoretic Transformation (NTT)
Similar in spirit and in properties to the Fourier transform, but in a discrete setting (usually, in a power-of-prime field). This is the core operation in lattice- and polynomial-based schemes. It can be targeted with side-channel attacks.
