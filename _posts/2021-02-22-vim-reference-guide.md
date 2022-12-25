---
layout: post
title:  "Basics of VIM"
date: '2021-02-22'
category:
    - vim
permalink: /blog/vim-reference-guide/
---

### Overview

`vim` is a one of the most popular text editors.

#### My favorite `vim` commands

Move cursor:

`gg` — move cursor to the top of the text  
`G` — move cursor to the end of the text  
`0` — move cursor to _start_ of line  
`$` — move cursor to _end_ of line  
`backtick backtick` — move to previous position  

Insert mode

`i` — insert at cursor  
`I` — insert at start of line  
`A` — insert at end of line  
`o` — add new line below and insert  
`O` — add new line above and insert

Delete:

`d 0` delete from cursor until end of line  
`d $` delete from cursor until end of line  
`d a w` delete current word  
`d d` delete current line  

`y y` —  copy entire line
`p` — paste below current line
`P` — paste above current line
