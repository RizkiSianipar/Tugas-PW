function insert(num){
    document.form.hasil.value= document.form.hasil.value+num;
}
function equal(){
    const exp = document.form.hasil.value;
    if(exp){
        document.form.hasil.value=eval(exp);
    }
}
function clean(){
    document.form.hasil.value = "";
}
function back(){
    const exp = document.form.hasil.value;
    document.form.hasil.value=exp.substring(0,exp.length-1);
}
var tinggi,berat,hasil,keterangan;
function operasi(){
    tinggi = parseFloat(document.getElementById("tinggi").value);
    tinggi/=100;
    berat = parseFloat(document.getElementById("berat").value);
    hasil = berat/(tinggi*tinggi);
    if(hasil>28.1){
        keterangan = "Anda mengalami obesitas, silah kurangi porsi makan anda dan silahkan berolahraga. ";}
    else if(hasil>=23.1){
        keterangan = "Anda kelebihan berat badan, silahkan berolahraga.";}
    else if(hasil>=18.1){
        keterangan = "Anda memiliki berat badan yang IDEAL.";}
    else{
        keterangan = "Anda kekurangan berat badan, tambahlah porsi makan anda dan istirahatlah yang cukup.";
    }
    document.getElementById("hasil").innerHTML="Hasil Operasi IBM : "+hasil.toFixed(1);
    document.getElementById("keterangan").innerHTML="Keterangan : " +keterangan;
}
function suhu(){
    var angka =document.getElementById("angka").value;
    var konversi = document.getElementById("Konversi").value;
    var akhir;
    if(konversi == "cf"){
        akhir=((9 / 5) * parseFloat(angka))+32;}
    else if(konversi == "cr"){
        akhir=(4 / 5) * parseFloat(angka);}
    else if(konversi == "ck"){
        akhir= parseFloat(angka)+273;}
    else if(konversi == "fc"){
        akhir=(5 / 9) * (parseFloat(angka)-32);}
    else if(konversi == "fr"){
        akhir=(4 / 9) * (parseFloat(angka)-32);}
    else if(konversi == "fk"){
        akhir=(5 / 9) * (parseFloat(angka)+459.67);}
    else if(konversi == "rc"){
        akhir=(5 / 4) * parseFloat(angka);}
    else if(konversi == "rf"){
        akhir=((9 / 4) * parseFloat(angka))+32;}
    else if(konversi == "rk"){
        akhir=((5 / 4) * parseFloat(angka))+273;}
    else if(konversi == "kc"){
        akhir=parseFloat(angka)-273;}
    else if(konversi == "kf"){
        akhir=((9 / 5) * (parseFloat(angka)-459.67))+32;}
    else if(konversi == "kr"){
        akhir=((4 / 5) * (parseFloat(angka)-273));}
    document.getElementById("akhir").innerHTML="HASIL KONVERSI ANDA ADALAH: "+akhir.toFixed(1);
    
    }
