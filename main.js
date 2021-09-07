var canvas = new fabric.Canvas("myCanvas");

block_image_width = 30;
block_image_height = 30;

player_x = 100;
player_y = 100;

player_height = 50;
player_width = 50;


var player_object = "";


function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {

        player_object = Img;
        player_object.scaleToHeight(player_height);
        player_object.scaleToWidth(player_width);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {

    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;

        block_image_object.scaleToHeight(block_image_height);
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "80" && e.shiftKey == true) {
        console.log("shift and p pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (keyPressed == "77" && e.shiftKey == true) {
        console.log("shift and m pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    
    if (keyPressed == "70") {

        console.log("f");
        new_image("ironman_face.png");

    }
    if (keyPressed == "66") {

        console.log("b");
        new_image("spiderman_body.png");

    }
    if (keyPressed == "76") {

        console.log("l");
        new_image("hulk_legs.png");

    }
    if (keyPressed == "82") {

        console.log("r");
        new_image("thor_right_hand.png");

    }
    if (keyPressed == "72") {

        console.log("h");
        new_image("captain_america_left_hand.png");

    }


    if (keyPressed == "38") {
        up();
        console.log("up");
    }

    if (keyPressed == "40") {
        down();
        console.log("down");
    }

    if (keyPressed == "37") {
        left();
        console.log("left");
    }

    if (keyPressed == "39") {
        right();
        console.log("right");
    }
}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        console.log("block_image_height =" + block_image_height);
        console.log("when up arrow key pressed,X" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y <= 450) {
        player_y = player_y + block_image_height;
        console.log("block_image_height =" + block_image_height);
        console.log("when up arrow key pressed,X" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x >= 0) {
        player_x = player_x - block_image_height;
        console.log("block_image_height =" + block_image_height);
        console.log("when up arrow key pressed,X" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x <= 850) {
        player_x = player_x + block_image_height;
        console.log("block_image_height =" + block_image_height);
        console.log("when up arrow key pressed,X" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
