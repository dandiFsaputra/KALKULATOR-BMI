var a = prompt("Masukkan nama terlebih dahulu");

// Memeriksa apakah input hanya mengandung huruf
if (/^[a-zA-Z]+$/.test(a)) {
    document.getElementById("namaUser").innerHTML = a;
} else {
    document.getElementById("namaUser").innerHTML = "Kawan";
}


// greeting day
var h = new Date().getHours();
if (h >= 4 && h < 10) document.getElementById('hari').innerHTML = "Pagi,";
if (h >= 10 && h < 15) document.getElementById('hari').innerHTML = "Siang,";
if (h >= 15 && h < 18) document.getElementById('hari').innerHTML = "Sore,";
if (h >= 18 || h < 4) document.getElementById('hari').innerHTML = "Malam,";
// greeting day end

var tinggi, berat, keterangan1, keterangan2, bmi;

function hitung() {
    let tinggi = document.getElementById('inTinggi').value;
    let berat = document.getElementById('inBerat').value;

    if (tinggi == '' || berat == '') {
        alert('Isikan Tinggi & Berat badan kamu terlebih dahulu');
        return;
    }

    tinggi = parseFloat(document.getElementById("inTinggi").value);
    tinggi /= 100;
    berat = parseFloat(document.getElementById("inBerat").value);
    bmi = berat / (tinggi * tinggi);

    if (bmi > 33.0) {
        keterangan1 = "-";
        keterangan2 = '-';
        document.getElementById('angkaBmi').style.color = '#EF233C';
        document.getElementById('ketIdeal').style.color = '#EF233C';
    } else if ((bmi > 30.0) && (bmi <= 32.9)) {
        keterangan1 = "Obesitas";
        keterangan2 = 'Hasil perhitungan menunjukkan bahwa anda tergolong ' + '<b>' + keterangan1 + '</b>' + '. Hasil ini berdasarkan angka ' + '<b>' + 'BMI ' + '</b>' + 'Anda lebih dari 30. Perlu diketahui bahwa obesitas lebih parah daripada gemuk. Seseorang yang gemuk belum tentu obesitas, sedangkan seseorang yang obesitas sudah dipastikan gemuk. Jika dibiarkan, bisa berisiko menderita berbagai penyakit serius.';
        document.getElementById('angkaBmi').style.color = '#EF233C';
        document.getElementById('ketIdeal').style.color = '#EF233C';
    } else if ((bmi >= 25.0) && (bmi <= 29.9)) {
        keterangan1 = "Gemuk";
        keterangan2 = 'Hasil perhitungan menunjukkan bahwa anda memiliki berat badan berlebih atau ' + '<b>' + keterangan1 + '. ' + '</b>' + ' Hasil ini berdasarkan angka ' + '<b>' + 'BMI ' + '</b>' + 'Anda yang berada di angka 25 sampai 29,9. Sebagai solusinya, Anda harus mengurangi asupan asupan kalori harian sekitar ' + '<b>' + '300-500 kkal. ' + '</b>' + 'Mulai sekarang coba lebih perhatikan kalori dari makanan dan minuman yang Anda konsumsi.';
        document.getElementById('angkaBmi').style.color = '#EF233C';
        document.getElementById('ketIdeal').style.color = '#EF233C';
    } else if ((bmi >= 18.5) && (bmi <= 24.9)) {
        keterangan1 = "Normal";
        keterangan2 = 'Hasil perhitungan menunjukkan bahwa anda memiliki ideal berat badan ' + '<b>' + keterangan1 + '</b>' + '. Hasil ini berdasarkan angka BMI Anda yang ada di antara angka 18,5 sampai 24,9. Memiliki berat badan ideal bisa menjadi salah satu cara untuk menjaga kesehatan tubuh secara keseluruhan. Anda juga bisa terhindar dari berbagai risiko penyakit berbahaya.';
        document.getElementById('angkaBmi').style.color = '#2BA84A';
        document.getElementById('ketIdeal').style.color = '#2BA84A';
    } else if ((bmi >= 16.0) && (bmi <= 18.4)) {
        keterangan1 = "Kurus";
        keterangan2 = 'Hasil perhitungan menunjukkan bahwa anda memiliki berat badan kurang atau ' + '<b>' + keterangan1 + '. ' + '</b>' + 'Hasil ini berdasarkan angka BMI anda yang berada di bawah 18,5. Sebagai solusinya, anda membutuhkan asupan kalori tambahan sebanyak ' + '<b>' + '300-500 kkal' + '</b>' + ' per hari. Perbaiki juga pola makan dan pola hidup untuk mendapatkan berat badan ideal.';
        document.getElementById('angkaBmi').style.color = '#0090C1';
        document.getElementById('ketIdeal').style.color = '#0090C1';
    } else {
        keterangan1 = "-----";
        keterangan2 = '-----';
        document.getElementById('angkaBmi').style.color = 'black';
        document.getElementById('ketIdeal').style.color = 'black';
    }

    document.getElementById('angkaBmi').innerHTML = bmi.toFixed(1);
    document.getElementById('ketIdeal').innerHTML = keterangan1;
    document.getElementById('titleKet').innerHTML = keterangan2;
}
