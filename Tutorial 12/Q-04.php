<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Q-04</title>
</head>
<body>
<?php
function DayOfWeek($dayNumber) 
{
    switch ($dayNumber) 
    {
        case 1:
            $day = "Monday";
            break;
        case 2:
            $day = "Tuesday";
            break;
        case 3:
            $day = "Wednesday";
            break;
        case 4:
            $day = "Thursday";
            break;
        case 5:
            $day = "Friday";
            break;
        case 6:
            $day = "Saturday";
            break;
        case 7:
            $day = "Sunday";
            break;
        default:
            $day = "Invalid number";
            break;
    }

    return $day;
}


$dayNumber = 2;
$dayname = DayOfWeek($dayNumber);
echo "Day $dayNumber is: ",$dayname;
?>
   
</body>
</html>