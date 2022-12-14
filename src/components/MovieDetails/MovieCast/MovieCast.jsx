import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'api/api';
import { CastList } from './CastList/CastList';
import { Message } from 'components/Shared/Message.styled';
import { Loader } from 'components/Loader/Loader';

const MovieCast = () => {
  const { movieID } = useParams();

  const [castData, setCastData] = useState(null);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    getCast(movieID)
      .then(result => {
        setCastData(result);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [movieID]);

  if (status === 'pending') return <Loader />;
  if (status === 'rejected')
    return <Message>Ooops, something went wrong</Message>;
  if (status === 'resolved' && castData.length === 0)
    return <Message>There is no cast information for that movie</Message>;
  if (status === 'resolved') return <CastList castData={castData} />;
};

export default MovieCast;
