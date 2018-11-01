'use strict'
let body=document.getElementById('bbody')
let table=document.getElementById('table1')
let store=[]
let addition=[]
let addition1=[]
let addition2=[]
let last_answer=[]
let hours = ['6am', '7am', '8am', '9am', '10am', '11am','12am','1pm','2pm','3pm','4pm','5pm','TOTAL']

let cookie_store = function(name,price, number_of_cookie_per_customer, min_number, max_number) {
  this.name = name
  this.price=price
  this.number_of_cookie_per_customer =number_of_cookie_per_customer
  this.min_number = min_number
  this.max_number=max_number
}

cookie_store.prototype.no_of_customer_per_hour = function() {
  let randomNumber = Math.ceil(Math.random() * (this.max_number - this.min_number) + this.min_number)
  let number=randomNumber
  return number
}
let store1=new cookie_store("STORE_1",20,4,40,100)
let store2=new cookie_store("STORE_2",22,4,40,100)
let store3=new cookie_store("STORE_3",24,4,40,100)


store.push(store1,store2,store3)

let elHeader = document.createElement('tr')
table.appendChild(elHeader)
let elTh = document.createElement('th')
elHeader.appendChild(elTh)
elTh.innerText = 'STORE'
for(let i = 0; i < hours.length; i++) {
  let elTh = document.createElement('th')
  elHeader.appendChild(elTh)
  elTh.innerText = hours[i]
}
for(let i=0;i<store.length;i++){
let row=document.createElement('tr')
table.appendChild(row)
row.innerText=store[i].name
for(let j=0;j<hours.length;j++){
  let data=document.createElement('td')
  row.appendChild(data)
  if(j<12){
  let number=data.innerText=store[i].no_of_customer_per_hour()
  if(i==0){
  addition.push(number)
  }
  if(i==1){
    addition1.push(number)
  }
  if(i==2){
    addition2.push(number)
  }
  }
  else{
    let sum=0;
    let sum1=0;
    let sum2=0;
    for(let l=0;l<addition.length;l++){
      if(i==0){
    sum=sum+addition[l]
    data.innerText=sum
      }
      if(i==1){
    sum1=sum1+addition1[l]
    data.innerText=sum1
      }
      if(i==2){
        sum2=sum2+addition2[l]
        data.innerText=sum2
      }
    }
    last_answer.push(sum)
    last_answer.push(sum1)
    last_answer.push(sum2)      

}
}
}
let z=addition
console.log(z)

let last_head = document.createElement('tr')
table.appendChild(last_head)
let data = document.createElement('td')
last_head.appendChild(data)
data.innerText = 'RESULT'
for(let i = 0; i < hours.length; i++) {
  let next_data = document.createElement('td')
  last_head.appendChild(next_data)
  

  
  if(i==12){
    let sum=0;
    let counter=0
    while(counter<9){
      sum=sum+last_answer[counter]
    counter++
    }
    next_data.innerText=sum
  }
  else{
    next_data.innerText = addition[i]+addition1[i]+addition2[i]
  }
}
console.log (last_answer)

