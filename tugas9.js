function objek() {
  var siswa = {
    nama: 'Haikal',
    kelas: 'X',
    nilaiRapot: {
      semester1: 96,
      semester2: 95,
      semester3: 98,
      semester4: 94,
      semester5: 97,
    },
  };
  for (var x in siswa.nilaiRapot) {
    console.log(siswa.nilaiRapot[x]);
  }
}
objek();
