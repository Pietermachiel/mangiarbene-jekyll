---
title: kramdown
layout: page
link: catalogue/kramdown/
---

#### Markdown kramdown
* [Headers](#headers)
* [Emphasis](#emphasis)
* [Extra](#extra)
* [Marks](#marks)
* [Links](#links)
* [Images](#images)
* [Code and syntax highlighting](#code-and-syntax-highlighting)
* [Lists](#lists)
* [Tables](#tables)
* [Blockquotes](#blockquotes)
* [Horizontals](#horizontals)
* [Definition lists](#definition-lists)
* [Overview](#overview)
* [Link to me](#link-to-me)

<br>

---

# Headers

~~~

# An h1 header
## An h2 header 
### An h3 header
#### An h4  *italic* header 
##### An h5 **bold** header 
###### An h6 header 

Alternatively, for H1 and H2, an underline-ish style:

An h1 header
============

An h2 header
------------

~~~

# An h1 header
## An h2 header 
### An h3 header
#### An h4  *italic* header 
##### An h5 **bold** header 
###### An h6 header 

<br>

---

# Emphasis

~~~


1. *italic* 

2. _italic_

3. **bold** 

4. __bold__ 

5. `monospace`


~~~

1. *italic*

2. _italic_

3. **bold** 

4. __bold__ 

5. `monospace`


<br>

---

# Extra

~~~

1. ~~linethrough~~

2. *italic kleur*{:.oranje} 

3. *italic lighter*{:.lighter}

4. `code papier`{:#papier}{:.papier}

5. [link something](test.html){:rel='something'} 

6. **reverse**{:.reverse}

~~~

6. ~~linethrough~~

7. *kleur*{:.oranje} 

8. *italic lighter*{:.lighter} 

9. `code papier`{:#papier}{:.papier}

10. [link something](test.html){:rel='something'} 

11. **reverse**{:.reverse}


<br>

---

# Marks


~~~

'quote' 

"quote"

superscript 2^(nd) 2^o C

sentence with footnote.[^1]

[^1]: <small>Here is the text of the footnote itself.</small>

-- afbreekstreepje --

--- gedachtenstreepje ---

Unicode is supported: ☺

Font-awesome supported:
<span class="fa-stack fa">
  <i class="fa fa-github fa-stack-2x"></i>
</span>

~~~

'quote'

"quote"

superscript 2^(nd) 2^o C

sentence with footnote.[^1]

[^1]: <small>This is a footnote.</small>

-- afbreekstreepje --

--- gedachtenstreepje ---

Unicode is supported: ☺

Font-awesome supported:
<span class="fa-stack fa">
  <i class="fa fa-github fa-stack-2x"></i>
</span>


<br>

---

# Links

~~~

paragraph link [Link to me](#link-to-me)

external link [Publysher blog](http://blog.publysher.nl/)

sentence with footnote.[^2]

[^2]: <small>Here is the text of the footnote itself.</small>

~~~


paragraph link [Link to me](#link-to-me)

external link [Publysher blog](http://blog.publysher.nl/)

sentence with footnote.[^2]

(text footnote at page end)

[^2]: <small>Here is the text of the footnote itself.</small>


<br>

---

# Images

~~~

![alt text](../img/stencyl/step9-1.png "No More Lives Triggered?")

~~~

![alt text](../img/stencyl/step9-1.png "No More Lives Triggered?")


<br>

---

# Code and syntax highlighting

python code highlighting
(use tildes instead of backticks!) 

~~~

```python
import time
# Quick, count to ten!
for i in range(10):
   # (but not *too* quick)
   time.sleep(0.5)
   print i

```

~~~

python code highlighting

~~~python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print i
~~~


<br>

---

# Lists


###### Unordered lists (ul) look like:

```

* this one
* that one
* the other one

  * this one
  * that one
  * the other one

*  Overview
   *  Philosophy
   *  Inline HTML
   *  Automatic Escaping for Special Characters

```

* this one
* that one
* the other one

  * this one
  * that one
  * the other one

*  Overview
   *  Philosophy
   *  Inline HTML
   *  Automatic Escaping for Special Characters

###### Ordered lists (ol) look like:

(In this example, leading and trailing spaces are shown with with dots: ⋅)

```

1. First ordered list item
2. Another item
   * Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
   1. Ordered sub-list
4. And another item.

   You can have properly indented paragraphs within list items. 

   Note that this line is separate, but within the same paragraph.

* Unordered list can use asterisks
- Or minuses
+ Or pluses

```

1. First ordered list item
2. Another item
   * Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
   1. Ordered sub-list
4. And another item.

    You can have properly indented paragraphs within list items. 

    Note that this line is separate, but within the same paragraph.

* Unordered list can use asterisks
- Or minuses
+ Or pluses

<br>

---

# Tables

Colons can be used to align columns.
~~~

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

~~~

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

~~~

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

~~~



<br>

---

# Block quotes

~~~

> Block quotes are
> written like so.
>
> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
> Molestias consequatur _temporibus_ accusantium iure, provident 
> accusamus nisi incidunt cum a quibusdam enim labore sequi harum, 
> nesciunt vero eligendi dolore modi aliquid?.

~~~

> Block quotes are
> written like so.
>
> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
> Molestias consequatur _temporibus_ accusantium iure, provident 
> accusamus nisi incidunt cum a quibusdam enim labore sequi harum, 
> nesciunt vero eligendi dolore modi aliquid?.


<br>

---

# Definition *lists*{:.oranje}


Definition lists can have more than one definition associated with one term:

~~~

Apple
 : Pomaceous fruit of plants of the genus Malus in the family Rosaceae.
 : An American computer company.

Orange
:   The fruit of an evergreen tree of the genus Citrus.
You can also associate more than one term to a definition:

Term 1
Term 2
:   Definition a

Term 3
:   Definition b
If a definition is preceded by a blank line, Markdown Extra will wrap the definition in <p> tags in the HTML output. For example, this:

~~~


Apple
 : Pomaceous fruit of plants of the genus Malus in the family Rosaceae.
 : An American computer company.

Orange
:   The fruit of an evergreen tree of the genus Citrus.
You can also associate more than one term to a definition:

Term 1
Term 2
:   Definition a

Term 3
:   Definition b
If a definition is preceded by a blank line, Markdown Extra will wrap the definition in <p> tags in the HTML output. For example, this:



<br>

---

# Overview

~~~

### *Overview*{:.oranje}

Lorem **ipsum** dolor sit amet, ~~consectetur~~ adipisicing elit. Laborum `modi ipsam`{:.papier}, iusto enim *doloremque*{:.lighter} numquam, adipisci *voluptates*{:.oranje} dolorem voluptatem "pariatur" minus soluta culpa 'possimus' libero [Publysher blog](http://blog.publysher.nl/) nesciunt debitis, repellendus.

~~~

### *Overview*{:.oranje}

Lorem **ipsum** dolor sit amet, ~~consectetur~~ adipisicing elit. Laborum `modi ipsam`{:.papier}, iusto enim *doloremque*{:.lighter} numquam, adipisci *voluptates*{:.oranje} dolorem voluptatem "pariatur" minus **reverse**{:.reverse} soluta culpa 'possimus' libero [Publysher blog](http://blog.publysher.nl/) nesciunt debitis, repellendus.


<br>

---

# Link to me





