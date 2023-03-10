import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessages } from '../../redux/messagesSlice';

const Greeting = () => {
  const getGreeting = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  return (
    <>
      <h1>Message:</h1>
      <p>{getGreeting.text}</p>
    </>
  );
};

export default Greeting;
