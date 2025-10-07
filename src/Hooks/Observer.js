function sectionObserv() {
  const allSection = document.querySelectorAll("section");
  const obSection = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  };
  const sectionObserver = new IntersectionObserver(obSection, {
    root: null,
    threshold: 0,
  });

  allSection.forEach(function (el) {
    sectionObserver.observe(el);
    el.classList.add("section--hidden");
  });
}
export { sectionObserv };
