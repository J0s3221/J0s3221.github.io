---
layout: default
title: Home
---

<section class="hero">
  <h1>Hi, I'm José Oliveira</h1>
  <p class="role">Telecommunications & Computer Engineer</p>
  <div class="signal-divider" aria-hidden="true">
    <svg viewBox="0 0 160 20"><polyline points="0,10 40,10 48,3 56,17 64,10 160,10" /></svg>
  </div>
</section>

<section class="band reveal" id="about">
  <div class="band-inner">
    <h2>About</h2>
    <p class="about-intro">[Opening paragraph — the big-picture summary of who you are and what drives you]</p>

    <div class="about-grid">
      {% assign sorted_about = site.about | sort: "order" %}
      {% for entry in sorted_about %}
      <a href="{{ entry.url | relative_url }}"
         class="about-card pedal--{{ entry.pedal | default: 'cream' }} font--{{ entry.font | default: 'serif' }}"
         style="--cols: {{ entry.cols | default: 1 }}; --rows: {{ entry.rows | default: 2 }};">
        <div class="card-top">
          <span class="knobs" aria-hidden="true"><i></i><i></i><i></i></span>
        </div>
        {% if entry.image %}
        <div class="card-image">
          <img src="{{ entry.image | relative_url }}" alt="{{ entry.image_alt | default: '' }}" loading="lazy">
        </div>
        {% endif %}
        <h3>{{ entry.title }}</h3>
        <p>{{ entry.teaser }}</p>
        <div class="card-foot">
          <span class="card-link">Open</span>
          <span class="footswitch" aria-hidden="true"></span>
        </div>
      </a>
      {% endfor %}
    </div>
  </div>
</section>

<section class="band band-alt reveal" id="projects-preview">
  <div class="band-inner" style="text-align:center;">
    <h2>Projects</h2>
    <p>Take a look at <a href="{{ '/projects/' | relative_url }}">what I've been building</a>.</p>
  </div>
</section>

<section class="band contact reveal" id="contact">
  <div class="band-inner contact-inner">
    <h2>Get in touch</h2>
    <ul>
      <li><a href="mailto:you@example.com">Email</a></li>
      <li><a href="https://github.com/yourusername">GitHub</a></li>
      <li><a href="https://linkedin.com/in/yourusername">LinkedIn</a></li>
      <li><a href="{{ '/assets/resume.pdf' | relative_url }}">Download Resume (PDF)</a></li>
    </ul>
  </div>
</section>