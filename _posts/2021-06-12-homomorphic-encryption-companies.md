---
layout: post
title:  "A Review of Homomorphic Encryption Companies"
date: '2021-06-12'
category:
    - homomorphic encryption
    - privacy enhancing technologies
permalink: /blog/homomorphic-encryption-companies/
---

## HE Companies
Lately, I spent some time investigating companies that are using homomorphic encryption (HE). A number of big players such as Microsoft, IBM, and SAP have expressed interest in HE both as a research tool but also for some (limited) practical uses. Instead, in this post I wanted to briefly discuss companies that are solely based on HE. As it turns out, companies that might have started with using HE alone, have now transitioned in using Privacy Enhancing Technologies (PETs) which includes HE but also PPE, Differential Privacy, Secure MPC, and other technologies.


### Cosmian
`Cosmian` is a small company that claims to use a combination of Functional Encryption, Homomorphic Encryption, Secure Multi-Party Computations, and Secure Enclaves. Based in France and raised $1.5M (Seed). They are a member of the Confidential Computing Consortium.

Website: [https://cosmian.com](https://cosmian.com)


### Duality Technologies

In my view, `Duality` is the biggest player in HE at the moment. They develop and use the [Palisade HE library](https://palisade-crypto.org/) as the backboneof the company: Their CTO and Co-Founder Kurt Rohloff leads the development of Palisade. Palisade was initially a research project in Kurt Rohloff research group @ New Jersey Institute of Technology. `Duality` has raised $20M Series A. They occasionally publish interesting work in scientific conferenecs, for example, this work on ["Secure large-scale genome-wide association studies using homomorphic encryption"](https://www.pnas.org/content/pnas/117/21/11608.full.pdf).

Website: [https://dualitytech.com](https://dualitytech.com)


### EnVeil

Another small company that uses Homomorphic Encryption. `Enveil` was founded by Ellison Anne Williams and raised $10M in series A for a total of $15M in February 2020. They don’t use a specific library, instead, they build higher-level primitives on top of the low-level `+/*` primitives exposed by FHE. `Enveil` is engaged in competitive discussion of L3Harris use-case.

Website: [https://www.enveil.com](https://www.enveil.com)


### Inpher.io
Multi-party computation and privacy-preserving machine learning. Startup based in Switzerland, they count with several experts in the field: Nicolas Gama, Mariya Georgieva. `Inpher` is gaining traction and notoriety (see news [here](https://inpher.io/news/)).

Website: [https://inpher.io](https://inpher.io)


### ShieldIO
`ShieldIO` is based on a proprietary Real-Time Homomorphic Encryption technology. They claim that Real-Time Homomorphic Encryption is practical and flexible. I could not find any information/proof on this. `ShieldIO` raised $800K pre-seed.

Website: [https://shieldio.com](https://shieldio.com)


### Zama.ai
Homomorphic AI, written in Rust. `Zama` is a startup based in France, they count with several experts in the field: Pascal Paillier (from the Paillier cryptosystem), Illaria Chillotti (co author of TFHE).

Website: [https://zama.ai](https://zama.ai)
