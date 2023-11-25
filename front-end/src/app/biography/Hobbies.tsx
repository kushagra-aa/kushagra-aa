"use client";

import { useEffect, useState } from "react";
import ListItemLoader from "../../components/loaders/ListItemLoader/ListItemLoader";

const getHobbiesAPI = async () => {
  const response = await fetch(`/api/hobbies`).then((resp) => resp);
  let hobbies: string[] | undefined = undefined;
  if (response.status === 200)
    hobbies = await response.json().then((d) => d.data);
  return hobbies;
};

function Hobbies() {
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const getHobbies = async () => {
    setIsLoading(true);
    await getHobbiesAPI().then((resp) => {
      setHobbies(resp || []);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getHobbies();
  }, []);

  return (
    <ul>
      {isLoading
        ? [1, 2, 3, 4, 5, 6]?.map((i) => <ListItemLoader key={i} />)
        : hobbies?.map((hobby) => <li key={hobby}>{hobby}</li>)}
    </ul>
  );
}

export default Hobbies;
