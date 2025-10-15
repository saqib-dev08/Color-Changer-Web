function bgChanger(){


    const colorList = colorNameList[Math.floor(Math.random()*colorNameList.length)];
    console.log(colorList);
    
    document.body.style.backgroundColor = colorList.hex;
    
    const h3 = document.getElementsByTagName("h3");
    h3[0].textContent = "Color Name: " + colorList.name;
    h3[1].textContent = colorList.hex;
     const rgb = document.body.style.backgroundColor;
     h3[2].textContent = rgb;
     console.log(rgb);
};

bgChanger();


