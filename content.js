const BANNER_SELECTOR = 'div[data-testid="lazyBanner"]';

function removeBanner(banner) {
  if (!(banner instanceof HTMLElement)) {
    return;
  }

  banner.style.setProperty("display", "none", "important");
  banner.style.setProperty("visibility", "hidden", "important");
  banner.style.setProperty("height", "0", "important");
  banner.style.setProperty("margin", "0", "important");
  banner.style.setProperty("padding", "0", "important");
  banner.setAttribute("data-mi-mavis-hidden", "true");
  banner.remove();
}

function sweep(root = document) {
  root.querySelectorAll(BANNER_SELECTOR).forEach(removeBanner);
}

let sweepScheduled = false;

function scheduleSweep() {
  if (sweepScheduled) {
    return;
  }

  sweepScheduled = true;
  queueMicrotask(() => {
    sweepScheduled = false;
    sweep();
  });
}

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.type !== "childList") {
      continue;
    }

    for (const node of mutation.addedNodes) {
      if (!(node instanceof HTMLElement)) {
        continue;
      }

      if (node.matches(BANNER_SELECTOR)) {
        removeBanner(node);
        continue;
      }

      if (node.querySelector(BANNER_SELECTOR)) {
        scheduleSweep();
      }
    }
  }
});

observer.observe(document, {
  childList: true,
  subtree: true
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", scheduleSweep, { once: true });
}

scheduleSweep();
