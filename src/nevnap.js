function initArray() {
  this.length = initArray.arguments.length;
  for (var i = 0; i < this.length; i++) {
    this[i + 1] = initArray.arguments[i];
  }
}

function szokoev(ev) {
  return ((ev% 4 == 0 && ev % 100 != 0) || (ev % 400 == 0));
}

function havinev(ev, ho, nap) {
  if (ho == 1) {
    var napok = new initArray("Új&eacute;v, Fruzsina", "Ábel", "Genov&eacute;va, Benjámin", "Titusz, Leona",
      "Simon", "Boldizsár", "Attila, Ramóna", "Gyöngyv&eacute;r", "Marcell",
      "Melánia", "Ágota", "Erno", "Veronika", "Bódog", "Lóránt, Loránd",
      "Gusztáv", "Antal, Antónia", "Piroska", "Sára, Márió", "Fábián, Sebesty&eacute;n",
      "Ágnes", "Vince, Artúr", "Zelma, Rajmund", "Timót", "Pál", "Vanda, Paula",
      "Angelika", "Károly, Karola", "Ad&eacute;l", "Martina, Gerda", "Marcella", "Ignác");
  }
  if (ho == 2)
    if (!szokoev(ev)) {
      var napok = new initArray("Ignác", "Karolina, Aida", "Balázs", "Ráhel, Csenge", "Ágota, Ingrid",
        "Dorottya, Dóra", "Tódor, Rómeó", "Aranka", "Abig&eacute;l, Alex", "Elvira",
        "Bertold, Marietta", "Lívia, Lídia", "Ella, Linda", "Bálint, Valentin",
        "Kolos, Georgina", "Julianna, Lilla", "Donát", "Bernadett", "Zsuzsanna",
        "Aladár, Álmos", "Eleonóra", "Gerzson", "Alfr&eacute;d",
        "Mátyás", "G&eacute;za", "Edina", "Ákos, Bátor", "Elem&eacute;r", "Albin");
    }
  else {
    var napok = new initArray("Ignác", "Karolina, Aida", "Balázs", "Ráhel, Csenge", "Ágota, Ingrid",
      "Dorottya, Dóra", "Tódor, Rómeó", "Aranka", "Abig&eacute;l, Alex", "Elvira",
      "Bertold, Marietta", "Lívia, Lídia", "Ella, Linda", "Bálint, Valentin",
      "Kolos, Georgina", "Julianna, Lilla", "Donát", "Bernadett", "Zsuzsanna",
      "Aladár, Álmos", "Eleonóra", "Gerzson", "Alfr&eacute;d",
      "Szokonap", "Mátyás", "G&eacute;za", "Edina", "Ákos, Bátor", "Elem&eacute;r", "Albin");
  }
  if (ho == 3) {
    var napok = new initArray("Albin", "Lujza", "Korn&eacute;lia", "Kázm&eacute;r", "Adorján, Adrián", "Leonóra, Inez",
      "Tamás", "Nemz.Nonap, Zoltán", "Franciska, Fanni", "Ildikó", "Szilárd",
      "Gergely", "Krisztián, Ajtony", "Matild", "Nemzeti Ünnep, Kristóf",
      "Henrietta", "Gertrúd, Patrik", "Sándor, Ede", "József, Bánk", "Klaudia",
      "Benedek", "Beáta, Izolda", "Emoke", "Gábor, Karina", "Ir&eacute;n, Irisz",
      "Emánuel", "Hajnalka", "Gedeon, Johanna", "Auguszta", "Zalán", "Árpád", "Hugó");
  }
  if (ho == 4) {
    var napok = new initArray("Hugó", "Áron", "Buda, Richárd", "Izidor", "Vince", "Vilmos, Bíborka",
      "Herman", "D&eacute;nes", "Erhard", "Zsolt", "Leó, Szaniszló", "Gyula", "Ida",
      "Tibor", "Anasztázia, Tas", "Csongor", "Rudolf", "Andrea, Ilma", "Emma",
      "Tivadar", "Konrád", "Csilla, No&eacute;mi", "B&eacute;la", "György", "Márk", "Ervin",
      "Zita", "Val&eacute;ria", "P&eacute;ter", "Katalin, Kitti", "Munka Ünnepe, Fülöp, Jakab");
  }
  if (ho == 5) {
    var napok = new initArray("Munka Ünnepe , Fülöp, Jakab", "Zsigmond", "Tímea, Irma", "Mónika, Flórián",
      "Györgyi", "Ivett, Frida", "Gizella", "Mihály", "Gergely", "Ármin, Pálma",
      "Ferenc", "Pongrác", "Szervác, Imola", "Bonifác", "Zsófia, Szonja",
      "Mózes, Botond", "Paszkál", "Erik, Alexandra", "Ivó, Milán",
      "Bernát, Felícia", "Konstantin", "Júlia, Rita", "Dezso", "Eszter, Eliza",
      "Orbán", "Fülöp, Evelin", "Hella", "Emil, Csanád", "Magdolna",
      "Janka, Zsanett", "Ang&eacute;la, Petronella", "Tünde");
  }
  if (ho == 6) {
    var napok = new initArray("Tünde", "Kármen, Anita", "Klotild", "Bulcsú", "Fatime", "Norbert, Cintia",
      "Róbert", "Medárd", "F&eacute;lix", "Margit, Gr&eacute;ta", "Barnabás", "Villo",
      "Antal, Anett", "Vazul", "Jolán, Vid", "Jusztin", "Laura, Alida",
      "Arnold, Levente", "Gyárfás", "Rafael", "Alajos, Leila", "Paulina",
      "Zoltán", "Iván", "Vilmos", "János, Pál", "László", "Levente, Ir&eacute;n",
      "P&eacute;ter, Pál", "Pál", "Tiham&eacute;r");
  }
  if (ho == 7) {
    var napok = new initArray("Tiham&eacute;r, Annamária", "Ottó", "Korn&eacute;l, Soma", "Ulrik", "Emese, Sarolta",
      "Csaba", "Appolónia", "Ellák", "Lukr&eacute;cia", "Amália", "Nóra, Lili",
      "Izabella, Dalma", "Jeno", "Ors, Stella", "Henrik, Roland", "Valter",
      "Endre, Elek", "Frigyes", "Emília", "Ill&eacute;s", "Dániel, Daniella",
      "Magdolna", "Lenke", "Kinga, Kincso", "Kristóf, Jakab", "Anna, Anikó",
      "Olga, Liliána", "Szabolcs", "Márta, Flóra", "Judit, X&eacute;nia", "Oszkár", "Boglárka");
  }
  if (ho == 8) {
    var napok = new initArray("Boglárka", "Lehel", "Hermina", "Domonkos, Dominika", "Krisztina",
      "Berta, Bettina", "Ibolya", "László", "Emod", "Lörinc",
      "Zsuzsanna, Tiborc", "Klára", "Ipoly", "Marcell", "Mária", "Ábrahám",
      "Jácint", "Ilona", "Huba", "Alkotmány Ünnepe, István", "Sámuel, Hajna",
      "Menyh&eacute;rt, Mirjam", "Bence", "Bertalan", "Lajos, Patrícia", "Izsó",
      "Gáspár", "Ágoston", "Beatrix, Erna", "Rózsa", "Erika, Bella", "Egyed, Egon");
  }
  if (ho == 9) {
    var napok = new initArray("Egyed, Egon", "Rebeka, Dorina", "Hilda", "Rozália", "Viktor, Lorinc",
      "Zakariás", "Regina", "Mária, Adrienn", "Ádám", "Nikolett, Hunor",
      "Teodóra", "Mária", "Korn&eacute;l", "Szer&eacute;na, Roxána", "Eniko, Melitta", "Edit",
      "Zsófia", "Diána", "Vilhelmina", "Friderika", "Mát&eacute;, Mirella", "Móric",
      "Tekla", "Gell&eacute;rt, Merc&eacute;desz", "Eufrozina, Kende", "Jusztina", "Adalbert",
      "Vencel", "Mihály", "Jeromos", "Malvin");
  }
  if (ho == 10) {
    var napok = new initArray("Malvin", "Petra", "Helga", "Ferenc", "Aur&eacute;l", "Brúnó, Renáta", "Amália",
      "Koppány", "D&eacute;nes", "Gedeon", "Brigitta", "Miksa", "Kálmán, Ede", "Hel&eacute;n",
      "Ter&eacute;z", "Gál", "Hedvig", "Lukács", "Nándor", "Vendel", "Orsolya", "Elod",
      "Köztársaság kikiált., Gyöngyi", "Salamon", "Blanka, Bianka", "Dömötör",
      "Szabina", "Simon, Szimonetta", "Nárcisz", "Alfonz", "Farkas", "Marianna");
  }
  if (ho == 11) {
    var napok = new initArray("Marianna", "Achilles", "Gyozo", "Károly", "Imre", "L&eacute;nárd", "Rezso",
      "Zsombor", "Tivadar", "R&eacute;ka", "Márton", "Jónás, Renátó", "Szilvia",
      "Aliz", "Albert, Lipót", "Ödön", "Hortenzia, Gergo", "Jeno", "Erzs&eacute;bet",
      "Jolán", "Oliv&eacute;r", "Cecília", "Kelemen, Klementina", "Emma", "Katalin",
      "Virág", "Virgil", "Stefánia", "Taksony", "András, Andor", "Elza");
  }
  if (ho == 12) {
    var napok = new initArray("Elza", "Melinda, Vivien", "Ferenc, Olívia", "Borbála, Barbara", "Vilma",
      "Miklós", "Ambrus", "Mária", "Natália", "Judit", "Árpád", "Gabriella",
      "Luca, Otília", "Szilárda", "Val&eacute;r", "Etelka, Aletta", "Lázár, Olimpia",
      "Auguszta", "Viola", "Teofil", "Tamás", "Z&eacute;no", "Viktória", "Ádám, &Eacute;va",
      "Karácsony, Eug&eacute;nia", "Karácsony, István", "János", "Kamilla",
      "Tamás, Tamara", "Dávid", "Szilveszter", "Új&eacute;v, Fruzsina");
  }
  return napok[nap];
}

function honev(ho) {
  var month = new initArray("január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december");;
  return month[ho];
}

function napnev(szam) {
  var napok = new initArray("vasárnap", "h&eacute;tfo", "kedd", "szerda", "csütörtök", "p&eacute;ntek", "szombat", "vasárnap");
  return napok[szam];
}

var ido = new Date();
var ev = ido.getYear();
if (ev < 2000) ev = ev + 1900;
var ho = ido.getMonth() + 1;
var nap = ido.getDate();

document.getElementById('datenev').innerHTML = '<div class="nevnap"><b>' + ev + '. ' + honev(ho) + ' ' + nap + '. ' + napnev(ido.getDay() + 1) + ', Ma <div class="nevnapos" style="display:inline-block;"> ' + havinev(ev, ho, nap) + '</div>, holnap <div class="nevnapos" style="display:inline-block;"> ' + havinev(ev, ho, nap + 1) + '</div> ünnepli a n&eacute;vnapját.</b></div>';
