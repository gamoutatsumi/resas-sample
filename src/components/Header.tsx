import { css } from '@emotion/css';

const style = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  backgroundColor: 'brown',
  fontSize: '1.5em',
  padding: '.5em',
});

const Header = function (): JSX.Element {
  return (
    <header className={style}>
      <span>都道府県別総人口推移</span>
    </header>
  );
};

export default Header;
