---
layout: page
title: books
permalink: /books/
layout: page
nav: true
weight: 2
kitchen: 
- italian
- dutch
- spanish
- oriental
- english
- usa
---
<div class="books">
{%- for kitchen in page.kitchen -%}
    <p class="kitchen-title">{{ kitchen }}</p>
    {%- assign books = site.books | sort: "year" -%}
    {%- for book in books -%}
        {%- if kitchen == book.kitchen -%}
        <div class="book">
        <a href="{{ book.title | slugify }}">
            <h3>
                <span>{{ book.year}}</span> {{ book.title }}
            </h3> 
        </a>        
            <div class="credits">
                <h5>{{ book.author }}</h5>
            </div>        
        </div>
        {%- endif -%}
    {%- endfor -%}
{%- endfor -%}
</div>