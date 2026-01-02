(async () => {
    try {
        const response = await fetch('image.b64', { cache: 'force-cache' });
        const base64 = await response.text();

        const img = document.getElementById('mainImg');
        img.src = base64.trim();

    } catch (e) {
        console.error("Base64 load error:", e);
    }
})();