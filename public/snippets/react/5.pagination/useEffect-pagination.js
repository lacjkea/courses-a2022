import { useState, useEffect } from "react";
export default function App() {
  const [page, setPage] = useState(0);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://kea-alt-del.dk/t7/api/products?start=${page * 10}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles((prev) => prev.concat(data));
        //or setArticles((prev) => [...prev, ...data]);
        setLoading(false);
      });
  }, [page]);

  return (
    <>
      <ol>
        {articles.map((art) => (
          <li key={art.id}>{art.productdisplayname}</li>
        ))}
      </ol>
      {loading && <p>loading more data</p>}
      <button onClick={() => setPage((prev) => prev + 1)}>Load more</button>
    </>
  );
}
