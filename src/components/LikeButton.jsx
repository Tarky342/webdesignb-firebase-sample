import { useEffect, useState } from 'react';
import { doc, onSnapshot, setDoc, increment } from 'firebase/firestore';
import Button from '@mui/material/Button';
import { db } from '../firebase';
export default function LikeButton({ id }) {
const [likes, setLikes] = useState(0);
useEffect(() => {
const unsubscribe = onSnapshot(doc(db, 'likes', String(id)), (snapshot) => {
setLikes(snapshot.exists() ? snapshot.data().count : 0);
});
return unsubscribe;
}, [id]);
const handleClick = () => {
setDoc(doc(db, 'likes', String(id)), { count: increment(1) }, { merge: true });
};
return (
<Button variant="outlined" color="secondary" onClick={handleClick}>
いいね {likes}
</Button>
);
}
