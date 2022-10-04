import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../types/hooks';
import { ProtectedPageProps } from '../types/types';

export const ProtectedPage: React.FC<ProtectedPageProps> = ({ children }) => {
    const isAuth = useAppSelector(state => state.isAuth)

    return isAuth? (
      <>
        {children}
      </>
    ) : (
      <Navigate to="/login" />
    )
}