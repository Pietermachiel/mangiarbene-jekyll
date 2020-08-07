---
layout: page
title: home
dishes:
  - starter
  - aside
  - main
  - desert
  - basics
quote: Science in the Kitchen and the Art of Eating Well
---

{%- capture numberOfBooks -%}
{%- assign books = site.books | sort: "index" -%}
{%- for book in books -%}
{% if forloop.last %}{{ forloop.index }}{% endif %}
{%- endfor -%}
{%- endcapture -%}

{%- capture numberOfRecipes -%}
{%- assign recipes = site.recipes | sort: "index" -%}
{%- for recipe in recipes -%}
{% if forloop.last %}{{ recipe.index }}{% endif %}
{%- endfor -%}
{%- endcapture -%}

<div class="home-img_artisjok">
    <img src="/img/artisjok_klein.jpg" alt="">
    <div class="theart">
        <a href='/books/{{ page.quote | slugify }}'>The art of eating well</a>
    </div>       
</div>
<div class="home-quote">
    <p>
    "Cooking is a troublesome sprite. Often it may drive you to despair. Yet it is also very rewarding, for when you do succeed, or overcome a difficulty in doing so, you feel the satisfaction of a great triumph. <br><br> If you do not aspire to become a premier cook, you do not need to have been born with a pan on your head to become a good one. <span>Passion, care, and precision of method will generally suffice; then, of course, you must use the finest ingredients as your raw materials, for these will make you shine.</span>"
    </p>
    <br>
    <p class="pellegrino">    
        <b>Pellegrino Artusi</b> 
        <a href="/books/{{ page.quote | slugify }}" aria-label="The art of eating well">– {{ page.quote }}</a>
    </p>
</div>
<hr>
<br>
<h3 class="blauw">Note to the reader – <span class="smaller">Jekyll version</span></h3>
<div class="blog-post kramdown">
    <blockquote>
        <p> This website demonstrates Jekyll as API endpoint, accompaning <a href="https://jekyllconf.com/" target="_blank" rel="noopener noreferrer" aria-label="api.roozen.nl">JekyllConf2019</a> on this issue.
        The content in <a href="https://jekyllrb.com/" target="_blank" rel="noopener noreferrer" aria-label="api.roozen.nl">Jekyll</a> is to be conciderate as fake, exept for the <a href="/development/2019/09/16/jekyll-api-endpoint-demo.html" aria-label="Last post">
            latest post</a>, which contains the explanation of the demo.. 
        The fake <strong>recipe</strong> and <strong>book</strong> markup documents are stored as objects as well and made available as REST api endpoints.
        In Jekyll endpoints it is only possible to use the GET
            request, which makes sense because Jekyll is a static website
            generator in the first place. 
        Consequently there are no dynamic endpoints available, and therefore no possiblilty to change the content this way.
    </p>
       </blockquote>
    <blockquote>
          <p>
            The API endpoints are beiing consumed in a different
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="api.roozen.nl"
            >
              Reactjs
            </a>
            application. As you will experience and to demonstrate the working
            and purpose of the Jekyll API endpoints this
            <strong>MangiarBene Jekyll</strong> website is designed almost
            exactly the same way as the
            <strong>
              <a
                href="https://mangiarbene.roozen.nl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="mangiarbene.roozen.nl"
              >
                MangiarBene React
              </a>
            </strong>
            website.
          </p>
        </blockquote>
    <blockquote>
        <p>You will find the explanation of the project in the <a href="/development/2019/09/16/jekyll-api-endpoint-demo.html" aria-label="Last post">
    latest post</a>.</p>
    
</blockquote>
</div>

<p style="margin-bottom: 2em;"></p>
<!-- latest post -->
<p class="pl-2em">latest post</p>
<div class="home-post">
{%- for post in site.posts limit: 1 -%}
    <a href="{{ post.url }}" aria-label="Last post">
        <h3>{{ post.title }}</h3>
    </a>
    <p class="summary">
        <span class="date">
        {{ post.date | date: '%B %d, %Y' }}
        </span>
    </p>
{%- endfor -%}
</div>
<!-- recipe of the day -->
<p class="pl-2em">recipe of the day</p>
<div class="recipe">
{%- assign min = 0 -%}
{%- assign max = numberOfRecipes -%}
{%- assign diff = max | minus: min -%}
{%- assign randomNumber = site.time | date: "%s" | modulo: diff | plus: min -%}
{%- for recipe in site.recipes -%}
    {%- if recipe.index == 4 -%}
    <a href="/recipes/{{ recipe.title | slugify }}" aria-label="Recipe of the day">
        <h3>{{ recipe.title }} {{ recipe.index }}</h3>
    </a>
    <div class="credits">
        <h5>
            {{ recipe.product }}
            <span>
                <a href="/books/{{recipe.book | slugify}}">
                &nbsp;{{recipe.book}}
                </a>
            </span>
        </h5>
    </div>         
    {%- endif -%}
{%- endfor -%}

</div>
<!-- book of the day -->
<p class="pl-2em">book of the day</p>
<div class="book">
{%- assign min = 0 -%}
{%- assign max = numberOfBooks -%}
{%- assign diff = max | minus: min -%}
{%- assign randomNumber = site.time | date: "%s" | modulo: diff | plus: min -%}
{%- for book in site.books -%}
    {%- if book.index == 4 -%}
    <a href="/books/{{ book.title | slugify }}" aria-label="Book of the day">
        <h3><span>{{book.year}}</span>&nbsp;{{ book.title }}</h3>
    </a>
    <div class="credits">
        <h5>{{book.author}}</h5>
    </div>   
    {%- endif -%}
{%- endfor -%}
</div>
<!-- database -->
<p class="pl-2em">database</p>
<div class="home-database">
<a href="/recipes" class="nav-link" aria-label="Number of recipes">
    <h3>{{ numberOfRecipes }} recipes </h3>    
</a>
<a href="/books" class="nav-link" aria-label="Number of books">
    <p>{{ numberOfBooks }} books</p>   
</a>
</div>
<p class="pl-2em">api endpoints</p>
<a href='/api/books.json' aria-label="Books">/api/books.json</a>
<br><br>
<a href='/api/recipes.json' aria-label="Recipes">/api/recipes.json</a>
<br><br>
<a href='/api/blog.json' aria-label="Blog">/api/blog.json</a>
<p class="pl-2em">consume in React</p>
<a href="https://api.roozen.nl" target="_blank" rel="noopener noreferrer" aria-label="api.roozen.nl">
https://api.roozen.nl
</a>
