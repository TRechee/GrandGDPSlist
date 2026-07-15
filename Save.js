async function loadLevels() {
    try {
        const response = await fetch('levels.json'); // Загружаем файл
        const levels = await response.json();        // Превращаем его в массив
        
        const container = document.getElementById('list-container');
        container.innerHTML = ''; // Очищаем перед загрузкой

        levels.forEach(lvl => {
            container.innerHTML += `
                <div class="level-card">
                    <h3>#${lvl.pos} ${lvl.name}</h3>
                    <p>Автор: ${lvl.author}</p>
                </div>
            `;
        });
    } catch (error) {
        console.error("Ошибка загрузки:", error);
    }
}

loadLevels();