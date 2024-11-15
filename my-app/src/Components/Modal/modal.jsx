import React from 'react';

export default function Modal() {
  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Запустите демо модального окна
      </button>
<main>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Заголовок модального окна</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
            </div>
            <div className="modal-body">
              {/* Содержимое модального окна */}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
              <button type="button" className="btn btn-primary">Сохранить изменения</button>
            </div>
          </div>
        </div>
      </div>
      </main>
    </>
  );
}