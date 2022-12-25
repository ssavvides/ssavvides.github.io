---
layout: post
title:  "Some information on Intel SGX Driver"
date: '2022-05-04'
category:
    - intel sgx
permalink: /blog/intel-sgx-driver/
---

## Overview


Which driver should I install?
What is `/dev/sgx`?
What is `/dev/isgx`?
What is `/dev/sgx_provision`?
What is `/dev/sgx_enclave`?
What is `/dev/sgx/enclave`?
What is `/dev/sgx/provision`?
What is `/dev/sgx_vepc`?


## FAQ

#### How do I know if my _CPU_ supports Intel SGX?

Reference:
- https://www.intel.com/content/www/us/en/support/articles/000028173/processors.html
- https://ark.intel.com


#### How do I know if my _computer_ supports Intel SGX?

1. Your _CPU_ has to support Intel SGX.
2. Intel SGX needs to be `enabled` (or `software controlled`) in BIOS.
3. Intel SGX Platform Software package (PSW) needs to be installed.

Reference:
- https://www.intel.com/content/www/us/en/developer/articles/technical/properly-detecting-intel-software-guard-extensions-in-your-applications.html


#### How do I know if my _CPU_ supports Flexible Launch Control (FLC)?

##### Option 1

Run `cpuid | grep -i sgx` on your linux machine. If `SGX_LC:` is true, your CPU does support FLC.

##### Option 2

Use the Fortanix `sgx-detect` tool: https://support.fortanix.com/hc/en-us/articles/4414753648788-SGX-Detect-Tool

##### Option 3

Compile and run the `test-sgx` program.

1. Download the source from [here](https://github.com/ayeks/SGX-hardware).
2. Compile with `gcc test-sgx.c -o test-sgx`.
3. Run with `./test-sgx`.

##### Note

See reference below for a few **caveats** and more information.

Reference:
- https://www.intel.com/content/www/us/en/support/articles/000057420/software/intel-security-products.html


#### How do I know if my _CPU_ supports Datacenter Attestation Primitives (DCAP)?

Support for Intel SGX + Support for FLC => Support for DCAP.
