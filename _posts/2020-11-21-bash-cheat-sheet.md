---
layout: post
title:  "Bash variables cheat sheet"
date: '2020-11-21'
category:
    - bash
    - cheat sheet
permalink: /blog/bash-variables-cheat-sheet/
---

### Case modification

```bash
x=saVVas
echo $x # saVVas
echo ${x^^} # SAVVAS
echo ${x,,} # savvas

# use a single ^ or , to apply above to first letter only.
```

### Find and replace

```bash
mystring="lorem ipsum lorem ipsum"
echo ${mystring/lorem/batman} # batman ipsum lorem ipsum
echo ${mystring//lorem/batman} # batman ipsum batman ipsum
```

### String length

```bash
mystring="lorem ipsum"
echo ${#mystring} # 11
```

### String slicing

```bash
mystring="lorem ipsum"
echo ${mystring:0} # lorem ipsum
echo ${mystring:1} # orem ipsum
echo ${mystring:2:3} # rem
echo ${mystring:1:-1} # orem ipsu
```


### Default value

```bash
# unset variable
unset mystring
echo ${mystring} # (nothing)
echo ${mystring:-default-value} # default-value

# empty variable
mystring=
echo ${mystring} # (nothing)
echo ${mystring:-default-value} # default-value
```

### Alternate value

```bash
# if unset, return nothing
unset mystring
echo ${mystring:+alternate} # (nothing)

# if set, return the alternate string
mystring=1
echo ${mystring:+alternate} # alternate
```


### References

- [https://wiki.bash-hackers.org/syntax/pe](https://wiki.bash-hackers.org/syntax/pe)
