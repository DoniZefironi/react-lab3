import React, { useEffect } from 'react';
import { useState } from 'react';
import { Toast } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
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
                Вопрос?
            </button>
            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                <Toast show={showToast} onClose={() => setShowToast(false)}>
                    <Toast.Header>
                        <img src="..." className="rounded me-2" alt="..." />
                        <strong className="me-auto">Поддержка</strong>
                        <small>11 мин назад</small>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Закрыть"></button>
                    </Toast.Header>
                    <Toast.Body>Если у вас есть вопросы - обращайтесь</Toast.Body>
                </Toast>
            </div>
        </>
    );
}