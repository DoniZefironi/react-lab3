import React from 'react';
import { useTranslation } from 'react-i18next';
export default function ButtonBoost() {
  const { t } = useTranslation(); 
  return (
<button type="button" className="btn btn-light">Русский</button>
  );
}