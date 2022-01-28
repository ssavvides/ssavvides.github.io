---
layout: post
title:  "Rust traits"
date: '2020-10-13'
category:
    - rust
permalink: /blog/rust-traits/
---

## Overview

- A rust `trait` a way to define shared behavior in Rust. Ir is a collection of methods defined for an unknown
  type `Self`.
- Traits resemble the concept of `interface`s defined in other languages.
- Traits can provide default method implementations.
- Traits can refer to `Self` which is the implementor type and `&self` which is syntactic sugar for `self: &Self`, i.e.,
  an instance of the implementor type.

## Syntax

```rust
// define a trait
trait WithName {
    fn new(name: String) -> Self;

    fn get_name(&self) -> &str;

    fn print(&self) {
        println!("My name is {}", self.get_name())
    }
}

// implement a trait
struct Name(String);

impl WithName for Name {
    fn new(name: String) -> Self {
        Name(name)
    }

    fn get_name(&self) -> &str {
        &self.0
    }
}
```

## Traits as function arguments

```rust
use std::fmt::Debug;

// both a and b must implement Debug, but could be different types
fn f(a: &Debug, b: &Debug) {
    todo!()
}

// a and b must be the _same_ type which implements Debug
fn g<T: Debug>(a: &T, b: &T) {
    todo!()
}
```

## Returning a trait from a function

```rust
use std::fmt::Debug;

// can return any type that implements Debug, i.e., different invocations of this fn can return different types
fn dyn_trait(n: u8) -> Box<dyn Debug> {
    todo!()
}

// can only return a single type that implements Debug
fn impl_trait(n: u8) -> impl Debug {
    todo!()
}
```

---

## The `Deref` trait

`Deref` is used to customize the behavior of dereference operator `*`.

Rust oftentimes performs dereferencing implicitly in a process called `Deref coercion` which
has some very attractive consequences such as:

```rust

fn main() {
    let a = vec![1, 2, 3];
    // len is defined on the underlying slice, but it's called "directly" on vec due to
    // implicit conversion, aka, "Deref coercion"
    assert_eq!(a.len(), 3);
}
```


```rust
fn main() {
    let h = Box::new("hello");
    // to_uppercase is defined on str
    assert_eq!(h.to_uppercase(), "HELLO");
}
```

### References

- https://doc.rust-lang.org/std/ops/trait.Deref.html
- https://dev.to/zhanghandong/rust-concept-clarification-deref-vs-asref-vs-borrow-vs-cow-13g6


## References

- https://doc.rust-lang.org/rust-by-example/trait.html
- https://blog.logrocket.com/rust-traits-a-deep-dive/
