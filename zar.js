var zarlariAtabilirsin = true; 
var oyunOynandi = false; 

function dondur() {
    if (zarlariAtabilirsin && !oyunOynandi) {
        zarlariAtabilirsin = false; 
        oyunOynandi = true; 
        var zar1 = document.getElementById("zar1");
        var zar2 = document.getElementById("zar2");
        zar1.src = "resimler/zarbos1.png"; 
        zar2.src = "resimler/zarbos2.png"; 
        setTimeout(zarAt, 2000);
    }
}

function zarAt() {
    var zar1 = document.getElementById("zar1");
    var zar2 = document.getElementById("zar2");

    var sayi1 = Math.floor(Math.random() * 6) + 1;
    var sayi2 = Math.floor(Math.random() * 6) + 1;

    zar1.src = "resimler/zar" + sayi1 + ".png";
    zar2.src = "resimler/zar" + sayi2 + ".png";

    var toplam = sayi1 + sayi2;

    if (toplam > 6) {
        alert("Dileğin gerçek olacak!");
    } else if (toplam < 6) {
        alert("OLMADI..");
    }

    zarlariAtabilirsin = true; 
}