import { css } from '@emotion/css';
import facepaint from 'facepaint';
import { usePopulation, populationContext } from '@/features/chart/hooks/population';
import Header from '@/components/Header';
import CheckList from '@/features/chart/components/CheckList';
import Chart from '@/features/chart/components/Chart';

const globalStyle = css({
  display: 'flex',
  flexDirection: 'column',
});

const breakPoints = [768];

const mq = facepaint(
  breakPoints.map((bp) => `@media (max-width: ${bp}px)`),
);

const appStyle = css(mq({
  display: 'flex',
  flexDirection: ['column', 'column-reverse'],
}));

const App = function (): JSX.Element {
  const popCtx = usePopulation();
  return (
    <div className={globalStyle}>
      <Header />
      <main className={appStyle}>
        <populationContext.Provider value={popCtx}>
          <CheckList />
          <Chart />
        </populationContext.Provider>
      </main>
    </div>
  );
};

export default App;
