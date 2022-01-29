---
layout: post
title:  "Rust traits"
date: '2020-10-13'
category:
    - rust
permalink: /blog/rust-traits/
---

## Overview

This blog post is about `trait`s in rust and what they are used for. A brief explanation of the
most commonly used traits is also included.

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

## Combining and chaining `trait`s

```rust
trait Person {
    fn name(&self) -> String;
}

// Person is a supertrait of Student.
// Implementing Student requires you to also impl Person.
trait Student: Person {
    fn university(&self) -> String;
}

trait Programmer {
    fn fav_language(&self) -> String;
}

// CompSciStudent (computer science student) is a subtrait of both Programmer 
// and Student. Implementing CompSciStudent requires you to impl both supertraits.
trait CompSciStudent: Programmer + Student {
    fn git_username(&self) -> String;
}

fn comp_sci_student_greeting(student: &dyn CompSciStudent) -> String {
    format!(
        "My name is {} and I attend {}. My favorite language is {}. My Git username is {}",
        student.name(),
        student.university(),
        student.fav_language(),
        student.git_username()
    )
}
```

### References

- https://doc.rust-lang.org/rust-by-example/trait/supertraits.html

---

## The `Deref` trait

`Deref` is used to customize the behavior of dereference operator `*`.

```rust
pub struct MyId(pub [u8; MyId::LEN]);

impl MyId {
    pub const LEN: usize = 32;
}

impl Deref for MyId {
    type Target = [u8; Self::LEN];

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}
```

Rust oftentimes performs dereferencing implicitly in a process called `Deref coercion` which
has some very attractive consequences such as:

```rust

fn main() {
    let a = vec![1, 2, 3];
    // len is defined on the underlying slice, but it's called seemingly "directly" on vec due to
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


---

## The `Drop` trait

`Drop` is used to customize the behavior of freeing resources that the implementor instance owns.

```rust
struct Droppable {
    name: &'static str,
}

impl Drop for Droppable {
    fn drop(&mut self) {
        println!("> Dropping {}", self.name);
    }
}
```

---

## Other useful traits

- `Clone`, mostly derived used `#[derive(Clone)]`
- Copy
- Display
- Eq
- PartialEq
- Ord
- PartialOrd
- FromStr
- From
- Into
- AsRef
- Iterator


## References

- https://doc.rust-lang.org/rust-by-example/trait.html
- https://blog.logrocket.com/rust-traits-a-deep-dive/
