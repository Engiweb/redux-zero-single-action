export type RzsaPayload = {
  keys: (string | number)[]
  action?: string
  value?: unknown
}

export type RzsaOutput = {
  [index: number]: unknown
  [key: string]: unknown
}

export type RzsaGenericObject = { [key: string]: unknown }
