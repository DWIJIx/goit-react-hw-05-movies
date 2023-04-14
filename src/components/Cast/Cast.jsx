import { getCastById } from 'services/fetch';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { List, Item } from './Cast.Styled';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCastById(movieId).then(data => {
      setCast(data.cast);
      //   console.log(data.cast);
    });

    //   return function cleanup() {
    //     getCastBiId(movieId);
    //   };
  }, [movieId]);

  return (
    <>
      {cast.length === 0 ? (
        <h3>We don't have any casts for this movie!</h3>
      ) : (
        <List>
          {cast.map(actor => (
            <Item key={actor.id}>
              {actor.profile_path ? (
                <img
                  src={`${IMG_URL}${actor.profile_path}`}
                  alt={actor.name}
                  width={160}
                  height={210}
                />
              ) : (
                <img src={'image'} alt={actor.name} width={160} height={210} />
              )}
              <h4>{actor.name}</h4>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};
export default Cast;
