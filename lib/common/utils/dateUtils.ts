/**
 * 誕生日より年齢を計算する
 * @param birthday
 * @returns 年齢
 */
export function calcAge(birthday: Date): number {
  const diff = Date.now() - new Date(birthday).getTime()
  const ageDate = new Date(diff)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

/**
 * 日付をyyyy/MM/dd形式にフォーマットする
 * @param date 対象の日付
 * @returns フォーマット済み日付文字列
 */
export function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

/**
 * 日付をyyyy-MM-dd形式にフォーマットする
 * @param date 対象の日付
 * @returns フォーマット済み日付文字列
 */
export function formatDateWithHyphen(date: Date): string {
  return new Date(date)
    .toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\//g, '-')
}
