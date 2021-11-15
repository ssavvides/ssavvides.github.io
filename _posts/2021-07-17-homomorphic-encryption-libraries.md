---
layout: post
title:  "Homomorphic Encryption Libraries"
date: '2021-07-17'
category:
    - homomorphic encryption
permalink: /blog/homomorphic-encryption-libraries/
---

## HE Libraries

I spent some time investigating the most popular open-source Homomorphic Encryption (HE) libraries and tools, which I outline in this blog post.


### FHE schemes libraries

#### HElib
An equally popular library, that implements several optimizations to improve performance.

Repository: [https://github.com/homenc/HElib](https://github.com/homenc/HElib)


#### Lattigo
A more recent and fairly popular library written in GO that exhibits performance comparable to libraries written in C/C++. Includes support for MPC.

Repository: [https://github.com/ldsec/lattigo](https://github.com/ldsec/lattigo)

 
#### Palisade
Another popular HE library that supports a wider range of encryption schemes including support for MPC. This is the library used by Duality Technologies and is perhaps the most maintained one.

Repository: [https://gitlab.com/palisade](https://gitlab.com/palisade)


#### SEAL
`SEAL` is one of the most popular HE libraries along with `HElib`. `SEAL` was developed by the Cryptography and Privacy Research group at Microsoft. It supports both `BFV` and `CKKS` and receives frequent updates. Includes a good number of examples with associated documentation.

Repository: [https://github.com/Microsoft/SEAL](https://github.com/Microsoft/SEAL)
 
#### TFHE
A C++ implementation of TFHE, by the authors of the paper. 

Repository: [https://github.com/tfhe/tfhe](https://github.com/tfhe/tfhe)


#### Library Comparison

{:class="table table-bordered table-striped table-hover"}
| Library | BGV | BFV | CKKS | FHEW | TFHE | MPC support | Language |
| --- | --- | --- | --- | --- | --- | --- | --- |
| HElib | ✔ | ✘ | ✔ | ✘ | ✘ | ✘ | C++ |
Lattigo | ✘ | ✔ | ✔ | ✘ | ✘ | ✔ | GoLang |
Palisade | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | C++ |
| SEAL | ✘ | ✔ | ✔ | ✘ | ✘ | ✘ | C++ |
| TFHE | ✘ | ✘ | ✘ | ✘ | ✔ | ✘ | C++ |



### FHE Tools

#### Google’s FHE transpiler
Transpiles C++ programs to ones that work over encrypted data and uses the TFHE library described above as its FHE backbone.

Repository: [https://github.com/google/fully-homomorphic-encryption](https://github.com/google/fully-homomorphic-encryption)
