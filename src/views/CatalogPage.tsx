import Layout from '../components/layout/Layout'

import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../apollo/queries';
import { ProductsData } from '../types/interfaces';


const CatalogPage: React.FC = () => {
  const { loading, error, data } = useQuery<ProductsData>(GET_PRODUCTS);

  return (
    <Layout loading={loading} error={error?.message}>
      <>
        {!loading && data?.products.map(product => (
          <div className='d-flex mb-4 align-items-center' key={product.id}>
            <img className='me-3 rounded float-start w-50'
                 src='http://loremflickr.com/320/240/'
                 alt={`ProductPhoto ${product.id}`} />
            <p>
              {product.description}
            </p>
          </div>
        ))}
      </>
    </Layout>
  )
}

export default CatalogPage;