
import React from 'react';
import "./button.css"
import { useTranslation } from 'react-i18next';
export default function ButtonGroup() {
  return (
<div class="btn-group" role="group" aria-label="Простой пример">
  <button type="button" className="btn btn-primary">Регестрация</button>
  <button type="button" className="btn btn-primary">Авторизация</button>
</div>
  );
}