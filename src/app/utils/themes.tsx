let isMobileValue = typeof window !== "undefined" && window.innerWidth <= 768;

function updateIsMobile() {
  isMobileValue = typeof window !== "undefined" && window.innerWidth <= 768;
}

if (typeof window !== "undefined") {
  window.addEventListener("resize", updateIsMobile);
}

export function isMobile() {
  return isMobileValue;
}
