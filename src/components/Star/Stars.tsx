import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const Stars: React.FC = () => {
    const [rating, setRating] = useState<number>(0); // Початковий рейтинг

    // Функція, яка викликається при зміні рейтингу
    const handleRatingChange = (newRating: number) => {
        setRating(newRating);

        // Тут ви можете виконати логіку для збереження рейтингу на сервері або в іншому місці
    };

    return (
        <div>
            <h3>Рейтинг фільму</h3>
            <StarRatings
                rating={rating}
                starRatedColor="blue"
                changeRating={handleRatingChange}
                numberOfStars={10} // Кількість зірочок
                name='rating'
            />
            <p>Ваш рейтинг: {rating}</p>
        </div>
    );
};

export {Stars};
