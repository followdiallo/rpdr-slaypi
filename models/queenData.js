const data = [
  ["Shannel", 1, 4, false, false, false, 1, 0],
  ["Nina Flowers", 1, 2, true, false, true, 2, 1],
  ["Rebecca Glasscock", 1, 3, false, false, false, 3, 1],
  ["Ongina", 1, 5, false, false, false, 4, 2],
  ["Victoria Porkchop Parker", 1, 9, false, false, false, 5, 0],
  ["Akashia", 1, 7, false, false, false, 6, 0],
  ["Tammie Brown", 1, 8, false, false, false, 7, 0],
  ["Jade", 1, 6, false, false, false, 8, 0],
  ["BeBe Zahara Benet", 1, 1, false, false, false, 9, 2],
  ["Nicole Paige Brooks", 2, 11, false, false, false, 1, 0],
  ["Shangela Laquifa Wadley", 2, 12, false, false, false, 2, 0],
  ["Raven", 2, 2, false, false, false, 3, 2],
  ["Jujubee", 2, 3, false, false, false, 4, 0],
  ["Sahara Davenport", 2, 7, false, false, false, 5, 1],
  ["Morgan McMichaels", 2, 8, false, false, true, 6, 1],
  ["Mystique Summers Madison", 2, 10, false, false, false, 7, 0],
  ["Jessica Wild", 2, 6, false, false, false, 8, 1],
  ["Sonique", 2, 9, false, false, false, 9, 0],
  ["Tatianna", 2, 4, false, true, false, 10, 1],
  ["Pandora Boxx", 2, 5, true, false, false, 11, 0],
  ["Tyra Sanchez", 2, 1, false, false, false, 12, 3],
  ["Delta Work", 3, 7, false, false, false, 1, 0],
  ["Carmen Carrera", 3, 5, false, false, false, 2, 0],
  ["Phoenix", 3, 12, false, false, false, 3, 0],
  ["Manila Luzon", 3, 2, false, false, false, 4, 3],
  ["Stacy Layne Matthews", 3, 8, false, true, false, 5, 1],
  ["Venus D-Lite", 3, 13, false, false, false, 6, 0],
  ["Yara Sofia", 3, 4, true, false, false, 7, 1],
  ["Mariah", 3, 9, false, false, false, 8, 0],
  ["Alexis Mateo", 3, 3, false, false, false, 9, 3],
  ["India Ferrah", 3, 10, false, false, false, 10, 0],
  ["Mimi Imfurst", 3, 11, false, false, false, 11, 0],
  ["Raja", 3, 1, false, false, true, 12, 3],
  ["Shangela", 3, 6, false, false, false, 13, 2],
  ["Willam", 4, 7, false, false, false, 1, 2],
  ["Lashauwn Beyond", 4, 12, false, false, false, 2, 0],
  ["Jiggly Caliente", 4, 8, false, false, false, 3, 0],
  ["Phi Phi O'Hara", 4, 2, false, false, false, 4, 2],
  ["Madame LaQueer", 4, 10, false, false, false, 5, 1],
  ["Milan", 4, 9, false, false, false, 6, 0],
  ["Alisa Summers", 4, 13, false, false, false, 7, 0],
  ["DiDa Ritz", 4, 6, false, false, false, 8, 0],
  ["The Princess", 4, 11, false, false, false, 9, 0],
  ["Kenya Michaels", 4, 5, false, false, false, 10, 0],
  ["Chad Michaels", 4, 2, false, true, false, 11, 2],
  ["Sharon Needles", 4, 1, false, false, true, 12, 4],
  ["Latrice Royale", 4, 4, true, false, false, 13, 2],
  ["Detox", 5, 4, false, false, false, 1, 1],
  ["Roxxxy Andrews", 5, 2, false, false, true, 2, 2],
  ["Jade Jolie", 5, 8, false, false, false, 3, 0],
  ["Serena ChaCha", 5, 13, false, false, false, 4, 0],
  ["Alyssa Edwards", 5, 6, false, false, false, 5, 1],
  ["Jinkx Monsoon", 5, 1, false, true, false, 6, 2],
  ["Penny Tration", 5, 14, false, false, false, 7, 0],
  ["Vivienne Pinay", 5, 10, false, false, false, 8, 0],
  ["Alaska", 5, 2, false, false, false, 9, 2],
  ["Honey Mahogany", 5, 10, false, false, false, 10, 0],
  ["Ivy Winters", 5, 7, true, false, false, 11, 1],
  ["Monica Beverly Hillz", 5, 12, false, false, false, 12, 0],
  ["Lineysha Sparx", 5, 9, false, false, false, 13, 1],
  ["Coco Montrese", 5, 5, false, false, false, 14, 1],
  ["Adore Delano", 6, 2, false, false, false, 1, 3],
  ["BenDeLaCreme", 6, 5, true, true, true, 2, 2],
  ["Gia Gunn", 6, 10, false, false, false, 3, 0],
  ["Laganja Estranja", 6, 8, false, false, false, 4, 1],
  ["April Carrión", 6, 11, false, false, false, 5, 0],
  ["Kelly Mantle", 6, 13, false, false, false, 6, 0],
  ["Vivacious", 6, 12, false, false, false, 7, 0],
  ["Bianca Del Rio", 6, 1, false, false, true, 8, 3],
  ["Trinity K. Bonet", 6, 7, false, false, false, 9, 0],
  ["Joslyn Fox", 6, 6, false, false, false, 10, 0],
  ["Milk", 6, 9, false, false, false, 11, 0],
  ["Magnolia Crawford", 6, 13, false, false, false, 12, 0],
  ["Courtney Act", 6, 2, false, false, false, 13, 2],
  ["Darienne Lake", 6, 4, false, false, false, 14, 1],
  ["Miss Fame", 7, 7, false, false, false, 1, 0],
  ["Ginger Minj", 7, 2, false, true, false, 2, 3],
  ["Jaidynn Diore Fierce", 7, 8, false, false, false, 3, 0],
  ["Violet Chachki", 7, 1, false, false, true, 4, 3],
  ["Max", 7, 9, false, false, false, 5, 2],
  ["Katya", 7, 5, true, false, false, 6, 2],
  ["Jasmine Masters", 7, 12, false, false, false, 7, 0],
  ["Mrs. Kasha Davis", 7, 11, false, false, false, 8, 0],
  ["Trixie Mattel", 7, 6, false, false, false, 9, 0],
  ["Kandy Ho", 7, 10, false, false, false, 10, 0],
  ["Pearl", 7, 2, false, false, false, 11, 2],
  ["Kennedy Davenport", 7, 4, false, true, false, 12, 2],
  ["Sasha Belle", 7, 13, false, false, false, 13, 0],
  ["Tempest DuJour", 7, 14, false, false, false, 14, 0],
  ["Naomi Smalls", 8, 2, false, false, false, 1, 1],
  ["Cynthia Lee Fontaine", 8, 10, true, false, false, 2, 0],
  ["Dax ExclamationPoint", 8, 11, false, false, false, 3, 0],
  ["Naysha Lopez", 8, 9, false, false, false, 4, 0],
  ["Acid Betty", 8, 8, false, false, false, 5, 0],
  ["Robbie Turner", 8, 7, false, false, false, 6, 1],
  ["Kim Chi", 8, 2, false, false, true, 7, 2],
  ["Thorgy Thor", 8, 6, false, false, false, 8, 0],
  ["Bob the Drag Queen", 8, 1, false, true, false, 9, 3],
  ["Laila McQueen", 8, 11, false, false, false, 10, 0],
  ["Chi Chi DeVayne", 8, 4, false, false, false, 11, 1],
  ["Derrick Barry", 8, 5, false, false, false, 12, 1],
  ["Peppermint", 9, 2, false, false, false, 1, 1],
  ["Valentina", 9, 7, true, false, false, 2, 1],
  ["Eureka", 9, 11, false, false, false, 3, 0],
  ["Charlie Hides", 9, 12, false, false, false, 4, 0],
  ["Farrah Moan", 9, 8, false, false, false, 5, 0],
  ["Sasha Velour", 9, 1, false, false, false, 6, 2],
  ["Alexis Michelle", 9, 5, false, true, false, 7, 1],
  ["Shea Couleé", 9, 3, false, false, false, 8, 4],
  ["Trinity Taylor", 9, 3, false, false, false, 9, 3],
  ["Kimora Blac", 9, 13, false, false, false, 10, 0],
  ["Jaymes Mansfield", 9, 14, false, false, false, 11, 0],
  ["Nina Bo'nina Brown", 9, 6, false, false, true, 12, 1],
  ["Aja", 9, 9, false, false, false, 13, 0],
  ["Cynthia Lee Fontaine", 9, 10, false, false, false, 14, 0],
  ["Eureka", 10, 2, false, false, false, 1, 2],
  ["Asia O'Hara", 10, 4, false, false, false, 2, 2],
  ["Miz Cracker", 10, 5, false, false, false, 3, 1],
  ["Yuhua Hamasaki", 10, 12, false, false, false, 4, 0],
  ["Blair St. Clair", 10, 9, false, false, false, 5, 0],
  ["Monét X Change", 10, 6, true, false, false, 6, 0],
  ["Kameron Michaels", 10, 2, false, false, false, 7, 1],
  ["Mayhem Miller", 10, 10, false, false, true, 8, 1],
  ["Kalorie Karbdashian Williams", 10, 13, false, false, false, 9, 0],
  ["Monique Heart", 10, 8, false, false, false, 10, 0],
  ["Dusty Ray Bottoms", 10, 11, false, false, false, 11, 0],
  ["The Vixen", 10, 7, false, false, false, 12, 1],
  ["Vanessa Vanjie Mateo", 10, 14, false, false, false, 13, 0],
  ["Aquaria", 10, 1, false, true, false, 14, 3],
  ["Vanessa Vanjie Mateo", 11, 5, false, false, false, 1, 0],
  ["Nina West", 11, 6, true, false, false, 2, 2],
  ["Shuga Cain", 11, 7, false, false, false, 3, 0],
  ["Plastique Tiara", 11, 8, false, false, false, 4, 1],
  ["Mercedes Iman Diamond", 11, 12, false, false, false, 5, 0],
  ["Scarlet Envy", 11, 10, false, false, false, 6, 1],
  ["Honey Davenport", 11, 13, false, false, false, 7, 0],
  ["A'keria Chanel Davenport", 11, 4, false, false, false, 8, 2],
  ["Yvie Oddly", 11, 1, false, false, false, 9, 1],
  ["Silky Nutmeg Ganache", 11, 4, false, true, false, 10, 2],
  ["Brooke Lynn Hytes", 11, 2, false, false, true, 11, 3],
  ["Ariel Versace", 11, 11, false, false, false, 12, 0],
  ["Ra'jah D. O'Hara", 11, 9, false, false, false, 13, 0],
  ["Kahanna Montrese", 11, 14, false, false, false, 14, 0],
  ["Soju", 11, 15, false, false, false, 15, 0]
];

module.exports = data;
