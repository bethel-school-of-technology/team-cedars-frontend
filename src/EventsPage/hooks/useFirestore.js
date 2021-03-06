import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';


//images collection..
const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);
    //connect to database
  useEffect(() => {
    const unsub = projectFirestore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id});
        });
        setDocs(documents);
      });

    return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection]);

  return { docs };
}

export default useFirestore;