import api from '@/features/chart/api/axios';

class Api {
  public static getPref = async (): Promise<Record<number, string>> => {
    const res = await api.get<{ message: null, result: Array<{ prefCode: string, prefName: string }> }>('/prefectures');
    const ret: Record<string, string> = {};
    res.data.result.forEach(({ prefCode, prefName }) => { ret[prefCode] = prefName; });
    return ret;
  };

  public static getPopulation = async (prefCode: string) => {
    const res = await api.request<{
      message: null, result: {
        boundaryYear: number, data: Array<{
          label: string, data: Array<{
            year: string, value: number
          }>
        }>
      }
    }>({
      url: '/population/composition/perYear',
      params: {
        prefCode,
        cityCode: '-',
      },
    });
    const ret: { [key in string]: { [x in string]: number } } = {};
    ret[prefCode] = {};
    res.data.result.data[0].data.forEach(({ year, value }) => {
      ret[prefCode][year] = value;
    });
    return ret;
  };
}

export default Api;
