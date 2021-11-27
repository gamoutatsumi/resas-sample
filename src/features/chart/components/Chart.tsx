import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { useContext } from 'react';
import { useQueryClient } from 'react-query';
import { populationContext } from '@/features/chart/hooks/population';

const Chart = function (): JSX.Element {
  const queryClient = useQueryClient();
  const ctx = useContext(populationContext);
  const categories: string[] = [];
  const prefs = queryClient.getQueryData<Record<string, string>>('prefs');
  const series: Highcharts.SeriesOptionsType[] = [];

  Object.keys(ctx.population).forEach((prefCode) => {
    const data: number[] = [];
    Object.keys(ctx.population[prefCode]).forEach((year) => {
      categories.push(year);
      data.push(ctx.population[prefCode][year]);
    });
    series.push({
      type: 'line',
      name: prefs?.[prefCode],
      data,
    });
  });

  const options: Highcharts.Options = {
    title: {
      text: '総人口推移',
    },
    xAxis: {
      title: {
        text: '年度（年）',
      },
      categories,
    },
    yAxis: {
      title: {
        text: '総人口（人）',
      },
    },
    series: series.length === 0 ? [{ type: 'line', name: 'N/A', data: [''] }] : series,
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Chart;
