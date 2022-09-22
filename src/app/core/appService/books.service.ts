import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, elementAt } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

constructor() { }

data = [
  { 
    'id': 1,
    'Book' : 'The Alchemist',
    'Author' : 'Paulo Coelho',
    'Quantity' : 3,
    'Summary' : "The Alchemist is a classic novel in which a boy named Santiago embarks on a journey seeking treasure in the Egyptian pyramids after having a recurring dream about it and on the way meets mentors, falls in love, and most importantly, learns the true importance of who he is and how to improve himself and focus on what really matters in life."
  },
  {
    'id' :2,
    'Book' : 'The Courage to be Disliked',
    'Author' : 'Fumitake Koga',
    'Quantity' : 4,
    'Summary' : 'The Courage To Be Disliked is a Japanese analysis of the work of 19th-century psychologist Alfred Adler, who established that happiness lies in the hands of each human individual and does not depend on past traumas.'
  },
  {
    'id' : 3,
    'Book' : 'Atomic Habits',
    'Author' : 'James Clear',
    'Quantity' : 4,
    'Summary' : 'Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time.'
  },{
    'id' :4,
    'Book' : 'To kill a mockingbird',
    'Author' : 'Harper Lee',
    'Quantity' : 4,
    "Summary" : 'To Kill a Mockingbird takes place in the fictional town of Maycomb, Alabama, during the Great Depression. The protagonist is Jean Louise (“Scout”) Finch, an intelligent though unconventional girl who ages from six to nine years old during the course of the novel. She is raised with her brother, Jeremy Atticus (“Jem”), by their widowed father, Atticus Finch. He is a prominent lawyer who encourages his children to be empathetic and just. He notably tells them that it is “a sin to kill a mockingbird,” alluding to the fact that the birds are innocent and harmless.'
  },{
    'id' :5,
    'Book' : 'Psychology of Money',
    'Author' : 'Morgan Housel',
    'Quantity' : 5,
    'Summary' : 'The Psychology of Money explores how money moves around in an economy and how personal biases and the emotional factor play an important role in our financial decisions, as well as how to think more rationally and make better decisions when it comes to money.'
  },{
    'id' : 6,
    'Book' : 'And the Mountains echoed',
    'Author' : 'Khaled Hosseini',
    'Quantity' : 3,
    'Summary' : "'Khaled Hosseini's And the Mountains Echoed begins with a fable that a father tells his two children: A farmer who works hard to eke out a living for his family is forced to give up one of his five children to an evil giant. He and his wife decide to choose randomly, and the unlucky one happens to be their favorite son.'"
  }
]
bookadd : string = ""

getBook(id:any){
  const filtered = this.data.filter(ele => ele.id === Number(id));
  return filtered[0];
}

addBook(Book : string, Author : string){
  const lastBook = this.data.slice(-1)[0]
  let obj = {
    id : Number(lastBook.id + 1),
    Book : Book,
    Author : Author,
    Quantity : 1,
    Summary : 'no description available'
  }
  const temp = this.data.filter((item) => item.Book === Book && item.Author === Author)
  console.log(temp);
  if(temp.length === 0){
    this.data.push(obj);
    this.bookadd = `You added ${Book}`
  }else{
    this.data.map(ele => {
      if(ele.Book === Book && ele.Author === Author){
        ele.Quantity += 1;
      }
    })
  }
}

bookarr:any = []
issuedBook : string = ""
onSubmit(myform : NgForm, name:string){
  console.log(myform);
  console.log('->>>>>>>>.',myform.value);
      if(this.bookarr.length === 0){
        const temp = this.data.map((item)=>{
          if(item.Book === myform.value.Book){
            if(item.Quantity ===0){
              alert("No more books left to be issued")
            }
            else{
              item.Quantity -=1;
              this.userData.map(ele =>{
                if(ele.Name === name){
                  ele.Issued.push(myform.value)
                }
              })
            }
          }
        })
        alert("Book issued")
        this.bookarr.push(myform.value.Book)
      }else{
        alert("You've already issued a book")
      }
  }

returnBook(myform : NgForm){
  const temp = this.data.filter((item)=> {
    if(item.Book === myform.value.Book){
      alert("Book returned")
      item.Quantity +=1;
      this.bookarr.pop(myform.value.Book)
    }
  })
}


userData = [
  {
    Name : 'Harsh',
    Issued : ['abc', 'pqr']
  }
]

currentLoggedIn = {
  name:''
}


 checkStatus(){
  const promise = new Promise((resolve,reject)=>{
    let res = this.currentLoggedIn.name === 'harsh' ? true : false
    resolve(res)
  })
  return promise
}

visible = new BehaviorSubject<boolean>(false);

changeVisible(){
  if(this.currentLoggedIn.name.length > 0){
    this.visible.next(true)
  }else{
    this.visible.next(false)
  }
  }

  cancelBook() {
    
  }

}