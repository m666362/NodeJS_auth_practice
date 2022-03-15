// // // // function calculatePrice(price, tax, name) {
// // // //     tax = tax ?? 0.05;
// // // //     name = name ?? "Default Item"
// // // //     price = price + 100*tax;
// // // //     console.log(`%cprice of ${name} is = %c${price} `, "font-weight:bold", "color:green");
// // // // }

// // // // let users = [
// // // //     {
// // // //         name: "Rayhan",
// // // //         age: 28
// // // //     },
// // // //     {
// // // //         name: "Rayhan",
// // // //         age: 28
// // // //     },
// // // //     {
// // // //         name: "Rayhan",
// // // //         age: 28
// // // //     },
// // // //     {
// // // //         name: "Rayhan",
// // // //         age: 28
// // // //     }
// // // // ]

// // // // calculatePrice(100, 0.1, "Rice");
// // // // calculatePrice(100, 0, "");
// // // // console.table(users)
// // // // // calculatePrice(100, undefined, undefined);

// // // let arr = [];
// // // arr[1] = 1;
// // // arr[2] = 1;
// // // function fibonacci(n) {
// // //   if (n <= 2) {
// // //     return 1;
// // //   } else {
// // //     if (arr[n]) {
// // //       return arr[n];
// // //     } else {
// // //       let funOfSmaller = fibonacci(n - 1);
// // //       let funOfSmallest = fibonacci(n - 2);
// // //       arr[n] = funOfSmaller + funOfSmallest;
// // //       return arr[n];
// // //     }
// // //   }
// // // }

// // // console.log({ res: fibonacci(10) , arr});
// // function findChildren(IndFamilyTree) {
// //   if (IndFamilyTree?.children?.length) {
// //     IndFamilyTree?.children.forEach((singleFamily) => {
// //       console.log({ parent: IndFamilyTree.name, children: singleFamily.name });
// //       findChildren(singleFamily);
// //     });
// //   } else {
// //     return;
// //   }
// // }

// // //   console.log({familyTree: JSON.stringify(familyTree)});

// // var familyTree = {
// //   name: "Salamat Khan",
// //   children: [
// //     {
// //       name: "Ismail Khan",
// //       children: [
// //         {
// //           name: "Jamal Khan",
// //           children: [
// //             {
// //               name: "Rayhan",
// //               children: [],
// //             },
// //             {
// //               name: "Marjana",
// //               children: [
// //                 {
// //                   name: "Nuraida",
// //                   children: [],
// //                 },
// //               ],
// //             },
// //             {
// //               name: "Jihan",
// //               children: [],
// //             },
// //           ],
// //         },
// //       ],
// //     },
// //     {
// //       name: "Anwar Khan",
// //       children: [
// //         {
// //           name: "Bakteyar Khan",
// //           children: [
// //             {
// //               name: "Sabuj",
// //               children: [
// //                 {
// //                   name: "Unknown",
// //                   children: [],
// //                 },
// //               ],
// //             },
// //             {
// //               name: "Najma",
// //               children: [
// //                 {
// //                   name: "Layan",
// //                   children: [],
// //                 },
// //                 {
// //                   name: "Unknown",
// //                   children: [],
// //                 },
// //               ],
// //             },
// //             {
// //               name: "Arif",
// //               children: [],
// //             },
// //             {
// //               name: "Naima",
// //               children: [],
// //             },
// //             {
// //               name: "Jubair",
// //               children: [],
// //             },
// //             {
// //               name: "Fahim",
// //               children: [],
// //             },
// //           ],
// //         },
// //         {
// //           name: "Abul Kashem",
// //           children: [
// //             {
// //               name: "Mamun",
// //               children: [
// //                 {
// //                   name: "Layan",
// //                   children: [],
// //                 },
// //                 {
// //                   name: "Unknown",
// //                   children: [],
// //                 },
// //               ],
// //             },
// //             {
// //               name: "Asif",
// //               children: [],
// //             },
// //             {
// //               name: "Ashikh",
// //               children: [],
// //             },
// //             {
// //               name: "Shawon",
// //               children: [],
// //             },
// //           ],
// //         },
// //         {
// //           name: "Didarul Alam",
// //           children: [
// //             {
// //               name: "Liza",
// //               children: [],
// //             },
// //             {
// //               name: "Ini",
// //               children: [],
// //             },
// //             {
// //               name: "Unknown",
// //               children: [],
// //             },
// //           ],
// //         },
// //         {
// //           name: "Alam Khan",
// //           children: [],
// //         },
// //       ],
// //     },
// //     {
// //       name: "Idris Khan",
// //       children: [
// //         {
// //           name: "Ishaq Mia",
// //           children: [
// //             {
// //               name: "Ruma",
// //               children: [
// //                 {
// //                   name: "Ruman x",
// //                   children: [],
// //                 },
// //                 {
// //                   name: "Ruman y",
// //                   children: [],
// //                 },
// //               ],
// //             },
// //             {
// //               name: "Runa",
// //               children: [
// //                 {
// //                   name: "Runa Z",
// //                   children: [],
// //                 },
// //               ],
// //             },
// //             {
// //               name: "Miraj",
// //               children: [],
// //             },
// //             {
// //               name: "Eva",
// //               children: [],
// //             },
// //           ],
// //         },
// //         {
// //           name: "Abdul Mia",
// //           children: [
// //             {
// //               name: "Rima",
// //               children: [],
// //             },
// //             {
// //               name: "Tushar",
// //               children: [],
// //             },
// //           ],
// //         },
// //         {
// //           name: "Kamrul Hasan",
// //           children: [
// //             {
// //               name: "Sharmin",
// //               children: [],
// //             },
// //             {
// //               name: "Sayem",
// //               children: [],
// //             },
// //             {
// //               name: "Humaira",
// //               children: [],
// //             },
// //           ],
// //         },
// //       ],
// //     },
// //     {
// //       name: "Yunus Khan",
// //       children: [
// //         {
// //           name: "Harun Ur Rashid",
// //           children: [
// //             {
// //               name: "Safa",
// //               children: [],
// //             },
// //             {
// //               name: "Marwa",
// //               children: [],
// //             },
// //             {
// //               name: "Azan",
// //               children: [],
// //             },
// //           ],
// //         },
// //         {
// //           name: "Md Shajahan",
// //           children: [
// //             {
// //               name: "Atkia",
// //               children: [],
// //             },
// //           ],
// //         },
// //       ],
// //     },
// //   ],
// // };

// // // console.log({familyTree: JSON.stringify(familyTree)});
// // findChildren(familyTree);

// let array = [1, 3, 5, 9, 8];
// array = array.sort((a, b) => a - b);
// let i = 0,
//   j = array.length - 1,
//   target = 9;
// while (i < j) {
//   let leftElement = array[i],
//     rightElement = array[j];
//   if (leftElement + rightElement > target) {
//     j--;
//   } else if (leftElement + rightElement < target) {
//     i++;
//   } else {
//     console.log(`Result is found at ${i} and ${j}`);
//     console.log(
//       `Result is found at ${leftElement} + ${rightElement} = ${target}`
//     );
//     break;
//   }
// }

var readline = require("readline")

var r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
})

r.on("line", function (line) {
  var vals = line.split(" ")
  var input = Number(vals[0])

  let result = []
  while (true) {
    result.push(input)
    if (input === 1) break
    if (input % 2 === 0) input = input / 2
    else input = input * 3 + 1
  }

  console.log(result.join(" "))
})
