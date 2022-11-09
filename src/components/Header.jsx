import React from 'react';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__logo'>
                <div>
                    {/* Как добавить фаил из локальной папки пока хз */}
                    <img src='https://clipart-db.ru/file_content/rastr/bread-019.png' />
                </div>
                <div className='logo__desc'>
                    <h1>Багет-Батон</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;