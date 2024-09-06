// Өгөгдсөн тооны хэдэн зэрэг нь 1000 гэдэг тооноос их эхний тоо вэ?
// 1 ийн тоо болон 1000аас их тоо орж ирвэл боломжгүйг хэвлэх
// Result -> zereg, sum,
let num = 2;
let sum = 0;
let pow;
// 1. zeregt devshuuldeg davtalt -> (num**1, num**2, .. num**1000, Infinity) i < Infinity
// 2. sum>1000 break
// 3. console.log(num-iin i zereg ni)

for (pow = 0; pow < Infinity; pow++) {
  sum = num ** pow;
  if (sum > 1000) {
    console.log(`${num}-iin ${pow} zereg ni 1000 aas ih baina: ${sum}`);
    break;
  }
}

// console.log(2 + "-iin" + " " + 10 + " " + "zereg ni 1000 aas ih baina;" + " " + 1024)
