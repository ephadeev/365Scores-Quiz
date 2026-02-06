import React, {FC, memo} from 'react';

const Footer: FC = memo(() => {
    return (
        <footer className='page-footer blue-grey darken-3'>
            <div className="footer-copyright">
                <div className="container">
                    © 2026 All rights reserved.
                    <a
                        className="grey-text text-lighten-4 right"
                        href="https://www.linkedin.com/in/evgeny-phadeev-0a639899/?locale=en_US"
                        target='blank'
                        rel='noopener noreferrer'>developed by ephadeev</a>
                </div>
            </div>
        </footer>
    );
});

export default Footer;