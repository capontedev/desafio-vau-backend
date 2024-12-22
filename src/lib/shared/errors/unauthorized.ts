export class Unauthorized extends Error {
  constructor() {
    super('unauthorized')
  }
}