import './Product.css';
import {Link} from 'react-router-dom';
import { productById } from '../recoil/atom';
import {useRecoilState, useSetRecoilState} from 'recoil'


const Product = ({ imageUrl, description, price, name, productId, countInStock }) => {
  const image = { imageUrl,description,price,name,productId,countInStock}
  //const setSend = useSetRecoilState(productById)

  const [setSend, setSends] = useRecoilState(productById)
  

    
    // useEffect(() => {
    //   setSends(JSON.parse(localStorage.getItem("PRODUCT_DETAIL")))
    //   {console.log(setSend)}
    // }, [setSends])
  



    return (
      
      <div className="product">
        <img src={imageUrl} alt={name} />
  
        <div className="product__info">
          <p className="info__name">{name}</p>
  
          <p className="info__description">{description.substring(0, 100)}...</p>
  
          <p className="info__price">${price}</p>

          <Link to={`/product/${productId}`} className="info__button" onClick={() => setSends(image)}>
            View
          </Link>
        </div>
      </div>
    );
  };

export default Product
