document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       TELA DE CARREGAMENTO
    ========================================== */

    const loading = document.querySelector(".loading-screen");

    if (loading) {
        window.addEventListener("load", () => {
            loading.style.opacity = "0";

            setTimeout(() => {
                loading.remove();
            }, 500);
        });
    }

    /* ==========================================
       MENU MOBILE
    ========================================== */

    const menuButton = document.querySelector(".menu-mobile");
    const menu = document.querySelector(".menu");

    if (menuButton && menu) {
        menuButton.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }

    /* ==========================================
       FECHAR MENU AO CLICAR
    ========================================== */

    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", () => {
            if (menu) {
                menu.classList.remove("active");
            }
        });
    });

    /* ==========================================
       ANIMAÇÕES AO ROLAR
    ========================================== */

    const elementos = document.querySelectorAll(
        ".about-card, .benefit-item, .transformation-content, .highlight-box, .cta-content"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        }, {
            threshold: 0.15
        });

        elementos.forEach(elemento => {
            elemento.classList.add("hidden");
            observer.observe(elemento);
        });

    }

    /* ==========================================
       ROLAGEM SUAVE
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const destino = document.querySelector(this.getAttribute("href"));

            if (destino) {

                e.preventDefault();

                destino.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

    /* ==========================================
       HEADER
    ========================================== */

    const header = document.querySelector(".header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });

    }

    /* ==========================================
       ANO DO RODAPÉ
    ========================================== */

    const ano = document.querySelector(".footer p");

    if (ano) {
        ano.innerHTML = `© ${new Date().getFullYear()} Além da Advocacia. Todos os direitos reservados.`;
    }

});
