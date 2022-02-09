var names=["my family book","Pramod","Medhihi","Sanyuktha","Samvida"];
 var images=["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg","https://i.postimg.cc/JnL6wtrd/sister.jpg","https://png.pngtree.com/element_origin_min_pic/16/10/26/160b32ec5b9c62a4f94e274c6b257f5e.jpg"];
 var i=0;
function next(){
    if(i==5){
        i=0;
    }
    document.getElementById("family").src=images[i];
 document.getElementById("member").innerHTML=names[i];
 i++;
}
