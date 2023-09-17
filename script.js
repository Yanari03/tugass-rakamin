// Array untuk menyimpan pendaftar
const pendaftarList = [];

// Tangani submit form
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Ambil nilai dari form
    const nama = document.getElementById("nama").value;
    const umur = parseInt(document.getElementById("umur").value);
    const uangSangu = parseInt(document.getElementById("uangSangu").value);

    // Validasi form
    if (nama.length < 10 || umur < 25 || uangSangu < 100000 || uangSangu > 1000000) {
        alert("Mohon isi data dengan benar!");
        return;
    }

    // Tambahkan pendaftar baru ke array
    pendaftarList.push({ nama, umur, uangSangu });

    // Kosongkan form
    document.getElementById("nama").value = "";
    document.getElementById("umur").value = "";
    document.getElementById("uangSangu").value = "";

    // Update tabel dan rata-rata
    updateTableAndRataRata();
});

// Fungsi untuk mengupdate tabel dan perhitungan rata-rata
function updateTableAndRataRata() {
    const pendaftarTableBody = document.getElementById("pendaftarTableBody");
    pendaftarTableBody.innerHTML = "";

    let totalUangSangu = 0;
    let totalUmur = 0;

    pendaftarList.forEach(pendaftar => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${pendaftar.nama}</td>
            <td>${pendaftar.umur}</td>
            <td>${pendaftar.uangSangu}</td>
        `;
        pendaftarTableBody.appendChild(row);

        totalUangSangu += pendaftar.uangSangu;
        totalUmur += pendaftar.umur;
    });

    const rataRataUangSangu = pendaftarList.length > 0 ? totalUangSangu / pendaftarList.length : 0;
    const rataRataUmur = pendaftarList.length > 0 ? totalUmur / pendaftarList.length : 0;

   

