import { v4 as uuidv4 } from 'uuid'

/**
 * UUIDを生成する
 * @returns v4 UUID
 */
export function generateUUID(): string {
  return uuidv4()
}
