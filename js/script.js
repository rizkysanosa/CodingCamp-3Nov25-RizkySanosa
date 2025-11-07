const form = document.getElementById('message-form');
        let namaPengunjung = prompt("Hai! Sebelum kita mulai perjalanan Anda, siapa nama Anda?");

        if (!namaPengunjung || namaPengunjung.trim() === "") {
            namaPengunjung = "Traveler";
        } 

        const elemenSambutan = document.getElementById("welcomeMessage");
        if (elemenSambutan) {
            elemenSambutan.textContent = `Hi ${namaPengunjung}, Welcome To Dewata Journeys`;
        } 
        else {
            console.log(`Pesan Sambutan untuk ${namaPengunjung}: Hi ${namaPengunjung}, Welcome To Dewata Journeys`);
        }

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman form default

        // Ambil data dari form
        const nama = document.getElementById('nama').value;
        const tanggalLahirInput = document.getElementById('tanggal_lahir').value;
        const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
        const pesan = document.getElementById('pesan').value;

        // Format tanggal (DD/MM/YYYY)
        const [year, month, day] = tanggalLahirInput.split('-');
        const formattedDate = `${day}/${month}/${year}`;

        // Update Info Box
        document.getElementById('info-nama').textContent = nama || 'N/A';
        document.getElementById('info-tanggal-lahir').textContent = formattedDate || 'N/A';
        document.getElementById('info-jenis-kelamin').textContent = jenisKelamin || 'N/A';
        document.getElementById('info-pesan').textContent = pesan || 'N/A';

        alert('Pesan berhasil disubmit! Data telah diupdate di kotak preview.');
    });
