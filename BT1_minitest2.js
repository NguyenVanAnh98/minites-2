// //BÀI 1
// let a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2==0){
//         alert(a[i]);
//     }
// }

//BÀI 2
// let b=[1,2,3,4,5,6,'a','b','c','a','a','b','c','a']
// let b1=prompt("Xin moi nhap");
// let count=0;
// for (let i = 0; i < b.length; i++) {
//     if (b[i]==b1){
//         count++
//     }
// }
// document.write("co" +  count +  "phan tu" +  b1 )

//BÀI 3
// let sum=0;
// let c =[1,2,3,9,5,4,7,8,5,10,11]
// for (let i = 0; i < c.length; i++) {
//     sum += c[i];
// }
// document.write(sum)

//BÀI 4
let d=0;
for (let i = 2; i < 500; i++) {
    let conDition =true;
    for (let j = 2; j <= i/2; j++) {
        if (i % j ===0) {
            conDition = false;
            break;
        }
    }
    if (conDition){
        d += i;
    }

}
document.write("Tong cac so nguyen to nho hon 500 la" + d);