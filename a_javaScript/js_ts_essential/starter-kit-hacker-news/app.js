

let ajax = new XMLHttpRequest();
const NEWESURL = 'https://api.hnpwa.com/v0/news/1.json';
ajax.open('GET', NEWESURL, false);

ajax.send();

console.log(ajax.respense);

// 응답값을 객체로
const newsFeed = JSON.parse(ajax.response);
console.log(newsFeed);


// document.getElementById('root').innerHTML = `
//   <ul>
//     <li>${newsFeed[0].title}</li>
//     <li>${newsFeed[1].title}</li>
//     <li>${newsFeed[2].title}</li>
//   </ul>`

const ul = document.createElement('ul');

for (let i = 0; i < 10; i++) {
  const li = document.createElement('li');

  li.innerHTML = newsFeed[i].title;
  ul.appendChild(li);
}

document.getElementById('root').appendChild(ul)
