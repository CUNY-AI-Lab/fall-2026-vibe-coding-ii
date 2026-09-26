// Prompt builder for the "Design Your Site" slide: turns the chosen options
// into a single-line /plan prompt that participants copy into Pi.
// Kept on one line so it pastes cleanly as a /plan argument.
(() => {
  const form = document.getElementById('cv-builder');
  if (!form) return;

  const PHRASES = {
    layout: {
      single: 'a single scrolling page with a sticky navigation bar',
      sidebar: 'a fixed sidebar with my name, a one-line tagline, and links, with the content scrolling beside it',
      card: 'a minimal landing page like a digital business card, with the details in sections below it',
      multi: 'separate pages for Home, CV, and Research or Projects, sharing one header',
    },
    style: {
      minimal: 'clean and minimal, with generous white space',
      academic: 'academic and classic, like a well-designed university faculty page',
      bold: 'bold and modern, with large headings and strong contrast',
      warm: 'warm and approachable, with soft shapes and friendly details',
      playful: 'creative and playful, with a few tasteful surprises',
    },
    palette: {
      ink: 'ink and paper: near-black text on off-white, with one red accent',
      navy: 'navy and gold on a warm white background',
      forest: 'forest green and cream, with a sage accent',
      terracotta: 'terracotta and sand, with dark brown text',
      ocean: 'deep ocean blue and teal on a very light background',
      plum: 'plum and soft blush',
      auto: 'a palette you choose to fit the style',
    },
    type: {
      mixed: 'a serif font for headings and a sans-serif font for body text',
      sans: 'a clean sans-serif font throughout',
      serif: 'a readable serif font throughout',
      mono: 'a sans-serif font with monospace accents for dates and labels',
    },
    mode: {
      auto: "light and dark versions that follow the visitor's system setting, plus a toggle",
      light: 'a light color scheme',
      dark: 'a dark color scheme',
    },
  };

  const field = key => form.querySelector(`[data-key="${key}"]`);
  const out = form.querySelector('.cvb-prompt');
  const swatches = form.querySelector('.cvb-swatches');
  const status = form.querySelector('.cvb-status');
  const copyBtn = form.querySelector('.cvb-copy');
  const chips = [...form.querySelectorAll('.cvb-chip')];

  function buildPrompt() {
    const pick = key => PHRASES[key][field(key).value];
    const sections = chips.filter(c => c.getAttribute('aria-pressed') === 'true').map(c => c.textContent.trim());
    const parts = [
      '/plan Build a professional personal website from my CV.',
      'The text of my CV is in cv.txt in this folder: use only facts from it and never invent details.',
      `Layout: ${pick('layout')}.`,
      `Style: ${pick('style')}.`,
      `Colors: ${pick('palette')}, with ${pick('mode')}.`,
      `Fonts: ${pick('type')}.`,
      sections.length
        ? `Sections, in this order: ${sections.join(', ')}. Skip any section my CV has nothing for.`
        : 'Choose the sections that best fit my CV.',
    ];
    if (field('private').checked) {
      parts.push('Do not show my phone number or home address; for contact, use only my email and professional links.');
    }
    parts.push(field('download').checked
      ? 'Add a "Download CV" button that links to my CV file in this folder, and add cv.txt to a .gitignore file.'
      : 'Do not link to my CV files, and add cv.* to a .gitignore file so they are never published.');
    parts.push('Use plain HTML, CSS, and JavaScript (index.html plus css/ and js/ folders) with no build step, so it works when I open index.html and on GitHub Pages.');
    parts.push('Make it responsive for phones and accessible: semantic HTML, good color contrast, and keyboard-friendly navigation.');
    return parts.join(' ');
  }

  function render() {
    out.textContent = buildPrompt();
    const colors = (field('palette').selectedOptions[0].dataset.swatch || '').split(',').filter(Boolean);
    swatches.replaceChildren(...colors.map(c => {
      const dot = document.createElement('span');
      dot.style.background = c;
      return dot;
    }));
    status.textContent = '';
  }

  // After a mouse interaction, drop focus so Space and the arrow keys go back
  // to slide navigation (the deck ignores keys while a form control has focus).
  let pointer = false;
  form.addEventListener('pointerdown', () => { pointer = true; });
  form.addEventListener('keydown', () => { pointer = false; });
  const releaseFocus = el => { if (pointer) el.blur(); };

  form.addEventListener('change', e => { render(); releaseFocus(e.target); });
  chips.forEach(chip => chip.addEventListener('click', () => {
    chip.setAttribute('aria-pressed', chip.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
    render();
    releaseFocus(chip);
  }));

  copyBtn.addEventListener('click', () => {
    releaseFocus(copyBtn);
    copyText(out.textContent).then(() => {
      status.textContent = 'Copied! Paste it into Pi.';
    }).catch(() => {
      status.textContent = 'Copy failed: select the text and copy it by hand.';
    });
  });

  render();
})();
