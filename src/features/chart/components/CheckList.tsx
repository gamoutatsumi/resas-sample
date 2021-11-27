import { css } from '@emotion/css';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import Api from '@/features/chart/api/api';
import { populationContext } from '@/features/chart/hooks/population';

const styles = css({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  padding: '2em',
  alignItems: 'center',
});

const prefStyle = css({
  margin: '2px',
  padding: '5px',
  borderRadius: '20px',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'black',
});

const CheckList = function (): JSX.Element {
  const { data, isLoading, isError } = useQuery('prefs', Api.getPref, { refetchOnWindowFocus: false });
  const ctx = useContext(populationContext);

  const onChange = async (prefCode: string, check: boolean) => {
    if (check) {
      const res = await Api.getPopulation(prefCode);
      ctx.setPopulation({ ...ctx.population, ...res });
    } else {
      const p = { ...ctx.population };
      delete p[prefCode];
      ctx.setPopulation(p);
    }
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error</span>;
  }
  return (
    <div className={styles}>
      {Object.keys(data ?? {}).map((key) => (
        <span className={prefStyle} key={key}>
          <input
            type="checkbox"
            name="prefecture"
            id={`checkbox${key}`}
            onChange={(event) => onChange(key, event.target.checked)}
          />
          <label
            htmlFor={`checkbox${key}`}
          >
            {data?.[parseInt(key, 10)]}
          </label>
        </span>
      ))}
    </div>
  );
};

export default CheckList;
