const rotateXSlider = 
document.getElementById("rotateX");
const rotateYSlider = 
document.getElementById("rotateY");
const cube = 
document.getElementById("cube");

rotateXSlider.addEventListener("input",updateCubeRotation);
rotateYSlider.addEventListener("input",updateCubeRotation);

function updateCubeRotation(){
    const rotateX = rotateXSlider.value;
    const rotateY = rotateYSlider.value;
    cube.style.transform = `rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)`;
}
