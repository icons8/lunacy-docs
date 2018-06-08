---
title: Release notes
---
{% assign sorted_pages = site.pages %}
{% for node in sorted_pages %}
  <li><a href="{{node.url}}">{{node.title}}</a></li>
{% endfor %}