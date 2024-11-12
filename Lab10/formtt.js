function Reset(){
    document.getElementById("a").value = null;
    document.getElementById("b").value = null;
    document.getElementById("kq").value = null;
    document.getElementById("log").innerText="";
}

//Cộng
function Sum(){
    var a= document.getElementById("a").value;
    var b= document.getElementById("b").value;
    var s=parseFloat(a)+parseFloat(b);
    check(a,b,s);
}
//Chia
function Divide(){
    var a= document.getElementById("a").value;
    var b= document.getElementById("b").value;
    // kiem tra xem b =0?
    if(b==0){
        document.getElementById("log").innerText="Vui lòng nhập b Khác 0!";
        document.getElementById("b").value = null;
        document.getElementById("kq").value = null;
    }
    else{
        // neu a va b la nguyen-->(a*1.0)/b= so nguyen va bo phan du
        var d=parseFloat(a)/parseFloat(b);
    check(a,b,d);
    }
}

//trừ
function hieu(){
    var a= document.getElementById("a").value;
    var b= document.getElementById("b").value;
    var h=parseFloat(a)-parseFloat(b);
    check(a,b,h);
}
// Nhân
function nhan(){
    var a= document.getElementById("a").value;
    var b= document.getElementById("b").value;
    var n=parseFloat(a)*parseFloat(b);
    check(a,b,n);
}


//Kiểm tra kí tự
function check(a,b,c){
    // c la gia tri so
    if(isNaN(c)==false){
        document.getElementById("kq").value =c;
        document.getElementById("log").innerText="";
    }
    else{
        // kiem tra xem a va b khong phai la so
        if(isNaN(a)==true && isNaN(b)==true){
            document.getElementById("log").innerText="Vui lòng nhập a và b ở dạng giá trị số!";
            document.getElementById("a").value = null;
            document.getElementById("b").value = null;
            document.getElementById("kq").value = null;
        }
        else
            if(isNaN(a)==true){
                document.getElementById("log").innerText="Vui lòng nhập a ở dạng giá trị số!";
                document.getElementById("a").value = null;
                document.getElementById("kq").value = null;
        }
        else{
            document.getElementById("log").innerText="Vui lòng nhập b ở dạng giá trị số!";
            document.getElementById("b").value = null;
            document.getElementById("kq").value = null;
    }
    }
}