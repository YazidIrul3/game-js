class Mobil {
  constructor(nama) {
    this.nama = nama;
  }

  get getKecepatan() {
    return this.kecepatan;
  }

  finish() {
    return this.kecepatan > 100;
  }
}

class Skyline extends Mobil {
  constructor(name, kecepatan) {
    super(name);
    this.kecepatan = 5;
  }

  get getNama() {
    return this.nama;
  }

  get getKecepatan() {
    return this.kecepatan;
  }
}

class Supra extends Mobil {
  constructor(name, kecepatan) {
    super(name, kecepatan);
    this.kecepatan = 6;
  }

  get getNama() {
    return this.nama;
  }

  get getKecepatan() {
    return this.kecepatan;
  }
}
class Gtr extends Mobil {
  constructor(name, kecepatan) {
    super(name, kecepatan);
    this.kecepatan = 4;
  }

  get getNama() {
    return this.nama;
  }

  get getKecepatan() {
    return this.kecepatan;
  }
}
class Chiron extends Mobil {
  constructor(name, kecepatan) {
    super(name, kecepatan);
    this.kecepatan = 5;
  }

  get getNama() {
    return this.nama;
  }

  get getKecepatan() {
    return this.kecepatan;
  }
}
class Veyron extends Mobil {
  constructor(name, kecepatan) {
    super(name, kecepatan);
    this.kecepatan = 6;
  }

  get getNama() {
    return this.nama;
  }

  get getKecepatan() {
    return this.kecepatan;
  }
}

class Item {
  boost() {
    return 5;
  }

  zonk() {
    return -7;
  }
}

class Game {
  constructor() {
    this.player1;
    this.player2;
    this.player1Kecepatan = 0;
    this.player2Kecepatan = 0;
    this.player1Jarak = 0;
    this.player2Jarak = 0;

    this.finish = 100;
    this.start = 0;
  }

  pilihMobil(prompt1, prompt2) {
    if (prompt1 == "skyline") {
      const skyline = new Skyline("skyline");
      this.player1 = skyline.getNama;
      this.player1Kecepatan = skyline.kecepatan;
    } else if (prompt1 == "supra") {
      const supra = new Supra("supra");
      this.player1 = supra.getNama;
      this.player1Kecepatan = supra.kecepatan;
    } else if (prompt1 == "gtr") {
      const gtr = new Gtr("gtr");
      this.player1 = gtr.getNama;
      this.player1Kecepatan = gtr.kecepatan;
    } else if (prompt1 == "chiron") {
      const chiron = new Chiron("chiron");
      this.player1 = chiron.getNama;
      this.player1Kecepatan = chiron.kecepatan;
    } else if (prompt1 == "veyron") {
      const veyron = new Veyron("veyron");
      this.player1 = veyron.getNama;
      this.player1Kecepatan = veyron.kecepatan;
    } else {
      this.player1 = undefined;
    }

    if (prompt2 == "skyline") {
      const skyline = new Skyline("skyline");
      this.player2 = skyline.getNama;
      this.player2Kecepatan = skyline.kecepatan;
    } else if (prompt2 == "supra") {
      const supra = new Supra("supra");
      this.player2 = supra.getNama;
      this.player2Kecepatan = supra.kecepatan;
    } else if (prompt2 == "gtr") {
      const gtr = new Gtr("gtr");
      this.player2 = gtr.getNama;
      this.player2Kecepatan = gtr.kecepatan;
    } else if (prompt2 == "chiron") {
      const chiron = new Chiron("chiron");
      this.player2 = chiron.getNama;
      this.player2Kecepatan = chiron.kecepatan;
    } else if (prompt2 == "veyron") {
      const veyron = new Veyron("veyron");
      this.player2 = veyron.getNama;
      this.player2Kecepatan = veyron.kecepatan;
    } else {
      return (this.player2 = undefined);
    }
  }

  vs() {
    console.log(`${this.player1} vs ${this.player2}`);
  }

  gamePlay(promt1, promt2) {
    const random = Math.round(Math.random() * 1);
    const item = new Item();
    let player1Aksi = false;

    if (promt1 == 1) {
      if (player1Aksi === false) {
        if (random === 0) {
          this.player1Jarak =
            this.player1Jarak + this.player1Kecepatan + item.boost();
        } else {
          this.player1Jarak =
            this.player1Jarak + this.player1Kecepatan + item.zonk();
        }
        player1Aksi = true;
      }
    }

    if (promt2 == 2) {
      if (player1Aksi === true) {
        if (random === 0) {
          this.player2Jarak =
            this.player2Jarak + this.player2Kecepatan + item.boost();
        } else {
          this.player2Jarak =
            this.player2Jarak + this.player2Kecepatan + item.zonk();
        }
        player1Aksi = false;
      }
    }
  }

  posisiPertama() {
    if (this.player1Jarak > this.player2Jarak) {
      return `${this.player1} sementara berada di posisi 1`;
    } else if (this.player1Jarak < this.player2Jarak) {
      return `${this.player2} sementara berada di posisi 1`;
    } else if (this.player1Jarak == this.player2Jarak) {
      return `seri`;
    }
  }

  jarak() {
    return `${this.player1Jarak}, ${this.player2Jarak}`;
  }

  winners() {
    if (this.player1Jarak > this.player2Jarak) {
      console.log(`${this.player1} menang`);
    } else if (this.player1Jarak < this.player2Jarak) {
      console.log(`${this.player2} menang`);
    }
  }
}

class Balapan {
  static game = new Game();

  adu() {
    const promt1 = Number(prompt("Masukan angka 1"));
    const promt2 = Number(prompt("Masukan angka 2"));

    game.gamePlay(promt1, promt2);

    // game.gamePlay();
  }

  loop() {
    while (game.player1Jarak < 100 && game.player2Jarak < 100) {
      this.adu();
      console.log(game.jarak());
      console.log(game.posisiPertama());
    }

    game.winners();
  }
}

const game = new Game();
const veyron = new Veyron();
const balapan = new Balapan();
const print = () => {
  const prompt1 = prompt("pilih mobil 1 (veyron,gtr,chiron,supra,skyline)");
  const prompt2 = prompt("pilih mobil 2 (veyron,gtr,chiron,supra,skyline) ");

  game.pilihMobil(prompt1, prompt2);
  game.vs();

  if (game.player1 !== undefined && game.player2 !== undefined) {
    balapan.loop();
  }
};

print();
