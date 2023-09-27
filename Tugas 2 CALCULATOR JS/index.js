let hasil = document.getElementById('hasil'); 

function Hasil(value) {
    hasil.value += value; 
}

function Clearhasil() {
    hasil.value = ''; 
}

function Hasilakhir() {
    try {
        hasil.value = eval(hasil.value); 
    } catch (error) {
        hasil.value = 'Error'; 
    }
}
