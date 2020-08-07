---
layout: page
title: recipes
permalink: /recipes/
layout: page
nav: true
weight: 1
dishes: 
- starter
- aside
- main
- desert
- basics
---
<div class="recipes">
    {%- for dish in page.dishes -%}
    <p class="dish-title" >{{ dish }}</p>
    <div class="dish">
        {%- for recipe in site.recipes -%}
        {%- if dish == recipe.dish -%}
        <div class="recipe">
            <a href="/recipes/{{ recipe.title | slugify }}">
                <h3 class="rood">{{ recipe.title }} {{ recipe.index }}</h3> 
            </a>
            <div class="credits">
                <h5>
                    {{ recipe.product }} 
                    <span>
                    <a href="/books/{{ recipe.book | slugify }}">
                        {{ recipe.book }}
                        <!-- <b>{{ recipe.page }}</b> -->
                    </a>
                    </span>
                </h5>
            </div>
        </div>
        {%- endif -%}
        {%- endfor -%}
    </div>
    {%- endfor -%}    
</div>