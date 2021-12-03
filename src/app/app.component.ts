import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularCourse';

  constructor(){
    const testmap=[1,2,3,4].map(item=>item*2);
    console.log(testmap)

    const testforeach=[1,2,3,4].forEach(item=>item);
    console.log(testforeach)

    const testfind=[1,2,3,4].find(item=>item===2);
    console.log(testfind)

    const testfilter=[1,2,3,4].filter(item=>item%2===0);
    console.log(testfilter)

    const testfindIndex=[1,2,3,4,20].findIndex(item=>item===20);
    console.log(testfindIndex)

    const testIndexOf=[1,2,3,4,20].indexOf(20);
    console.log(testIndexOf)
    const testIndexOfCad='Dario'.indexOf('o');
    console.log(testIndexOfCad)

    const testJoin=[1,2,3,4,20].join('-');
    console.log(testJoin)

    const testSplit='1,2,3,4,20'.split(',');
    console.log(testSplit)

    const testSpliceA=[1,2,3,4,20];
    testSpliceA.splice(0,1)
    console.log(testSpliceA)

    const testSpliceB=[1,2,3,4,20].splice(0,1)
    console.log(testSpliceB)

    const testReduce=[1,2,3,4,20].reduce((acc,value)=>acc+value*2);
    console.log(testReduce)

    const testEntries={value: 'Dario', key: 'dee'};
    console.log('sss',Object.entries(testEntries))

    const testkey={value: 'Dario', key: 'dee'};
    console.log(Object.values(testkey))

    const array1= [1,2,3,4];
    const array2= [1,2,3,4 ,...array1];

    const per1= {name: 'Dario', age: 29};
    const per2= {surname:'Anrrango' ,...per1};
    console.log(per2)

    const per3= {
      name: 'Dario',
    age: 29,
    phone: 989,
    extra: 345
  };

  const {phone:tel}= per3;
  console.log(tel);

  const a = {1:"a",2:"a",3:"a",4:"a",5:"a",6:"a"};
const b= Object.keys(a).map(n => parseInt(n)).reduce((acc,value)=>{
  if(value%2===0)
  acc+=value;
  return acc
},0);
console.log(b);

const arr=[2,4,5,6,7];
const conv=arr.filter(n=>n%2 !=0).join(',')
console.log(conv)

  }
}
