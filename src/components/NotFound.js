import React from 'react';
import { useNavigate } from 'react-router-dom';
import {mainPage} from '../utils/utils';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
      <div className="row justify-content-center">
          <div className="col-sm-8">
              <div className="card text-center">
                  <img src="../img/Error.jpg" alt="Error-404"/>
                  <div className="card-footer">
                      <button className="btn btn-primary" onClick={() => mainPage(navigate)}>
                          <i className="bi bi-arrow-return-left"></i> Volver a la página principal
                      </button>
                  </div>
              </div>
          </div>
      </div>
  );
};





