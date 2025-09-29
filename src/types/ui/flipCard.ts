export interface FlipCard {
  id: string | number;
  lang: string; // 語言 (ex: 'EN', 'JP')
  createdAt: string; // 建立日期
  updateAt: string; // 修改日期
  front: string; // 正面文字
  back: string; // 背面文字
}
