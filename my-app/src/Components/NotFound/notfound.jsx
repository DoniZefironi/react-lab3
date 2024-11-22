import React from 'react';
import { useTranslation } from 'react-i18next';
export default function NotFound() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Страница не найдена</h1>
            <p>Извините, но запрашиваемая вами страница не существует.</p>
        </div>
    );
};