---
layout: post
title:  "An exploration of hashicorp vault"
date: '2021-07-24'
category:
    - secrets management
    - secrets sprawling
permalink: /blog/exploring-hashicorp-vault/
---

## Overview

HashiCorp `Vault` is a secrets-management tool that is well suited to automating the creation, distribution, and destruction of secrets. `Vault` supports programmatic access to secrets, ephemeral secret generation, automated key rotation, SSO integration, MFA integration, and other features.

The primary goal of `Vault` is to solve the **secrets sprawling** problem: storing secrets in multiple different places. `Vault` solves the secrets sprawling problem by centralizing secrets management and storing secrets in a single location. Secrets are stored encrypted (data at rest) and when is sent to/from clients (data in transit). `Vault` uses access control (ACL) to manage who can access secrets and keeps an audit trail to provide visibility on who/when a secret has been accessed.

In addition, `Vault` offers dynamic secret capabilities by providing applications ephemeral credentials to bound the time credentials are valid. Dynamic secrets are unique to a server, which makes the effects of credential compromises smaller, and makes credential revocation easier, since the effect of rotating a key only affects a specific server.

Lastly, `Vault` exposes high level APIs to perform cryptographic operations in situ, instead of providing the key material to applications and having the applications implement their own crypto and key management.
