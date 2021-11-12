var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","IMG-20181214-WA0004~2.jpg","20211024_171145(0)~2.jpg","IMG_20170604_152344_HDR~3.jpg","20211024_172858~2.jpg"];
var names = ["Fmaily Book","Sanjeev Gupta", "Anu Gupta", "Aarush Gupta", "Tiya Gupta" ];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    
    var updatedImage = images[i];
    
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
