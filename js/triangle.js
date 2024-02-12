

function calculateTriangleArea(){

    // triangle base
    const triangleBase = document.getElementById('triangle-base').value;
    const base = parseFloat(triangleBase);
    // console.log(base);

    // triangle height
    const triangleHeight = document.getElementById('triangle-height').value;
    const height = parseFloat(triangleHeight);
    // console.log(height);
    
    const triangleAreaContent = document.getElementById('triangle-area');
    const triangleCalculation = 0.5 * triangleBase * triangleHeight;
    triangleAreaContent.innerText = triangleCalculation;

    
}

