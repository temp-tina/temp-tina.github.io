---
layout: page
title: resources
permalink: /resources/
nav: true
nav_order: 4
horizontal: false
---


{% assign sorted_resources = site.resources | sort: "date" | reverse %}

<div class="container mt-5">
    {% for resource in sorted_resources %}
    {% include resource_card.liquid %}
    {% endfor %}
</div> 