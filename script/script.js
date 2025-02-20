function getRandomColor() {
    const characters = '0123456789ABCDEF';
    let colorStart = '#';
    
    // 
    for (let i = 0; i < 6; i ++) {
        colorStart += characters[Math.floor(Math.random() * 16)]
    }

    return colorStart;
}

document.getElementById('change-color-btn').addEventListener('click', () => {
    const colorBox = document.getElementById('color-box');
    colorBox.style.backgroundColor = getRandomColor();
});