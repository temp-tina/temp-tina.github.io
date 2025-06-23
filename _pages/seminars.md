---
layout: page
title: resources
permalink: /resources/
nav: true
nav_order: 4
horizontal: false
---


{% assign sorted_seminars = site.seminars | sort: "date" | reverse %}

<div class="container mt-5">
    {% for seminar in sorted_seminars %}
    {% include seminar_card.liquid %}
    {% endfor %}
</div> 