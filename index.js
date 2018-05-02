function getFirstSelector (selector) {
  return document.querySelector(selector);
}

function nestedTarget () {
  return document.querySelector('#nested .target');
}

function increaseRankBy (n) {
  const list = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
}

function deepestChild (selector) {
  let node = document.getElementById('grand-node');

  while (node.querySelector('div')) {
    node = node.querySelector('div');
  }
  return node;
}
