    'use strict'
    let body=document.getElementById('bbody')//bbody id an id for the body tag
    let table=document.getElementById('table1')//id for the table in html
    let c_form=document.getElementById('cookie_form')

    let store=[]

    let hours = ['6am', '7am', '8am', '9am', '10am', '11am','12am','1pm','2pm','3pm','4pm','5pm','TOTAL']
    let number_of_cookie_per_customer=4

    let cookie_store = function(name,price, min_number, max_number) {
      this.name = name
      this.price=price
      this.number_of_cookie_per_customer =number_of_cookie_per_customer
      this.min_number = min_number
      this.max_number=max_number
    }

    cookie_store.prototype.no_of_customer_per_hour = function() {
      let randomNumber = Math.ceil(Math.random() * (this.max_number - this.min_number) + this.min_number)
      let number=randomNumber*this.number_of_cookie_per_customer
      return number
    }


    let store1=new cookie_store("STORE_1",20,40,100)
    let store2=new cookie_store("STORE_2",22,40,100)
    let store3=new cookie_store("STORE_3",24,40,100)


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

    cookie_store.prototype.jenerator=function(){
    //for(let k=0;k<store.length.length;k++){
      //let variable='store'+k
      //variable=[]
    //}
      console.log("the debbuger is right here")
      let row=document.createElement('tr')
      table.appendChild(row)
      let head_data=document.createElement('th')
      row.appendChild(head_data)
      head_data.innerText=this.name
      let sum=0
      let assign=0
      for(let i=0;i<hours.length;i++){
        let row_data=document.createElement('td')
        row.appendChild(row_data)
      
        if(i<hours.length-1){
        assign=row_data.innerText=this.no_of_customer_per_hour()
        sum=sum+assign
        }
        else{
        row_data.innerText=sum
        }
      }

    }
    for(let j=0;j<store.length;j++){
      store[j].jenerator()
    }
    let store_name=c_form.nameofstore
    let c_price=c_form.price
    let c_min=c_form.mincustomer
    let c_max=c_form.maxcustomer
    c_form.addEventListener('submit',function(event){
      event.preventDefault()
      let number1=parseInt(c_price.value)
      console.log(number1)
      let number2=parseInt(c_min.value)
      let number3=parseInt(c_max.value)
      let new_row=new cookie_store(store_name.value,number1,number2,number3)
      new_row.jenerator()
    })