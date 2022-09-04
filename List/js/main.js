const input = document.querySelector('#search')
const addBtn = document.querySelector('#btn')
const res = document.querySelector('#list')

addBtn.addEventListener('click', addTodoItems) ;


function addTodoItems() {
  let val = input.value;
  input.value = '';
  const list = document.createElement('div');
  list.className = 'result__item';
  // list.innerHTML +=
  // `<p class='result__list'>${val}</p>
  //  `;
   res.appendChild(list);



   const item = document.createElement('p');
   item.className = 'result__list';
   item.innerHTML +=
   `${val}`;
   list.appendChild(item);


   const block = document.createElement('div')
   block.className = 'result__block';
   list.appendChild(block);


   const check = document.createElement('input');
   check.type = 'checkbox';
   check.className = 'checkbox';
   block.appendChild(check);

   check.addEventListener('click', (e) =>{
     item.classList.toggle('result__list-active')
   })

   const delBtn = document.createElement('button');
   delBtn.className = 'delete__btn';
   delBtn.textContent = '';
   block.appendChild(delBtn);

    delBtn.addEventListener('click', (e) =>{
      res.removeChild(list)
    })

}
