import { useState, useEffect } from "react";

export default function Test(props) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("something")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <ul>
      {articles.map((art) => (
        <li>art.header</li>
      ))}
    </ul>
  );
}
