


function rectangleCalculateArea(){
    let rectangleWidth = document.getElementById('rectangle-width').value;
    rectangleWidth = parseFloat(rectangleWidth)

    let rectangleLength =document.getElementById('rectangle-length').value;
    rectangleLength = parseFloat(rectangleLength);

    const area = rectangleLength * rectangleWidth;
    document.getElementById('rectangle-area').innerText = area;
}