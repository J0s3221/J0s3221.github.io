---
layout: default
title: Home
---

<section class="hero">
  <h1>Hi, I'm [Your Name]</h1>
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
      <a href="{{ entry.url | relative_url }}" class="about-card about-card--{{ entry.size | default: 'normal' }}">
        <h3>{{ entry.title }}</h3>
        <p>{{ entry.teaser }}</p>
        <span class="card-link">Read more &rarr;</span>
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