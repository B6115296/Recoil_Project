import axios from "axios";
import { useRecoilState, useRecoilValue , useRecoilStateLoadable} from "recoil";


export const getProductDetails = (id = "6124a36b03b22906c0f91645") => async () => {
    
    const { data } = await axios.get(`/api/products/${id}`)
    
    return console.log(data)
}

export function UserInfo({userID}) {
    const [userNameLoadable, setUserName] = useRecoilStateLoadable((userID));
    switch (userNameLoadable.state) {
      case 'hasValue':
        return <div>{userNameLoadable.contents}</div>;
      case 'loading':
        return <div>Loading...</div>;
      case 'hasError':
        throw userNameLoadable.contents;
    }
  }