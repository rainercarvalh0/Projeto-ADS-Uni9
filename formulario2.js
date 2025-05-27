document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
                        });
               if (response.ok) {
    window.location.href = form.getAttribute("data-redirect") || "obrigado.html";
}
        } catch (error) {
            console.error('Erro:', error);
        }
    });
});