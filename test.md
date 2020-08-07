---
layout: page
title: test
permalink: /test/
layout: page
nav: false
---

{%- assign recipes = site.recipes | sort: "index" -%}
{% for recipe in recipes %}
    {{ recipe.title }}
    {{ recipe.index }}
{% endfor %}