---
title: Jekyll API endpoint demo
layout: layout-blog
category: Development
url: "https://mangiarbene.roozen.nl"
author: Pieter Roozen
source: ""
source_url: ""
---

#### Talk at the JekyllConf 2019

> One of the best so called **unconventional use cases of Jekyll** is learning the basics of web development: HTML, CSS and JavaScript. At least in my case as a book designer with a non development background. But if the JavaScript part is growing in your application, you might be attempted to use React or other single page applications in JavaScript. Although it is not impossible to integrate React in Jekyll, it doesn’t make much sense to use two website generators at the same time. Even aside from the issues in development you may encounter. Yet we don’t have to say goodbye to Jekyll at this point at all.

> It is actually very well possible to use Jekyll in creating API endpoints that can be consumed by other website generators. In this demo I will show the combination with React. That way you are completely free in your development, while enjoying the benefits of a simple, static and blog-aware Jekyll application. This time as a real backend.

<br/>

# Hello,

<div class="home-img_pieter">
    <img src="/public/img/pieter0.jpg" alt="">   
</div>

**...my name is Pieter Roozen. I am a graphic designer based in The Hague, the Netherlands. I am the father of 4 and partner of Ruth. I love ski touring and sailing and I bake sourdough bread on a daily basis.**

<br/>

<div class="home-img_vangogh">
    <img src="/public/img/studio.jpg" alt="">   
</div>

## Studio Roozen

I am owner at **Studio Roozen** specialized in designing books, art catalogues and museum concepts for Dutch museums. Among others, in full service for the <a href="https://roozen.nl/projecten/van-gogh-museum" target="_blank" rel="noopener noreferrer">**Van Gogh Museum**</a> for more than 15 years. In 2015 I started working as a freelancer again. Of course the portfolio website of <a href="https://roozen.nl" target="_blank" rel="noopener noreferrer">**Studio Roozen**</a> was made in Jekyll.

## Jekyll separates content from logic

The reason why I love Jekyll is because it has a very elegant manner of separating content from logic, including HTML. You can use Markdown to write coded content without writing HTML code yourself.

In fact I noticed that it functions similary to the way in 'the early days', we would use text content written in Word in combination with QuarkXpress DTP software.

So it all feels very intuitive for an old school graphic designer, like me.

## Restful api's

These days, APIs to transfer content around the web are very popular, because APIs are faster in delivering content than conventional database systems. Even the two most popular PHP frameworks Wordpress and Drupal came with REST API plugin solutions.

APIs are RESTful if you can do HTTP requests like GET, PUT, POST and DELETE.

## How about Jekyll?

So how about Jekyll, since it is very good at separating content from the logic? But Jekyll is static, so you can only use the GET method here. Not a big problem, because you don't need to do all the CRUD operations in one and the same application.

**Basically, API's are used to make the same content available to different applications in a form that can be parsed in the desired language.**

Typically, Jekyll is used because it is simple, safe, blog aware and fast. However, its functionality is limited. It is specially useful for presentational websites, blogs or even museum websites.

## Perfect match

In fact, taken all together, this makes Jekyll a perfect match when we use it's content as API used in applications with more functionality, like React. Or what, if you have a limited amount of data and you need a fake API in a proof-of-concept (POC).

I know that there are different solutions out there to use fake online API's for testing, like <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer">**JSONplaceholder**</a>. But you still have to code your content and nobody likes doing that. With Jekyll, on the other hand, you can write content just like an editor.

But let's get started now.

## MangiarBene

For this demo I designed a simple Jekyll website about Cookbooks called **MangiarBene**, dedicated to the famous Italian businessman and writer Pellegrino Artusi (1820–1911), and which is – as we speak – the actual website you are visiting right now. It consists of two collections: one of **15 cookbooks** and another of **48 recipes** as well as a **blog** from which this actual post is the 'latest'.

<div class="home-img_websites">
    <img src="/public/img/jekyll.jpg" alt="">
    <img src="/public/img/react.jpg" alt="">
</div>

You can go to the [homepage](/) of **MangiarBene** now, if you want, and see how the website is structured.

Subsequently I developed a second SPA website (in React), that just uses the content from **MangiarBene** as JSON data. You could also examen this at <a href="https://api.roozen.nl" target="_blank" rel="noopener noreferrer">
https://api.roozen.nl
</a>. You will see that it is identical, only the background color is different.

The Jekyll website is hosted at CloudCannon and the React site is hosted at a Dutch hosting company.

But let me explain first.

## Many to many relationships

In Jekyll it is possible to relate collections and posts from the content of the YAML front matter blocks. We can call the **recipes** and ad the book data to each recipe:

{% raw %}

```html
<div class="book-links">
  {% for recipe in site.recipes %} {% if recipe.book == page.title %}
  <a href="/recipes/{{ recipe.title | slugify }}">
    <h5>{{ recipe.title }} {{ recipe.index }}</h5>
  </a>
  {% endif %} {% endfor %}
</div>
```

{% endraw %}

Likewise we can call the **books** and add the recipes that belong to a book:

{% raw %}

```html
<div class="recipe-box_credits">
  {% for recipe in site.recipes %} {% if recipe.book == page.title %}
  <a href="/recipes/{{ recipe.title | slugify }}">
    <h5>{{ recipe.title }} {{ recipe.index }}</h5>
  </a>
  {% endif %} {% endfor %}
</div>
```

{% endraw %}

Both result in a data schema that is similar to the many-to-many-relationships used in databases. So what if in Jekyll we could use this technique to create a JSON file that contains the same structure, and make it available to the internet? And indeed we can!

## Constructing the API endpoints

So we need JSON files. Well let's create them in Jekyll!

First we need a folder called **api** with files for **books.json** and **recipes.json**, so the url extension will result in `/api/books.json` and `/api/recipes.json`.

In the front matter block we just set the layout to `null` and that's it. Now we can construct the JSON object and establish the same relations as we did before in creating the pages for books, recipes and posts.

###### /api/books.json

{% raw %}

```html
---
layout: null
---

[ {% assign recipes = site.recipes | sort: "index" %} {% for recipe in recipes
%} { "index": "{{ recipe.index }}", "title": "{{ recipe.title }}", "id": "{{
recipe.slugify }}", "product": "{{ recipe.product }}", "dish": "{{ recipe.dish
}}", "url": "{{ recipe.url }}", "bookId" : "{{ recipe.book | slugify }}",
"bookTitle" : "{{ recipe.book }}", "page": "{{ recipe.page }}" }, ]
```

{% endraw %}

There is only one problem here. The JSON object code block ends with a comma, so the last recipe also will end with a comma. JSON, however, disallows trailing commas. Now, in Liquid, you can eliminate the last comma, with the **unless forloop.last** statement.

{% raw %}

```html
"page": "{{ recipe.page }}" }{% unless forloop.last %},{% endunless %}{% endfor
%} ]
```

{% endraw %}

## A flat JSON tree

The form of JSON is very much dependent of the language in which the data is consumed. In the case of React the best advise is to keep the JSON tree as flat as possible. This pattern, called **denormalization**, is well known in both relational and non-relational databases. In this case we would 'connect' the **recipes** data with the **books** data using a **bookId** rather than nesting all the data of each book in the **recipes** object.

###### https://trim-seahorse.cloudvent.net/api/recipes.json

{% raw %}

```html
[ { index: "1", title: "Candied citrus peel", id: "candied-citrus-peel",
product: "lemon", dish: "basics", url: "/recipes/candied-citrus-peel/", bookId:
"30-ingredients", bookTitle: "30 ingredients", page: "160" }, ...
```

{% endraw %}

## Nested structures

With Jekyll we can establish whatever structure of JSON we might want, also deeply nested ones.

In this case we have to do some more effort to get rid of the trailing comma in the last JSON object code block.

Since the if-statement works as a filter, and therefore not all iterations will become valid, a comma cannot be avoided here.

Let me explain.

Eliminating the last comma, with the **unless forloop.last** statement will not work here, in case the last iteration is not valid to the condition. In other words, the last iteration that is valid to the condition might not be the last of the forloop as a whole. Resulting in the last comma.

The solution is to use the push method to a fresh empty array, in order to create a new array with the desired content. This way we don't need the conditional statement anymore, because all iterations will be valid.

###### /api/books.json

{% raw %}

```html
---
layout: null
---

[ {% for book in site.books %} { "title" : "{{ book.title }}", "author" : "{{
book.author }}", "publisher": "{{ book.publisher }}", "year" : "{{ book.year
}}", "kitchen" : "{{ book.kitchen }}", "link" : "{{ book.link }}", "book_url" :
"{{ book.book_url }}", {% assign p = book.title | slugify %} {% assign my_recipe
= "" | split: "" %} {% for recipetitle in site.recipes %} {% assign detitel =
recipetitle.book | slugify %} {% if p == detitel %} {% assign itemtitle = "" |
split: "" %} {% assign itemtitle = itemtitle | push: recipetitle %} {% assign
my_recipe = my_recipe | push: itemtitle %} {% endif %} {% endfor %} "recipes" :
[ {% for therecipe in my_recipe %} { "index" : "{{ therecipe[0].index }}",
"title" : "{{ therecipe[0].title }}", "page" : "{{ therecipe[0].page }}",
"product" : "{{ therecipe[0].product }}", "dish" : "{{ therecipe[0].dish }}" }{%
unless forloop.last %},{% endunless %} {% endfor %} ], "text" : "{{ book.text
}}", "content" : {{ book.content | jsonify }} }{% unless forloop.last %},{%
endunless %} {% endfor %} ]
```

{% endraw %}

Finally we have to check if the JSON-file is valid at:
<a href="https://jsonlint.com/" target="_blank" rel="noopener noreferrer">
https://jsonlint.com/
</a>.

## Jekyll as a blog API

More interesting maybe is the fact that we can use the same technique to create a blog API from the Jekyll data. Now in the **data** folder create a file called blog.json, and follow the same instructions as before. Here we want to use the **content** of a post as well, while using Markdown text-to-HTML conversion, resulting in HTML tags in your output. Therefore you need to use the **jsonify** filter here. {% raw %}`{{ book.content | jsonify }}`{% endraw %}

## Let's take it to the next level

The blog API will grow over time and may at some point contain hundreds of blog posts. With respect to the API design in this demo, this might exceed the performance boundaries of JavaScript and the application might crash. What can we do to prevent this?

Well, let's take this project to the next level!

The first step is to minimize the content of `/api/blog.json` at the **MangiarBene** app. Here, from each blog post object in fact we only need `post.title`, `post.category` and `post.date`. Doing so, we get rid of the huge text block in `post.content`. Next we need a solution for the individual pages of each blog post.

Now provide a folder `_writings` and copy the post files from the `_posts` folder. Here we need some refactoring. We don't need to call the date in the title anymore, and we should change the file extension to `.json`. In the `_config.yml` file we need to call the `_writings` collection and set the default layout like so:

###### \_config.yml

{% raw %}

```html
collections: writings: output: true permalink: /api/blog/:path.json defaults: -
scope: path: "" type: "writings" values: layout: layout-writings
```

{% endraw %}

In doing so, we will lose all the typical behavior of the post format in Jekyll, such as the date format and the support for categories and tags. But in the targeted JavaScript environment this would not work anyway. Besides, in JavaScript you can deal with these topics even more easy than in Jekyll :-).

###### https://trim-seahorse.cloudvent.net/api/blog/jekyll-api-endpoint-demo.json

{% raw %}

```html
{ index: "1", title: "Jekyll API endpoint demo", id: "jekyll-api-endpoint-demo",
date: "2019-08-21 00:00:00 +0000", author: "Pieter Roozen", category:
"Development", book: "", source: "", source_url: "", content: "#### Talk at the
Jekyll video conference 2019 > One of the best ...
```

{% endraw %}

As you can see, in the content the Markdown tags are still existant, because in Jekyll only .md-files will convert them to valid HTML. But as I mentioned before, this can be done in React as well, see
<a href="https://github.com/rexxars/react-markdown" target="_blank" rel="noopener noreferrer">
react-markdown
</a>.

## Publishing the Jekyll site on CloudCannon

Now we can Publish the result on Github and Cloudcannon, which in this case I already did, obviously.

You will find the repositories on
<a href="https://github.com/Pietermachiel" target="_blank" rel="noopener noreferrer">GitHub</a>.

Subsequently, we can use the created Jekyll API endpoints. As you can see they are part of the Jekyll website.

<a href="https://trim-seahorse.cloudvent.net/api/recipes.json" target="_blank" rel="noopener noreferrer">
/api/recipes.json
</a>
<br>
<a href="https://trim-seahorse.cloudvent.net/api/books.json" target="_blank" rel="noopener noreferrer">
/api/books.json
</a>
<br>
<a href="https://trim-seahorse.cloudvent.net/api/blog.json" target="_blank" rel="noopener noreferrer">
/api/blog.json
</a>
<br>
<a href="https://trim-seahorse.cloudvent.net/api/blog/jekyll-api-endpoint-demo.json" target="_blank" rel="noopener noreferrer">
/api/blog/jekyll-api-endpoint-demo.json.json
</a>

## Using the API in React

Hosting the Jekyll website – which includes the API endpoints – on either GitHub or CloudCannon makes it easy to change the content, and see how this is in sync with the SPA that consumes the content, in this demo developed in React:
<a href="https://api.roozen.nl" target="_blank" rel="noopener noreferrer">
https://api.roozen.nl
</a>

## Other use cases

You could even use Jekyll to load a MongoDB database, which can be done by using a script in JavaScript and load different kinds of JSON files and structures at the same time or by just loading one JSON file directly. Here is a link to the documentation of <a href="https://docs.mongodb.com/manual/reference/program/mongoimport/" target="_blank" rel="noopener noreferrer">
MongoDB</a>.

## Final thoughts

If a collection of JSON objects is already available, you can use it in Jekyll as data, just like any other JSON of YAML file and produce the API endpoint from there.

And in order to respect the performance boundaries of JavaScript, as mentioned before, we could also think of pagination, indexation and search solutions.

That's all there is to it.

There is lot more you can do with Jekyll, than with Jekyll on its own!
