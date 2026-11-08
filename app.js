(function(){
  "use strict";
  const C = window.PORTFOLIO_CONTENT;
  if(!C) throw new Error("Portfolio content failed to load.");

  const esc = value => String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  const arrow = (down=false) => `<span class="arrow-icon" aria-hidden="true">${down ? "↓" : "↗"}</span>`;
  const sectionLabel = (n,name) => `<div class="section-label"><span>(${n})</span><i></i><span>${esc(name)}</span></div>`;
  const techLine = tech => tech.map(esc).join('<span class="tech-sep">/</span>');
  const external = (url,label,className="") => `<a class="${className}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`;

  function editorMarkup(){
    const rows=C.hero.editor.map((line,i)=>{
      let inner="";
      if(line.kind==="comment") inner=`<span class="syntax-comment">${esc(line.text)}</span>`;
      else if(line.kind==="keyword") inner=`<span class="syntax-keyword">${esc(line.text)}</span> <span class="syntax-name">${esc(line.key)}</span>${esc(line.suffix||"")}`;
      else if(line.kind==="field") inner=`<span class="syntax-key">${esc(line.key)}</span><span class="syntax-punct"> = </span><span class="syntax-string">${esc(line.value)}</span>${line.comma?'<span class="syntax-punct">,</span>':""}`;
      else if(line.kind==="plain") inner=`<span class="syntax-punct">${esc(line.text)}</span>`;
      else inner=`<span class="syntax-keyword">${esc(line.text)}</span> <span class="syntax-name">${esc(line.key)}</span>`;
      return `<div class="code-row" style="--line-index:${i}"><span class="line-number">${String(i+1).padStart(2,"0")}</span><code>${inner}</code></div>`;
    }).join("");
    return `
      <div class="editor-window spotlight" data-tilt>
        <div class="editor-titlebar">
          <div class="window-controls"><i></i><i></i><i></i></div>
          <span class="editor-path">nvim — ~/.nvim/<b>leon.profile</b></span>
          <span class="editor-window-mark">⌘</span>
        </div>
        <div class="editor-tabs"><span class="tab-active">● leon.profile</span><span>init.lua</span><span class="tab-end">+</span></div>
        <div class="editor-buffer" aria-label="Neovim Lua profile editor">
          ${rows}
          <div class="code-row cursor-row"><span class="line-number">14</span><code><span class="block-cursor"></span></code></div>
          <div class="code-row faint-row"><span class="line-number">15</span><code><span class="syntax-comment">~</span></code></div>
          <div class="code-row faint-row"><span class="line-number">16</span><code><span class="syntax-comment">~</span></code></div>
        </div>
        <div class="editor-statusline"><span class="mode-block">NORMAL</span><span>leon.profile</span><span class="status-spacer"></span><span>lua</span><span>utf-8</span><span>14:12</span></div>
      </div>`;
  }

  function glyphPreview(){
    return `<div class="preview-shell preview-glyph">
      <div class="mock-top"><span class="mock-dots"><i></i><i></i><i></i><i></i><i></i></span><b class="doto">GLYPH</b><span class="mock-wifi">wifi ▮▮▮▯</span></div>
      <div class="glyph-clock"><strong class="doto">09:47</strong><span>SUN · WAYLAND SESSION</span></div>
      <div class="glyph-controls">
        <div class="control-grid">
          <div class="control-tile on"><span>◉</span><b>Wi-Fi</b><small>Connected</small></div>
          <div class="control-tile on"><span>ᛒ</span><b>Bluetooth</b><small>Enabled</small></div>
          <div class="control-tile"><span>☾</span><b>DND</b><small>Disabled</small></div>
          <div class="control-tile"><span>◐</span><b>Night</b><small>Disabled</small></div>
        </div>
        <div class="mock-sliders"><div><small>Brightness</small><i><b style="width:78%"></b></i></div><div><small>Volume</small><i><b style="width:46%"></b></i></div></div>
        <div class="system-meters"><span>CPU ⠿⠿⠿</span><span>MEM ⠿⠿</span><span>NET ⠿⠿⠿</span></div>
      </div>
      <div class="glyph-command"><span>⌕</span><b>glyph command</b><small>super + space</small><i></i></div>
      <div class="glyph-dock"><span>◈</span><span>⌘</span><span>▤</span><span>◉</span><span>⌁</span><span>⚙</span></div>
    </div>`;
  }

  function cipherPreview(){
    return `<div class="preview-shell preview-cipher">
      <div class="watch-stage">
        <div class="watch-strap"></div>
        <div class="watch-body"><div class="watch-screen">
          <div class="watch-status"><i></i><span>WATCH MODE</span></div>
          <strong class="doto">10:08</strong>
          <span class="watch-date">Sun, 8 Nov</span>
          <div class="watch-divider"></div>
          <div class="watch-stat"><span>⌁</span><b>6,240</b></div>
          <div class="watch-battery"><i></i><span>81%</span></div>
        </div></div>
        <span class="watch-caption">CIPHER / WATCH</span>
      </div>
      <div class="pin-stage">
        <div class="pin-title">ENTER PIN <span>•••○</span></div>
        <div class="pin-dots"><i></i><i></i><i></i><i></i></div>
        <div class="pin-grid">${["1","2","3","4","5","6","7","8","9","•","0","⌫"].map(x=>`<span class="${x==="5"?"selected":""}">${x}</span>`).join("")}</div>
        <div class="pin-foot">watch PIN <i></i> launcher PIN</div>
      </div>
    </div>`;
  }

  function oneGlyphPreview(){
    return `<div class="preview-shell preview-one">
      <div class="phone-preview">
        <img src="assets/oneglyph-phone-preview.svg" alt="Black Nothing Phone (3a) Lite rear panel" loading="lazy">
        <span class="glyph-pulse" aria-hidden="true"></span>
        <span class="phone-image-label">NOTHING PHONE (3a) LITE</span>
      </div>
      <div class="glyph-modes">
        <div class="mode-heading">ONE DOT <i></i> MODES</div>
        <div class="mode-list"><span>music</span><span>notify</span><span class="active">morse</span><span>timer</span><span>charge</span></div>
        <div class="morse-code">·−·· · −−− −·</div>
        <div class="glyph-mode-footer"><i></i> GLYPH INTERFACE</div>
      </div>
    </div>`;
  }

  function tvPreview(){
    return `<div class="preview-shell preview-tv">
      <div class="tv-frame">
        <div class="tv-screen">
          <div class="tv-topbar"><b>publivore</b><span>HOME&nbsp;&nbsp;&nbsp; SEARCH&nbsp;&nbsp;&nbsp; SHORTS&nbsp;&nbsp;&nbsp; LIBRARY</span><i>●</i></div>
          <div class="tv-hero-tile"><div><small>FEATURED · NOW PLAYING</small><b>Explore something<br>worth watching.</b><span>PLAY NOW&nbsp; ↗</span></div><i class="tv-play">▶</i></div>
          <div class="tv-row-title">Recommended <small>VIEW ALL ↗</small></div>
          <div class="tv-tiles"><i></i><i class="focus-tile"></i><i></i><i></i></div>
          <div class="tv-row-title">Continue watching</div>
          <div class="tv-tiles short"><i></i><i></i><i></i></div>
        </div>
        <div class="tv-bezel"></div>
      </div>
      <div class="tv-stand"></div>
      <div class="tv-dpad">◀&nbsp; OK &nbsp;▶&nbsp; D-PAD NAVIGATION</div>
    </div>`;
  }

  function featureMarkup(project,i){
    const preview={glyph:glyphPreview,cipher:cipherPreview,oneglyph:oneGlyphPreview,tv:tvPreview}[project.preview]();
    return `<article class="feature-row ${i%2?"reverse":""}" data-reveal>
      <div class="feature-copy">
        <div class="feature-top"><span class="feature-kind">${esc(project.number)} — ${esc(project.kind)}</span><span class="status-tag ${project.solidState?"solid":""}">${project.solidState?"":'<i></i>'}${esc(project.state)}</span></div>
        <h3>${esc(project.name)}</h3>
        <p class="feature-tagline">${esc(project.tagline)}</p>
        <p class="feature-description">${esc(project.description)}</p>
        <ul class="feature-details">${project.details.map(d=>`<li>${esc(d)}</li>`).join("")}</ul>
        <div class="feature-tech">${techLine(project.tech)}</div>
        <div class="feature-actions">${external(project.url,`Repository ${arrow()}`,"pill-button white")}${project.site?external(project.site,`Project site ${arrow()}`,"pill-button outline"):""}</div>
      </div>
      <div class="feature-preview spotlight" data-preview="${esc(project.preview)}">
        <div class="preview-index">${esc(project.number)} / PREVIEW</div>
        ${preview}
        <a class="preview-open" href="${esc(project.url)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${esc(project.name)} repository">${arrow()}</a>
      </div>
    </article>`;
  }

  function appArt(type){
    if(type==="wave") return `<div class="art-wave">${Array.from({length:24},(_,i)=>`<i style="--bar:${(18+Math.abs(Math.sin(i*.7))*58+(i%4)*5)}%;--n:${i}"></i>`).join("")}<div class="mini-player"><span>◉&nbsp; Now playing</span><b>Ⅱ</b></div></div>`;
    if(type==="shield") return `<div class="art-shield"><svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 8 82 20v25c0 22-13 37-32 47C31 82 18 67 18 45V20L50 8Z"/><rect x="36" y="44" width="28" height="23" rx="5"/><path d="M42 44v-7a8 8 0 0 1 16 0v7"/></svg><div><span>PIN</span><span>FINGERPRINT</span><span>FACE ID</span></div></div>`;
    if(type==="clock") return `<div class="art-clock"><div class="clock-face"><i class="hand hour"></i><i class="hand minute"></i><i class="hand second"></i><b></b></div><span>YOUR LOCAL TIME</span><strong class="clock-digital">10:10</strong></div>`;
    return `<div class="art-terminal"><div class="art-terminal-head"><i></i><i></i><i></i><span>leon@arch:~</span></div><code>$ avenueboot Win11.iso /dev/sdb</code><code>→ checking ISO… <b>Windows ✓</b></code><code>→ writing <b>████████████ 100%</b></code><code>✓ done. safe to remove.</code></div>`;
  }

  function appMarkup(project,i){
    return `<article class="app-card app-span-${i===0?7:i===1?5:i===2?5:7}" data-reveal>
      <div class="app-copy">
        <div class="app-top"><span>${esc(project.kind)}</span><span class="status-tag ${project.solidStatus?"solid":""}">${project.solidStatus?"":'<i></i>'}${esc(project.status)}</span></div>
        <h4>${esc(project.name)}<a href="${esc(project.url)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${esc(project.name)} repository">${arrow()}</a></h4>
        <p>${esc(project.description)}</p>
        <div class="app-tech">${project.tech.map(esc).join(" · ")}</div>
      </div>
      <div class="app-art">${appArt(project.art)}</div>
    </article>`;
  }

  function render(){
    const root=document.getElementById("app");
    root.innerHTML=`
      <a class="skip-link" href="#main">Skip to content</a>
      <header class="site-header" id="site-header">
        <div class="availability-strip wrap">
          <div><span class="breathing-ring"></span><strong>Currently offline</strong><span class="availability-dash">—</span><span>Back in March 2027</span></div>
          <small>Repositories stay open in the meantime</small>
        </div>
        <nav class="main-nav wrap" aria-label="Main navigation">
          <a class="brand" href="#top" aria-label="Leon Sony home">
            <img src="https://avatars.githubusercontent.com/u/192235822?v=4&s=180" alt="" width="36" height="36">
            <span class="brand-copy"><b>Leon Sony</b><small>@jackson4rocks</small></span>
          </a>
          <div class="desktop-links">
            <a href="#top" data-nav="top" class="active">Index</a>
            <a href="#about" data-nav="about">About</a>
            <a href="#work" data-nav="work">Work</a>
            <a href="#lab" data-nav="lab">Lab</a>
            <a href="#contact" data-nav="contact">Contact</a>
          </div>
          <div class="nav-actions">
            ${external(C.identity.github,`GitHub ${arrow()}`,"github-pill")}
            <button class="menu-toggle" id="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-sheet"><span></span><span></span><b>Menu</b></button>
          </div>
        </nav>
      </header>

      <div class="mobile-sheet" id="mobile-sheet" aria-hidden="true">
        <div class="mobile-sheet-head"><span>Navigate</span><button id="menu-close" type="button">Close ×</button></div>
        <nav class="mobile-sheet-links" aria-label="Mobile navigation">
          <a href="#top" data-menu-link="top"><small>00</small>Index <span>↗</span></a>
          <a href="#about" data-menu-link="about"><small>01</small>About <span>↗</span></a>
          <a href="#work" data-menu-link="work"><small>02</small>Work <span>↗</span></a>
          <a href="#lab" data-menu-link="lab"><small>03</small>Lab <span>↗</span></a>
          <a href="#contact" data-menu-link="contact"><small>04</small>Contact <span>↗</span></a>
        </nav>
        <div class="mobile-sheet-bottom">
          <p><i></i> ${esc(C.identity.offline)}</p>
          <div>${external(C.identity.github,`GitHub ${arrow()}`,"pill-button outline")}${external("mailto:"+C.identity.email,`Email ${arrow()}`,"pill-button white")}</div>
        </div>
      </div>

      <main id="main" class="wrap">
        <section class="hero" id="top" aria-labelledby="hero-title">
          <div class="hero-meta-row"><span>Portfolio — Ed. 2026</span><i></i><span>Index / 00</span><i></i><span>Linux · Android · Systems</span></div>
          <div class="hero-grid">
            <div class="hero-copy">
              <h1 id="hero-title" class="hero-title"><span class="title-mask"><span>Leon</span></span><span class="title-mask sony"><span>Sony</span></span></h1>
              <div class="hello-row"><span>↳ Hello</span><p>I'm Leon — a developer working across <b>Linux and Android</b>. I build apps, desktop environments, Android TV experiences and low-level experiments, and I like making software feel right <em>from the surface down.</em></p></div>
              <div class="hero-actions"><a class="pill-button white" href="#work">Selected work ${arrow(true)}</a>${external(C.identity.github,"github.com/Jackson4Rocks "+arrow(),"pill-button outline")}</div>
              <div class="hero-offline"><span class="breathing-ring"></span><span>${esc(C.identity.offline)}</span></div>
            </div>
            <div class="hero-visual">
              ${editorMarkup()}
              <div class="hero-chips">
                <div><small>Status</small><b><i class="tiny-dot"></i>offline</b></div>
                <div><small>Returns</small><b>March 2027</b></div>
                <div><small>OS</small><b>Arch Linux</b></div>
                <div><small>Editor</small><b>Neovim</b></div>
              </div>
            </div>
          </div>
          <div class="marquee" aria-label="Areas of work"><div class="marquee-track">${[...C.hero.marquee,...C.hero.marquee].map((x,i)=>`<span>${i%8===2||i%8===4?'<em>':''}${esc(x)}${i%8===2||i%8===4?'</em>':''}<i></i></span>`).join("")}</div></div>
        </section>

        <section class="section about-section" id="about" aria-labelledby="about-title">
          <div class="section-heading"><div>${sectionLabel("01","About")}<h2 id="about-title">${esc(C.about.headingA)}<br><em>${esc(C.about.headingB)}</em></h2></div><p class="heading-side-copy">${esc(C.about.sideIntro)}</p></div>
          <div class="about-layout">
            <aside class="interests-column"><div class="micro-label">Interests</div>${C.about.interests.map((x,i)=>`<div class="interest-row"><small>${String(i+1).padStart(2,"0")}</small><span>${esc(x)}</span></div>`).join("")}</aside>
            <div class="about-prose"><p class="about-lead">${esc(C.about.intro)}</p><p>${esc(C.about.sideIntro)}</p><p>${esc(C.about.philosophy)}</p></div>
            <aside class="environment-card"><div class="env-card-head"><b>Environment</b><span>~/.config</span></div><div class="env-list">${C.about.environment.map(([k,v])=>`<div><small>${esc(k)}</small><b>${esc(v)}</b></div>`).join("")}</div></aside>
          </div>
          <div class="toolbox-block">
            <div class="toolbox-heading"><div class="micro-label">Toolbox</div><p>${esc(C.about.toolboxIntro)}</p></div>
            <div class="toolbox-groups">${C.about.tools.map(group=>`<div class="toolbox-group"><small>${esc(group.title)}</small><div>${group.items.map(item=>`<span>${esc(item)}</span>`).join("")}</div></div>`).join("")}</div>
          </div>
          <div class="process-block"><div class="process-heading"><span>Usual process</span><small>leon@arch:~</small></div><div class="process-grid">${C.about.process.map(([command,desc],i)=>`<div class="process-step"><b>${String(i+1).padStart(2,"0")}</b><code>${esc(command)}</code><span>${esc(desc)}</span></div>`).join("")}</div></div>
        </section>

        <section class="section work-section" id="work" aria-labelledby="work-title">
          <div class="section-heading"><div>${sectionLabel("02","Selected work")}<h2 id="work-title">Built from the <em>interface</em><br>down.</h2></div><div class="work-heading-right"><p>Android apps, Linux desktops and big-screen software. Each repository is the source of truth for build and release status.</p><small>12 projects · open source</small></div></div>
          <div class="featured-list">${C.featured.map(featureMarkup).join("")}</div>
          <div class="more-apps-heading"><h3>More <em>apps &amp; tools</em></h3><p>Android · Linux</p></div>
          <div class="apps-grid">${C.moreApps.map(appMarkup).join("")}</div>
          <div class="repo-index"><div class="repo-index-heading"><h3>Also in the repositories</h3><small>Description <span></span> Status</small></div><div class="repo-table"><div class="repo-table-head"><span>Project</span><span>Description</span><span>Status</span><span></span></div>${C.repositoryIndex.map((p,i)=>`<a class="repo-row" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer"><span class="repo-name"><small>${String(i+1).padStart(2,"0")}</small><b>${esc(p.name)}</b></span><span class="repo-description"><i>${esc(p.kind)}</i>${esc(p.description)}</span><span class="repo-state">${esc(p.status)}</span><span class="repo-arrow">↗</span></a>`).join("")}</div></div>
        </section>

        <section class="section lab-section" id="lab" aria-labelledby="lab-title">
          <div class="lab-layout"><div class="lab-sticky"><div class="micro-label"> ${sectionLabel("03","The lab")}</div><h2 id="lab-title">Up next.<br><em>Not shipped yet.</em></h2><p>The bigger projects take time. These are the directions currently visible in the repositories — not claims that a release is ready.</p></div><div class="lab-items">${C.lab.map((item,i)=>`<article class="lab-item" data-reveal><div class="lab-item-top"><b>${String(i+1).padStart(2,"0")}</b><span>${esc(item[0])}</span><i></i><small>${esc(item[1])}</small></div><h3>${esc(item[2])}</h3><p>${esc(item[3])}</p></article>`).join("")}</div></div>
        </section>

        <section class="section contact-section" id="contact" aria-labelledby="contact-title">
          ${sectionLabel("04","Contact")}
          <div class="contact-main"><div><h2 id="contact-title">${esc(C.contact.headingA)}<br><em>${esc(C.contact.headingB)}</em></h2><p>${esc(C.contact.body)}</p></div><a class="contact-email" href="mailto:${esc(C.identity.email)}"><span>${esc(C.identity.email)}</span><b>${arrow()}</b></a></div>
          <div class="contact-grid">
            <a href="${esc(C.identity.github)}" target="_blank" rel="noopener noreferrer"><small>GitHub</small><b>@Jackson4Rocks ${arrow()}</b></a>
            <a href="https://github.com/Jackson4Rocks?tab=repositories" target="_blank" rel="noopener noreferrer"><small>Source</small><b>All repositories ${arrow()}</b></a>
            <div><small>Status</small><b><i class="tiny-dot"></i>Currently offline / Back in March 2027</b></div>
          </div>
        </section>
      </main>
      <footer class="site-footer wrap"><div class="footer-wordmark">Leon <em>Sony</em></div><div class="footer-bar"><span>© 2026 Leon Sony · Jackson4Rocks</span><span>${esc(C.footer)}</span><a href="#top">Back to top ↑</a></div></footer>`;
  }

  render();

  const header=document.getElementById("site-header");
  const navLinks=[...document.querySelectorAll("[data-nav]")];
  const sections=["top","about","work","lab","contact"].map(id=>document.getElementById(id)).filter(Boolean);
  let frame=false;
  function onScroll(){
    if(frame)return;
    frame=true;
    requestAnimationFrame(()=>{
      const y=window.scrollY||0;
      header.classList.toggle("scrolled",y>120);
      const heroTitle=document.querySelector(".hero-title");
      const editor=document.querySelector(".editor-window");
      if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
        if(heroTitle)heroTitle.style.transform="translate3d(0,"+(-y*.08)+"px,0)";
        if(editor)editor.style.transform="perspective(1200px) translate3d(0,"+(y*.04)+"px,0) rotateX("+editor.dataset.rx+"deg) rotateY("+editor.dataset.ry+"deg)";
      }
      frame=false;
    });
  }
  window.addEventListener("scroll",onScroll,{passive:true});onScroll();

  if("IntersectionObserver" in window){
    const sectionObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          navLinks.forEach(link=>link.classList.toggle("active",link.dataset.nav===entry.target.id));
          document.querySelectorAll("[data-menu-link]").forEach(link=>link.classList.toggle("active",link.dataset.menuLink===entry.target.id));
        }
      });
    },{rootMargin:"-45% 0px -50% 0px",threshold:0});
    sections.forEach(section=>sectionObserver.observe(section));
    const revealObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("revealed");revealObserver.unobserve(entry.target);}});
    },{threshold:.08,rootMargin:"0px 0px -8% 0px"});
    document.querySelectorAll("[data-reveal]").forEach((el,i)=>{el.style.setProperty("--reveal-delay",(i%2)*90+"ms");revealObserver.observe(el);});
  }else{
    document.querySelectorAll("[data-reveal]").forEach(el=>el.classList.add("revealed"));
  }

  document.querySelectorAll(".spotlight").forEach(card=>{
    card.addEventListener("pointermove",event=>{
      const rect=card.getBoundingClientRect();
      card.style.setProperty("--mx",(event.clientX-rect.left)+"px");
      card.style.setProperty("--my",(event.clientY-rect.top)+"px");
    });
  });

  const tilt=document.querySelector("[data-tilt]");
  if(tilt && matchMedia("(hover:hover) and (pointer:fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches){
    tilt.addEventListener("pointermove",event=>{
      const rect=tilt.getBoundingClientRect();
      const x=(event.clientX-rect.left)/rect.width-.5;
      const y=(event.clientY-rect.top)/rect.height-.5;
      const rx=(-y*5).toFixed(2), ry=(x*7).toFixed(2);
      tilt.dataset.rx=rx;tilt.dataset.ry=ry;
      tilt.style.transform="perspective(1200px) rotateX("+rx+"deg) rotateY("+ry+"deg)";
    });
    tilt.addEventListener("pointerleave",()=>{tilt.dataset.rx="0";tilt.dataset.ry="0";tilt.style.transform="perspective(1200px) rotateX(0) rotateY(0)";});
  }

  const toggle=document.getElementById("menu-toggle");
  const sheet=document.getElementById("mobile-sheet");
  const close=document.getElementById("menu-close");
  function closeMenu(){
    sheet.classList.remove("open");sheet.setAttribute("aria-hidden","true");
    toggle.setAttribute("aria-expanded","false");document.body.classList.remove("menu-open");
  }
  function openMenu(){
    sheet.classList.add("open");sheet.setAttribute("aria-hidden","false");
    toggle.setAttribute("aria-expanded","true");document.body.classList.add("menu-open");
    close.focus();
  }
  toggle.addEventListener("click",()=>toggle.getAttribute("aria-expanded")==="true"?closeMenu():openMenu());
  close.addEventListener("click",closeMenu);
  sheet.querySelectorAll("a").forEach(link=>link.addEventListener("click",closeMenu));
  document.addEventListener("keydown",event=>{if(event.key==="Escape" && sheet.classList.contains("open")){closeMenu();toggle.focus();}});

  function updateClock(){
    const node=document.querySelector(".clock-digital");
    const hour=document.querySelector(".art-clock .hand.hour");
    const minute=document.querySelector(".art-clock .hand.minute");
    const second=document.querySelector(".art-clock .hand.second");
    if(!node)return;
    const now=new Date();
    node.textContent=new Intl.DateTimeFormat(undefined,{hour:"2-digit",minute:"2-digit",hour12:false}).format(now);
    if(hour)hour.style.transform="rotate("+(now.getHours()%12*30+now.getMinutes()*.5)+"deg)";
    if(minute)minute.style.transform="rotate("+(now.getMinutes()*6)+"deg)";
    if(second)second.style.transform="rotate("+(now.getSeconds()*6)+"deg)";
  }
  updateClock();setInterval(updateClock,1000);
})();