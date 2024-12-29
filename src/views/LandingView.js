import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Landing from '../components/Landing';

const LandingView = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home');
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div>
            <Landing />
        </div>
    );
};

export default LandingView;