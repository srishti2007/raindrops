const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drop1, drop2, drop3, drop4, drop5, drop6, drop7, drop8, drop9, drop10, drop11,drop12,drop13,drop14,drop15,drop16,drop17,drop18,drop19,drop20,drop1,drop21,drop22,drop23,drop24,drop25,drop26,drop27,drop28,drop29,drop30;

function setup(){

    canvas = createCanvas(300, 300);

    engine = Engine.create();

    world = engine.world;

 

    drop1 = new Drop1(10, -3,5, 10);
    drop1.y = random(-200, -100);

    drop2 = new Drop2(20, -19, 5, 10);
    drop2.y = random(-200, -100);

    drop3 = new Drop(30, -27,5, 10);
    drop3.y = random(-200, -100);

    drop4 = new Drop1(40 ,-150, 5, 10);
    drop4.y = random(-200, -100);

    drop5 = new Drop2(50, -79,5, 10);
    drop5.y = random(-200, -100);

    drop6 = new Drop(60,-129, 5, 10);
    drop6.y = random(-200, -100);

    drop7 = new Drop1(70 , -37, 5, 10);
    drop7.y = random(-200, -100);

    drop8 = new Drop2(80, -41, 5, 10);
    drop8.y = random(-200, -100);

    drop9 = new Drop(90 , -37,  5, 10);
    drop9.y = random(-200, -100);

    drop10 = new Drop1(100 , -86, 5, 10);
    drop10.y = random(-200, -100);

    drop11= new Drop2(110,  -99, 5, 10);
    drop11.y = random(-200, -100);

    drop12= new Drop(120,  -147, 5, 10);
    drop12.y = random(-200, -100);

    drop13 = new Drop1(130, -36, 5, 10);
    drop13.y = random(-200, -100);

    drop14 = new Drop2(140, -179,5, 10);
    drop14.y = random(-200, -100);

    drop15= new Drop(150, -89, 5, 10);
    drop15.y = random(-200, -100);

    drop16 = new Drop1(160, -143, 5, 10);
    drop16.y = random(-200, -100);

    drop17 = new Drop2(170,  -156, 5, 10);
    drop17.y = random(-200, -100);

    drop18 = new Drop(180, -63,  5, 10);
    drop18.y = random(-200, -100);

    drop19 = new Drop1(190,  -22, 5, 10);
    drop19.y = random(-200, -100);

    drop20 = new Drop2(200,  -23, 5, 10);
    drop20.y = random(-200, -100);

    drop21 = new Drop(210, -74, 5, 10);
    drop21.y = random(-200, -100);

    drop22 = new Drop1(220, -89, 5, 10);
    drop22.y = random(-200, -100);

    drop23 = new Drop2(230, -86,  5, 10);
    drop23.y = random(-200, -100);

    drop24 = new Drop(240, -123, 5, 10);
    drop24.y = random(-200, -100);

    drop25 = new Drop1(250, -71, 5, 10);
    drop25.y = random(-200, -100);

    drop26 = new Drop2(260, -97, 5, 10);
    drop26.y = random(-200, -100);

    drop27 = new Drop(270,  -63, 5, 10);
    drop27.y = random(-200, -100);

    drop28 = new Drop1(280,  -69, 5, 10);
    drop28.y = random(-200, -100);

    drop29= new Drop2(290,  -111, 5, 10);
    drop29.y = random(-200, -100);

    drop30 = new Drop(300,  -174, 5, 10);
    drop30.y = random(-200, -100);

}

function draw(){

    background(0);
    
    Engine.update(engine);

   
        drop1.display(); 
        drop2.display(); 
        drop3.display(); 
        drop4.display(); 
        drop5.display();  
        drop6.display(); 
        drop7.display(); 
        drop8.display(); 
        drop9.display(); 
        drop10.display();  
        drop11.display(); 
        drop12.display(); 
        drop13.display(); 
        drop14.display(); 
        drop15.display();  
        drop16.display(); 
        drop17.display(); 
        drop18.display(); 
        drop19.display(); 
        drop20.display();  
        drop21.display(); 
        drop22.display(); 
        drop23.display(); 
        drop24.display(); 
        drop25.display();  
        drop26.display(); 
        drop27.display(); 
        drop28.display(); 
        drop29.display(); 
        drop30.display();  
        
    



   

}

