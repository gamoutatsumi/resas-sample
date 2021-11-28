import api from '@/features/chart/api/axios';
import Api from '@/features/chart/api/api';
import { prefectures, population } from './mock';

const axiosGetSpy = jest.spyOn(api, 'get');
const axiosRequestSpy = jest.spyOn(api, 'request');

test('fetch prefectures', async () => {
  const mockRes = { status: 200, data: prefectures };
  axiosGetSpy.mockResolvedValue(mockRes);

  const res = await Api.getPref();

  expect(res).toStrictEqual(
    {
      1: '北海道',
      2: '青森県',
      3: '岩手県',
      4: '宮城県',
      5: '秋田県',
      6: '山形県',
      7: '福島県',
      8: '茨城県',
      9: '栃木県',
      10: '群馬県',
      11: '埼玉県',
      12: '千葉県',
      13: '東京都',
      14: '神奈川県',
      15: '新潟県',
      16: '富山県',
      17: '石川県',
      18: '福井県',
      19: '山梨県',
      20: '長野県',
      21: '岐阜県',
      22: '静岡県',
      23: '愛知県',
      24: '三重県',
      25: '滋賀県',
      26: '京都府',
      27: '大阪府',
      28: '兵庫県',
      29: '奈良県',
      30: '和歌山県',
      31: '鳥取県',
      32: '島根県',
      33: '岡山県',
      34: '広島県',
      35: '山口県',
      36: '徳島県',
      37: '香川県',
      38: '愛媛県',
      39: '高知県',
      40: '福岡県',
      41: '佐賀県',
      42: '長崎県',
      43: '熊本県',
      44: '大分県',
      45: '宮崎県',
      46: '鹿児島県',
      47: '沖縄県',
    },
  );
});

test('Fetch populations', async () => {
  const mockRes = { status: 200, data: population };
  axiosRequestSpy.mockResolvedValue(mockRes);
  const res = await Api.getPopulation('1');
  expect(res).toStrictEqual(
    {
      1: {
        1980: 12817,
        1985: 12707,
        1990: 12571,
        1995: 12602,
        2000: 12199,
        2005: 11518,
        2010: 10888,
        2015: 10133,
        2020: 9275,
        2025: 8431,
        2030: 7610,
        2035: 6816,
        2040: 6048,
        2045: 5324,
      },
    },
  );
});
