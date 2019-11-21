

$(".feedme").on("click", function(){
    let divCopy = $(this).html()+"<br>"
    
    $("body").append(divCopy)
  })
  
$(".box").hover(function(){
    $(this).css("background-color", "yellow")


})




$("button").on("click", function(){
    alert($("#my-input").val())
    $("#my-input").val("")

    }
)

$("#tate").hover(function(){
    $("#tate").css("background-color", "blue")    
    //alert('clicked!')
    }
)

// let info=$("div").data().info.split("/")
// console.log(`barcode ${info[0]} and expirationDate is ${info[1]}}`)

//onmouseover="changeC"()
//
//$('#my-input').val("Terabyte")




$("h1").css("background-color", "blue")
$(".red-div").css("background-color", "red")
$("li:first-child").css("background-color","green")
$("li:last-child").css("background-color","pink")
$("#brown-div").css("background-color", "brown")


$("#b1").addClass("box")
$("#b2").addClass("box")



