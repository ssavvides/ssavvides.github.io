---
layout: post
title:  "Some basics of OAuth"
date: '2022-02-16'
category:
    - oauth
permalink: /blog/oauth-basics/
---

## Overview

`OAuth` is a protocol to allow authorization without giving out username/password, in a process called delegated authorization.
`OAuth` keeps users secure by forcing them to enter their passwords only in one place, the `OAuth` server.

## Use-cases

  1. A third-party application needs to get access to an account/service/user-data without having access to the user's username/password. For example, if you want to log in to a third-party application using your Google account, you don't pass your username/password to that application. You instead enter these credentials to Google directly and then sent back to the application with an access token that can be used to authorize the application to whatever resource it needs.
  2. A first-party application is build on top of a company's API. Instead of having that application and all other applications in a company each store and handle username/passwords, you can utilize a single OAuth server to have applications authorized. Individual applications don't have to handle credentials anymore.
  3. An added benefit/use-case of the above centralized design is that if you want to introduce a change to your authentication mechanism, such as add support for 2-factor authentication, you only need to do that in once place.

## Terminology

  - `Authorization Server` – A server that exposes an interface for users to provide their credentials, in response to which the server issues an access token which can be used to authorize a client/application to the users' data.
  - `Access Token` – A string that encapsulates the authorization granted to a client by a user to access their data. These access tokens have an expiration period.
  - `Refresh Token` – A string that can be used to renew an expired access token. The refresh token is sent to the authorization server to request a new access token each time the current access token expires.
  - `Resource Server` – A server that contains the resource a client wants to access. A client can access this resource when providing a valid access token.

## References

- https://oauth.net
