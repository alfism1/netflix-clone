import { useEffect, useState } from "react";
import { db } from "../lib/firebase.prod"
import { collection, getDocs } from "firebase/firestore"

export default function useContent(target) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, target));
      const allContent = querySnapshot.docs.map((contentObj) => ({
        ...contentObj.data(),
        docId: contentObj.id
      }))

      setContent(allContent);
      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      // });
    };

    fetchData();
  }, [target]);

  return { [target]: content }
}
