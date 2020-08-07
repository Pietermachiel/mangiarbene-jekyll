---
title: posts
layout: page
nav: true
weight: 3
permalink: /posts/
---

<div class="blog">
<p class="post-chapeau">latest</p>
{% for post in site.posts limit: 1 %}
    <div class="blog-post">
    <a href="{{ post.url }}">
        <h3>{{ post.title }}</h3>
    </a>
    <p class="summary">
        {{ post.category }}
        <span class="date">
        {{ post.date | date: '%B %d, %Y' }}
        </span>
    </p>
    {{ post.excerpt }}
    <a href="{{ post.url }}">
        <p>Read more...</p>
    </a>
    </div>
{% endfor %}
</div>

<p class="post-chapeau">archive</p>
<div class="blog">
{% for post in site.posts offset: 1  %}
    <div class="blog-post">
    <a href="{{ post.url }}">
        <h3>{{ post.title }}</h3>
    </a>
    <p class="summary">
        {{ post.category }}
        <span class="date">
        {{ post.date | date: '%B %d, %Y' }}
        </span>
    </p>
    </div>
{% endfor %}
</div>
