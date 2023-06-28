import React from 'react';
import { Typography } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
  return (
    <div>
      <h1 className='text-center p-3'>Welcome to My HW-11</h1>
      <div className="container mt-4">
        <Typography variant="h6" component="div">
          <strong>Задание:</strong>
        </Typography>
        <Typography variant="body1" component="div" className="mt-2">
          <p>
            * Используйте Bootstrap и Material-UI
          </p>
          <p>
            * Роуты users, posts, comments должны загружаться через lazy loading (ленивая загрузка)
          </p>
          <p>
            * Данные users получать через fetch
          </p>
          <p>
            * Данные posts, comments получать через axios
          </p>
          <p>
            * Старайтесь все максимально оптимизировать, переиспользовать компоненты
          </p>

          <ol>
            <li>
              В роутах users, posts, comments должны быть списки соответствующих данных из https://jsonplaceholder.typicode.com/
            </li>
            <li>
              На клике на каждый элемент списка должна открываться новая страница с конкретным элементом
            </li>
            <li>
              Через query params напишите запрос и компоненту FilterUser и 2 поля ввода (для id и name пользователя),
              когда кликаем на кнопку нужно показать результат поиска.
            </li>
            <li>
              Создайте компонент Practice внутри которой вы будете создавать новые страницы и делать
              запросы (через axios) на https://jsonplaceholder.typicode.com/
              (Чем больше примеров по лекции, документации – тем лучше)
            </li>
          </ol>
        </Typography>
      </div>
    </div>
  );
};

export default Home;