const btnTop = document.getElementById("btnTop");
    window.onscroll = () => {
      btnTop.style.display = window.scrollY > 300 ? "block" : "none";
    };
    btnTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });