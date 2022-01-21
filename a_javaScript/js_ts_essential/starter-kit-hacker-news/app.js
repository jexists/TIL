
// https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md

const container = document.getElementById('root');
const content = document.createElement('div');

const ajax = new XMLHttpRequest();
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

function getData(url) {
  ajax.open('GET', url, false);
  ajax.send();

  return JSON.parse(ajax.response);
}

const newsFeed = getData(NEWS_URL);

// ajax.open('GET', NEWS_URL, false);
// ajax.send();
// console.log(ajax.respense);
// // 응답값을 객체로
// const newsFeed = JSON.parse(ajax.response);
// console.log(newsFeed);

// document.getElementById('root').innerHTML = `
//   <ul>
//     <li>${newsFeed[0].title}</li>
//     <li>${newsFeed[1].title}</li>
//     <li>${newsFeed[2].title}</li>
//   </ul>`

const ul = document.createElement('ul');

// #해쉬가 변경될 때
window.addEventListener('hashchange', function () {
  // console.log('해쉬변경');
  // console.log(location.hash);
  
  const id = location.hash.substring(1);
  // ajax.open('GET', CONTENT_URL.replace('@id', id), false);
  // ajax.send();
  // const newsContent = JSON.parse(ajax.response);
  
  const newsContent = getData(CONTENT_URL.replace('@id', id));
  const title = document.createElement('h1');
  title.innerHTML = newsContent.title;

  content.appendChild(title);
  console.log(newsContent);
});

for (let i = 0; i < 10; i++) {
  const div = document.createElement('div');
  div.innerHTML = `
  <li>
  <a href="#${newsFeed[i].id}">${newsFeed[i].title} [${newsFeed[i].comments_count}]</a>
  </li>
  `;

  ul.appendChild(div.children[0]); // == ul.appendChild(div.firstElementChild);

  // const li = document.createElement('li');
  // const a = document.createElement('a');
  // a.href = `#${newsFeed[i].id}`;
  // a.innerHTML = `${newsFeed[i].title} [${newsFeed[i].comments_count}]`
  // a.addEventListener('click', function () {})
  // li.innerHTML = newsFeed[i].title;
  // li.appendChild(a);
  // ul.appendChild(li);
}

container.appendChild(ul)
container.appendChild(content)
