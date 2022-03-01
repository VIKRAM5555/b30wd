import React, { useState } from "react";


export function Support() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div>
      
        <button  onClick={() => setLike(like + 1)}>❤ {like}</button>
    

      
        <button  onClick={() => setDislike(dislike + 1)}>💔 {dislike}  </button>
      

    </div>



  );
}
