import nineHeader from 'nine-immersive-header';

export default function initNineHeader() {
  nineHeader({
    headerConfig: {
      logoColor: "#428BCA",
      bgColor: "#fff",
      textColor: "#000",
      css: {
        position: "fixed",
      }
    },
    footerConfig: {
      bgColor: "#fff",
      textColor: "#000",
      logoColor: "#428BCA",
    }
  });
}
