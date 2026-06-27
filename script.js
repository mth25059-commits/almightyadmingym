/* ============================================================
   ALMIGHTY GYM — MAIN SCRIPT v2.0
   Full Dynamic Settings + Local DB + Social Links + Maps
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ==================== DEFAULTS ====================
  const defaults = {
    phone: '+91 99999 99999',
    whatsapp: '919999999999',
    email: 'info@almightygym.in',
    address: 'opposite satya the hive, Dhankot, Gurugram, Haryana 122505',
    direction_url: 'https://www.google.com/maps?daddr=opposite+satya+the+hive,+Dhankot,+Gurugram,+Haryana+122505',
    insta_url: '#',
    fb_url: '#',
    yt_url: '#',
    hours_weekday: 'Mon\u2013Sat: 5AM \u2013 11PM',
    hours_sunday: 'Sun: 6AM \u2013 8PM',
    aboutImg1: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&q=80&auto=format&fit=crop',
    aboutImg2: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&q=80&auto=format&fit=crop',
    aboutImg3: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80&auto=format&fit=crop',
    galleryImg1: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&q=80&auto=format&fit=crop',
    galleryImg2: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&q=80&auto=format&fit=crop',
    galleryImg3: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80&auto=format&fit=crop',
    galleryImg4: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500&q=80&auto=format&fit=crop',
    galleryImg5: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=500&q=80&auto=format&fit=crop',
    galleryImg6: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=500&q=80&auto=format&fit=crop',
    trainer1Img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80&auto=format&fit=crop&crop=faces',
    trainer1Name: 'Arjun Sharma',
    trainer1Role: 'Head Coach \u2014 Strength & Conditioning',
    trainer1Bio: '12+ years elite bodybuilding. Former state powerlifter.',
    trainer2Img: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&q=80&auto=format&fit=crop&crop=faces',
    trainer2Name: 'Priya Nair',
    trainer2Role: 'HIIT & Functional Coach',
    trainer2Bio: 'Certified HIIT specialist. Fat loss and endurance expert.',
    trainer3Img: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?w=400&q=80&auto=format&fit=crop&crop=faces',
    trainer3Name: 'Rohan Mehta',
    trainer3Role: 'Nutrition & Physique Coach',
    trainer3Bio: 'IFBB-certified. Body recomposition and diet expert.'
  };

  const settings = JSON.parse(localStorage.getItem('gym_settings')) || defaults;
  applyDynamicSettings(settings);

  function applyDynamicSettings(s) {
    // Phone
    ['sitePhoneLink','footerPhone'].forEach(id => {
      const el = document.getElementById(id);
      if (el) { el.href = 'tel:' + s.phone; el.textContent = s.phone; }
    });
    // Email
    ['siteEmailLink','footerEmail'].forEach(id => {
      const el = document.getElementById(id);
      if (el) { el.href = 'mailto:' + s.email; el.textContent = s.email; }
    });
    // Address
    ['siteAddress','footerAddress'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = s.address;
    });
    // Direction URLs
    ['directionBtn','siteDirectionBtn'].forEach(id => {
      const el = document.getElementById(id);
      if (el && s.direction_url) el.href = s.direction_url;
    });
    // Hours
    ['siteHours','footerHours'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = s.hours_weekday + ' \u00b7 ' + s.hours_sunday;
    });
    // WhatsApp
    const wa = s.whatsapp || '919999999999';
    ['siteWaBtn','waFloat','modalWaBtn','footerWa'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.href = 'https://wa.me/' + wa + '?text=' + encodeURIComponent('Hi Almighty Gym, I want to join!');
    });
    // Social Icons
    const socialMap = { footerInsta: s.insta_url, footerFb: s.fb_url, footerYt: s.yt_url };
    Object.entries(socialMap).forEach(([id, url]) => {
      const el = document.getElementById(id);
      if (el) el.href = url || '#';
    });
    // Photos
    ['aboutImg1','aboutImg2','aboutImg3','galleryImg1','galleryImg2','galleryImg3','galleryImg4','galleryImg5','galleryImg6','trainer1Img','trainer2Img','trainer3Img'].forEach(id => {
      const el = document.getElementById(id);
      if (el && s[id]) el.src = s[id];
    });
    // Trainer text
    ['trainer1Name','trainer1Role','trainer1Bio','trainer2Name','trainer2Role','trainer2Bio','trainer3Name','trainer3Role','trainer3Bio'].forEach(id => {
      const el = document.getElementById(id);
      if (el && s[id]) el.textContent = s[id];
    });
  }

  // ==================== LOADER ====================
  const loader = document.getElementById('loader');
  if (loader) {
    const hideLoader = () => setTimeout(() => loader.classList.add('hide'), 400);
    window.addEventListener('load', hideLoader);
    if (document.readyState === 'complete') hideLoader();
  }

  // ==================== VIDEO MOBILE FIX ====================
  const vid = document.getElementById('heroVideo');
  if (vid) {
    vid.setAttribute('muted', '');
    vid.setAttribute('playsinline', '');
    vid.muted = true;
    vid.play().catch(() => {});
  }

  // ==================== WELCOME MODAL ====================
  const welcomeModal = document.getElementById('welcomeModal');
  const welcomeClose = document.getElementById('welcomeModalClose');
  const welcomeSkip  = document.getElementById('welcomeSkip');
  if (welcomeModal) {
    setTimeout(() => { welcomeModal.classList.add('show'); document.body.style.overflow = 'hidden'; }, 1200);
    const closeWelcome = (e) => { if (e) e.preventDefault(); welcomeModal.classList.remove('show'); document.body.style.overflow = ''; };
    welcomeClose.addEventListener('click', closeWelcome);
    if (welcomeSkip) welcomeSkip.addEventListener('click', closeWelcome);
    welcomeModal.addEventListener('click', (e) => { if (e.target === welcomeModal) closeWelcome(); });
  }

  // ==================== FLOAT MODAL ====================
  const formModal    = document.getElementById('formModal');
  const formFloatBtn = document.getElementById('formFloat');
  const fmodalClose  = document.getElementById('fmodalClose');
  const openModalBtns = document.querySelectorAll('.open-modal-btn, #aboutJoinBtn');
  if (formModal) {
    const openFModal  = (e) => { if (e) e.preventDefault(); formModal.classList.add('show'); document.body.style.overflow = 'hidden'; };
    const closeFModal = (e) => { if (e) e.preventDefault(); formModal.classList.remove('show'); document.body.style.overflow = ''; };
    if (formFloatBtn) formFloatBtn.addEventListener('click', openFModal);
    if (fmodalClose)  fmodalClose.addEventListener('click', closeFModal);
    openModalBtns.forEach(btn => btn.addEventListener('click', openFModal));
    formModal.addEventListener('click', (e) => { if (e.target === formModal) closeFModal(); });
  }

  // ==================== NAVBAR ====================
  const navbar = document.getElementById('navbar');
  const handleScroll = () => { if (window.scrollY > 40) navbar.classList.add('scrolled'); else navbar.classList.remove('scrolled'); };
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // ==================== HAMBURGER ====================
  const hamburger = document.getElementById('hamburger');
  const navLinksContainer = document.getElementById('navLinks');
  const navLinks = document.querySelectorAll('.nav-link');
  if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', () => { hamburger.classList.toggle('open'); navLinksContainer.classList.toggle('open'); });
    navLinks.forEach(link => link.addEventListener('click', () => { hamburger.classList.remove('open'); navLinksContainer.classList.remove('open'); }));
  }

  // ==================== THEME ====================
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon   = document.getElementById('themeIcon');
  const htmlEl      = document.documentElement;
  const savedTheme  = localStorage.getItem('theme') || 'dark';
  htmlEl.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const t = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', t);
      localStorage.setItem('theme', t);
      updateThemeIcon(t);
    });
  }
  function updateThemeIcon(t) {
    if (!themeIcon) return;
    themeIcon.className = t === 'light' ? 'fas fa-sun' : 'fas fa-moon';
    themeIcon.style.color = t === 'light' ? '#c9a84c' : '';
  }

  // ==================== ACTIVE NAV LINK ====================
  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', () => {
    let current = '';
    const sp = window.scrollY + 100;
    sections.forEach(s => { if (sp >= s.offsetTop && sp < s.offsetTop + s.clientHeight) current = s.getAttribute('id'); });
    navLinks.forEach(l => { l.classList.remove('active'); if (l.getAttribute('href') === '#' + current) l.classList.add('active'); });
  });

  // ==================== COUNTER ====================
  setTimeout(() => {
    document.querySelectorAll('.stat-n').forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'), 10);
      let count = 0;
      const speed = 1500 / target;
      const update = () => {
        count += Math.ceil(target / 100);
        if (count >= target) { stat.innerText = target; }
        else { stat.innerText = count; setTimeout(update, speed * 5); }
      };
      update();
    });
  }, 800);

  // ==================== GALLERY FILTER ====================
  const tabs   = document.querySelectorAll('.tab');
  const gitems = document.querySelectorAll('.gitem');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-filter');
      gitems.forEach(item => {
        item.style.transform = 'scale(0.85)'; item.style.opacity = '0';
        setTimeout(() => {
          if (filter === 'all' || item.getAttribute('data-cat') === filter) {
            item.classList.remove('hidden');
            setTimeout(() => { item.style.transform = 'scale(1)'; item.style.opacity = '1'; }, 50);
          } else { item.classList.add('hidden'); }
        }, 300);
      });
    });
  });

  // ==================== REVIEWS CAROUSEL ====================
  const track  = document.getElementById('reviewsTrack');
  const rcards = document.querySelectorAll('.r-card');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const dotsContainer = document.getElementById('carouselDots');
  if (track && rcards.length > 0) {
    let ci = 0; const gap = 22;
    const getIPV = () => window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
    const maxI   = () => Math.max(0, rcards.length - getIPV());
    const update = () => {
      const cw = rcards[0].offsetWidth;
      track.style.transform = 'translateX(-' + ci * (cw + gap) + 'px)';
      document.querySelectorAll('.car-dot').forEach((d, i) => d.classList.toggle('active', i === ci));
    };
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      for (let i = 0; i < Math.max(1, rcards.length - getIPV() + 1); i++) {
        const d = document.createElement('button');
        d.className = 'car-dot' + (i === 0 ? ' active' : '');
        d.addEventListener('click', () => { ci = i; update(); });
        dotsContainer.appendChild(d);
      }
    }
    if (nextBtn) nextBtn.addEventListener('click', () => { ci = ci < maxI() ? ci + 1 : 0; update(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { ci = ci > 0 ? ci - 1 : maxI(); update(); });
    let auto = setInterval(() => { ci = ci < maxI() ? ci + 1 : 0; update(); }, 4000);
    const carousel = document.getElementById('reviewsCarousel');
    if (carousel) {
      carousel.addEventListener('mouseenter', () => clearInterval(auto));
      carousel.addEventListener('mouseleave', () => { auto = setInterval(() => { ci = ci < maxI() ? ci + 1 : 0; update(); }, 4000); });
    }
    window.addEventListener('resize', () => { ci = Math.min(ci, maxI()); update(); });
  }

  // ==================== BACK TO TOP ====================
  const btt = document.getElementById('backToTop');
  if (btt) {
    window.addEventListener('scroll', () => { if (window.scrollY > 400) btt.classList.add('show'); else btt.classList.remove('show'); });
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ==================== SAVE LEADS ====================
  const saveSubmission = (data) => {
    const existing = JSON.parse(localStorage.getItem('almighty_leads')) || [];
    existing.push({ id: Date.now(), timestamp: new Date().toLocaleString('en-IN'), ...data });
    localStorage.setItem('almighty_leads', JSON.stringify(existing));
    window.dispatchEvent(new StorageEvent('storage', { key: 'almighty_leads' }));
  };

  // ==================== FORMS ====================
  const initForm = (formId, successId, isWelcome = false) => {
    const form = document.getElementById(formId);
    const success = document.getElementById(successId);
    if (!form || !success) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      form.querySelectorAll('input[required]').forEach(inp => {
        if (!inp.value.trim()) { valid = false; inp.style.borderColor = 'var(--red)'; }
        else inp.style.borderColor = 'var(--bdr)';
      });
      if (!valid) return;
      const btn = form.querySelector('button[type="submit"]');
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
      btn.disabled = true;
      let fd = {};
      if (formId === 'welcomeForm')      fd = { name: document.getElementById('wfName').value.trim(), phone: document.getElementById('wfPhone').value.trim(), email: 'N/A', plan: document.getElementById('wfPlan').value || 'Free Trial', goal: 'Welcome Popup Lead' };
      else if (formId === 'contactForm') fd = { name: document.getElementById('fname').value.trim(), phone: document.getElementById('fphone').value.trim(), email: document.getElementById('femail').value.trim(), plan: document.getElementById('fplan').value || 'General Enquiry', goal: document.getElementById('fmsg').value.trim() };
      else                               fd = { name: document.getElementById('mfname').value.trim(), phone: document.getElementById('mfphone').value.trim(), email: document.getElementById('mfemail').value.trim(), plan: document.getElementById('mfplan').value || 'General Enquiry', goal: document.getElementById('mfgoal').value.trim() };
      saveSubmission(fd);
      setTimeout(() => {
        form.reset(); btn.innerHTML = orig; btn.disabled = false; success.style.display = 'flex';
        setTimeout(() => {
          success.style.display = 'none';
          if (isWelcome) { const wm = document.getElementById('welcomeModal'); if (wm) { wm.classList.remove('show'); document.body.style.overflow = ''; } }
          else if (formId === 'modalContactForm') { const fm = document.getElementById('formModal'); if (fm) { fm.classList.remove('show'); document.body.style.overflow = ''; } }
        }, 3000);
      }, 1200);
    });
  };
  initForm('welcomeForm', 'wfSuccess', true);
  initForm('contactForm', 'formSuccess');
  initForm('modalContactForm', 'modalFormSuccess');

  // ==================== REVEAL ====================
  const revealAll = () => document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => { if (el.getBoundingClientRect().top < window.innerHeight - 80) el.classList.add('visible'); });
  window.addEventListener('scroll', revealAll);
  revealAll();
});
