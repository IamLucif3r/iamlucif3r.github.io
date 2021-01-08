<?php
include("header.php");
session_start();
?>
<html>
<head>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&family=Ubuntu&display=swap" rel="stylesheet"> 
    
    <style>
        body{
            background-color: #294C60;
            color: whitesmoke;
            font-family: 'Ubuntu', sans-serif;
           
        }
        h1{ font-size: 70px; text-align: center; font-family: 'Roboto', sans-serif;}
        img{height: 350px;width: 550px;}
        button{
            padding:4px;
            margin:10px;
            margin-bottom:40px;
        }
    </style>
</head>
<body>




    <h1>Laptops</h1>
    <br>
    <form action="manage_cart.php" method="post">
    <img src="images/1.jpg"><br>
    <h5> Laptop 1</h5>
    <p> Rs.2,00,000/-</p>
   <button name="add2cart" type="submit"> Add 2 Cart</button>
    <input type="hidden" name="Item_Name" value="asus">
    <input type="hidden" name="Price" value="$1200">
    </form>

    <form action="manage_cart.php" method="post">
    <img src="images/2.jpg"><br>
    <h5> Laptop 2</h5>
    <p> Rs.2,00,000/-</p>
    <button name="add2cart" type="submit"> Add 2 Cart</button>
    <input type="hidden" name="Item_Name" value="MSI">
    <input type="hidden" name="Price" value="$2200">
    </form>

    <form action="manage_cart.php" method="post">
    <img src="images/3.jpg"><br>
    <h5> Laptop 3</h5>
    <p> Rs.2,00,000/-</p>
    <button name="add2cart" type="submit"> Add 2 Cart</button>
    <input type="hidden" name="Item_Name" value="Apple">
    <input type="hidden" name="Price" value="$3200">
    </form>

</body>


</html>