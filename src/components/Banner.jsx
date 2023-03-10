import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/ApiCalls";
import { UserContext } from "../contexts/contexts";

export const Banner = () => {
  const {
    user: { username, avatar_url },
  } = useContext(UserContext);

  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <div>
      <header>
        <Link to="/">
          <h1>NC News</h1>
        </Link>

        <nav>
          <Link to="/articles">Articles</Link>
          {topics.map(({ slug }) => {
            return (
              <Link key={slug} to={`/articles/${slug}`}>
                {slug[0].toUpperCase() + slug.slice(1)}
              </Link>
            );
          })}
        </nav>
        <Link to="/login">
          <img src={avatar_url} alt={username} />
        </Link>

        <h4>{username}</h4>
      </header>
    </div>
  );
};
