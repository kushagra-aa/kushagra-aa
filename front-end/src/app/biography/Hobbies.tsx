"use client";

import { useEffect, useState } from "react";

const getHobbiesAPI = async () => {
  const response = await fetch(`/api/hobbies`).then((resp) => resp);
  let hobbies: string[] | undefined = undefined;
  if (response.status === 200)
    hobbies = await response.json().then((d) => d.data);
  return hobbies;
};

function Hobbies() {
  const [hobbies, setHobbies] = useState<string[]>([]);
  const getHobbies = async () => {
    await getHobbiesAPI().then((resp) => {
      setHobbies(resp || []);
    });
  };

  useEffect(() => {
    getHobbies();
  }, []);

  return <ul>{hobbies?.map((hobby) => <li key={hobby}>{hobby}</li>)}</ul>;
}

export default Hobbies;
