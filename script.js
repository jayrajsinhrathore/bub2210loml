/**
 * ============================================================================
 * 22:10 — STILL US | CLIENT SCRIPT
 * A private digital love letter and personal memory journey.
 * Pure Vanilla JavaScript (ES6+) — No external libraries. Zero audio.
 * ============================================================================
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
   * 1. CONFIGURATION & STORY METADATA
   * -------------------------------------------------------------------------- */
  const TOTAL_IMAGES = 50;
  const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

  // Present-tense, hopeful, respectful captions emphasizing real feelings
  const MEMORY_METADATA = {
    1: {
      title: 'The Beginning of Life',
      date: 'Years Ago',
      caption: 'And this was only the beginning.',
      subnote: 'Long before our worlds aligned, you carried that same quiet magic.',
      layout: 'center'
    },
    2: {
      title: 'A Little Wonder',
      date: 'Early Childhood',
      caption: 'I still smile when I see this.',
      subnote: 'Pure sweetness, and a smile that continues to mean so much to me.',
      layout: 'polaroid',
      tilt: 'tilt-left'
    },
    3: {
      title: 'Growing Up Gracefully',
      date: 'Before We Met',
      caption: 'Some moments stay close to the heart.',
      subnote: 'That quiet grace you carried before I was lucky enough to know you.',
      layout: 'left'
    },
    4: {
      title: 'The Radiant Days',
      date: 'Sunny Afternoon',
      caption: 'You still bring sunshine wherever you stand.',
      subnote: 'Some people simply illuminate everything around them without even trying.',
      layout: 'right'
    },
    5: {
      title: 'Walking Beside You',
      date: '22.10.2023',
      caption: 'The warmth of your hand in mine.',
      subnote: 'That feeling of fingers gently laced together still stays with me.',
      layout: 'left'
    },
    6: {
      title: 'Silent Promises',
      date: 'Autumn 2023',
      caption: 'Promises that don’t fade with time.',
      subnote: 'Two hands, two rings, and a bond that continues to matter to me deeply.',
      layout: 'polaroid',
      tilt: 'tilt-right'
    },
    7: {
      title: 'Ordinary Becomes Extraordinary',
      date: 'Warm Afternoon',
      caption: 'I still remember how happy this moment felt.',
      subnote: 'Sitting together in the quiet shade made the entire world feel peaceful.',
      layout: 'right'
    },
    8: {
      title: 'Following Your Light',
      date: 'Golden Hour',
      caption: 'Wherever that path led, I was grateful just to be walking beside you.',
      subnote: 'Gently holding on, never in a rush, wishing the afternoon wouldn’t end.',
      layout: 'center'
    },
    9: {
      title: 'Quiet Warmth',
      date: 'Cold Night',
      caption: 'The safest place in my world.',
      subnote: 'Wrapped under blankets, laughing at little things only we understood.',
      layout: 'polaroid',
      tilt: 'tilt-left'
    },
    10: {
      title: 'Golden Moments',
      date: 'Under the Trees',
      caption: 'I wish I had appreciated the little things even more while living them.',
      subnote: 'Every glance captured a happiness that felt so gentle and natural.',
      layout: 'left'
    },
    11: {
      title: 'Where It All Started',
      date: 'College Canteen',
      caption: 'Where two nervous souls met across a canteen table.',
      subnote: 'Playful filters, shy smiles, and knowing someone very special had entered my life.',
      layout: 'polaroid',
      tilt: 'tilt-right'
    },
    12: {
      title: 'The Open Road',
      date: 'First Date Road Trip',
      caption: 'Catching your reflection in the mirror as the highway blurred past.',
      subnote: 'Wind in your hair, your arms holding on, and a feeling that time stood still.',
      layout: 'right'
    },
    13: {
      title: 'That First Embrace',
      date: 'The Sweetest Secret',
      caption: 'When the rest of the world completely vanished.',
      subnote: 'That gentle embrace still feels so vivid and real to me.',
      layout: 'center'
    },
    14: {
      title: 'The Little Things',
      date: 'Café Evening',
      caption: 'Maybe it was never about the place. Maybe it was simply about being there with you.',
      subnote: 'Under the soft terrace lights, just sitting close and watching the world.',
      layout: 'cafe-1'
    },
    15: {
      title: 'Stolen Glances',
      date: 'Across the Table',
      caption: 'I still look at you with the exact same sincerity.',
      subnote: 'You were looking ahead, and I was looking at my favourite view in the room.',
      layout: 'cafe-2'
    },
    16: {
      title: 'For You',
      date: 'On the Way',
      caption: 'Holding flowers with a racing heart on my way to meet you.',
      subnote: 'Thinking about the smile you would have when I opened the door.',
      layout: 'left'
    },
    17: {
      title: 'Her Flowers',
      date: 'In the Car',
      caption: 'These little moments still mean something to me.',
      subnote: 'Seeing you hold that bouquet was a picture I keep in my heart.',
      layout: 'polaroid',
      tilt: 'tilt-left'
    },
    18: {
      title: 'Dinner Date',
      date: 'Evening Out',
      caption: 'Sharing meals, sharing dreams, and talking until the restaurant emptied.',
      subnote: 'The comfort of being completely ourselves with no pretenses.',
      layout: 'right'
    },
    19: {
      title: 'Candid Grace',
      date: 'Unguarded Beauty',
      caption: 'I love you in all the little, unguarded moments.',
      subnote: 'You mid-sip, smiling at something I said. Simple. Unfiltered. Precious.',
      layout: 'center'
    },
    20: {
      title: 'Sleepy Whispers',
      date: '12:40 AM',
      caption: 'Falling asleep on call, knowing you were on the other side.',
      subnote: 'The quiet breathing, the glowing screen, and feeling close across the distance.',
      layout: 'polaroid',
      tilt: 'tilt-right'
    },
    21: {
      title: 'Tender Silence',
      date: 'Late Night',
      caption: 'What is felt deeply never truly fades.',
      subnote: 'In the stillness of the night, words weren’t even necessary.',
      layout: 'left'
    },
    22: {
      title: 'The Distance',
      date: 'FaceTime Call',
      caption: 'When miles stood between us, but you remained my favourite notification.',
      subnote: 'Saved as "Loml" on my phone — because my heart still means it.',
      layout: 'polaroid',
      tilt: 'tilt-left'
    },
    23: {
      title: 'The Warmth You Give',
      date: 'Sweetest Care',
      caption: 'You gently petting that friendly dog, while I watched you with pure adoration.',
      subnote: 'Your gentleness with the world is one of the things I love most about you.',
      layout: 'center'
    }
  };

  /* --------------------------------------------------------------------------
   * 2. STATE MANAGEMENT
   * -------------------------------------------------------------------------- */
  const state = {
    imagesLoaded: []
  };

  /* --------------------------------------------------------------------------
   * 3. DOM ELEMENTS
   * -------------------------------------------------------------------------- */
  const dom = {
    openingScreen: document.getElementById('opening-screen'),
    enterBtn: document.getElementById('enter-btn'),
    openingLines: document.querySelectorAll('.opening-line'),
    memoriesContainer: document.getElementById('memories-container'),
    cafePolaroids: document.getElementById('cafe-polaroids'),
    finalImageHolder: document.getElementById('final-image-holder'),
    timelineProgressBar: document.getElementById('timeline-progress-bar'),
    timelineItems: document.querySelectorAll('.timeline-item'),
    timelineSection: document.getElementById('timeline-section'),
    letterParagraphs: document.querySelectorAll('.letter-p'),
    feelLines: document.querySelectorAll('.feel-line'),
    finalParagraphs: document.querySelectorAll('.final-p'),
    secretCodeForm: document.getElementById('secret-code-form'),
    codeBoxes: document.querySelectorAll('.code-box'),
    codeFeedback: document.getElementById('code-feedback'),
    secretDrawer: document.getElementById('secret-reveal-drawer'),
    particlesCanvas: document.getElementById('particles-canvas'),
    replayBtn: document.getElementById('replay-btn'),
    photoLightbox: document.getElementById('photo-lightbox'),
    lightboxImg: document.getElementById('lightbox-img'),
    lightboxNumber: document.getElementById('lightbox-number'),
    lightboxCaption: document.getElementById('lightbox-caption'),
    lightboxClose: document.getElementById('lightbox-close'),
    lightboxBackdrop: document.getElementById('lightbox-backdrop')
  };

  /* --------------------------------------------------------------------------
   * 4. INITIALIZATION SEQUENCE
   * -------------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    initOpeningScreen();
    initParticles();
    initImageLoader();
    initTimeline();
    initSecretCode();
    initReplayControls();
    initLightbox();
  });

  /* --------------------------------------------------------------------------
   * 5. OPENING SCREEN SEQUENCING
   * -------------------------------------------------------------------------- */
  function initOpeningScreen() {
    setTimeout(() => dom.openingLines[0]?.classList.add('is-visible'), 500);
    setTimeout(() => dom.openingLines[1]?.classList.add('is-visible'), 1800);
    setTimeout(() => dom.openingLines[2]?.classList.add('is-visible'), 3400);
    setTimeout(() => dom.enterBtn?.classList.add('is-visible'), 4600);

    dom.enterBtn?.addEventListener('click', () => {
      dom.openingScreen.classList.add('dismissed');

      const hero = document.getElementById('hero-section');
      if (hero) {
        hero.scrollIntoView({ behavior: 'smooth' });
      }

      setTimeout(() => {
        dom.openingScreen.style.display = 'none';
      }, 1400);
    });
  }

  /* --------------------------------------------------------------------------
   * 6. DYNAMIC IMAGE LOADER (STRICT NUMERICAL ORDER)
   * -------------------------------------------------------------------------- */
  async function initImageLoader() {
    const probePromises = [];

    // Probe sequentially 1 to TOTAL_IMAGES
    for (let i = 1; i <= TOTAL_IMAGES; i++) {
      probePromises.push(probeImageForIndex(i));
    }

    const probeResults = await Promise.all(probePromises);

    // Filter missing images, maintain strict numeric order
    state.imagesLoaded = probeResults
      .filter((img) => img !== null)
      .sort((a, b) => a.index - b.index);

    renderMemoryCards();
    setupIntersectionObserver();
  }

  function probeImageForIndex(index) {
    return new Promise((resolve) => {
      let extIndex = 0;

      function tryNext() {
        if (extIndex >= SUPPORTED_EXTENSIONS.length) {
          console.warn(`Image ${index} not found. Skipping gracefully.`);
          resolve(null);
          return;
        }

        const ext = SUPPORTED_EXTENSIONS[extIndex];
        const testPath = `${index}${ext}`;
        const img = new Image();

        img.onload = () => {
          resolve({
            index: index,
            src: testPath
          });
        };

        img.onerror = () => {
          extIndex++;
          tryNext();
        };

        img.src = testPath;
      }

      tryNext();
    });
  }

  /* --------------------------------------------------------------------------
   * 7. EDITORIAL MEMORY CARD RENDERING
   * -------------------------------------------------------------------------- */
  function renderMemoryCards() {
    if (!dom.memoriesContainer) return;
    dom.memoriesContainer.innerHTML = '';

    state.imagesLoaded.forEach((item, arrIdx) => {
      const meta = MEMORY_METADATA[item.index] || {
        title: `Memory ${String(item.index).padStart(2, '0')}`,
        date: '22.10.2023',
        caption: 'A moment that continues to mean so much to me.',
        subnote: 'Every photograph carries a piece of what we share.',
        layout: arrIdx % 2 === 0 ? 'left' : 'right'
      };

      if (item.index === 14 || item.index === 15) {
        addCafePolaroid(item, meta);
      }

      const card = createMemoryCardElement(item, meta);
      dom.memoriesContainer.appendChild(card);
    });

    // Update final climax image with image 23 or last available
    const finalMemory = state.imagesLoaded.find((img) => img.index === 23) || state.imagesLoaded[state.imagesLoaded.length - 1];
    if (finalMemory && dom.finalImageHolder) {
      const finalImg = dom.finalImageHolder.querySelector('img');
      if (finalImg) {
        finalImg.src = finalMemory.src;
      }
    }
  }

  function createMemoryCardElement(item, meta) {
    const card = document.createElement('article');
    const layoutType = meta.layout || 'left';
    card.className = `memory-card layout-${layoutType}`;
    card.id = `memory-${item.index}`;
    card.dataset.index = item.index;

    const formattedNum = `MEMORY ${String(item.index).padStart(2, '0')}`;

    if (layoutType === 'polaroid') {
      card.innerHTML = `
        <div class="polaroid-card ${meta.tilt || 'tilt-left'}">
          <div class="polaroid-tape" aria-hidden="true"></div>
          <div class="photo-frame" data-src="${item.src}" data-num="${formattedNum}" data-caption="${escapeHtml(meta.caption)}">
            <img src="${item.src}" alt="${meta.title}" loading="lazy">
            <div class="frame-vignette" aria-hidden="true"></div>
            <span class="photo-expand-cue">Click to enlarge</span>
          </div>
          <div class="polaroid-footer">
            <p class="polaroid-caption">${meta.caption}</p>
            <time class="polaroid-date">${meta.date}</time>
          </div>
        </div>
      `;
    } else if (layoutType === 'center') {
      card.innerHTML = `
        <div class="memory-grid-wrap">
          <div class="memory-meta">
            <span class="memory-tag">${formattedNum}</span>
            <span class="memory-date-stamp">• ${meta.date}</span>
          </div>
          <div class="photo-column">
            <div class="photo-frame" data-src="${item.src}" data-num="${formattedNum}" data-caption="${escapeHtml(meta.caption)}">
              <img src="${item.src}" alt="${meta.title}" loading="lazy">
              <div class="frame-vignette" aria-hidden="true"></div>
              <span class="photo-expand-cue">Click to view</span>
            </div>
          </div>
          <div class="story-column">
            <h3 class="memory-heading">${meta.title}</h3>
            <p class="memory-caption">"${meta.caption}"</p>
            <p class="memory-subnote">${meta.subnote}</p>
          </div>
        </div>
      `;
    } else {
      card.innerHTML = `
        <div class="memory-grid-wrap">
          <div class="photo-column">
            <div class="photo-frame" data-src="${item.src}" data-num="${formattedNum}" data-caption="${escapeHtml(meta.caption)}">
              <img src="${item.src}" alt="${meta.title}" loading="lazy">
              <div class="frame-vignette" aria-hidden="true"></div>
              <span class="photo-expand-cue">Click to view</span>
            </div>
          </div>
          <div class="story-column">
            <div class="memory-meta">
              <span class="memory-tag">${formattedNum}</span>
              <span class="memory-date-stamp">• ${meta.date}</span>
            </div>
            <h3 class="memory-heading">${meta.title}</h3>
            <p class="memory-caption">"${meta.caption}"</p>
            <p class="memory-subnote">${meta.subnote}</p>
          </div>
        </div>
      `;
    }

    const frame = card.querySelector('.photo-frame');
    if (frame) {
      frame.addEventListener('click', () => {
        openLightbox(item.src, formattedNum, meta.caption);
      });
    }

    return card;
  }

  function addCafePolaroid(item, meta) {
    if (!dom.cafePolaroids) return;
    const polaroid = document.createElement('div');
    polaroid.className = `polaroid-card ${item.index === 14 ? 'tilt-left' : 'tilt-right'}`;
    polaroid.innerHTML = `
      <div class="polaroid-tape" aria-hidden="true"></div>
      <div class="photo-frame" data-src="${item.src}" data-num="CAFÉ MOMENT" data-caption="${escapeHtml(meta.caption)}">
        <img src="${item.src}" alt="${meta.title}" loading="lazy">
        <div class="frame-vignette" aria-hidden="true"></div>
      </div>
      <div class="polaroid-footer">
        <p class="polaroid-caption">${meta.caption}</p>
        <span class="polaroid-date">22.10.2023 • being there with you.</span>
      </div>
    `;

    polaroid.querySelector('.photo-frame')?.addEventListener('click', () => {
      openLightbox(item.src, 'CAFÉ DATE', meta.caption);
    });

    dom.cafePolaroids.appendChild(polaroid);
  }

  /* --------------------------------------------------------------------------
   * 8. INTERSECTION OBSERVER FOR CINEMATIC REVEALS
   * -------------------------------------------------------------------------- */
  function setupIntersectionObserver() {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -70px 0px',
      threshold: 0.12
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe memory cards
    document.querySelectorAll('.memory-card').forEach((card) => revealObserver.observe(card));

    // Observe letter paragraphs
    dom.letterParagraphs.forEach((p) => revealObserver.observe(p));

    // Observe "What I Feel Today" lines
    dom.feelLines.forEach((line) => revealObserver.observe(line));

    // Observe final message steps
    dom.finalParagraphs.forEach((step) => revealObserver.observe(step));
  }

  /* --------------------------------------------------------------------------
   * 9. SCROLL PROGRESS & VERTICAL TIMELINE TRACKER
   * -------------------------------------------------------------------------- */
  function initTimeline() {
    if (!dom.timelineSection || !dom.timelineProgressBar) return;

    window.addEventListener('scroll', updateTimelineProgress, { passive: true });
    updateTimelineProgress();
  }

  function updateTimelineProgress() {
    if (!dom.timelineSection) return;

    const rect = dom.timelineSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const start = rect.top;
    const totalHeight = rect.height;
    
    let progress = 0;
    if (start < windowHeight * 0.7) {
      const scrolled = (windowHeight * 0.7) - start;
      progress = Math.min(100, Math.max(0, (scrolled / totalHeight) * 100));
    }

    if (dom.timelineProgressBar) {
      dom.timelineProgressBar.style.height = `${progress}%`;
    }

    dom.timelineItems.forEach((item) => {
      const itemRect = item.getBoundingClientRect();
      if (itemRect.top < windowHeight * 0.75) {
        item.classList.add('is-active');
      } else {
        item.classList.remove('is-active');
      }
    });
  }

  /* --------------------------------------------------------------------------
   * 10. 2210 SECRET INTERACTION
   * -------------------------------------------------------------------------- */
  function initSecretCode() {
    if (!dom.codeBoxes || dom.codeBoxes.length === 0) return;

    dom.codeBoxes.forEach((box, index) => {
      box.addEventListener('input', (e) => {
        const val = e.target.value;
        if (val.length >= 1) {
          box.value = val.slice(0, 1);
          if (index < dom.codeBoxes.length - 1) {
            dom.codeBoxes[index + 1].focus();
          }
        }
        checkSecretCode();
      });

      box.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !box.value && index > 0) {
          dom.codeBoxes[index - 1].focus();
        }
      });

      box.addEventListener('paste', (e) => {
        e.preventDefault();
        const pasteData = (e.clipboardData || window.clipboardData).getData('text').trim();
        if (pasteData.length === 4) {
          pasteData.split('').forEach((char, i) => {
            if (dom.codeBoxes[i]) dom.codeBoxes[i].value = char;
          });
          checkSecretCode();
        }
      });
    });
  }

  function checkSecretCode() {
    let currentCode = '';
    dom.codeBoxes.forEach((b) => (currentCode += b.value));

    if (currentCode.length === 4) {
      if (currentCode === '2210') {
        dom.codeBoxes.forEach((b) => b.classList.add('is-success'));
        dom.codeFeedback.textContent = 'Code accepted.';
        dom.secretDrawer.classList.add('is-unlocked');
        dom.secretDrawer.setAttribute('aria-hidden', 'false');
      } else {
        dom.codeFeedback.textContent = 'Think of the time our story began... (22:10)';
        dom.codeBoxes.forEach((b) => {
          b.classList.remove('is-success');
          b.style.borderColor = '#a97878';
        });
        setTimeout(() => {
          dom.codeBoxes.forEach((b) => (b.style.borderColor = ''));
        }, 1200);
      }
    } else {
      dom.codeFeedback.textContent = '';
    }
  }

  /* --------------------------------------------------------------------------
   * 11. DUST PARTICLES CANVAS ENGINE (LIGHTWEIGHT & SUBTLE)
   * -------------------------------------------------------------------------- */
  function initParticles() {
    const canvas = dom.particlesCanvas;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, { passive: true });

    const PARTICLE_COUNT = 24;
    const particles = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.2,
        vy: -Math.random() * 0.3 - 0.08,
        alpha: Math.random() * 0.35 + 0.1,
        pulseSpeed: Math.random() * 0.012 + 0.005,
        pulseVal: Math.random() * Math.PI
      });
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulseVal += p.pulseSpeed;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulseVal));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(199, 165, 106, ${currentAlpha})`;
        ctx.fill();
      });

      requestAnimationFrame(animateParticles);
    }

    requestAnimationFrame(animateParticles);
  }

  /* --------------------------------------------------------------------------
   * 12. CINEMATIC LIGHTBOX
   * -------------------------------------------------------------------------- */
  function initLightbox() {
    dom.lightboxClose?.addEventListener('click', closeLightbox);
    dom.lightboxBackdrop?.addEventListener('click', closeLightbox);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dom.photoLightbox?.hasAttribute('open')) {
        closeLightbox();
      }
    });
  }

  function openLightbox(src, numberText, captionText) {
    if (!dom.photoLightbox || !dom.lightboxImg) return;

    dom.lightboxImg.src = src;
    if (dom.lightboxNumber) dom.lightboxNumber.textContent = numberText;
    if (dom.lightboxCaption) dom.lightboxCaption.textContent = `"${captionText}"`;

    if (typeof dom.photoLightbox.showModal === 'function') {
      dom.photoLightbox.showModal();
    } else {
      dom.photoLightbox.setAttribute('open', '');
    }
  }

  function closeLightbox() {
    if (!dom.photoLightbox) return;
    if (typeof dom.photoLightbox.close === 'function') {
      dom.photoLightbox.close();
    } else {
      dom.photoLightbox.removeAttribute('open');
    }
  }

  /* --------------------------------------------------------------------------
   * 13. REPLAY CONTROLS
   * -------------------------------------------------------------------------- */
  function initReplayControls() {
    dom.replayBtn?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

})();
