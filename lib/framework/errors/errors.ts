/**
 * エラーコードを持つエラーを表すクラス
 */
export abstract class CodableError extends Error {
  public readonly code: string
  public readonly message: string
  public readonly details?: string[]

  constructor(code: string, message: string, details?: string[]) {
    super(message)
    this.code = code
    this.message = message
    this.details = details
  }
}

/**
 * 業務エラーを表すクラス
 */
export class BusinessError extends CodableError {
  constructor(code: string, message: string, details?: string[]) {
    super(code, message, details)
  }
}

/**
 * システムエラーを表すクラス
 */
export class SystemError extends CodableError {
  constructor(code: string, message: string, details?: string[]) {
    super(code, message, details)
  }
}

/**
 * その他エラー（警告エラー）を表すクラス
 */
export class OtherError extends CodableError {
  constructor(code: string, message: string, details?: string[]) {
    super(code, message, details)
  }
}
