import { v4 as uuidv4 } from 'uuid';

export function getArticles() {
  try {
    var storedArticles = JSON.parse(localStorage.getItem("articles"));
    return storedArticles;
  } catch (err) {
    console.log(err);
  }
}

export function setArticles(keyArticle, article) {
  const prevArticles = getArticles();

  if (!prevArticles) {
    localStorage.setItem('articles', JSON.stringify([{id: uuidv4(), article}]));
    return
  }
  localStorage.setItem('articles', JSON.stringify([...prevArticles, {id: uuidv4(), article}]));
};
