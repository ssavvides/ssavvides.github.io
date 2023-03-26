---
layout: post
title:  "Rust raw identifiers"
date: '2023-03-26'
category:
    - rust
permalink: /blog/rust-raw-identifiers
---

### Overview

Raw identifiers allow us to give a variable/function/... a name that is a reserved word.

For instance, the following snippet will not compile

```rust
struct Foo {
    name: String,
    type: String,
}
```

whereas this one will

```rust
struct Foo {
    name: String,
    r#type: String,
}
```

This is particularly useful when wanting to refer to a function in a crate of a previous rust edition
that allowed the function to be named to something that is a reserved word in newer rust editions.

For example, assuming crate `foo` is using 2015 edition and the snippers below are using 2018 edition
when `try` became a reserved word we have:

```rust
extern crate foo;

fn main() {
    foo::try();
}
```

You'll get this error:

```
error: expected identifier, found keyword `try`
--> src/main.rs:4:4
|
4 | foo::try();
|      ^^^ expected identifier, found keyword
You can write this with a raw identifier:
```

This will compile though:

```rust
extern crate foo;

fn main() {
    foo::r#try();
}
```

### References
- https://doc.rust-lang.org/rust-by-example/compatibility/raw_identifiers.html