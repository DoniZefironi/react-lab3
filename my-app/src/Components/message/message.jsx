import React, { useEffect } from 'react';
import { useState } from 'react';
import { Toast } from 'react-bootstrap';

export default function Message() {
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        const toastTrigger = document.getElementById('liveToastBtn');

        if (toastTrigger) {
            toastTrigger.addEventListener('click', () => {
                setShowToast(true);
            });
        }

        return () => {
            if (toastTrigger) {
                toastTrigger.removeEventListener('click', () => {
                    setShowToast(false);
                });
            }
        };
    }, []);

    return (
        <>
            <button type="button" className="btn btn-primary" id="liveToastBtn">
                Показать пример
            </button>
            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                <Toast show={showToast} onClose={() => setShowToast(false)}>
                    <Toast.Header>
                        <img src="..." className="rounded me-2" alt="..." />
                        <strong className="me-auto">Bootstrap</strong>
                        <small>11 мин назад</small>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Закрыть"></button>
                    </Toast.Header>
                    <Toast.Body>Привет, мир! Это тост-сообщение.</Toast.Body>
                </Toast>
            </div>
        </>
    );
}