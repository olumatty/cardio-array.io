const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  
  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];
// filter method in an array
  /*const fiften = inventors.filter (investor => investor.year >=1500 && investor.year < 1600);
  console.table(fiften);*/


  /*const sixten = inventors.filter(function(x){
    if(x.passed >= 1900 && x.passed < 2000){
        return true;
    }
    else {
        return false;
    }
  });
  console.table(sixten); */

// map() method in an array
  /*const fullname = inventors.map(function(inventor){
    return `${inventor.first} ${inventor.last}`;
  });
  console.table(fullname);*/

/*arrow function map array()
 const fullname = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
  console.table(fullname); */

  /*sort() method in an array
  const ordered = inventors.sort(function(a,b){
    if (b.year > a.year){
        return -1;
    } else {
        return 1;
    }
  });

  console.table(ordered);*/


  /*const ordered = inventors.sort((a,b) => a.year >b.year ? -1:1);

  console.log(ordered);*/


  /*const totalYear = inventors.reduce((total, inventor) =>{
    return total + (inventor.passed - inventor.year);
  },0);

  console.log(totalYear); 


  const oldest = inventors.sort(function(a,b){
    const oldguy = a.passed - a.year;
    const newguy = b.passed - b.year;

    return oldguy > newguy ? -1 : 1;
  })*/

  //https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris//
  
  /*const category = document.querySelector(".mw-category");
  const link = Array.from(category.querySelectorAll('a'));
  const de = link
        .map(link => link.textContent)
        .filter(streetName => streetName.includes('de'));*/



const alpha = people.sort(function(lastone, firstone){
    const[alast, afirst] = lastone.split('');
    const[blast, bfirst] = firstone.split('');
    return alast >blast ? 1 : -1 ;
})
console.log(alpha);