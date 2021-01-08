<?php
    include("header.php");
    session_start();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap" rel="stylesheet"> 
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap" rel="stylesheet"> 
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cart</title>
    <style>
            body{
     
                align-items: center;
               
                background-color: rgb(179, 179, 179);
            }
            h1{
                font-size: 50px;
                font-family: 'Oswald', sans-serif;}

            .thead{font-family: 'Titillium Web', sans-serif;
            margin:100px;
            padding:50px;
                font-weight: bolder;  
                text-align:center;  
                align-items:center;
                   
               }
                tbody{font-family: 'Titillium Web', sans-serif;
color: black;
                }

    </style>
</head>
<body>
        <center><h1> My Cart </h1></center>
     <thead class="thead">
        <tr>
            <th> Sr. No. </th>
            <th> Item Name </th>
            <th> Price </th>
            <th> Quantity </th>
            <th> </th>
        </tr>
    </thead>
    <tbody >
        <?php
        $total=0;
        if(isset($_SESSION['cart']))
        {
            foreach($_SESSION['cart'] as $key => $value)
            {
                

                if(isset($_SESSION['cart']))
                {
                echo"
                <tr><br>
                    <td>$value[Item_Name]</td>
                    <td>$value[Price]</td>
                    <td><input type='number' value='$value[Quantity]' min='1' max='10'></td>
                   
                   ";
            }}
        }
        ?>
        
    <form action="final.html">
        <button>Checkout</button>
        </form>
    </tbody>
   

</body>
</html>