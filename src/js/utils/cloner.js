export default function initCloner() {
  const bannerQuote = document.querySelector('#banner-quote');

  if (bannerQuote) {
    const quoteClone = bannerQuote.cloneNode(true);
    const bannerTxt = document.querySelector("#banner-txt");

    if (bannerTxt) {
      bannerTxt.appendChild(quoteClone)
      quoteClone.classList.add('quote-sm');
    }
  }
}