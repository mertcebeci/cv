


document.addEventListener('DOMContentLoaded', function() {
    const numSnowflakes = 100; // Kar tanesi sayısı
    const snowflakesContainer = document.body;

    for (let i = 0; i < numSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.width = Math.random() * 10 + 'px';
        snowflake.style.height = snowflake.style.width;
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.top = Math.random() * 100 + 'vh';
        snowflake.style.opacity = Math.random();
        snowflake.style.animation = `fall ${Math.random() * 10 + 5}s linear infinite`;

        snowflakesContainer.appendChild(snowflake);
    }
});
