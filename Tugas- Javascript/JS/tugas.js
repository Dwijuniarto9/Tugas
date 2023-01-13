zodiak(4, 20);
function zodiak(bln, tgl) {
    let hasil = "salah";
    if (bln > 0 && bln < 13 && tgl > 0 && tgl < 32) {
        hasil = "Zodiak belum dibuat";
        if (bln == 1) {
            hasil = "Zodiak anda Capricorn";
            if (tgl > 21) {
                hasil = "Zodiak anda Aquarius";
            }
        }
        if (bln == 2 && tgl < 30) {
            hasil = "Zodiak anda Aquarius";
            if (tgl > 18 ) {
            hasil = "Zodiak anda Pisces";
            }
        }
        if (bln == 4) {
            hasil = "Zodiak anda Aries";
            if (tgl > 18 && tgl < 31) {
            hasil = "Zodiak anda Taurus"
            }
        }
    }
    console.log(hasil);
}


lulus(70)
function lulus(nilai) {
    let hasil = "Nilai Salah";
    let kkm = 85;
        if (nilai > 0 && nilai <= 100) {
            if (nilai >= kkm) {
                hasil = "Lulus";
            }
            if (nilai < kkm) {
                hasil = "Tidak Lulus";
            }
        }
        console.log(hasil);
    }


console.log(terbilang(200000))
function terbilang(angka) {
var bilne=["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas"];
    if(angka < 12){
			return bilne[angka];
		}else if(angka < 20){
			return terbilang(angka-10)+" belas";
		}else if(angka < 100){
			return terbilang(Math.floor(parseInt(angka)/10))+" puluh "+terbilang(parseInt(angka)%10);
		}else if(angka < 200){
			return "seratus "+terbilang(parseInt(angka)-100);
		}else if(angka < 1000){
			return terbilang(Math.floor(parseInt(angka)/100))+" ratus "+terbilang(parseInt(angka)%100);
		}else if(angka < 2000){
			return "seribu "+terbilang(parseInt(angka)-1000);
		}else if(angka < 1000000){
			return terbilang(Math.floor(parseInt(angka)/1000))+" ribu "+terbilang(parseInt(angka)%1000);
		}else if(angka < 1000000000){
			return terbilang(Math.floor(parseInt(angka)/1000000))+" juta "+terbilang(parseInt(angka)%1000000);
		}else if(angka < 1000000000000){
			return terbilang(Math.floor(parseInt(angka)/1000000000))+" milyar "+terbilang(parseInt(angka)%1000000000);
		}else if(angka < 1000000000000000){
			return terbilang(Math.floor(parseInt(angka)/1000000000000))+" trilyun "+terbilang(parseInt(angka)%1000000000000);
		}
	}    


prima(3);
function prima(bilangan) {
    let prima = true;
    if (bilangan === 1) {
        console.log("1 bukan bilangan prima");
        } else if (bilangan > 1) {
        for (let i = 2; i < bilangan; i++) {
            if (bilangan % i == 0) {
                prima = false;
                break;
            }
        }
        if (prima) {
            console.log(`${bilangan} Adalah bilangan prima`);
        } else {
            console.log(`${bilangan} Bukan bilangan prima`);
        }
        } else {
        console.log("Bilangan ini bukan bilangan prima");
        }
    }