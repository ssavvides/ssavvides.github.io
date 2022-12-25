---
layout: post
title:  "Some notes on HTTP caching"
date: '2022-02-15'
category:
    - http
permalink: /blog/http-caching/
---

## Overview

Caching is the ability to store copies of frequently accessed data in several places along the request-response path.

When a consumer requests a resource representation, the request goes through a cache or a series of caches (local cache, proxy cache, or reverse proxy) toward the service hosting the resource.

If any of the caches along the request path has a fresh copy of the requested representation, it uses that copy to satisfy the request. If none of the caches can satisfy the request, the request travels to the service (or origin server as it is formally known).

By using HTTP headers, an origin server indicates whether a response can be cached and, if so, by whom, and for how long.

Caches along the response path can take a copy of a response, but only if the caching metadata allows them to do so.

Optimizing the network using caching improves the overall quality-of-service in the following ways:

    Reduce bandwidth
    Reduce latency
    Reduce load on servers
    Hide network failures


### `cache-control: public` and `cache-control: private`
The public and private directives are two opposing directives that control which types of clients can cache resources.
The public directive means that the resource can be stored by any cache. For example, a visitor’s browser, a CDN, etc.
The private directive, on the other hand, means that the resource can still be cached by the visitor’s browser, but it cannot be cached by other intermediate caches, such as a CDN.
You would typically use the private directive for content with user information that you don’t want to be cached by a CDN, but are fine with being cached by the visitor’s browser.
The public and private directives are only used by the server in its HTTP response.

### `cache-control: no-cache`

The no-cache directive is somewhat confusing because of the name. It allows any cache to store the response, but the stored response must go through validation with the origin server before using it. That is, a visitor’s browser has to check to make sure that the resource hasn't changed before using the cached resource.
If you want to completely avoid storing the response in any cache, you actually want to use no-store, which is the next directive that we’ll look at.
The no-cache directive can be used by both the client and the server.

## References

- https://wp-rocket.me/blog/cache-control-http-headers/
