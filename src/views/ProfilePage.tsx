import Layout from "../components/layout/Layout";
import { useAppSelector } from "../types/hooks";

import ProfileImage from '../images/profileImage.png';


const ProfilePage: React.FC = () => {
  const token = useAppSelector(state => state.Token);

  return (
    <Layout>
      <div className=" mt-5 d-flex justify-content-center align-items-center">
        <img src={ ProfileImage }
             alt='AboutUs Logo'
             className='w-25'/>
        <div className="text-center">
          Страница профиля. Приветствуем вас!
          <p>{`Ваш токен ${token}!`}</p> 
        </div>
      </div>
    </Layout>
  )
}

export default ProfilePage;